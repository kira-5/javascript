**Prerequested  for React:**

Here’s a summary of the `Array` methods in JavaScript along with examples:

### 1. `.map()`

**Usage:** Creates a new array with the results of calling a provided function on every element in the calling array.

**Example:**

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]
```

### 2. `.filter()`

**Usage:** Creates a new array with all elements that pass the test implemented by the provided function.

**Example:**

```javascript
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

### 3. `.reduce()`

**Usage:** Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

**Example:**

```javascript
const numbers = [1, 2, 3];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 6
```

These methods are powerful for manipulating and processing arrays in a functional programming style.