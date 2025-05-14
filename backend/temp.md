❌ Bad Code:

```javascript
function sum() {
  return a + b;
}
```

🔍 Issues:

- ❌ The function does not declare or receive parameters. Therefore, `a` and `b` are likely referencing variables in the
  global scope (or will result in an error if they don't exist).
- ❌ Lack of error handling or input validation. If `a` or `b` are not numbers, the result will be unexpected.
- ❌ Missing JSDoc documentation for describing expected parameters and return values.

✅ Recommended Fix:

```javascript
/**
 * Sums two numbers.
 *
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b. Returns NaN if either input is not a number.
 */
function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return NaN; // Or throw an error, depending on desired behavior
  }
  return a + b;
}
```

💡 Improvements:

- ✔ Accepts two parameters, `a` and `b`, making the function reusable and predictable.
- ✔ Includes a check to ensure that the inputs are numbers. This prevents unexpected behavior if the inputs are strings,
  objects, or other data types. Returns `NaN` in case of invalid input.
- ✔ Includes JSDoc comments to properly document the function, its parameters, and return value.
