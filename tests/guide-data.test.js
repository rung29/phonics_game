const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync('guide-data.js', 'utf8');
const context = { window: {}, Object };
vm.runInNewContext(source, context);

const guide = context.window.PHONICS_GUIDE;
assert.ok(guide);
assert.equal(guide.curriculumRoadmap.length, 11);
assert.equal(guide.lessonStages.length, 11);
assert.equal(guide.fundamentals.length, 2);
assert.equal(new Set(guide.lessonStages.map((stage) => stage.id)).size, guide.lessonStages.length);
assert.deepEqual(
    guide.lessonStages.map((stage) => stage.id),
    guide.curriculumRoadmap.map((stage) => stage.id)
);
assert.equal(
    guide.curriculumRoadmap.filter((stage) => stage.status === 'ready').length,
    guide.lessonStages.length
);

for (const stage of guide.lessonStages) {
    assert.ok(stage.image);
    assert.ok(fs.existsSync(path.join(process.cwd(), stage.image)));
    assert.ok(stage.steps.length >= 3);
    assert.ok(stage.examples.length >= 4);
    assert.ok(stage.quiz?.answerId);
    assert.ok(stage.quiz.options.some((option) => option.id === stage.quiz.answerId));
    for (const example of stage.examples) {
        assert.ok(example.word);
        assert.ok(example.ipa);
        assert.ok(example.syllables);
    }
}

assert.equal(guide.lessonStages.find((stage) => stage.id === 'short-vowels').examples[0].word, 'cat');
assert.equal(guide.lessonStages.find((stage) => stage.id === 'y-vowels').quiz.answerId, 'happy');
console.log('guide-data tests passed');
