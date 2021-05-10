const test = require("ava");
const r = require("../index.js");

//npm run test:watch

test("150,000+ combinations of nouns and verb pairs.", (t) => {
  adjectives = r.getAdjektiver();
  nouns = r.getSubstantiver();
  nonRepeatingCombinations = Number(adjectives.length * nouns.length);

  t.is(
    nonRepeatingCombinations > 150000,
    true,
    "Add more adjectives or nouns to the list."
  );
});

test(`No duplicates found in list of adjectives`, (t) => {
  adjectives = r.getAdjektiver();
  adjectivesSet = new Set(adjectives);
  t.is(adjectivesSet.size, adjectives.length);
});

test(`No duplicates found in list of nouns`, (t) => {
  nouns = r.getSubstantiver();
  nounSet = new Set(nouns);
  t.is(nounSet.size, nouns.length);
});
