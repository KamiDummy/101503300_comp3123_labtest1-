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
