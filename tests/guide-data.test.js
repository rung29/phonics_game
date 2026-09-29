const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync('guide-data.js', 'utf8');
const indexSource = fs.readFileSync('index.html', 'utf8');
const appSource = fs.readFileSync('app.js', 'utf8');
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
    assert.ok(Array.isArray(stage.watchOuts) && stage.watchOuts.length >= 2, `${stage.id} needs common variations`);
    for (const item of stage.watchOuts) {
        assert.ok(item.label && item.words && item.note, `${stage.id} variation is incomplete`);
    }
    for (const example of stage.examples) {
        assert.ok(example.word);
        assert.ok(example.ipa);
        assert.ok(example.syllables);
    }
}

assert.equal(guide.lessonStages.find((stage) => stage.id === 'short-vowels').examples[0].word, 'cat');
assert.equal(guide.lessonStages.find((stage) => stage.id === 'y-vowels').quiz.answerId, 'happy');

assert.ok(!indexSource.includes('五大發音階段地圖'));
assert.ok(!indexSource.includes('guideData.stages'));
assert.ok(indexSource.includes("selectedLessonStage.steps.length"));
assert.ok(indexSource.includes("example.meaning"));
assert.ok(appSource.includes('guideScrollPosition'));
assert.ok(appSource.includes('window.scrollTo'));

const endingStage = guide.lessonStages.find((stage) => stage.id === 'ending-spelling');
assert.ok(endingStage.contrast.pairs.find((pair) => pair.longWord === 'much').hint.includes('例外'));

const advancedStage = guide.lessonStages.find((stage) => stage.id === 'advanced');
const budgetExample = advancedStage.examples.find((example) => example.word === 'budget');
assert.ok(budgetExample);
assert.ok(budgetExample.note.includes('e → /ɪ/'));
assert.ok(!guide.ruleDetails.find((rule) => rule.id === 'dge').examples.some((example) => example.word === 'budget'));

const mittenExample = guide.ruleDetails.find((rule) => rule.id === 'closed-syllable').examples.find((example) => example.word === 'mitten');
assert.ok(mittenExample.breakdown.includes('弱'));

const diphthongStage = guide.lessonStages.find((stage) => stage.id === 'diphthongs');
assert.ok(diphthongStage.examples.some((example) => example.word === 'saw'));
assert.ok(diphthongStage.intro.includes('長母音教學分類'));

const shortVowelStage = guide.lessonStages.find((stage) => stage.id === 'short-vowels');
const dogVariation = shortVowelStage.watchOuts.find((item) => item.words.includes('dog'));
assert.ok(dogVariation);
assert.equal(dogVariation.kind, 'accent');
assert.ok(dogVariation.note.includes('不是 g'));
assert.ok(indexSource.includes('selectedLessonStage.watchOuts'));
assert.ok(indexSource.includes('常見變化與例外'));
console.log('guide-data tests passed');
