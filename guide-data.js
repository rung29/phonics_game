const phonicsGuide = {
    title: '英語自然發音與音節判讀指南',
    subtitle: '從發音地基到進階規則，用簡單的圖像和例字一起破解英文單字。',
    intro: '音節數取決於「聽得到的母音發音數量」，不是母音字母的個數。例如 cape 有兩個母音字母，但只有一個母音發音，所以是單音節。',
    fundamentals: [
        {
            title: '🚪 開音節 Open Syllable',
            text: '音節以母音結尾，門打開了；母音可以自由發出字母本尊的長音。',
            examples: 'mi-grant（i 發 /aɪ/）、ba-by（a 發 /eɪ/）',
            theme: 'blue',
            ruleId: 'open-syllable'
        },
        {
            title: '🔒 閉音節 Closed Syllable',
            text: '音節以子音結尾，門被鎖住了；母音被擠壓，通常發出短母音。',
            examples: 'mit-ten（i 發 /ɪ/）、bad（a 發 /æ/）',
            theme: 'emerald',
            ruleId: 'closed-syllable'
        },
        {
            id: 'foundations',
            number: '0',
            title: '聲音地基探險隊',
            subtitle: 'Hear · Segment · Blend',
            theme: 'blue',
            image: 'assets/guide/stage-0-foundations.png',
            imageAlt: '戴偵探帽的石頭角色、耳朵、音符與彩色方塊插圖',
            intro: '所有自然發音都從耳朵開始：先聽到聲音，再把聲音拆開，最後把它們重新合成一個單字。',
            goal: '能把簡單單字拆成音素，也能把音素合回完整單字。',
            steps: [
                {
                    number: '01',
                    title: '用耳朵找聲音',
                    text: '先不要急著看拼法，聽聽單字裡有幾個連續的小聲音。map 可以聽成 /m/、/æ/、/p/。',
                    tiles: [
                        { text: '👂', tone: 'sound' },
                        { text: '→', tone: 'operator' },
                        { text: '/m/', tone: 'sound' },
                        { text: '/æ/', tone: 'sound' },
                        { text: '/p/', tone: 'sound' }
                    ]
                },
                {
                    number: '02',
                    title: '把聲音拆開',
                    text: '用手指、積木或拍手，一個聲音一個位置。拆音可以幫孩子知道單字裡的順序。',
                    tiles: [
                        { text: '●', tone: 'consonant' },
                        { text: '●', tone: 'vowel' },
                        { text: '●', tone: 'consonant' }
                    ]
                },
                {
                    number: '03',
                    title: '把聲音合回來',
                    text: '先慢慢拉長每個音，再逐漸加快：/m/ + /æ/ + /p/ → map。',
                    tiles: [
                        { text: '/m/', tone: 'sound' },
                        { text: '+', tone: 'operator' },
                        { text: '/æ/', tone: 'sound' },
                        { text: '+', tone: 'operator' },
                        { text: '/p/', tone: 'sound' },
                        { text: '→ map', tone: 'vowel' }
                    ]
                }
            ],
            examples: [
                { word: 'map', ipa: '/mæp/', meaning: '地圖', icon: '🗺️', syllables: 'm-a-p', focus: '3 個音', note: '把 /m/、/æ/、/p/ 依序合起來。' },
                { word: 'sun', ipa: '/sʌn/', meaning: '太陽', icon: '☀️', syllables: 's-u-n', focus: '3 個音', note: '先聽 /s/，再聽中間母音，最後收在 /n/。' },
                { word: 'fish', ipa: '/fɪʃ/', meaning: '魚', icon: '🐟', syllables: 'f-i-sh', focus: 'sh 是一隊', note: '最後的 sh 先當成一個子音小隊。' },
                { word: 'top', ipa: '/tɑp/', meaning: '頂端', icon: '🔝', syllables: 't-o-p', focus: '3 個音', note: 'o 被 t 和 p 關住，發短音。' },
                { word: 'ship', ipa: '/ʃɪp/', meaning: '船', icon: '🚢', syllables: 'sh-i-p', focus: 'sh 是一隊', note: 'sh 代表一個聲音 /ʃ/。' }
            ],
            contrast: {
                title: '拆音與合音是同一條路的兩個方向',
                text: '拆音幫助拼讀與拼字，合音幫助把看到的字讀出來。',
                pairs: [
                    { shortWord: '/m/ /æ/ /p/', shortIpa: '拆音', longWord: 'map', longIpa: '/mæp/', hint: '把三個小聲音合回一個單字' },
                    { shortWord: '/f/ /ɪ/ /ʃ/', shortIpa: '拆音', longWord: 'fish', longIpa: '/fɪʃ/', hint: 'sh 先視為一個子音小隊' }
                ]
            },
            quiz: {
                question: '哪一組聲音可以合成 map？',
                options: [
                    { id: 'map', label: '/m/ + /æ/ + /p/', hint: '順序正確' },
                    { id: 'mep', label: '/m/ + /ɛ/ + /p/', hint: '中間母音不同' },
                    { id: 'pam', label: '/p/ + /æ/ + /m/', hint: '順序相反' }
                ],
                answerId: 'map',
                correctText: '答對了！三個音依序合起來就是 map。',
                retryText: '提示：先找 /m/，中間要是 /æ/，最後收在 /p/。'
            }
        },
        {
            id: 'consonant-teams',
            number: '2',
            title: '子音小隊集合！',
            subtitle: 'Digraphs · Blends · Nasal Teams',
            theme: 'blue',
            image: 'assets/guide/stage-2-consonant-teams.png',
            imageAlt: '四個彩色拼字小隊角色、貝殼、椅子、手指與火車插圖',
            intro: '有些子音喜歡組隊：有時兩個字母一起守住一個聲音，有時每個字母都保留自己的聲音。',
            goal: '看見子音小隊時，知道要整隊讀，或把每個音保留後再合音。',
            steps: [
                {
                    number: '01',
                    title: '認識 Digraph：兩個字母一個音',
                    text: 'sh、ch、th、wh、ph 常常由兩個字母合作表示一個主要聲音。',
                    tiles: [
                        { text: 's', tone: 'consonant' },
                        { text: 'h', tone: 'consonant' },
                        { text: '→', tone: 'operator' },
                        { text: '/ʃ/', tone: 'sound' }
                    ]
                },
                {
                    number: '02',
                    title: '認識 Blend：每個音都要出場',
                    text: 'bl、st、tr、spr 等 blend 裡，每個子音都保留自己的聲音，只是靠得很近。',
                    tiles: [
                        { text: '/s/', tone: 'sound' },
                        { text: '+', tone: 'operator' },
                        { text: '/t/', tone: 'sound' },
                        { text: '→ st', tone: 'consonant' }
                    ]
                },
                {
                    number: '03',
                    title: '聽字尾的鼻音小隊',
                    text: 'ng、nk 會讓聲音停在鼻腔附近，先聽清楚字尾，再把前面的母音連上去。',
                    tiles: [
                        { text: 'i', tone: 'vowel' },
                        { text: 'ng', tone: 'consonant' },
                        { text: '／', tone: 'operator' },
                        { text: 'i', tone: 'vowel' },
                        { text: 'nk', tone: 'consonant' }
                    ]
                }
            ],
            examples: [
                { word: 'ship', ipa: '/ʃɪp/', meaning: '船', icon: '🚢', syllables: 'sh-i-p', focus: 'sh → /ʃ/', note: 'sh 是兩個字母合作的一個聲音。' },
                { word: 'chair', ipa: '/tʃɛr/', meaning: '椅子', icon: '🪑', syllables: 'ch-air', focus: 'ch → /tʃ/', note: 'ch 通常表示 /tʃ/。' },
                { word: 'thumb', ipa: '/θʌm/', meaning: '拇指', icon: '👍', syllables: 'th-u-mb', focus: 'th → /θ/', note: 'th 先當成一個子音小隊。' },
                { word: 'frog', ipa: '/frɑɡ/', meaning: '青蛙', icon: '🐸', syllables: 'f-r-o-g', focus: 'fr 是 blend', note: 'f 和 r 都要保留自己的聲音。' },
                { word: 'ring', ipa: '/rɪŋ/', meaning: '戒指', icon: '💍', syllables: 'r-i-ng', focus: 'ng → /ŋ/', note: 'ng 是常見的字尾鼻音。' }
            ],
            contrast: {
                title: '一隊一音，和每個音都出場',
                text: '看到子音組合時，先判斷它是 digraph 還是 blend。',
                pairs: [
                    { shortWord: 'ship', shortIpa: 'sh = /ʃ/', longWord: 'frog', longIpa: 'fr = /f/ + /r/', hint: 'ship 有一個子音隊音；frog 的 fr 兩個音都保留' },
                    { shortWord: 'ring', shortIpa: 'ng = /ŋ/', longWord: 'rink', longIpa: 'nk = /ŋk/', hint: '字尾位置會影響鼻音後是否還聽到 /k/' }
                ]
            },
            quiz: {
                question: '哪個單字的 sh 通常代表一個聲音 /ʃ/？',
                options: [
                    { id: 'ship', label: 'ship', hint: 'sh-i-p' },
                    { id: 'stop', label: 'stop', hint: 'st 是 blend' },
                    { id: 'frog', label: 'frog', hint: 'fr 是 blend' }
                ],
                answerId: 'ship',
                correctText: '答對了！ship 的 sh 是一個子音 digraph。',
                retryText: '提示：找出開頭是 sh 的單字。'
            }
        },
        {
            id: 'ending-spelling',
            number: '3',
            title: '字尾拼字選擇器',
            subtitle: 'ck · tch · dge · FLOSS',
            theme: 'amber',
            image: 'assets/guide/stage-3-ending-spelling.png',
            imageAlt: '石頭偵探、鑰匙、火柴、橋與拼字選擇轉盤插圖',
            intro: '短母音後面的字尾音，常有固定的拼字選擇。學會看位置，就能少靠死背。',
            goal: '能在短母音後辨認 ck、tch、dge 與 FLOSS 雙寫規則。',
            steps: [
                {
                    number: '01',
                    title: '先確認前面是短母音',
                    text: 'back、match、badge 都先聽到短母音，再觀察最後的 /k/、/tʃ/ 或 /dʒ/。',
                    tiles: [
                        { text: '短母音', tone: 'vowel' },
                        { text: '+', tone: 'operator' },
                        { text: '字尾音', tone: 'sound' }
                    ]
                },
                {
                    number: '02',
                    title: '挑選正確的字尾隊',
                    text: '短母音後的 /k/ 常看到 ck，/tʃ/ 常看到 tch，/dʒ/ 常看到 dge。',
                    tiles: [
                        { text: 'ck', tone: 'consonant' },
                        { text: 'tch', tone: 'consonant' },
                        { text: 'dge', tone: 'consonant' }
                    ]
                },
                {
                    number: '03',
                    title: '記得 FLOSS 雙寫',
                    text: '單音節短母音後的 f、l、s、z 常會雙寫：ff、ll、ss、zz。',
                    tiles: [
                        { text: 'ff', tone: 'consonant' },
                        { text: 'll', tone: 'consonant' },
                        { text: 'ss', tone: 'consonant' },
                        { text: 'zz', tone: 'consonant' }
                    ]
                }
            ],
            examples: [
                { word: 'back', ipa: '/bæk/', meaning: '背部／回到', icon: '🔙', syllables: 'back', focus: 'ck → /k/', note: '短母音 a 後的 /k/ 常寫成 ck。' },
                { word: 'match', ipa: '/mætʃ/', meaning: '比賽／火柴', icon: '🔥', syllables: 'match', focus: 'tch → /tʃ/', note: '短母音 a 後的 /tʃ/ 常寫成 tch。' },
                { word: 'badge', ipa: '/bædʒ/', meaning: '徽章', icon: '🏅', syllables: 'badge', focus: 'dge → /dʒ/', note: 'dge 是整組拼字隊，不把 d 單獨念出來。' },
                { word: 'puff', ipa: '/pʌf/', meaning: '一口氣／吹氣', icon: '💨', syllables: 'puff', focus: 'ff → /f/', note: '短母音後的字尾 f 常雙寫。' },
                { word: 'buzz', ipa: '/bʌz/', meaning: '嗡嗡聲', icon: '🐝', syllables: 'buzz', focus: 'zz → /z/', note: '短母音後的字尾 z 常雙寫。' }
            ],
            contrast: {
                title: '同一個聲音，不同位置有不同拼法',
                text: '字尾規則不只在讀音，也是在幫助我們選擇寫法。',
                pairs: [
                    { shortWord: 'back', shortIpa: '/bæk/', longWord: 'bake', longIpa: '/beɪk/', hint: '短母音後常用 ck；長母音後常用 k' },
                    { shortWord: 'match', shortIpa: '/mætʃ/', longWord: 'much', longIpa: '/mʌtʃ/', hint: 'tch 常跟在短母音後；其他位置可能用 ch' }
                ]
            },
            quiz: {
                question: '哪個單字使用 dge 表示 /dʒ/？',
                options: [
                    { id: 'badge', label: 'badge', hint: '短母音 + /dʒ/' },
                    { id: 'bake', label: 'bake', hint: 'Magic E' },
                    { id: 'back', label: 'back', hint: 'ck → /k/' }
                ],
                answerId: 'badge',
                correctText: '答對了！badge 的 dge 是一個 /dʒ/ 拼字隊。',
                retryText: '提示：找出結尾是 dge 的單字。'
            }
        },
        {
            id: 'long-vowels',
            number: '4',
            title: '長母音魔法門',
            subtitle: 'Magic E · Open Syllable',
            theme: 'emerald',
            image: 'assets/guide/stage-4-long-vowels.png',
            imageAlt: '戴魔法帽的 Y 角色、發光的門、蛋糕、松樹與冰塊插圖',
            intro: '長母音常會念出母音的字母名稱。Magic E 和 Open Syllable 是兩個最重要的入口。',
            goal: '看到 CVCe 或開音節時，能把短音和長音做出對照。',
            steps: [
                {
                    number: '01',
                    title: 'Magic E 不出聲但會施法',
                    text: '字尾 e 通常不另外發音，卻會讓前面的母音變成長音。',
                    tiles: [
                        { text: 'a', tone: 'vowel' },
                        { text: '…', tone: 'operator' },
                        { text: 'e', tone: 'y-letter' },
                        { text: '→', tone: 'operator' },
                        { text: '/eɪ/', tone: 'sound' }
                    ]
                },
                {
                    number: '02',
                    title: '開音節讓母音自由說話',
                    text: '音節以母音結尾時，母音沒有被後面的子音關住，常能發出長音。',
                    tiles: [
                        { text: 'me', tone: 'vowel' },
                        { text: '→', tone: 'operator' },
                        { text: '/miː/', tone: 'sound' }
                    ]
                },
                {
                    number: '03',
                    title: '和短音字做對照',
                    text: '拿掉最後的 e 或改變音節位置，母音可能從長音回到短音。',
                    tiles: [
                        { text: 'cap', tone: 'plain' },
                        { text: '↔', tone: 'operator' },
                        { text: 'cape', tone: 'vowel' }
                    ]
                }
            ],
            examples: [
                { word: 'cake', ipa: '/keɪk/', meaning: '蛋糕', icon: '🍰', syllables: 'cake', focus: 'a-e → /eɪ/', note: '字尾 e 不出聲，a 變成長音。' },
                { word: 'pine', ipa: '/paɪn/', meaning: '松樹', icon: '🌲', syllables: 'pine', focus: 'i-e → /aɪ/', note: 'i-e 讓 i 念出字母名稱。' },
                { word: 'hope', ipa: '/hoʊp/', meaning: '希望', icon: '🌟', syllables: 'hope', focus: 'o-e → /oʊ/', note: 'o-e 是常見的長 o 拼法。' },
                { word: 'cube', ipa: '/kjuːb/', meaning: '立方體', icon: '🧊', syllables: 'cube', focus: 'u-e → /juː/', note: 'u-e 常發 /juː/ 或 /uː/。' },
                { word: 'me', ipa: '/miː/', meaning: '我', icon: '🙋', syllables: 'me', focus: '開音節 → /iː/', note: '音節以母音結尾，e 可以自由發長音。' }
            ],
            contrast: {
                title: '短音加一扇魔法門',
                text: '先讀短音，再加上最後的 e，聽聽前面母音怎麼變身。',
                pairs: [
                    { shortWord: 'cap', shortIpa: '/kæp/', longWord: 'cape', longIpa: '/keɪp/', hint: 'a → a-e' },
                    { shortWord: 'kit', shortIpa: '/kɪt/', longWord: 'kite', longIpa: '/kaɪt/', hint: 'i → i-e' }
                ]
            },
            quiz: {
                question: '哪個單字有 Magic E，母音通常發長音？',
                options: [
                    { id: 'cap', label: 'cap', hint: 'CVC 短音' },
                    { id: 'cake', label: 'cake', hint: 'CVCe' },
                    { id: 'cat', label: 'cat', hint: 'CVC 短音' }
                ],
                answerId: 'cake',
                correctText: '答對了！cake 的 e 不出聲，卻讓 a 發長音。',
                retryText: '提示：找出字尾有不發音 e 的單字。'
            }
        },
        {
            id: 'vowel-teams',
            number: '6',
            title: '長母音合作畫室',
            subtitle: 'Vowel Teams',
            theme: 'purple',
            image: 'assets/guide/stage-6-vowel-teams.png',
            imageAlt: '畫家老師、合作的彩色蠟筆、雨、蜜蜂、船與夜空插圖',
            intro: '有些母音字母喜歡成對工作，兩個或多個字母一起完成一個主要母音聲音。',
            goal: '先掌握規則比較穩定的長母音組合，再慢慢加入例外家族。',
            steps: [
                {
                    number: '01',
                    title: '兩個字母一起工作',
                    text: 'ai、ee、oa 等 vowel teams 不要拆成兩個獨立母音，先把它們看成一個隊伍。',
                    tiles: [
                        { text: 'a', tone: 'vowel' },
                        { text: 'i', tone: 'vowel' },
                        { text: '→', tone: 'operator' },
                        { text: '/eɪ/', tone: 'sound' }
                    ]
                },
                {
                    number: '02',
                    title: '從穩定家族開始',
                    text: 'ai/ay 常發 /eɪ/，ee 常發 /iː/，oa 常發 /oʊ/，igh 常發 /aɪ/。',
                    tiles: [
                        { text: 'ai', tone: 'vowel' },
                        { text: 'ee', tone: 'vowel' },
                        { text: 'oa', tone: 'vowel' },
                        { text: 'igh', tone: 'vowel' }
                    ]
                },
                {
                    number: '03',
                    title: '把例外另放到高階',
                    text: 'ea、ow、oo 等組合有不只一種讀法，先建立穩定家族，再進入淘氣母音。',
                    tiles: [
                        { text: '規則', tone: 'consonant' },
                        { text: '→', tone: 'operator' },
                        { text: '例外', tone: 'y-letter' }
                    ]
                }
            ],
            examples: [
                { word: 'rain', ipa: '/reɪn/', meaning: '雨', icon: '🌧️', syllables: 'rain', focus: 'ai → /eɪ/', note: 'ai 是常見的長 a 組合。' },
                { word: 'bee', ipa: '/biː/', meaning: '蜜蜂', icon: '🐝', syllables: 'bee', focus: 'ee → /iː/', note: 'ee 常發長 e。' },
                { word: 'boat', ipa: '/boʊt/', meaning: '船', icon: '⛵', syllables: 'boat', focus: 'oa → /oʊ/', note: 'oa 常發長 o。' },
                { word: 'night', ipa: '/naɪt/', meaning: '夜晚', icon: '🌙', syllables: 'night', focus: 'igh → /aɪ/', note: 'igh 常表示長 i，gh 不另外發音。' },
                { word: 'day', ipa: '/deɪ/', meaning: '白天', icon: '🌞', syllables: 'day', focus: 'ay → /eɪ/', note: 'ay 常出現在字尾，發長 a。' }
            ],
            contrast: {
                title: '同一個長音，可以有不同隊伍',
                text: '先聽聲音，再觀察是哪一組字母合作完成它。',
                pairs: [
                    { shortWord: 'rain', shortIpa: 'ai → /eɪ/', longWord: 'day', longIpa: 'ay → /eɪ/', hint: 'ai 常在字中間；ay 常在字尾' },
                    { shortWord: 'boat', shortIpa: 'oa → /oʊ/', longWord: 'night', longIpa: 'igh → /aɪ/', hint: '不同 vowel team 產生不同長母音' }
                ]
            },
            quiz: {
                question: '哪個單字使用 igh 來表示 /aɪ/？',
                options: [
                    { id: 'rain', label: 'rain', hint: 'ai' },
                    { id: 'night', label: 'night', hint: 'igh' },
                    { id: 'boat', label: 'boat', hint: 'oa' }
                ],
                answerId: 'night',
                correctText: '答對了！night 的 igh 常表示 /aɪ/。',
                retryText: '提示：找出含有 igh 的單字。'
            }
        },
        {
            id: 'r-controlled',
            number: '7',
            title: 'Bossy R 的聲音花園',
            subtitle: 'R-Controlled Vowels',
            theme: 'rose',
            image: 'assets/guide/stage-7-r-controlled.png',
            imageAlt: '戴皇冠的獅子拉著彩色聲音花朵、汽車、叉子、鳥與星星插圖',
            intro: '當母音遇到 r，r 會影響母音的聲音。這時不要再硬套短母音或長母音。',
            goal: '把 ar、or、er、ir、ur 當作受 r 影響的母音家族。',
            steps: [
                {
                    number: '01',
                    title: '看到 r 就停一下',
                    text: '先圈出母音和 r，提醒自己這不是一般的 CVC 或 CVCe。',
                    tiles: [
                        { text: 'a', tone: 'vowel' },
                        { text: 'r', tone: 'consonant' },
                        { text: '→', tone: 'operator' },
                        { text: 'ar', tone: 'sound' }
                    ]
                },
                {
                    number: '02',
                    title: '認識五個常見家族',
                    text: 'ar、or、er、ir、ur 的聲音受口音影響，先以整組和生活單字建立耳朵記憶。',
                    tiles: [
                        { text: 'ar', tone: 'vowel' },
                        { text: 'or', tone: 'vowel' },
                        { text: 'er', tone: 'vowel' },
                        { text: 'ir', tone: 'vowel' },
                        { text: 'ur', tone: 'vowel' }
                    ]
                },
                {
                    number: '03',
                    title: '和普通母音做對照',
                    text: 'car 不是 cat 的長音版；fork 也不是 folk 的一般 o 音，r 會讓整個母音變身。',
                    tiles: [
                        { text: '母音', tone: 'vowel' },
                        { text: '+', tone: 'operator' },
                        { text: 'r', tone: 'consonant' },
                        { text: '→ 新家族', tone: 'sound' }
                    ]
                }
            ],
            examples: [
                { word: 'car', ipa: '/kɑːr/', meaning: '汽車', icon: '🚗', syllables: 'car', focus: 'ar → /ɑːr/', note: 'r 影響 a 的聲音。' },
                { word: 'fork', ipa: '/fɔːrk/', meaning: '叉子', icon: '🍴', syllables: 'fork', focus: 'or → /ɔːr/', note: 'or 是常見的 Bossy R 家族。' },
                { word: 'bird', ipa: '/bɝːd/', meaning: '鳥', icon: '🐦', syllables: 'bird', focus: 'ir → /ɝː/', note: 'ir 受到 r 影響，不能當作一般短 i。' },
                { word: 'turn', ipa: '/tɝːn/', meaning: '轉彎', icon: '↩️', syllables: 'turn', focus: 'ur → /ɝː/', note: 'ur 常和 er、ir 有相近的 r-controlled 聲音。' },
                { word: 'star', ipa: '/stɑːr/', meaning: '星星', icon: '⭐', syllables: 'star', focus: 'ar → /ɑːr/', note: 'st 是 blend，ar 是 Bossy R。' }
            ],
            contrast: {
                title: 'R 會把母音拉進另一個家族',
                text: '把普通母音和 R-controlled vowel 放在一起聽，感受聲音不是單純變長。',
                pairs: [
                    { shortWord: 'cap', shortIpa: '/kæp/', longWord: 'car', longIpa: '/kɑːr/', hint: 'a 遇到 r 後變成 ar 家族' },
                    { shortWord: 'hop', shortIpa: '/hɑp/', longWord: 'fork', longIpa: '/fɔːrk/', hint: 'or 不是一般的 o 短音' }
                ]
            },
            quiz: {
                question: '哪個單字有 Bossy R 的 ar 家族？',
                options: [
                    { id: 'cat', label: 'cat', hint: 'CVC' },
                    { id: 'car', label: 'car', hint: 'ar' },
                    { id: 'cake', label: 'cake', hint: 'a-e' }
                ],
                answerId: 'car',
                correctText: '答對了！car 的 ar 是 R-controlled vowel。',
                retryText: '提示：找出母音後面緊跟著 r 的單字。'
            }
        },
        {
            id: 'diphthongs',
            number: '8',
            title: '滑動母音彩虹橋',
            subtitle: 'Diphthongs · Special Vowel Teams',
            theme: 'amber',
            image: 'assets/guide/stage-8-diphthongs.png',
            imageAlt: '彩虹角色、硬幣、玩具、雲、房子、月亮與書本插圖',
            intro: '有些母音聲音不是停在一個位置，而是從一個口形滑到另一個口形。',
            goal: '分辨 oi/oy、ou/ow、oo 等常見滑動或特殊母音組合。',
            steps: [
                {
                    number: '01',
                    title: '感覺聲音在滑動',
                    text: 'oi 會從 /ɔ/ 滑向 /ɪ/，ou 會從 /a/ 滑向 /ʊ/，嘴形和聲音都會移動。',
                    tiles: [
                        { text: '/ɔ/', tone: 'sound' },
                        { text: '↝', tone: 'operator' },
                        { text: '/ɪ/', tone: 'sound' },
                        { text: '＝', tone: 'operator' },
                        { text: '/ɔɪ/', tone: 'vowel' }
                    ]
                },
                {
                    number: '02',
                    title: '認識常見家族',
                    text: 'oi/oy 常發 /ɔɪ/；ou/ow 常發 /aʊ/；oo 則要學會長音和短音兩個常見家族。',
                    tiles: [
                        { text: 'oi/oy', tone: 'vowel' },
                        { text: 'ou/ow', tone: 'vowel' },
                        { text: 'oo', tone: 'vowel' }
                    ]
                },
                {
                    number: '03',
                    title: '把例外留給高階',
                    text: 'ow、ou、oo 和 ea 都可能有不同讀法，先記住最穩定的例字家族，再逐步擴充。',
                    tiles: [
                        { text: '穩定家族', tone: 'consonant' },
                        { text: '→', tone: 'operator' },
                        { text: '特殊讀法', tone: 'y-letter' }
                    ]
                }
            ],
            examples: [
                { word: 'coin', ipa: '/kɔɪn/', meaning: '硬幣', icon: '🪙', syllables: 'coin', focus: 'oi → /ɔɪ/', note: 'oi 是常見的滑動母音。' },
                { word: 'toy', ipa: '/tɔɪ/', meaning: '玩具', icon: '🧸', syllables: 'toy', focus: 'oy → /ɔɪ/', note: 'oy 常出現在字尾，和 oi 聲音相同。' },
                { word: 'cloud', ipa: '/klaʊd/', meaning: '雲', icon: '☁️', syllables: 'cloud', focus: 'ou → /aʊ/', note: 'ou 在 cloud 裡從 /a/ 滑向 /ʊ/。' },
                { word: 'house', ipa: '/haʊs/', meaning: '房子', icon: '🏠', syllables: 'house', focus: 'ou → /aʊ/', note: 'ou 是常見的 /aʊ/ 拼法。' },
                { word: 'moon', ipa: '/muːn/', meaning: '月亮', icon: '🌙', syllables: 'moon', focus: 'oo → /uː/', note: 'oo 有時發長 /uː/。' },
                { word: 'book', ipa: '/bʊk/', meaning: '書', icon: '📖', syllables: 'book', focus: 'oo → /ʊ/', note: 'oo 也可能發較短的 /ʊ/。' }
            ],
            contrast: {
                title: '滑動母音和固定長音',
                text: 'oi、ou 會在口形中滑動；moon 和 book 則提醒我們 oo 有不同讀法。',
                pairs: [
                    { shortWord: 'coin', shortIpa: '/ɔɪ/', longWord: 'cone', longIpa: '/oʊ/', hint: 'oi 是滑動母音；o-e 是長 o' },
                    { shortWord: 'moon', shortIpa: '/uː/', longWord: 'book', longIpa: '/ʊ/', hint: 'oo 的兩個常見讀法' }
                ]
            },
            quiz: {
                question: '哪個單字含有 ou 的 /aʊ/ 滑動母音？',
                options: [
                    { id: 'cloud', label: 'cloud', hint: 'ou → /aʊ/' },
                    { id: 'moon', label: 'moon', hint: 'oo → /uː/' },
                    { id: 'coin', label: 'coin', hint: 'oi → /ɔɪ/' }
                ],
                answerId: 'cloud',
                correctText: '答對了！cloud 的 ou 讀成 /aʊ/。',
                retryText: '提示：找出含有 ou、意思是雲的單字。'
            }
        },
        {
            id: 'multisyllable',
            number: '9',
            title: '多音節地圖探險',
            subtitle: 'Syllable Types · Schwa · -le',
            theme: 'blue',
            image: 'assets/guide/stage-9-multisyllable.png',
            imageAlt: '拿地圖的石頭偵探、兔子、機器人、音符房子與石頭路徑插圖',
            intro: '遇到較長的單字，不要一次硬吞。先找聽得到的母音，再把單字分成幾個小音節。',
            goal: '能用音節數、重讀位置和常見結尾拆解長單字。',
            steps: [
                {
                    number: '01',
                    title: '數聽得到的母音',
                    text: '音節數不是母音字母數，而是耳朵聽到的母音發音數量。rabbit 有兩個音節。',
                    tiles: [
                        { text: 'rab', tone: 'consonant' },
                        { text: '|', tone: 'operator' },
                        { text: 'bit', tone: 'vowel' }
                    ]
                },
                {
                    number: '02',
                    title: '沿著子音切開',
                    text: '兩個子音中間常能找到切點；先試讀兩段，再用整個單字的意思和聲音確認。',
                    tiles: [
                        { text: 'rab', tone: 'sound' },
                        { text: '|', tone: 'operator' },
                        { text: 'bit', tone: 'sound' },
                        { text: '→ rabbit', tone: 'vowel' }
                    ]
                },
                {
                    number: '03',
                    title: '認識 -le 和弱母音',
                    text: 'table、little 的字尾 -le 是 consonant-le 音節；不重讀的母音也可能弱化成 schwa。',
                    tiles: [
                        { text: 'consonant', tone: 'consonant' },
                        { text: '+', tone: 'operator' },
                        { text: 'le', tone: 'vowel' }
                    ]
                }
            ],
            examples: [
                { word: 'rabbit', ipa: '/ˈræb.ɪt/', meaning: '兔子', icon: '🐰', syllables: 'rab-bit', focus: '兩個閉音節', note: '兩個子音之間切開，再分別讀短母音。' },
                { word: 'robot', ipa: '/ˈroʊ.bɑt/', meaning: '機器人', icon: '🤖', syllables: 'ro-bot', focus: '開音節 + 閉音節', note: '第一音節 ro 是開音節，第二音節 bot 是閉音節。' },
                { word: 'music', ipa: '/ˈmjuː.zɪk/', meaning: '音樂', icon: '🎵', syllables: 'mu-sic', focus: '開音節 + 閉音節', note: 'mu 以母音結尾，sic 以子音結尾。' },
                { word: 'table', ipa: '/ˈteɪ.bəl/', meaning: '桌子', icon: '🪑', syllables: 'ta-ble', focus: 'consonant-le', note: '字尾 -ble 形成一個常見的 consonant-le 音節。' },
                { word: 'pencil', ipa: '/ˈpɛn.səl/', meaning: '鉛筆', icon: '✏️', syllables: 'pen-cil', focus: '弱母音', note: '第二音節的母音較輕，接近 schwa。' }
            ],
            contrast: {
                title: '長單字也能拆成小路段',
                text: '先拆音節、分段讀，再把重音和意思放回整個單字。',
                pairs: [
                    { shortWord: 'rab-bit', shortIpa: '2 音節', longWord: 'rabbit', longIpa: '/ˈræb.ɪt/', hint: '切開後再合回完整單字' },
                    { shortWord: 'ta-ble', shortIpa: '2 音節', longWord: 'table', longIpa: '/ˈteɪ.bəl/', hint: '字尾 -le 是一個音節線索' }
                ]
            },
            quiz: {
                question: '哪個單字最適合切成 rab | bit？',
                options: [
                    { id: 'rabbit', label: 'rabbit', hint: '兩個音節' },
                    { id: 'robot', label: 'robot', hint: 'ro-bot' },
                    { id: 'table', label: 'table', hint: 'ta-ble' }
                ],
                answerId: 'rabbit',
                correctText: '答對了！rabbit 可以先切成 rab 和 bit。',
                retryText: '提示：找出意思是兔子的單字。'
            }
        },
        {
            id: 'advanced',
            number: '10',
            title: '進階拼字密室',
            subtitle: 'Silent Letters · Soft Sounds · Exceptions',
            theme: 'rose',
            image: 'assets/guide/stage-10-advanced.png',
            imageAlt: '石頭偵探、城堡圖書櫃、害羞隱形字母、騎士、禮物、燈泡與手機插圖',
            intro: '最後的密室裡有 Silent Letters、Soft C/G 和特殊 gh、ch。先使用熟悉的工具，再把高頻例外收進記憶庫。',
            goal: '知道哪些是可套用的拼字模式，哪些需要用高頻字家族記憶。',
            steps: [
                {
                    number: '01',
                    title: '先找熟悉的拼字隊',
                    text: '看到 kn、wr、mb、gh、ph 等組合時，先回想它們在同一個字族裡的常見讀法。',
                    tiles: [
                        { text: 'kn', tone: 'consonant' },
                        { text: 'wr', tone: 'consonant' },
                        { text: 'mb', tone: 'consonant' },
                        { text: 'gh', tone: 'consonant' }
                    ]
                },
                {
                    number: '02',
                    title: 'Soft C/G 看後面的字母',
                    text: 'c 或 g 遇到 e、i、y 時，常會變成比較柔和的聲音，但仍要留意 get、give 等例外。',
                    tiles: [
                        { text: 'c/g', tone: 'consonant' },
                        { text: '+ e i y', tone: 'vowel' },
                        { text: '→', tone: 'operator' },
                        { text: 'soft sound', tone: 'sound' }
                    ]
                },
                {
                    number: '03',
                    title: '把真正的例外收進字庫',
                    text: '當規則不能穩定預測時，使用單字、意思、圖像和發音一起記憶，而不是硬套錯誤規則。',
                    tiles: [
                        { text: '規則', tone: 'consonant' },
                        { text: '+', tone: 'operator' },
                        { text: '單字家族', tone: 'y-letter' },
                        { text: '→', tone: 'operator' },
                        { text: '熟練', tone: 'sound' }
                    ]
                }
            ],
            examples: [
                { word: 'knight', ipa: '/naɪt/', meaning: '騎士', icon: '🛡️', syllables: 'knight', focus: 'kn → /n/', note: 'k 不另外發音，igh 常表示 /aɪ/。' },
                { word: 'write', ipa: '/raɪt/', meaning: '寫', icon: '✍️', syllables: 'write', focus: 'wr → /r/', note: 'w 在 wr- 中通常不另外發音。' },
                { word: 'light', ipa: '/laɪt/', meaning: '光／輕的', icon: '💡', syllables: 'light', focus: 'igh → /aɪ/', note: 'gh 在 igh 中不另外發音。' },
                { word: 'phone', ipa: '/foʊn/', meaning: '電話', icon: '📱', syllables: 'phone', focus: 'ph → /f/', note: 'ph 是常見的 /f/ 拼法。' },
                { word: 'city', ipa: '/ˈsɪt.i/', meaning: '城市', icon: '🏙️', syllables: 'cit-y', focus: 'c → /s/', note: 'c 遇到 i 時常變成 Soft C。' }
            ],
            contrast: {
                title: '可以套用的線索，和需要記住的例外',
                text: '先找模式，再決定要套規則還是查單字家族。',
                pairs: [
                    { shortWord: 'night', shortIpa: 'igh → /aɪ/', longWord: 'knight', longIpa: 'kn + igh → /naɪt/', hint: 'knight 多了一個不出聲的 k' },
                    { shortWord: 'hard c', shortIpa: 'cat → /k/', longWord: 'soft c', longIpa: 'city → /s/', hint: 'c 後面的字母會提示發音方向' }
                ]
            },
            quiz: {
                question: '哪個單字的 k 通常不發音？',
                options: [
                    { id: 'kite', label: 'kite', hint: 'k 會發音' },
                    { id: 'knight', label: 'knight', hint: 'kn → /n/' },
                    { id: 'king', label: 'king', hint: 'k 會發音' }
                ],
                answerId: 'knight',
                correctText: '答對了！knight 的 k 是 Silent K。',
                retryText: '提示：找出字首是 kn- 的單字。'
            }
        }
    ],
    stages: [
        {
            title: '第 0 階段：自然發音正統兩大鐵律',
            subtitle: '發音地基 80%',
            theme: 'emerald',
            rules: [
                { ruleId: 'cvc', label: 'CVC 短母音', text: '母音被關在子音中間，發短音。', examples: 'cat /æ/、pen /ɛ/、pig /ɪ/、dog /ɑ/、cup /ʌ/' },
                { ruleId: 'magic-e', label: 'Magic E（CVCe）', text: '字尾不發音的 e 讓前面的母音變成長音。', examples: 'cake、pine、hope、cube' }
            ]
        },
        {
            title: '第一階段：害羞不發音字',
            subtitle: 'Silent Letters',
            theme: 'blue',
            rules: [
                { ruleId: 'silent-k', label: 'Silent K（kn-）', text: 'K 遇到 N 會害羞不發音。', examples: 'knee、knife、knock、knight' },
                { ruleId: 'silent-w', label: 'Silent W（wr-）', text: 'W 遇到 R 隱形不發音。', examples: 'write、wrong、wrist' },
                { ruleId: 'silent-b', label: 'Silent B（-mb）', text: '字尾 mb 的 b 通常不發音。', examples: 'climb、comb、thumb' },
                { ruleId: 'silent-g', label: 'Silent G（gn-）', text: '字首 gn- 中的 g 通常不發音。', examples: 'gnome、gnaw、gnat' }
            ]
        },
        {
            title: '第二階段：子音規律變身',
            subtitle: 'Soft C & Soft G',
            theme: 'purple',
            rules: [
                { ruleId: 'soft-c', label: 'Soft C', text: 'c 後面遇到 e、i、y 時，常變成 /s/。', examples: 'city、ice、rice' },
                { ruleId: 'soft-g', label: 'Soft G', text: 'g 後面遇到 e、i、y 時，常變成 /dʒ/。', examples: 'magic、giant、page' }
            ]
        },
        {
            title: '第三階段：淘氣母音與特殊組合',
            subtitle: '不一定照課本發音的組合',
            theme: 'amber',
            rules: [
                { ruleId: 'short-ea', label: '淘氣短音 EA', text: 'ea 不一定發長音 /i/，有時會發像 bed 的 /ɛ/。', examples: 'bread、head、heavy、weather' },
                { ruleId: 'hard-ch', label: '硬音 CH', text: 'ch 在部分字中會發 /k/，不是一般的 /tʃ/。', examples: 'school、ache、chemistry' }
            ]
        },
        {
            title: '第四階段：母音被子音拉走',
            subtitle: 'Bossy R & Bossy A',
            theme: 'rose',
            rules: [
                { ruleId: 'bossy-r', label: 'Bossy R', text: '母音遇到 r 後，聲音會被 r 影響。', examples: 'car、star、fork、bird' },
                { ruleId: 'bossy-a', label: 'Bossy A（al / aw）', text: 'a 和 l、w 組合時，會形成特殊母音聲音。', examples: 'ball、tall、walk、draw' }
            ]
        },
        {
            title: '第五階段：高頻拼字小隊',
            subtitle: '整組一起讀，不要逐字母硬拆',
            theme: 'blue',
            rules: [
                { ruleId: 'dge', label: '-dge 拼字隊', text: 'dge 通常整組表示 /dʒ/；d 不單獨發音，字尾 e 也不另外唸出。', examples: 'budget、badge、bridge、fridge、judge、edge' },
                { ruleId: 'tch', label: '-tch 拼字隊', text: '短母音後的 tch 通常整組表示 /tʃ/。', examples: 'match、fetch、pitch、notch' },
                { ruleId: 'ck', label: '-ck 拼字隊', text: '短母音後常用 ck 表示 /k/，通常出現在音節或字尾。', examples: 'back、neck、sick、rock' },
                { ruleId: 'igh', label: '-igh 拼字隊', text: '常見的 igh 通常表示長 i /aɪ/；gh 在這裡不另外發音。', examples: 'night、light、right、sight' }
            ]
        }
    ],
    familyActivity: {
        title: '🎬 5 分鐘 Silent K 特務解密',
        steps: [
            '情境設定：英文單字裡有隱形特務 K！它遇到好朋友 N，就會害羞不敢說話，變透明。可以做嘴唇比「噓」的手勢。',
            '實戰拆解：拿出 knee 閃卡，提醒孩子 K 不發音，直接唸 -nee（/ni/），同時拍拍膝蓋。',
            '3 秒解密遊戲：家長發出「請找出敲敲門！」的指令，孩子快速找到 knock，敲桌子並唸出 -nock。'
        ]
    },
    curriculumRoadmap: [
        { id: 'foundations', number: '0', icon: '🧭', title: '聲音地基', subtitle: '字母音、合音與拆音', theme: 'blue', status: 'ready', statusLabel: '現在學習' },
        { id: 'short-vowels', number: '1', icon: '🔍', title: '短母音與閉音節', subtitle: 'CVC × Closed Syllable', theme: 'emerald', status: 'ready', statusLabel: '現在學習' },
        { id: 'consonant-teams', number: '2', icon: '🤝', title: '子音小隊', subtitle: 'Digraphs、Blends、FLOSS', theme: 'blue', status: 'ready', statusLabel: '現在學習' },
        { id: 'ending-spelling', number: '3', icon: '🧩', title: '字尾拼字選擇', subtitle: 'ck、tch、dge', theme: 'amber', status: 'ready', statusLabel: '現在學習' },
        { id: 'long-vowels', number: '4', icon: '✨', title: '長母音', subtitle: 'Magic E × Open Syllable', theme: 'emerald', status: 'ready', statusLabel: '現在學習' },
        { id: 'y-vowels', number: '5', icon: '🎭', title: '變身母音 Y', subtitle: 'Y 的三種母音讀法', theme: 'purple', status: 'ready', statusLabel: '現在學習' },
        { id: 'vowel-teams', number: '6', icon: '🎨', title: '長母音組合', subtitle: 'ai、ee、oa、igh…', theme: 'purple', status: 'ready', statusLabel: '現在學習' },
        { id: 'r-controlled', number: '7', icon: '🦁', title: 'Bossy R', subtitle: 'ar、or、er、ir、ur', theme: 'rose', status: 'ready', statusLabel: '現在學習' },
        { id: 'diphthongs', number: '8', icon: '🌈', title: '滑動與特殊母音', subtitle: 'oi、ou、aw、oo…', theme: 'amber', status: 'ready', statusLabel: '現在學習' },
        { id: 'multisyllable', number: '9', icon: '🗺️', title: '多音節解密', subtitle: '切音節、schwa、-le', theme: 'blue', status: 'ready', statusLabel: '現在學習' },
        { id: 'advanced', number: '10', icon: '🏰', title: '進階與例外', subtitle: 'Silent Letters、特殊拼法', theme: 'rose', status: 'ready', statusLabel: '現在學習' }
    ],
    lessonStages: [
        {
            id: 'short-vowels',
            number: '1',
            title: '短母音偵探隊',
            subtitle: 'CVC × Closed Syllable',
            theme: 'emerald',
            image: 'assets/guide/stage-1-short-vowels.png',
            imageAlt: '戴偵探帽的石頭角色和貓、杯子、小豬與太陽插圖',
            intro: '母音被前後子音關起來時，通常會發出短而清楚的聲音。先找出中間母音，再把三個音連起來。',
            goal: '學會看到 CVC 就能快速找出短母音。',
            steps: [
                {
                    number: '01',
                    title: '先抓出中間母音',
                    text: 'CVC 單字通常只有一個核心母音。先圈出 a、e、i、o 或 u，再觀察它前後的子音。',
                    tiles: [
                        { text: 'c', tone: 'plain' },
                        { text: 'a', tone: 'vowel' },
                        { text: 't', tone: 'plain' }
                    ]
                },
                {
                    number: '02',
                    title: '確認母音被關住了',
                    text: '母音前後都有子音，就像被兩扇門關住，這種閉音節通常使用短母音。',
                    tiles: [
                        { text: 'C', tone: 'consonant' },
                        { text: 'V', tone: 'vowel' },
                        { text: 'C', tone: 'consonant' }
                    ]
                },
                {
                    number: '03',
                    title: '把三個音連起來',
                    text: '慢慢拆音，再加快合音：/k/ + /æ/ + /t/ → cat。不要把字母名稱念成單字音。',
                    tiles: [
                        { text: '/k/', tone: 'sound' },
                        { text: '+', tone: 'operator' },
                        { text: '/æ/', tone: 'sound' },
                        { text: '+', tone: 'operator' },
                        { text: '/t/', tone: 'sound' }
                    ]
                }
            ],
            examples: [
                { word: 'cat', ipa: '/kæt/', meaning: '貓', icon: '🐱', syllables: 'c-a-t', focus: 'a → /æ/', note: 'a 被 c 和 t 關住，發短音 /æ/。' },
                { word: 'bed', ipa: '/bɛd/', meaning: '床', icon: '🛏️', syllables: 'b-e-d', focus: 'e → /ɛ/', note: 'e 被 b 和 d 關住，發短音 /ɛ/。' },
                { word: 'pig', ipa: '/pɪɡ/', meaning: '豬', icon: '🐷', syllables: 'p-i-g', focus: 'i → /ɪ/', note: 'i 被 p 和 g 關住，發短音 /ɪ/。' },
                { word: 'dog', ipa: '/dɑɡ/', meaning: '狗', icon: '🐶', syllables: 'd-o-g', focus: 'o → /ɑ/', note: 'o 被 d 和 g 關住，發短音。' },
                { word: 'sun', ipa: '/sʌn/', meaning: '太陽', icon: '☀️', syllables: 's-u-n', focus: 'u → /ʌ/', note: 'u 被 s 和 n 關住，發短音 /ʌ/。' }
            ],
            contrast: {
                title: '短母音和長母音對照',
                text: '先把短母音讀穩，再觀察字尾 e 如何改變聲音。',
                pairs: [
                    { shortWord: 'cap', shortIpa: '/kæp/', longWord: 'cape', longIpa: '/keɪp/', hint: 'a → /æ/ 變成 a-e → /eɪ/' },
                    { shortWord: 'kit', shortIpa: '/kɪt/', longWord: 'kite', longIpa: '/kaɪt/', hint: 'i → /ɪ/ 變成 i-e → /aɪ/' }
                ]
            },
            quiz: {
                question: '哪一個單字的母音被前後子音關住，發短母音？',
                options: [
                    { id: 'cat', label: 'cat', hint: 'CVC' },
                    { id: 'cake', label: 'cake', hint: 'CVCe' },
                    { id: 'rain', label: 'rain', hint: 'vowel team' }
                ],
                answerId: 'cat',
                correctText: '答對了！cat 是 CVC，a 被 c 和 t 關住。',
                retryText: '再找一次：哪個字是子音－母音－子音的 CVC？'
            }
        },
        {
            id: 'y-vowels',
            number: '5',
            title: '變身母音 Y',
            subtitle: '一個字母，三種母音角色',
            theme: 'purple',
            image: 'assets/guide/stage-5-y-vowel.png',
            imageAlt: '戴魔法帽的 Y 角色，以及運動、風箏和嬰兒情境插圖',
            intro: 'Y 不只會當子音。當它站在不同位置時，可能變成短 i、長 i 或長 e 的聲音。',
            goal: '先看 Y 的位置，再猜它是哪一個聲音角色。',
            steps: [
                {
                    number: '01',
                    title: 'Y 站在字首：子音 /j/',
                    text: '在 yes、yellow 這類字的字首，y 是子音，像小滑梯一樣快速滑出 /j/。',
                    tiles: [
                        { text: 'y', tone: 'y-letter' },
                        { text: 'es', tone: 'plain' },
                        { text: '→', tone: 'operator' },
                        { text: '/j/', tone: 'sound' }
                    ]
                },
                {
                    number: '02',
                    title: 'Y 在單音節字尾：/aɪ/',
                    text: 'my、cry、sky 的字尾 y 常發長 i /aɪ/，像在天空拉出一條長長的滑行軌跡。',
                    tiles: [
                        { text: 'm', tone: 'plain' },
                        { text: 'y', tone: 'y-letter' },
                        { text: '→', tone: 'operator' },
                        { text: '/aɪ/', tone: 'sound' }
                    ]
                },
                {
                    number: '03',
                    title: 'Y 在多音節字尾：/i/',
                    text: 'happy、baby、sunny 的字尾 y 常發長 e /i/，像開心角色的笑聲。',
                    tiles: [
                        { text: 'happ', tone: 'plain' },
                        { text: 'y', tone: 'y-letter' },
                        { text: '→', tone: 'operator' },
                        { text: '/i/', tone: 'sound' }
                    ]
                },
                {
                    number: '04',
                    title: 'Y 被子音關住：/ɪ/',
                    text: 'gym、myth、system 裡的 y 位在閉音節，常發短 i /ɪ/。這是 Y 的偵探小線索，不是絕對規則。',
                    tiles: [
                        { text: 'g', tone: 'plain' },
                        { text: 'y', tone: 'y-letter' },
                        { text: 'm', tone: 'plain' },
                        { text: '→', tone: 'operator' },
                        { text: '/ɪ/', tone: 'sound' }
                    ]
                }
            ],
            examples: [
                { word: 'yes', ipa: '/jɛs/', meaning: '是', icon: '👍', syllables: 'yes', focus: 'y → /j/', note: '字首的 y 是子音，不是母音。' },
                { word: 'my', ipa: '/maɪ/', meaning: '我的', icon: '🪁', syllables: 'my', focus: 'y → /aɪ/', note: '單音節字尾的 y 常發長 i。' },
                { word: 'happy', ipa: '/ˈhæp.i/', meaning: '開心的', icon: '😊', syllables: 'hap-py', focus: 'y → /i/', note: '多音節字尾的 y 常發長 e。' },
                { word: 'gym', ipa: '/dʒɪm/', meaning: '體育館', icon: '🏋️', syllables: 'gym', focus: 'y → /ɪ/', note: 'y 被前後子音包住，常發短 i。' },
                { word: 'sky', ipa: '/skaɪ/', meaning: '天空', icon: '🌤️', syllables: 'sky', focus: 'y → /aɪ/', note: '單音節字尾 y 常發 /aɪ/。' }
            ],
            contrast: {
                title: 'Y 的三種母音角色',
                text: '先看位置，再看音節。字首的 /j/ 是子音角色，另外三個是母音角色。',
                pairs: [
                    { shortWord: 'gym', shortIpa: '/dʒɪm/', longWord: 'my', longIpa: '/maɪ/', hint: '閉音節 /ɪ/ 對比單音節字尾 /aɪ/' },
                    { shortWord: 'my', shortIpa: '/maɪ/', longWord: 'happy', longIpa: '/ˈhæp.i/', hint: '單音節 /aɪ/ 對比多音節字尾 /i/' }
                ]
            },
            quiz: {
                question: '哪一個單字的字尾 Y 通常發長 e /i/？',
                options: [
                    { id: 'gym', label: 'gym', hint: '/ɪ/' },
                    { id: 'my', label: 'my', hint: '/aɪ/' },
                    { id: 'happy', label: 'happy', hint: '/i/' }
                ],
                answerId: 'happy',
                correctText: '答對了！happy 的字尾 y 在多音節字中常發 /i/。',
                retryText: '提示：找一個兩個音節、意思是開心的單字。'
            }
        }
    ],
    ruleDetails: [
        {
            id: 'open-syllable',
            title: '開音節 Open Syllable',
            theme: 'blue',
            summary: '音節以母音結尾時，母音常發字母本身的長音。',
            explanation: '把音節想成一扇打開的門，母音沒有被後面的子音關住，所以可以大方說出長音。這是常見方向，不是每個英文單字的絕對規則。',
            examples: [
                { word: 'me', ipa: '/miː/', meaning: '我', syllables: 'me', breakdown: 'm + e → e 發長音 /iː/' },
                { word: 'baby', ipa: '/ˈbeɪ.bi/', meaning: '嬰兒', syllables: 'ba-by', breakdown: 'ba 是開音節，a 常發 /eɪ/' },
                { word: 'music', ipa: '/ˈmjuː.zɪk/', meaning: '音樂', syllables: 'mu-sic', breakdown: 'mu 是開音節，u 常發長音 /juː/' }
            ]
        },
        {
            id: 'closed-syllable',
            title: '閉音節 Closed Syllable',
            theme: 'emerald',
            summary: '音節以子音結尾時，前面的母音通常發短音。',
            explanation: '後面的子音像一道門把母音關住，因此母音多半使用短音。CVC 是孩子最適合先練習的基本結構。',
            examples: [
                { word: 'cat', ipa: '/kæt/', meaning: '貓', syllables: 'cat', breakdown: 'c-a-t → a 被子音包住，發短音 /æ/' },
                { word: 'mitten', ipa: '/ˈmɪt.ən/', meaning: '連指手套', syllables: 'mit-ten', breakdown: '兩個閉音節，i、e 都發短音' },
                { word: 'bad', ipa: '/bæd/', meaning: '壞的', syllables: 'bad', breakdown: 'b-a-d → a 發短音 /æ/' }
            ]
        },
        {
            id: 'cvc',
            title: 'CVC 短母音',
            theme: 'emerald',
            summary: '子音－母音－子音把母音關在中間，母音通常發短音。',
            explanation: '先抓中間的母音，再看前後子音把它關住。這是解讀 cat、pen、pig、dog、cup 的第一個工具。',
            examples: [
                { word: 'cat', ipa: '/kæt/', meaning: '貓', syllables: 'cat', breakdown: 'c-a-t → /k/ /æ/ /t/' },
                { word: 'pen', ipa: '/pɛn/', meaning: '筆', syllables: 'pen', breakdown: 'p-e-n → e 發短音 /ɛ/' },
                { word: 'pig', ipa: '/pɪɡ/', meaning: '豬', syllables: 'pig', breakdown: 'p-i-g → i 發短音 /ɪ/' },
                { word: 'cup', ipa: '/kʌp/', meaning: '杯子', syllables: 'cup', breakdown: 'c-u-p → u 發短音 /ʌ/' }
            ]
        },
        {
            id: 'magic-e',
            title: 'Magic E（CVCe）',
            theme: 'emerald',
            summary: '字尾 e 通常不發音，但會讓前面的母音變成長音。',
            explanation: '最後的 e 像一位不出聲的魔法師，改變前面母音的讀法。看到 CVCe 時，可以先和沒有 e 的短音字比較。',
            examples: [
                { word: 'cake', ipa: '/keɪk/', meaning: '蛋糕', syllables: 'cake', breakdown: 'a-e → a 發長音 /eɪ/，最後 e 不發音' },
                { word: 'pine', ipa: '/paɪn/', meaning: '松樹', syllables: 'pine', breakdown: 'i-e → i 發長音 /aɪ/' },
                { word: 'hope', ipa: '/hoʊp/', meaning: '希望', syllables: 'hope', breakdown: 'o-e → o 發長音 /oʊ/' },
                { word: 'cube', ipa: '/kjuːb/', meaning: '立方體', syllables: 'cube', breakdown: 'u-e → u 常發 /juː/' }
            ]
        },
        {
            id: 'silent-k',
            title: 'Silent K（kn-）',
            theme: 'blue',
            summary: '字首 kn- 中的 k 通常不發音，直接從 /n/ 開始。',
            explanation: '這是很穩定的字首拼法。可以把 k 想成先到場但不出聲的特務，真正開口的是 n。',
            examples: [
                { word: 'knee', ipa: '/niː/', meaning: '膝蓋', syllables: 'knee', breakdown: 'kn → /n/；k 不另外發音' },
                { word: 'knife', ipa: '/naɪf/', meaning: '餐刀', syllables: 'knife', breakdown: 'kn → /n/，i-e 讓 i 發 /aɪ/' },
                { word: 'knock', ipa: '/nɑːk/', meaning: '敲', syllables: 'knock', breakdown: 'kn → /n/' },
                { word: 'knight', ipa: '/naɪt/', meaning: '騎士', syllables: 'knight', breakdown: 'kn → /n/，igh → /aɪ/' }
            ]
        },
        {
            id: 'silent-w',
            title: 'Silent W（wr-）',
            theme: 'blue',
            summary: '字首 wr- 中的 w 通常不發音，直接從 /r/ 開始。',
            explanation: 'wr- 是常見的字首拼法；w 不是完全消失在拼字裡，而是在這組拼法中不單獨出聲。',
            examples: [
                { word: 'write', ipa: '/raɪt/', meaning: '寫', syllables: 'write', breakdown: 'wr → /r/；i-e → /aɪ/' },
                { word: 'wrong', ipa: '/rɔːŋ/', meaning: '錯的', syllables: 'wrong', breakdown: 'wr → /r/' },
                { word: 'wrist', ipa: '/rɪst/', meaning: '手腕', syllables: 'wrist', breakdown: 'wr → /r/' }
            ]
        },
        {
            id: 'silent-b',
            title: 'Silent B（-mb）',
            theme: 'blue',
            summary: '常見字尾 -mb 中的 b 通常不發音。',
            explanation: '在 climb、comb、thumb 這類字裡，m 已經完成鼻音，字尾 b 不另外出聲。',
            examples: [
                { word: 'climb', ipa: '/klaɪm/', meaning: '攀爬', syllables: 'climb', breakdown: 'mb → /m/；b 不另外發音' },
                { word: 'comb', ipa: '/koʊm/', meaning: '梳子', syllables: 'comb', breakdown: 'mb → /m/' },
                { word: 'thumb', ipa: '/θʌm/', meaning: '拇指', syllables: 'thumb', breakdown: 'mb → /m/' }
            ]
        },
        {
            id: 'silent-g',
            title: 'Silent G（gn-）',
            theme: 'blue',
            summary: '字首 gn- 中的 g 通常不發音，直接從 /n/ 開始。',
            explanation: 'gn- 和 kn- 很像，都是字首的兩個子音由後面的鼻音主導。字尾 -gn 也有類似現象，但需要另外看單字。',
            examples: [
                { word: 'gnome', ipa: '/noʊm/', meaning: '地精', syllables: 'gnome', breakdown: 'gn → /n/' },
                { word: 'gnaw', ipa: '/nɔː/', meaning: '啃咬', syllables: 'gnaw', breakdown: 'gn → /n/' },
                { word: 'gnat', ipa: '/næt/', meaning: '小蚊蠅', syllables: 'gnat', breakdown: 'gn → /n/' }
            ]
        },
        {
            id: 'soft-c',
            title: 'Soft C',
            theme: 'purple',
            summary: 'c 後面遇到 e、i、y 時，常變成 /s/。',
            explanation: '這是「位置提示」：先看 c 後面的字母，再判斷它是硬音 /k/ 還是軟音 /s/。',
            examples: [
                { word: 'city', ipa: '/ˈsɪt.i/', meaning: '城市', syllables: 'cit-y', breakdown: 'c + i → /s/' },
                { word: 'ice', ipa: '/aɪs/', meaning: '冰', syllables: 'ice', breakdown: 'c + e → /s/；i-e → /aɪ/' },
                { word: 'rice', ipa: '/raɪs/', meaning: '米飯', syllables: 'rice', breakdown: 'c + e → /s/；i-e → /aɪ/' }
            ]
        },
        {
            id: 'soft-g',
            title: 'Soft G',
            theme: 'purple',
            summary: 'g 後面遇到 e、i、y 時，常變成 /dʒ/。',
            explanation: '和 Soft C 一樣，先觀察 g 後面的字母。這是常見方向，但 get、give、girl 等字需要以單字記憶。',
            examples: [
                { word: 'magic', ipa: '/ˈmædʒ.ɪk/', meaning: '魔法', syllables: 'mag-ic', breakdown: 'g + i → /dʒ/' },
                { word: 'giant', ipa: '/ˈdʒaɪ.ənt/', meaning: '巨人', syllables: 'gi-ant', breakdown: 'g + i → /dʒ/' },
                { word: 'page', ipa: '/peɪdʒ/', meaning: '頁面', syllables: 'page', breakdown: 'g + e → /dʒ/；a-e → /eɪ/' }
            ]
        },
        {
            id: 'short-ea',
            title: '淘氣短音 EA',
            theme: 'amber',
            summary: 'ea 不一定發長音 /iː/，在部分高頻字中會發 /ɛ/。',
            explanation: 'ea 有多種讀法，bread、head、heavy、weather 這組可先當作高頻家族記憶，不把它當成唯一規則。',
            examples: [
                { word: 'bread', ipa: '/brɛd/', meaning: '麵包', syllables: 'bread', breakdown: 'ea → /ɛ/' },
                { word: 'head', ipa: '/hɛd/', meaning: '頭', syllables: 'head', breakdown: 'ea → /ɛ/' },
                { word: 'heavy', ipa: '/ˈhɛv.i/', meaning: '重的', syllables: 'hea-vy', breakdown: 'ea → /ɛ/' },
                { word: 'weather', ipa: '/ˈwɛð.ɚ/', meaning: '天氣', syllables: 'weath-er', breakdown: 'ea → /ɛ/' }
            ]
        },
        {
            id: 'hard-ch',
            title: '硬音 CH',
            theme: 'amber',
            summary: 'ch 在部分源自希臘文或法文的字裡會發 /k/。',
            explanation: '一般 ch 常發 /tʃ/，但 school、ache、chemistry 這類字保留了另一種讀法，適合當成常見字家族補充。',
            examples: [
                { word: 'school', ipa: '/skuːl/', meaning: '學校', syllables: 'school', breakdown: 'ch → /k/' },
                { word: 'ache', ipa: '/eɪk/', meaning: '疼痛', syllables: 'ache', breakdown: 'ch → /k/；a-e → /eɪ/' },
                { word: 'chemistry', ipa: '/ˈkɛm.ɪ.stri/', meaning: '化學', syllables: 'chem-is-try', breakdown: 'ch → /k/' }
            ]
        },
        {
            id: 'bossy-r',
            title: 'Bossy R',
            theme: 'rose',
            summary: '母音遇到 r 後，r 會改變母音的聲音。',
            explanation: '這一組不適合再用短母音或長母音硬套；先把 ar、or、er、ir、ur 當作受 r 影響的母音家族。',
            examples: [
                { word: 'car', ipa: '/kɑːr/', meaning: '汽車', syllables: 'car', breakdown: 'ar → /ɑːr/' },
                { word: 'fork', ipa: '/fɔːrk/', meaning: '叉子', syllables: 'fork', breakdown: 'or → /ɔːr/' },
                { word: 'bird', ipa: '/bɝːd/', meaning: '鳥', syllables: 'bird', breakdown: 'ir → /ɝː/' }
            ]
        },
        {
            id: 'bossy-a',
            title: 'Bossy A（al / aw）',
            theme: 'rose',
            summary: 'a 和 l、w 組合時，常形成特殊母音聲音。',
            explanation: '這些是高頻拼法家族；先整組認讀，再用單字例子累積辨識速度。',
            examples: [
                { word: 'ball', ipa: '/bɔːl/', meaning: '球', syllables: 'ball', breakdown: 'al → /ɔːl/' },
                { word: 'tall', ipa: '/tɔːl/', meaning: '高的', syllables: 'tall', breakdown: 'al → /ɔːl/' },
                { word: 'walk', ipa: '/wɔːk/', meaning: '走路', syllables: 'walk', breakdown: 'al → /ɔː/；l 不另外發音' },
                { word: 'draw', ipa: '/drɔː/', meaning: '畫畫', syllables: 'draw', breakdown: 'aw → /ɔː/' }
            ]
        },
        {
            id: 'dge',
            title: '-dge 拼字隊：/dʒ/',
            theme: 'blue',
            summary: '看到 dge 時，把它當成一個拼字隊，整組表示 /dʒ/。',
            explanation: '這不是「Silent D」單獨規則：d、g、e 合在一起形成 dge。d 不單獨發音，字尾 e 也不另外唸出；在短母音後尤其常見。',
            examples: [
                { word: 'budget', ipa: '/ˈbʌdʒ.ɪt/', meaning: '預算', syllables: 'budg-et', breakdown: 'budg → /bʌdʒ/；et → /ɪt/；dge 整組表示 /dʒ/' },
                { word: 'badge', ipa: '/bædʒ/', meaning: '徽章', syllables: 'badge', breakdown: 'a 發短音 /æ/；dge → /dʒ/' },
                { word: 'bridge', ipa: '/brɪdʒ/', meaning: '橋', syllables: 'bridge', breakdown: 'i 發短音 /ɪ/；dge → /dʒ/' },
                { word: 'fridge', ipa: '/frɪdʒ/', meaning: '冰箱', syllables: 'fridge', breakdown: 'i 發短音 /ɪ/；dge → /dʒ/' },
                { word: 'judge', ipa: '/dʒʌdʒ/', meaning: '法官／裁判', syllables: 'judge', breakdown: 'u 發短音 /ʌ/；字首 j 與字尾 dge 都有 /dʒ/' },
                { word: 'edge', ipa: '/edʒ/', meaning: '邊緣', syllables: 'edge', breakdown: 'e 發短音 /ɛ/；dge → /dʒ/' }
            ]
        },
        {
            id: 'tch',
            title: '-tch 拼字隊：/tʃ/',
            theme: 'blue',
            summary: '短母音後的 tch 通常整組表示 /tʃ/。',
            explanation: 'tch 常用來保留短母音後的 /tʃ/ 拼法；看到它時，不需要把 t、c、h 分開念。',
            examples: [
                { word: 'match', ipa: '/mætʃ/', meaning: '比賽／火柴', syllables: 'match', breakdown: 'a 發短音 /æ/；tch → /tʃ/' },
                { word: 'fetch', ipa: '/fɛtʃ/', meaning: '取回', syllables: 'fetch', breakdown: 'e 發短音 /ɛ/；tch → /tʃ/' },
                { word: 'pitch', ipa: '/pɪtʃ/', meaning: '音高／投球', syllables: 'pitch', breakdown: 'i 發短音 /ɪ/；tch → /tʃ/' },
                { word: 'notch', ipa: '/nɑːtʃ/', meaning: '缺口', syllables: 'notch', breakdown: 'o 發短音；tch → /tʃ/' }
            ]
        },
        {
            id: 'ck',
            title: '-ck 拼字隊：/k/',
            theme: 'blue',
            summary: '短母音後常用 ck 表示 /k/，通常出現在音節或字尾。',
            explanation: 'ck 是另一個常見的拼字隊；c 和 k 不需要各自發一次音。',
            examples: [
                { word: 'back', ipa: '/bæk/', meaning: '背部／回到', syllables: 'back', breakdown: 'a 發短音 /æ/；ck → /k/' },
                { word: 'neck', ipa: '/nɛk/', meaning: '脖子', syllables: 'neck', breakdown: 'e 發短音 /ɛ/；ck → /k/' },
                { word: 'sick', ipa: '/sɪk/', meaning: '生病的', syllables: 'sick', breakdown: 'i 發短音 /ɪ/；ck → /k/' },
                { word: 'rock', ipa: '/rɑːk/', meaning: '岩石', syllables: 'rock', breakdown: 'o 發短音；ck → /k/' }
            ]
        },
        {
            id: 'igh',
            title: '-igh 拼字隊：/aɪ/',
            theme: 'blue',
            summary: '常見的 igh 通常表示長 i /aɪ/；gh 在這裡不另外發音。',
            explanation: 'igh 是高頻整組拼法。提醒孩子：gh 在 different words 裡也可能發 /f/，例如 tough，所以要跟著字族學。',
            examples: [
                { word: 'night', ipa: '/naɪt/', meaning: '夜晚', syllables: 'night', breakdown: 'igh → /aɪ/；gh 不另外發音' },
                { word: 'light', ipa: '/laɪt/', meaning: '光／輕的', syllables: 'light', breakdown: 'igh → /aɪ/' },
                { word: 'right', ipa: '/raɪt/', meaning: '正確的／右邊', syllables: 'right', breakdown: 'igh → /aɪ/' },
                { word: 'sight', ipa: '/saɪt/', meaning: '視力／景象', syllables: 'sight', breakdown: 'igh → /aɪ/' }
            ]
        }
    ]
};

// The lesson prototypes were authored alongside the original fundamentals while
// the curriculum was being expanded. Normalize them into their public buckets
// once so the guide page only receives the two fundamentals and the full lesson
// sequence.
phonicsGuide.lessonStages = [...phonicsGuide.lessonStages, ...phonicsGuide.fundamentals.filter((item) => item.image)]
    .sort((left, right) => Number(left.number) - Number(right.number));
phonicsGuide.fundamentals = phonicsGuide.fundamentals.filter((item) => !item.image);
window.PHONICS_GUIDE = Object.freeze(phonicsGuide);
