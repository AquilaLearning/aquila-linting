// oxlint-disable no-unused-vars
// add test cases here

// operator-linebreak
// GOOD
const operatorLinebreakGood = 123
    + 456;

const operatorLinebreakInline = 123 + 456;

// BAD
// eslint-disable-next-line operator-linebreak
const operatorLinebreakBad = 123 +
    456;

// eslint-disable-next-line operator-linebreak
const operatorLinebreakEqualsBeforeBad =
    123 + 456;

// oxlint-disable-next-line no-console
console.log("Test Oxlint");
