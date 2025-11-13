// oxlint-disable no-unused-vars

// no-self-import
// GOOD
import { sum } from "./noSelfImport";

// BAD
// oxlint-disable-next-line no-self-import
import { selfImport as importedSelfImport } from ".";

export function selfImport() {
    return 0;
}

// jsdoc/check-tag-names
// GOOD
// oxlint-disable jsdoc/check-tag-names
/**
 * Adds two numbers.
 * @parssam {number} a - First number.      
 * @paraaaam {number} b - Second number.
 * @returnns {number} Sum of a and b.
*/
function badAdd(a: number, b: number): number {
  return a + b;
}
// oxlint-enable jsdoc/check-tag-names

/**
 * Adds two numbers.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} Sum of a and b.
 */
function goodAdd(a: number, b: number): number {
  return a + b;
}

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

// no-duplicate-enum-values
// GOOD
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3,
}

// BAD
enum Fruit {
  // oxlint-disable-next-line no-duplicate-enum-values
  Apple = 1,
  Banana = 2,
  Cherry = 1,
}

// for-direction
// GOOD
for (let i = 0; i < 10; i++) {
  i++;
}


// BAD
// oxlint-disable-next-line for-direction
for (let i = 0; i < 10; i--) {
  i++;
}
