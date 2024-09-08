**Prerequested  for React:**

Understanding the DOM (Document Object Model) is key to manipulating web pages dynamically using JavaScript. Here's an explanation of the concepts you provided:

### 1. **Selecting Elements**

You can select HTML elements using various JavaScript methods. One of the most commonly used methods is `querySelector()`, which selects the first element that matches a specified CSS selector.

```javascript
const element = document.querySelector('.className');
```

* `'.className'`: Selects an element with a class of `className`.
* You can also select by ID (`'#idName'`) or tag (`'div'`, `'p'`, etc.).

### 2. **Manipulating Elements**

Once an element is selected, you can manipulate its content or attributes. For example, changing the text of an element can be done using the `textContent` property.

```javascript
element.textContent = 'New Text';
```

* This replaces the current text inside the element with "New Text".

### 3. **Handling Events**

JavaScript allows you to handle user interactions through events. One common event is `click`, and you can attach event listeners to elements using `addEventListener()`.

```javascript
element.addEventListener('click', () => {
  console.log('Element clicked');
});
```

* In this case, when the element is clicked, it will log `'Element clicked'` to the console.

This approach allows you to dynamically respond to user actions and modify the DOM accordingly.