// Question 2: Promises — resolvedPromise & rejectedPromise

function resolvedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Resolved after 500ms" });
    }, 500);
  });
}

function rejectedPromise() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Rejected after 500ms"));
    }, 500);
  });
}

// --- Demo for screenshots ---
resolvedPromise()
  .then((res) => console.log("resolvedPromise:", res))
  .catch((err) => console.error("resolvedPromise error:", err.message));

rejectedPromise()
  .then((res) => console.log("rejectedPromise:", res))
  .catch((err) => console.error("rejectedPromise error:", err.message));

module.exports = { resolvedPromise, rejectedPromise };
