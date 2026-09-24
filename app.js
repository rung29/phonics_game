const { createApp, ref, computed, watch, onMounted } = Vue;
const guideData = window.PHONICS_GUIDE || {
    title: '發音規則學堂',
    subtitle: '目前沒有可顯示的規則內容。',
    intro: '',
    fundamentals: [],
    stages: [],
    familyActivity: { title: '', steps: [] },
    curriculumRoadmap: [],
    lessonStages: [],
    ruleDetails: []
};

createApp({
    setup() {
        const loadScore = () => {
            try { return Number.parseInt(localStorage.getItem('phonics_score') || '0', 10) || 0; }
            catch { return 0; }
        };
        const score = ref(loadScore());
        watch(score, (value) => {
            try { localStorage.setItem('phonics_score', String(value)); } catch { /* 忽略隱私模式限制 */ }
        });

        const currentStage = ref('menu');
        const levels = ref([]);
        const activeLevel = ref(null);
        const currentWordIndex = ref(0);
        const selectedOption = ref(null);
        const feedback = ref(null);
        const showMicBonus = ref(false);
        const isRecording = ref(false);
        const micResult = ref(null);
        const showCompleteModal = ref(false);
        const catalogLoading = ref(true);
        const catalogError = ref('');

        const showParentModal = ref(false);
        const adminUser = ref(null);
        const adminEmail = ref('');
        const adminPassword = ref('');
        const authLoading = ref(false);
        const authMessage = ref(null);
        const adminLevels = ref([]);
        const adminSelectedLevelId = ref('');
        const adminLoading = ref(false);
        const saveLoading = ref(false);
        const adminMessage = ref(null);

        const emptyQuestionForm = () => {
            const selectedLevel = adminLevels.value.find((level) => level.id === adminSelectedLevelId.value);
            return ({
            id: null,
            levelId: adminSelectedLevelId.value || levels.value[0]?.id || '',
            prompt: '',
            target: '',
            hint: '',
            sortOrder: (selectedLevel?.words.length || 0) + 1,
            isPublished: true,
            options: [
                { text: '', type: 'short', vowelType: '', correct: true },
                { text: '', type: 'long', vowelType: '', correct: false }
            ]
            });
        };
        const questionForm = ref(emptyQuestionForm());

        let catalog = null;
        try {
            catalog = window.createWordCatalog({
                supabaseLibrary: window.supabase,
                config: window.PHONICS_SUPABASE_CONFIG
            });
        } catch (error) {
            catalogError.value = error.message;
        }

        const isAdmin = computed(() => adminUser.value?.app_metadata?.role === 'admin');
        const currentWord = computed(() => activeLevel.value?.words[currentWordIndex.value] || null);
        const selectedAdminLevel = computed(() =>
            adminLevels.value.find((level) => level.id === adminSelectedLevelId.value) || null
        );
        const editingTitle = computed(() => questionForm.value.id ? '編輯題目' : '新增題目');

        const guideTheme = (theme) => ({
            emerald: { panel: 'bg-emerald-50 border-emerald-200', heading: 'text-emerald-800' },
            blue: { panel: 'bg-blue-50 border-blue-200', heading: 'text-blue-800' },
            purple: { panel: 'bg-purple-50 border-purple-200', heading: 'text-purple-800' },
            amber: { panel: 'bg-amber-50 border-amber-200', heading: 'text-amber-800' },
            rose: { panel: 'bg-rose-50 border-rose-200', heading: 'text-rose-800' }
        })[theme] || { panel: 'bg-slate-50 border-slate-200', heading: 'text-slate-800' };

        const guideRuleDetails = computed(() => guideData.ruleDetails || []);
        const lessonStages = computed(() => guideData.lessonStages || []);
        const selectedLessonStageId = ref('');
        const selectedLessonStage = computed(() =>
            lessonStages.value.find((stage) => stage.id === selectedLessonStageId.value) || null
        );
        const lessonQuizAnswer = ref('');
        const selectedGuideRuleId = ref('');
        const selectedGuideExampleWord = ref('');
        const selectedGuideRule = computed(() =>
            guideRuleDetails.value.find((rule) => rule.id === selectedGuideRuleId.value) || null
        );
        const selectedGuideExample = computed(() => {
            const examples = selectedGuideRule.value?.examples || [];
            return examples.find((example) => example.word === selectedGuideExampleWord.value) || examples[0] || null;
        });
        const getGuideRule = (ruleId) => guideRuleDetails.value.find((rule) => rule.id === ruleId) || null;
        const guideExamples = (ruleId) => getGuideRule(ruleId)?.examples || [];

        const friendlyError = (error) => {
            if (!error) return '發生未知錯誤';
            if (error.message?.includes('Invalid login credentials')) return 'Email 或密碼不正確';
            if (error.code === '42501') return '目前帳號沒有管理字庫的權限';
            return error.message || String(error);
        };

        const loadPublicCatalog = async () => {
            catalogLoading.value = true;
            catalogError.value = '';
            try {
                if (!catalog?.isConfigured()) throw new Error('尚未設定 Supabase，請先完成 SUPABASE_SETUP.md 的設定');
                levels.value = await catalog.loadLevels();
                if (!levels.value.length) throw new Error('Supabase 目前沒有已發布的題庫資料');
            } catch (error) {
                catalogError.value = friendlyError(error);
                levels.value = [];
            } finally {
                catalogLoading.value = false;
            }
        };

        const loadAdminCatalog = async () => {
            if (!isAdmin.value) return;
            adminLoading.value = true;
            try {
                adminLevels.value = await catalog.loadLevels({ includeUnpublished: true });
                if (!adminSelectedLevelId.value || !adminLevels.value.some((level) => level.id === adminSelectedLevelId.value)) {
                    adminSelectedLevelId.value = adminLevels.value[0]?.id || '';
                }
                if (!questionForm.value.id) questionForm.value.levelId = adminSelectedLevelId.value;
            } catch (error) {
                adminMessage.value = { type: 'error', text: friendlyError(error) };
            } finally {
                adminLoading.value = false;
            }
        };

        const initialize = async () => {
            await loadPublicCatalog();
            if (!catalog?.isConfigured()) return;
            try {
                const session = await catalog.getSession();
                adminUser.value = session?.user || null;
                if (isAdmin.value) await loadAdminCatalog();
            } catch (error) {
                authMessage.value = { type: 'error', text: friendlyError(error) };
            }
        };

        const resetTurn = () => {
            selectedOption.value = null;
            feedback.value = null;
            showMicBonus.value = false;
            micResult.value = null;
            isRecording.value = false;
        };

        const shuffleOptions = (options) => {
            const shuffled = options.map((option) => ({ ...option }));
            for (let index = shuffled.length - 1; index > 0; index--) {
                const other = Math.floor(Math.random() * (index + 1));
                [shuffled[index], shuffled[other]] = [shuffled[other], shuffled[index]];
            }
            return shuffled;
        };

        let englishVoice = null;
        const pickEnglishVoice = () => {
            if (englishVoice) return englishVoice;
            const voices = 'speechSynthesis' in window ? window.speechSynthesis.getVoices() : [];
            englishVoice = voices.find((voice) => voice.lang?.toLowerCase().startsWith('en-us'))
                || voices.find((voice) => voice.lang?.toLowerCase().startsWith('en'))
                || null;
            return englishVoice;
        };
        if ('speechSynthesis' in window) window.speechSynthesis.onvoiceschanged = pickEnglishVoice;

        const speak = (text) => {
            if (!('speechSynthesis' in window) || !text) return;
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.8;
            const voice = pickEnglishVoice();
            if (voice) utterance.voice = voice;
            window.speechSynthesis.speak(utterance);
        };

        const prepareCurrentWord = () => {
            if (!currentWord.value) return;
            currentWord.value.options = shuffleOptions(currentWord.value.options);
            speak(currentWord.value.target);
        };

        const startLevel = (level) => {
            if (!level.words.length) return;
            activeLevel.value = { ...level, words: level.words.map((word) => ({
                ...word,
                options: word.options.map((option) => ({ ...option }))
            })) };
            currentWordIndex.value = 0;
            currentStage.value = 'game';
            resetTurn();
            prepareCurrentWord();
        };

        const openGuide = () => {
            if ('speechSynthesis' in window) window.speechSynthesis.cancel();
            currentStage.value = 'guide';
        };

        const openLesson = (stageId) => {
            const stage = lessonStages.value.find((item) => item.id === stageId);
            if (!stage) return;
            selectedLessonStageId.value = stage.id;
            lessonQuizAnswer.value = '';
            if ('speechSynthesis' in window) window.speechSynthesis.cancel();
            currentStage.value = 'guide-lesson';
        };

        const answerLessonQuiz = (answerId) => {
            if (!selectedLessonStage.value?.quiz) return;
            lessonQuizAnswer.value = answerId;
        };

        const openGuideRule = (ruleId) => {
            const rule = getGuideRule(ruleId);
            if (!rule) return;
            selectedGuideRuleId.value = rule.id;
            selectedGuideExampleWord.value = rule.examples?.[0]?.word || '';
            if ('speechSynthesis' in window) window.speechSynthesis.cancel();
            currentStage.value = 'guide-detail';
        };

        const openGuideExample = (ruleId, word) => {
            const rule = getGuideRule(ruleId);
            if (!rule) return;
            selectedGuideRuleId.value = rule.id;
            selectedGuideExampleWord.value = word;
            if ('speechSynthesis' in window) window.speechSynthesis.cancel();
            currentStage.value = 'guide-detail';
        };

        const backToGuide = () => {
            if ('speechSynthesis' in window) window.speechSynthesis.cancel();
            currentStage.value = 'guide';
        };

        const backToMenu = () => {
            currentStage.value = 'menu';
        };

        const checkAnswer = (option) => {
            if (feedback.value?.isCorrect) return;
            selectedOption.value = option;
            if (option.correct) {
                feedback.value = { isCorrect: true, message: '🎉 太棒了！答對了！ +10 分' };
                score.value += 10;
                showMicBonus.value = true;
            } else {
                feedback.value = { isCorrect: false, message: '再試一次！看看提示並聽聽發音。' };
            }
        };

        const getOptionClass = (option) => {
            if (!feedback.value) return 'bg-white border-slate-200 hover:border-amber-300 hover:bg-amber-50';
            if (option.correct) return 'bg-emerald-100 border-emerald-400 text-emerald-800';
            if (selectedOption.value === option) return 'bg-rose-100 border-rose-400 text-rose-800';
            return 'border-slate-100 opacity-50';
        };

        const nextWord = () => {
            if (currentWordIndex.value < activeLevel.value.words.length - 1) {
                currentWordIndex.value += 1;
                resetTurn();
                prepareCurrentWord();
                return;
            }
            currentStage.value = 'menu';
            showCompleteModal.value = true;
        };

        const startVoiceRecognition = () => {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRecognition) {
                micResult.value = { isMatch: false, text: '此瀏覽器不支援語音辨識，可以直接繼續下一題。' };
                return;
            }
            if (isRecording.value) return;
            const recognition = new SpeechRecognition();
            recognition.lang = 'en-US';
            recognition.interimResults = false;
            isRecording.value = true;
            micResult.value = null;
            recognition.start();
            recognition.onresult = (event) => {
                const spoken = event.results[0][0].transcript.toLowerCase().trim();
                const target = currentWord.value.target.toLowerCase();
                const matched = spoken.includes(target) || target.includes(spoken);
                micResult.value = matched
                    ? { isMatch: true, text: `🌟 發音超標準！聽到了「${spoken}」，額外 +5 分！` }
                    : { isMatch: false, text: `😅 聽到的是「${spoken}」，可以再試一次！` };
                if (matched) score.value += 5;
            };
            recognition.onerror = () => {
                micResult.value = { isMatch: false, text: '收音沒有聽清楚，可以再試一次或繼續下一題。' };
            };
            recognition.onend = () => { isRecording.value = false; };
        };

        const openParentModal = async () => {
            showParentModal.value = true;
            authMessage.value = null;
            adminMessage.value = null;
            if (isAdmin.value && !adminLevels.value.length) await loadAdminCatalog();
        };

        const signInAdmin = async () => {
            authLoading.value = true;
            authMessage.value = null;
            try {
                const session = await catalog.signIn(adminEmail.value.trim(), adminPassword.value);
                adminUser.value = session?.user || null;
                if (!isAdmin.value) {
                    await catalog.signOut();
                    adminUser.value = null;
                    throw new Error('此帳號不是字庫管理者');
                }
                adminPassword.value = '';
                authMessage.value = { type: 'success', text: '管理者登入成功' };
                await loadAdminCatalog();
            } catch (error) {
                authMessage.value = { type: 'error', text: friendlyError(error) };
            } finally {
                authLoading.value = false;
            }
        };

        const signOutAdmin = async () => {
            try { await catalog.signOut(); } catch { /* 即使遠端登出失敗也清除畫面狀態 */ }
            adminUser.value = null;
            adminLevels.value = [];
            resetQuestionForm();
            authMessage.value = { type: 'success', text: '已登出管理者帳號' };
        };

        const resetQuestionForm = () => {
            questionForm.value = emptyQuestionForm();
            adminMessage.value = null;
        };

        const setCorrectOption = (selectedIndex) => {
            questionForm.value.options.forEach((option, index) => { option.correct = index === selectedIndex; });
        };

        const addOption = () => {
            questionForm.value.options.push({ text: '', type: 'short', vowelType: '', correct: false });
        };

        const removeOption = (index) => {
            if (questionForm.value.options.length <= 2) return;
            const wasCorrect = questionForm.value.options[index].correct;
            questionForm.value.options.splice(index, 1);
            if (wasCorrect) setCorrectOption(0);
        };

        const editQuestion = (question) => {
            questionForm.value = {
                id: question.id,
                levelId: question.levelId,
                prompt: question.prompt,
                target: question.target,
                hint: question.hint,
                sortOrder: question.sortOrder,
                isPublished: question.isPublished,
                options: question.options.map((option) => ({ ...option }))
            };
            adminSelectedLevelId.value = question.levelId;
            adminMessage.value = null;
        };

        const saveQuestion = async () => {
            saveLoading.value = true;
            adminMessage.value = null;
            try {
                await catalog.saveQuestion(questionForm.value);
                const action = questionForm.value.id ? '更新' : '新增';
                resetQuestionForm();
                await Promise.all([loadPublicCatalog(), loadAdminCatalog()]);
                adminMessage.value = { type: 'success', text: `題目已成功${action}` };
            } catch (error) {
                adminMessage.value = { type: 'error', text: friendlyError(error) };
            } finally {
                saveLoading.value = false;
            }
        };

        const toggleQuestion = async (question) => {
            adminMessage.value = null;
            try {
                await catalog.setQuestionPublished(question.id, !question.isPublished);
                await Promise.all([loadPublicCatalog(), loadAdminCatalog()]);
                adminMessage.value = {
                    type: 'success',
                    text: question.isPublished ? '題目已停用' : '題目已重新發布'
                };
            } catch (error) {
                adminMessage.value = { type: 'error', text: friendlyError(error) };
            }
        };

        watch(adminSelectedLevelId, (levelId) => {
            if (!questionForm.value.id) questionForm.value.levelId = levelId;
        });

        onMounted(initialize);

        return {
            score, currentStage, levels, activeLevel, currentWordIndex, currentWord,
            guideData, guideTheme, guideExamples, selectedGuideRule, selectedGuideExample,
            selectedLessonStage, lessonQuizAnswer, openGuide, openLesson, answerLessonQuiz,
            openGuideRule, openGuideExample, backToGuide, backToMenu,
            selectedOption, feedback, showMicBonus, isRecording, micResult,
            showCompleteModal, catalogLoading, catalogError, loadPublicCatalog,
            showParentModal, openParentModal, adminUser, isAdmin, adminEmail,
            adminPassword, authLoading, authMessage, signInAdmin, signOutAdmin,
            adminLevels, adminSelectedLevelId, selectedAdminLevel, adminLoading,
            adminMessage, questionForm, editingTitle, saveLoading, resetQuestionForm,
            setCorrectOption, addOption, removeOption, editQuestion, saveQuestion,
            toggleQuestion, startLevel, speak, checkAnswer, getOptionClass,
            nextWord, startVoiceRecognition
        };
    }
}).mount('#app');
