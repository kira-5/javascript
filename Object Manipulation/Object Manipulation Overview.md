**Object Manipulation:**

In JavaScript, object manipulation is a common task, involving actions like creating, reading, updating, and deleting properties of an object. Here's an overview of key object manipulation techniques:

### 1. **Creating Objects**

You can create an object using either the object literal syntax or the `Object` constructor.

**Object Literal:**

```js
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
```

**Using `Object` Constructor:**

```js
let person = new Object();
person.name = "John";
person.age = 30;
person.city = "New York";
```

### 2. **Accessing Object Properties**

You can access the properties of an object using either **dot notation** or **bracket notation**.

**Dot Notation:**

```js
console.log(person.name); // Output: John
```

**Bracket Notation:**

```js
console.log(person["name"]); // Output: John
```

### 3. **Adding/Updating Properties**

You can add or update properties dynamically.

**Add a New Property:**

```js
person.gender = "male";
```

**Update an Existing Property:**

```js
person.age = 31;
```

### 4. **Deleting Properties**

To delete a property from an object, use the `delete` keyword.

```js
delete person.city;
console.log(person); // { name: "John", age: 31, gender: "male" }
```

### 5. **Looping Through Properties**

You can iterate over an object's properties using a `for...in` loop.

```js
for (let key in person) {
    console.log(key, person[key]);
}
// Output:
// name John
// age 31
// gender male
```

### 6. **Copying an Object**

You can copy objects using `Object.assign()` or the spread syntax (`...`).

**Using `Object.assign()`:**

```js
let newPerson = Object.assign({}, person);
```

**Using Spread Syntax:**

```js
let newPerson = { ...person };
```

### 7. **Merging Objects**

You can merge two or more objects using `Object.assign()` or the spread syntax.

**Using `Object.assign()`:**

```js
let additionalInfo = { job: "Engineer", country: "USA" };
let mergedPerson = Object.assign({}, person, additionalInfo);
```

**Using Spread Syntax:**

```js
let mergedPerson = { ...person, ...additionalInfo };
```

### 8. **Checking for Property Existence**

You can check if a property exists in an object using `in` or `hasOwnProperty()`.

**Using `in`:**

```js
console.log("name" in person); // true
```

**Using `hasOwnProperty()`:**

```js
console.log(person.hasOwnProperty("name")); // true
```

### 9. **Object Destructuring**

Destructuring allows you to unpack values from an object into individual variables.

```js
const { name, age } = person;
console.log(name, age); // Output: John 31
```

### 10. **Freezing an Object**

To make an object immutable, you can use `Object.freeze()`.

```js
const frozenPerson = Object.freeze(person);
frozenPerson.age = 35; // This will not work, object is frozen.
console.log(frozenPerson.age); // Output: 31
```

### 11. **Object.keys(), Object.values(), Object.entries()**

These methods allow you to work with the keys, values, and key-value pairs of an object.

* `Object.keys()`: Returns an array of the object’s keys.
* `Object.values()`: Returns an array of the object’s values.
* `Object.entries()`: Returns an array of key-value pairs.

```js
console.log(Object.keys(person));    // ["name", "age", "gender"]
console.log(Object.values(person));  // ["John", 31, "male"]
console.log(Object.entries(person)); // [["name", "John"], ["age", 31], ["gender", "male"]]
```

These are the basic ways to manipulate objects in JavaScript! Let me know if you need more advanced examples.