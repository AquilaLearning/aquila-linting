const trueCondition = true;

// no-empty
// GOOD
if (trueCondition) {
  throw new Error("condition should be false");
}

// BAD
// oxlint-disable-next-line no-empty
if (trueCondition) {
}
