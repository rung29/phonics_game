(function () {
    const THEME_CLASSES = Object.freeze({
        emerald: { borderColor: 'border-emerald-300', textColor: 'text-emerald-600' },
        purple: { borderColor: 'border-purple-300', textColor: 'text-purple-600' },
        blue: { borderColor: 'border-blue-300', textColor: 'text-blue-600' },
        slate: { borderColor: 'border-slate-400', textColor: 'text-slate-700' },
        pink: { borderColor: 'border-pink-300', textColor: 'text-pink-600' },
        orange: { borderColor: 'border-orange-300', textColor: 'text-orange-600' }
    });

    const isPlaceholder = (value) => !value || value.startsWith('YOUR_');

    const mapLevel = (row) => {
        const theme = THEME_CLASSES[row.theme_key] || THEME_CLASSES.emerald;
        return {
            id: row.id,
            title: row.title,
            icon: row.icon,
            description: row.description,
            ruleTag: row.rule_tag,
            themeKey: row.theme_key,
            borderColor: theme.borderColor,
            textColor: theme.textColor,
            sortOrder: row.sort_order,
            isPublished: row.is_published,
            words: (row.questions || []).map((question) => ({
                id: question.id,
                levelId: row.id,
                prompt: question.prompt,
                target: question.target,
                hint: question.hint,
                options: question.options,
                sortOrder: question.sort_order,
                isPublished: question.is_published
            }))
        };
    };

    const validateQuestion = (question) => {
        if (!question.levelId || !question.prompt?.trim() || !question.target?.trim()) {
            throw new Error('請選擇關卡，並填寫題目與目標單字');
        }
        if (!Array.isArray(question.options) || question.options.length < 2) {
            throw new Error('每道題目至少需要兩個選項');
        }
        const validOptions = question.options.every((option) => option.text?.trim());
        if (!validOptions) throw new Error('所有選項都必須填寫文字');
        if (question.options.filter((option) => option.correct).length !== 1) {
            throw new Error('每道題目必須且只能有一個正確答案');
        }
    };

    window.createWordCatalog = ({ supabaseLibrary, config }) => {
        if (!supabaseLibrary?.createClient) {
            throw new Error('Supabase 程式庫載入失敗');
        }

        const configured = !isPlaceholder(config?.url) && !isPlaceholder(config?.publishableKey);
        const client = configured
            ? supabaseLibrary.createClient(config.url, config.publishableKey)
            : null;

        const requireClient = () => {
            if (!client) throw new Error('尚未設定 Supabase URL 與 publishable key');
            return client;
        };

        const loadLevels = async ({ includeUnpublished = false } = {}) => {
            let levelQuery = requireClient()
                .from('levels')
                .select('id, title, icon, description, rule_tag, theme_key, sort_order, is_published')
                .order('sort_order', { ascending: true });
            if (!includeUnpublished) levelQuery = levelQuery.eq('is_published', true);

            const { data: levelRows, error: levelError } = await levelQuery;
            if (levelError) throw levelError;
            if (!levelRows?.length) return [];

            let questionQuery = requireClient()
                .from('questions')
                .select('id, level_id, prompt, target, hint, options, sort_order, is_published')
                .in('level_id', levelRows.map((level) => level.id))
                .order('sort_order', { ascending: true })
                .order('created_at', { ascending: true });
            if (!includeUnpublished) questionQuery = questionQuery.eq('is_published', true);

            const { data: questionRows, error: questionError } = await questionQuery;
            if (questionError) throw questionError;
            const questionsByLevel = Object.groupBy
                ? Object.groupBy(questionRows || [], (question) => question.level_id)
                : (questionRows || []).reduce((groups, question) => {
                    (groups[question.level_id] ||= []).push(question);
                    return groups;
                }, {});

            return levelRows.map((level) => mapLevel({
                ...level,
                questions: questionsByLevel[level.id] || []
            }));
        };

        const getSession = async () => {
            if (!client) return null;
            const { data, error } = await client.auth.getSession();
            if (error) throw error;
            return data.session;
        };

        const signIn = async (email, password) => {
            const { data, error } = await requireClient().auth.signInWithPassword({ email, password });
            if (error) throw error;
            return data.session;
        };

        const signOut = async () => {
            const { error } = await requireClient().auth.signOut();
            if (error) throw error;
        };

        const saveQuestion = async (question) => {
            validateQuestion(question);
            const payload = {
                level_id: question.levelId,
                prompt: question.prompt.trim(),
                target: question.target.trim(),
                hint: question.hint?.trim() || '',
                options: question.options.map((option) => ({
                    text: option.text.trim(),
                    type: option.type || 'short',
                    vowelType: option.vowelType?.trim() || '',
                    correct: Boolean(option.correct)
                })),
                sort_order: Number(question.sortOrder) || 0,
                is_published: question.isPublished !== false
            };

            const query = question.id
                ? requireClient().from('questions').update(payload).eq('id', question.id)
                : requireClient().from('questions').insert(payload);
            const { error } = await query;
            if (error) throw error;
        };

        const setQuestionPublished = async (id, isPublished) => {
            const { error } = await requireClient()
                .from('questions')
                .update({ is_published: isPublished })
                .eq('id', id);
            if (error) throw error;
        };

        return Object.freeze({
            isConfigured: () => configured,
            loadLevels,
            getSession,
            signIn,
            signOut,
            saveQuestion,
            setQuestionPublished
        });
    };
})();
