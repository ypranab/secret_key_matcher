## 1. What is ES6 and what are the new features introduced in ES6?

# ES6 is a major update to JavaScript that introduced many new features to improve code readability, efficiency, and structure.

Key Features:

    New ways to declare variables: let for block-scoped variables and const for constant values.
    Arrow functions: Concise syntax for writing functions.
    Destructuring: Simplifies extracting values from arrays and objects.
    Default parameters: Set default values for function arguments.
    Rest and spread operators: Collect remaining arguments or expand iterable objects.
    Classes: Support for object-oriented programming.
    Promises: Handle asynchronous operations more effectively.

Overall, ES6 significantly enhanced JavaScript's capabilities, making it a more powerful and developer-friendly language.

## 2. What is Event Bubble and Event Delegation in JS?

# Event Bubbling: When an event happens on an element, it first triggers on that element, then on its parent, and so on until it reaches the top of the DOM tree.

# Event Delegation: Instead of adding event listeners to multiple elements, we add one to a parent element. When an event happens on a child, the parent's listener handles it based on the target element. This is more efficient for handling events on many similar elements.

## 3. What is the difference between localstorage , session storage and cookies.

# Local Storage: Stores data permanently on the user's computer. Accessible across different tabs and browser sessions.

# Session Storage: Stores data temporarily for a single browser session. Cleared when the browser is closed.

# Cookies: Small pieces of data sent between the server and client. Can be used for authentication, session management, and tracking. Have limited storage capacity and can be sent with every request, impacting performance.

## 4. In CSS what is the difference between display inline , display inline block and display block?

# Display: inline elements appear on the same line, cannot have width or height set, and margins/padding affect horizontal spacing only. Display: inline-block elements also appear on the same line but allow width and height, with margins/padding affecting all sides. Display: block elements start on a new line, can have width and height, and margins/padding affect all sides.

## 5. What are new features in CSS3?

# CSS3 brought significant enhancements, including rounded corners, box shadows, gradients, transitions, animations, multiple backgrounds, opacity, text shadows, transforms, media queries, flexbox, grid layout, and improved selectors. These features empower developers to create visually appealing, responsive, and interactive web designs without relying heavily on images or JavaScript
