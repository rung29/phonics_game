const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const source = fs.readFileSync('word-catalog.js', 'utf8');

const makeQuery = (result) => ({
    select() { return this; },
    order() { return this; },
    eq() { return this; },
    in() { return this; },
    insert() { return this; },
    update() { return this; },
    then(resolve, reject) { return Promise.resolve(result).then(resolve, reject); }
});

const writes = [];
const client = {
    auth: {
        getSession: async () => ({ data: { session: null }, error: null }),
        signInWithPassword: async () => ({ data: { session: null }, error: null }),
        signOut: async () => ({ error: null })
    },
    from(table) {
        if (table === 'levels') {
            return makeQuery({
                data: [{
                    id: 'short-vowel', title: '短母音', icon: '🐣', description: '說明',
                    rule_tag: 'CVC', theme_key: 'emerald', sort_order: 1, is_published: true
                }],
                error: null
            });
        }
        const query = makeQuery({
            data: [{
                id: 'question-1', level_id: 'short-vowel', prompt: '選出 cat', target: 'cat',
                hint: '提示', options: [{ text: 'cat', correct: true }, { text: 'cake', correct: false }],
                sort_order: 1, is_published: true
            }],
            error: null
        });
        query.insert = (payload) => { writes.push({ action: 'insert', payload }); return query; };
        query.update = (payload) => { writes.push({ action: 'update', payload }); return query; };
        return query;
    }
};

const context = {
    window: {},
    Object,
    Boolean,
    Number,
    Error
};
vm.runInNewContext(source, context);

const catalog = context.window.createWordCatalog({
    supabaseLibrary: { createClient: () => client },
    config: { url: 'https://example.supabase.co', publishableKey: 'publishable-key' }
});

(async () => {
    const levels = await catalog.loadLevels();
    assert.equal(levels.length, 1);
    assert.equal(levels[0].borderColor, 'border-emerald-300');
    assert.equal(levels[0].words[0].target, 'cat');

    await assert.rejects(
        catalog.saveQuestion({
            levelId: 'short-vowel', prompt: '題目', target: 'cat',
            options: [{ text: 'cat', correct: true }, { text: 'cap', correct: true }]
        }),
        /只能有一個正確答案/
    );

    await catalog.saveQuestion({
        levelId: 'short-vowel', prompt: '題目', target: 'cat', hint: '', sortOrder: 2,
        options: [{ text: 'cat', type: 'short', correct: true }, { text: 'cake', type: 'long', correct: false }]
    });
    assert.equal(writes[0].action, 'insert');
    assert.equal(writes[0].payload.options.filter((option) => option.correct).length, 1);

    console.log('word-catalog tests passed');
})().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
