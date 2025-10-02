// Question 1: ES6 Features — lowerCaseWords
// Create a function that returns a Promise, filters non-strings,
// and lower-cases the remaining words.

function lowerCaseWords(mixed) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(mixed)) {
      reject(new Error("Input must be an array"));
      return;
    }
    const words = mixed.filter((x) => typeof x === "string");
    const lowercased = words.map((w) => w.toLowerCase());
    resolve(lowercased);
  });
}

// --- Demo for screenshots ---
const sample = ["PIZZA", 10, true, "BANANA", "HeLLo", null, { a: 1 }, "WORLD"];
lowerCaseWords(sample)
  .then((result) => {
    console.log("Input:", sample);
    console.log("Output:", result);
  })
  .catch((err) => console.error("Error:", err.message));

module.exports = { lowerCaseWords };
