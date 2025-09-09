export interface LessonSection {
  id: string;
  type: 'ai_explanation' | 'interactive_code' | 'challenge';
  title?: string;
  text?: string;
  prompt?: string;
  initialCode?: string;
  expectedOutput?: string;
  solution?: string;
  hint?: string;
  feedbackMessage?: {
    correct: string;
    incorrect: string;
  };
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  concept: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  sections: LessonSection[];
}

export const lessons: Lesson[] = [
  // BEGINNER LEVEL
//   {
//     id: 'variables-101',
//     title: 'Introduction to Variables',
//     description: 'Learn the fundamentals of storing and using data in JavaScript',
//     concept: 'variables',
//     difficulty: 'beginner',
//     estimatedTime: '15 min',
//     sections: [
//       {
//         id: 'intro',
//         type: 'ai_explanation',
//         text: `Welcome to your first programming lesson! 🎉

// Think of variables as labeled boxes where you can store different types of information. Just like you might have a box labeled "photos" to store your pictures, in programming we create variables to store data.

// In JavaScript, we can create variables using the 'let' or 'const' keywords. Let's start with a simple example!`,
//       },
//       {
//         id: 'first-variable',
//         type: 'interactive_code',
//         prompt: 'Let\'s create your first variable! Type the code below to create a variable called "greeting" and store the text "Hello, World!" in it.',
//         initialCode: 'let greeting = "Hello, World!";\nconsole.log(greeting);',
//         expectedOutput: 'Hello, World!\n',
//         hint: 'Make sure to use quotes around the text and don\'t forget the semicolon!',
//       },
//       {
//         id: 'numbers',
//         type: 'ai_explanation',
//         text: `Great job! You just created your first variable. Variables can store different types of data:

// - **Strings**: Text like "Hello, World!" (always in quotes)
// - **Numbers**: Like 42, 3.14, or -7 (no quotes needed)
// - **Booleans**: True or false values

// Let's try storing a number next!`,
//       },
//       {
//         id: 'number-variable',
//         type: 'interactive_code',
//         prompt: 'Create a variable called "age" and store your age as a number. Then use console.log to display it.',
//         initialCode: '// Create your age variable here\n\n// Log it to the console',
//         expectedOutput: '',
//         hint: 'Remember: numbers don\'t need quotes! Example: let age = 25;',
//       },
//       {
//         id: 'challenge',
//         type: 'challenge',
//         title: 'Variable Challenge',
//         prompt: 'Now it\'s your turn! Create three variables:\n1. "name" with your name as a string\n2. "favoriteNumber" with your favorite number\n3. "isLearning" with the value true\n\nThen log all three to the console.',
//         initialCode: '// Create your three variables here\n\n\n// Log them all to the console',
//         solution: 'let name = "Alex";\nlet favoriteNumber = 7;\nlet isLearning = true;\n\nconsole.log(name);\nconsole.log(favoriteNumber);\nconsole.log(isLearning);',
//         feedbackMessage: {
//           correct: 'Excellent! You\'ve mastered the basics of variables. You can store text, numbers, and boolean values.',
//           incorrect: 'Not quite right. Make sure you\'ve created all three variables with the correct data types and logged them to the console.',
//         },
//       },
//     ],
//   },

//   {
//     id: 'data-types',
//     title: 'JavaScript Data Types',
//     description: 'Explore the different types of data you can work with in JavaScript',
//     concept: 'data-types',
//     difficulty: 'beginner',
//     estimatedTime: '20 min',
//     sections: [
//       {
//         id: 'intro',
//         type: 'ai_explanation',
//         text: `JavaScript has several built-in data types that help us work with different kinds of information:

// **Primitive Types:**
// - **String**: Text data like "Hello"
// - **Number**: Integers and decimals like 42 or 3.14
// - **Boolean**: True or false values
// - **Undefined**: A variable that hasn't been assigned a value
// - **Null**: Intentionally empty value
// - **Symbol**: Unique identifiers (advanced topic)

// **Non-Primitive Types:**
// - **Object**: Collections of key-value pairs
// - **Array**: Ordered lists of values

// Let's explore each of these!`,
//       },
//       {
//         id: 'strings',
//         type: 'interactive_code',
//         prompt: 'Strings can be created with single quotes, double quotes, or backticks. Try these examples:',
//         initialCode: 'let singleQuote = \'Hello\';\nlet doubleQuote = "World";\nlet templateLiteral = `Hello, ${doubleQuote}!`;\n\nconsole.log(singleQuote);\nconsole.log(doubleQuote);\nconsole.log(templateLiteral);',
//         hint: 'Template literals (backticks) allow you to embed variables using ${variable}',
//       },
//       {
//         id: 'numbers',
//         type: 'interactive_code',
//         prompt: 'JavaScript handles both integers and floating-point numbers:',
//         initialCode: 'let integer = 42;\nlet decimal = 3.14159;\nlet negative = -17;\nlet scientific = 2.5e6; // 2,500,000\n\nconsole.log(integer);\nconsole.log(decimal);\nconsole.log(negative);\nconsole.log(scientific);',
//         hint: 'JavaScript automatically handles number types - no need to specify int or float!',
//       },
//       {
//         id: 'challenge',
//         type: 'challenge',
//         title: 'Data Types Challenge',
//         prompt: 'Create variables of different types and use typeof to check their types:\n1. A string variable\n2. A number variable\n3. A boolean variable\n4. An undefined variable\n\nUse console.log(typeof variableName) to check each type.',
//         initialCode: '// Create your variables here\n\n\n// Check their types using typeof',
//         solution: 'let myString = "Hello";\nlet myNumber = 42;\nlet myBoolean = true;\nlet myUndefined;\n\nconsole.log(typeof myString);\nconsole.log(typeof myNumber);\nconsole.log(typeof myBoolean);\nconsole.log(typeof myUndefined);',
//         feedbackMessage: {
//           correct: 'Perfect! You understand JavaScript\'s basic data types and how to check them.',
//           incorrect: 'Make sure you\'ve created variables of each type and used typeof to check them.',
//         },
//       },
//     ],
//   },

//   {
//     id: 'functions-101',
//     title: 'Functions Fundamentals',
//     description: 'Discover how to create reusable blocks of code with functions',
//     concept: 'functions',
//     difficulty: 'beginner',
//     estimatedTime: '20 min',
//     sections: [
//       {
//         id: 'intro',
//         type: 'ai_explanation',
//         text: `Functions are like recipes in programming! 👨‍🍳

// Just as a recipe tells you how to make a dish step-by-step, a function is a set of instructions that performs a specific task. You can use the same recipe (function) multiple times to make the same dish (achieve the same result).

// Functions help us:
// - Avoid repeating code
// - Organize our programs
// - Make code easier to read and maintain`,
//       },
//       {
//         id: 'first-function',
//         type: 'interactive_code',
//         prompt: 'Let\'s create a simple function that greets someone. Type this code to see how functions work:',
//         initialCode: 'function sayHello() {\n  console.log("Hello there!");\n}\n\n// Call the function\nsayHello();',
//         expectedOutput: 'Hello there!\n',
//         hint: 'Make sure to call the function with parentheses: sayHello()',
//       },
//       {
//         id: 'parameters',
//         type: 'ai_explanation',
//         text: `Great! You just created and called your first function. But functions become really powerful when they can work with different inputs, called **parameters**.

// Think of parameters like ingredients you can change in a recipe. The recipe stays the same, but you can make it with different ingredients each time!`,
//       },
//       {
//         id: 'function-with-parameters',
//         type: 'interactive_code',
//         prompt: 'Let\'s modify our function to accept a name as a parameter:',
//         initialCode: 'function sayHello(name) {\n  console.log("Hello, " + name + "!");\n}\n\n// Try calling it with different names\nsayHello("Alice");\nsayHello("Bob");',
//         expectedOutput: 'Hello, Alice!\nHello, Bob!\n',
//         hint: 'The parameter "name" acts like a variable inside the function.',
//       },
//       {
//         id: 'challenge',
//         type: 'challenge',
//         title: 'Function Challenge',
//         prompt: 'Create a function called "calculateAge" that takes a birth year as a parameter and returns how old someone would be in 2024. Then call the function with your birth year.',
//         initialCode: '// Create your calculateAge function here\n\n\n// Call the function with your birth year',
//         solution: 'function calculateAge(birthYear) {\n  return 2024 - birthYear;\n}\n\nconsole.log(calculateAge(1990));',
//         feedbackMessage: {
//           correct: 'Perfect! You\'ve learned how to create functions with parameters and return values.',
//           incorrect: 'Almost there! Make sure your function takes a birthYear parameter and returns the calculated age.',
//         },
//       },
//     ],
//   },

//   {
//     id: 'conditionals-101',
//     title: 'Making Decisions with Conditionals',
//     description: 'Learn how to make your code make decisions using if statements',
//     concept: 'conditionals',
//     difficulty: 'beginner',
//     estimatedTime: '18 min',
//     sections: [
//       {
//         id: 'intro',
//         type: 'ai_explanation',
//         text: `Conditionals are how we make decisions in code! 🤔

// Just like in real life, we constantly make decisions: "If it's raining, I'll take an umbrella. Otherwise, I'll wear sunglasses."

// In programming, we use **if statements** to make these kinds of decisions. The computer checks if something is true, and then decides what to do based on that.`,
//       },
//       {
//         id: 'first-conditional',
//         type: 'interactive_code',
//         prompt: 'Let\'s see how if statements work:',
//         initialCode: 'let temperature = 75;\n\nif (temperature > 70) {\n  console.log("It\'s a nice day!");\n} else {\n  console.log("It\'s a bit chilly.");\n}',
//         expectedOutput: "It's a nice day!\n",
//         hint: 'The condition (temperature > 70) is checked, and since 75 > 70 is true, the first message is shown.',
//       },
//       {
//         id: 'multiple-conditions',
//         type: 'ai_explanation',
//         text: `Excellent! You can also check multiple conditions using **else if**:

// - **if**: Check the first condition
// - **else if**: Check another condition if the first was false
// - **else**: What to do if none of the conditions were true

// This is like saying: "If it's hot, wear shorts. Else if it's warm, wear a t-shirt. Else, wear a jacket."`,
//       },
//       {
//         id: 'multiple-conditionals',
//         type: 'interactive_code',
//         prompt: 'Try this example with multiple conditions:',
//         initialCode: 'let score = 85;\n\nif (score >= 90) {\n  console.log("Grade: A");\n} else if (score >= 80) {\n  console.log("Grade: B");\n} else if (score >= 70) {\n  console.log("Grade: C");\n} else {\n  console.log("Grade: F");\n}',
//         expectedOutput: 'Grade: B\n',
//         hint: 'The score of 85 is >= 80 but < 90, so it gets a B grade.',
//       },
//       {
//         id: 'challenge',
//         type: 'challenge',
//         title: 'Conditional Challenge',
//         prompt: 'Create a function called "checkWeather" that takes a temperature and returns different clothing suggestions:\n- Above 80°F: "Wear shorts!"\n- 60-80°F: "Perfect for a t-shirt!"\n- Below 60°F: "Bundle up!"',
//         initialCode: '// Create your checkWeather function here\n\n\n// Test it with different temperatures\nconsole.log(checkWeather(85));\nconsole.log(checkWeather(72));\nconsole.log(checkWeather(45));',
//         solution: 'function checkWeather(temp) {\n  if (temp > 80) {\n    return "Wear shorts!";\n  } else if (temp >= 60) {\n    return "Perfect for a t-shirt!";\n  } else {\n    return "Bundle up!";\n  }\n}\n\nconsole.log(checkWeather(85));\nconsole.log(checkWeather(72));\nconsole.log(checkWeather(45));',
//         feedbackMessage: {
//           correct: 'Amazing! You\'ve mastered conditional logic and can make your programs make smart decisions.',
//           incorrect: 'Close! Make sure your function uses if/else if/else statements and returns the correct messages for each temperature range.',
//         },
//       },
//     ],
//   },

//   {
//     id: 'loops-101',
//     title: 'Loops and Repetition',
//     description: 'Learn how to repeat code efficiently with loops',
//     concept: 'loops',
//     difficulty: 'beginner',
//     estimatedTime: '25 min',
//     sections: [
//       {
//         id: 'intro',
//         type: 'ai_explanation',
//         text: `Loops are one of the most powerful features in programming! 🔄

// Imagine you need to print "Hello" 100 times. You could write console.log("Hello") 100 times, but that's tedious and inefficient. Loops let you repeat code automatically!

// JavaScript has several types of loops:
// - **for loop**: When you know how many times to repeat
// - **while loop**: When you repeat until a condition becomes false
// - **for...of loop**: For iterating through arrays
// - **for...in loop**: For iterating through object properties`,
//       },
//       {
//         id: 'for-loop',
//         type: 'interactive_code',
//         prompt: 'Let\'s start with a basic for loop that counts from 1 to 5:',
//         initialCode: 'for (let i = 1; i <= 5; i++) {\n  console.log("Count: " + i);\n}',
//         hint: 'The for loop has three parts: initialization (let i = 1), condition (i <= 5), and increment (i++)',
//       },
//       {
//         id: 'while-loop',
//         type: 'interactive_code',
//         prompt: 'While loops continue until a condition becomes false:',
//         initialCode: 'let countdown = 5;\n\nwhile (countdown > 0) {\n  console.log("Countdown: " + countdown);\n  countdown--; // Decrease by 1\n}\n\nconsole.log("Blast off! 🚀");',
//         hint: 'Be careful with while loops - make sure the condition eventually becomes false to avoid infinite loops!',
//       },
//       {
//         id: 'challenge',
//         type: 'challenge',
//         title: 'Loop Challenge',
//         prompt: 'Create a function called "multiplicationTable" that takes a number and prints its multiplication table from 1 to 10.\nFor example, multiplicationTable(3) should print:\n3 x 1 = 3\n3 x 2 = 6\n... and so on.',
//         initialCode: '// Create your multiplicationTable function here\n\n\n// Test it with the number 7\nmultiplicationTable(7);',
//         solution: 'function multiplicationTable(num) {\n  for (let i = 1; i <= 10; i++) {\n    console.log(num + " x " + i + " = " + (num * i));\n  }\n}\n\nmultiplicationTable(7);',
//         feedbackMessage: {
//           correct: 'Excellent! You\'ve mastered loops and can now repeat code efficiently.',
//           incorrect: 'Almost there! Make sure your function uses a loop to print the multiplication table from 1 to 10.',
//         },
//       },
//     ],
//   },

//   {
//     id: 'arrays-101',
//     title: 'Working with Arrays',
//     description: 'Learn how to store and manipulate lists of data',
//     concept: 'arrays',
//     difficulty: 'beginner',
//     estimatedTime: '30 min',
//     sections: [
//       {
//         id: 'intro',
//         type: 'ai_explanation',
//         text: `Arrays are like shopping lists in programming! 📝

// An array is a special variable that can hold multiple values in a single container. Think of it as a numbered list where each item has a position (called an index).

// Key points about arrays:
// - Arrays start counting from 0 (not 1!)
// - You can store different types of data in the same array
// - Arrays have many built-in methods to manipulate data`,
//       },
//       {
//         id: 'creating-arrays',
//         type: 'interactive_code',
//         prompt: 'Let\'s create and explore arrays:',
//         initialCode: 'let fruits = ["apple", "banana", "orange"];\nlet numbers = [1, 2, 3, 4, 5];\nlet mixed = ["hello", 42, true];\n\nconsole.log(fruits);\nconsole.log("First fruit:", fruits[0]);\nconsole.log("Array length:", fruits.length);',
//         hint: 'Remember: array indexes start at 0, so the first item is at index 0!',
//       },
//       {
//         id: 'array-methods',
//         type: 'interactive_code',
//         prompt: 'Arrays have many useful methods. Let\'s try some common ones:',
//         initialCode: 'let colors = ["red", "green", "blue"];\n\n// Add items\ncolors.push("yellow"); // Add to end\ncolors.unshift("purple"); // Add to beginning\n\nconsole.log("After adding:", colors);\n\n// Remove items\nlet lastColor = colors.pop(); // Remove from end\nlet firstColor = colors.shift(); // Remove from beginning\n\nconsole.log("Removed:", lastColor, "and", firstColor);\nconsole.log("Final array:", colors);',
//         hint: 'push/pop work with the end of the array, shift/unshift work with the beginning',
//       },
//       {
//         id: 'challenge',
//         type: 'challenge',
//         title: 'Array Challenge',
//         prompt: 'Create a function called "processGrades" that:\n1. Takes an array of test scores\n2. Adds a bonus of 5 points to each score\n3. Returns the modified array\n4. Also logs the average of the new scores',
//         initialCode: '// Create your processGrades function here\n\n\n// Test with these scores\nlet testScores = [78, 85, 92, 67, 88];\nlet newScores = processGrades(testScores);\nconsole.log("Original:", testScores);\nconsole.log("Modified:", newScores);',
//         solution: 'function processGrades(scores) {\n  let newScores = [];\n  let total = 0;\n  \n  for (let i = 0; i < scores.length; i++) {\n    let newScore = scores[i] + 5;\n    newScores.push(newScore);\n    total += newScore;\n  }\n  \n  let average = total / newScores.length;\n  console.log("Average with bonus:", average);\n  \n  return newScores;\n}\n\nlet testScores = [78, 85, 92, 67, 88];\nlet newScores = processGrades(testScores);\nconsole.log("Original:", testScores);\nconsole.log("Modified:", newScores);',
//         feedbackMessage: {
//           correct: 'Outstanding! You\'ve learned to create, modify, and process arrays effectively.',
//           incorrect: 'Good attempt! Make sure your function adds 5 to each score, returns the new array, and calculates the average.',
//         },
//       },
//     ],
//   },

//   // INTERMEDIATE LEVEL
//   {
//     id: 'objects-101',
//     title: 'JavaScript Objects',
//     description: 'Learn to work with objects and their properties',
//     concept: 'objects',
//     difficulty: 'intermediate',
//     estimatedTime: '35 min',
//     sections: [
//       {
//         id: 'intro',
//         type: 'ai_explanation',
//         text: `Objects are like real-world entities with properties and behaviors! 🏠

// Think of an object as a container that holds related information. For example, a "person" object might have properties like name, age, and email, plus methods (functions) like "introduce" or "celebrate birthday".

// Objects are fundamental to JavaScript and are used everywhere in web development.`,
//       },
//       {
//         id: 'creating-objects',
//         type: 'interactive_code',
//         prompt: 'Let\'s create and work with objects:',
//         initialCode: 'let person = {\n  name: "Alice",\n  age: 30,\n  city: "New York",\n  isStudent: false\n};\n\nconsole.log(person);\nconsole.log("Name:", person.name);\nconsole.log("Age:", person["age"]); // Alternative syntax',
//         hint: 'You can access object properties using dot notation (person.name) or bracket notation (person["name"])',
//       },
//       {
//         id: 'object-methods',
//         type: 'interactive_code',
//         prompt: 'Objects can also contain functions, called methods:',
//         initialCode: 'let calculator = {\n  add: function(a, b) {\n    return a + b;\n  },\n  multiply: function(a, b) {\n    return a * b;\n  },\n  // Modern shorthand syntax\n  subtract(a, b) {\n    return a - b;\n  }\n};\n\nconsole.log("5 + 3 =", calculator.add(5, 3));\nconsole.log("5 * 3 =", calculator.multiply(5, 3));\nconsole.log("5 - 3 =", calculator.subtract(5, 3));',
//         hint: 'Methods are functions that belong to objects. Call them using objectName.methodName()',
//       },
//       {
//         id: 'challenge',
//         type: 'challenge',
//         title: 'Object Challenge',
//         prompt: 'Create a "bankAccount" object with:\n- Properties: accountNumber, balance, ownerName\n- Methods: deposit(amount), withdraw(amount), getBalance()\n- The withdraw method should check if there are sufficient funds',
//         initialCode: '// Create your bankAccount object here\n\n\n// Test your object\nconsole.log("Initial balance:", bankAccount.getBalance());\nbankAccount.deposit(100);\nconsole.log("After deposit:", bankAccount.getBalance());\nbankAccount.withdraw(30);\nconsole.log("After withdrawal:", bankAccount.getBalance());\nbankAccount.withdraw(200); // Should show insufficient funds',
//         solution: 'let bankAccount = {\n  accountNumber: "12345",\n  balance: 0,\n  ownerName: "John Doe",\n  \n  deposit(amount) {\n    this.balance += amount;\n    console.log(`Deposited $${amount}`);\n  },\n  \n  withdraw(amount) {\n    if (amount <= this.balance) {\n      this.balance -= amount;\n      console.log(`Withdrew $${amount}`);\n    } else {\n      console.log("Insufficient funds!");\n    }\n  },\n  \n  getBalance() {\n    return this.balance;\n  }\n};\n\nconsole.log("Initial balance:", bankAccount.getBalance());\nbankAccount.deposit(100);\nconsole.log("After deposit:", bankAccount.getBalance());\nbankAccount.withdraw(30);\nconsole.log("After withdrawal:", bankAccount.getBalance());\nbankAccount.withdraw(200);',
//         feedbackMessage: {
//           correct: 'Excellent! You\'ve mastered objects, properties, and methods. The "this" keyword is key to object-oriented programming.',
//           incorrect: 'Good try! Make sure your object has all required properties and methods, and that withdraw checks for sufficient funds.',
//         },
//       },
//     ],
//   },

//   {
//     id: 'dom-manipulation',
//     title: 'DOM Manipulation',
//     description: 'Learn to interact with web pages using JavaScript',
//     concept: 'dom',
//     difficulty: 'intermediate',
//     estimatedTime: '40 min',
//     sections: [
//       {
//         id: 'intro',
//         type: 'ai_explanation',
//         text: `The DOM (Document Object Model) is how JavaScript interacts with web pages! 🌐

// Think of the DOM as a bridge between your JavaScript code and the HTML elements on a webpage. With DOM manipulation, you can:
// - Change text content
// - Modify styles and classes
// - Add or remove elements
// - Respond to user interactions

// This is what makes websites interactive and dynamic!`,
//       },
//       {
//         id: 'selecting-elements',
//         type: 'interactive_code',
//         prompt: 'Let\'s learn how to select and modify HTML elements:',
//         initialCode: '// Simulate HTML elements for this example\n// In a real webpage, these would be actual HTML elements\n\n// Create a mock element for demonstration\nlet mockElement = {\n  textContent: "Original text",\n  style: { color: "black", fontSize: "16px" },\n  classList: { add: function(cls) { console.log(`Added class: ${cls}`); } }\n};\n\n// Simulate document.getElementById\nfunction getElementById(id) {\n  console.log(`Selected element with id: ${id}`);\n  return mockElement;\n}\n\n// Example DOM manipulation\nlet element = getElementById("myElement");\nconsole.log("Original text:", element.textContent);\n\nelement.textContent = "New text content!";\nconsole.log("Updated text:", element.textContent);\n\nelement.style.color = "blue";\nelement.style.fontSize = "20px";\nconsole.log("Styles updated!");\n\nelement.classList.add("highlight");',
//         hint: 'In real web development, you\'d use document.getElementById(), document.querySelector(), etc.',
//       },
//       {
//         id: 'event-handling',
//         type: 'interactive_code',
//         prompt: 'Event handling lets you respond to user interactions:',
//         initialCode: '// Simulate event handling\nfunction simulateButtonClick() {\n  console.log("Button was clicked!");\n  \n  // Simulate changing page content\n  console.log("Changing background color...");\n  console.log("Adding animation...");\n  console.log("Updating counter...");\n}\n\n// Simulate adding event listener\nfunction addEventListener(event, callback) {\n  console.log(`Event listener added for: ${event}`);\n  // Simulate the event happening\n  setTimeout(() => {\n    console.log(`${event} event triggered!`);\n    callback();\n  }, 1000);\n}\n\n// Add click event listener\naddEventListener("click", simulateButtonClick);\n\nconsole.log("Event listener set up. Click will be simulated in 1 second...");',
//         hint: 'Common events include: click, mouseover, keydown, submit, load',
//       },
//       {
//         id: 'challenge',
//         type: 'challenge',
//         title: 'DOM Challenge',
//         prompt: 'Create a simple todo list manager with these functions:\n1. addTodo(text) - adds a new todo item\n2. removeTodo(index) - removes a todo by index\n3. displayTodos() - shows all current todos\n4. toggleComplete(index) - marks a todo as complete/incomplete',
//         initialCode: '// Create your todo list manager here\nlet todos = [];\n\n// Your functions here:\n\n\n// Test your functions\naddTodo("Learn JavaScript");\naddTodo("Build a website");\naddTodo("Practice coding");\ndisplayTodos();\n\ntoggleComplete(0);\ndisplayTodos();\n\nremoveTodo(1);\ndisplayTodos();',
//         solution: 'let todos = [];\n\nfunction addTodo(text) {\n  todos.push({ text: text, completed: false });\n  console.log(`Added: "${text}"`);\n}\n\nfunction removeTodo(index) {\n  if (index >= 0 && index < todos.length) {\n    let removed = todos.splice(index, 1)[0];\n    console.log(`Removed: "${removed.text}"`);\n  } else {\n    console.log("Invalid index!");\n  }\n}\n\nfunction displayTodos() {\n  console.log("\\n=== Todo List ===");\n  if (todos.length === 0) {\n    console.log("No todos yet!");\n  } else {\n    todos.forEach((todo, index) => {\n      let status = todo.completed ? "✓" : "○";\n      console.log(`${index}: ${status} ${todo.text}`);\n    });\n  }\n  console.log("================\\n");\n}\n\nfunction toggleComplete(index) {\n  if (index >= 0 && index < todos.length) {\n    todos[index].completed = !todos[index].completed;\n    let status = todos[index].completed ? "completed" : "incomplete";\n    console.log(`Marked "${todos[index].text}" as ${status}`);\n  } else {\n    console.log("Invalid index!");\n  }\n}\n\n// Test the functions\naddTodo("Learn JavaScript");\naddTodo("Build a website");\naddTodo("Practice coding");\ndisplayTodos();\n\ntoggleComplete(0);\ndisplayTodos();\n\nremoveTodo(1);\ndisplayTodos();',
//         feedbackMessage: {
//           correct: 'Fantastic! You\'ve built a functional todo list manager. This demonstrates key DOM manipulation concepts.',
//           incorrect: 'Good effort! Make sure all four functions work correctly and handle edge cases like invalid indexes.',
//         },
//       },
//     ],
//   },

//   {
//     id: 'async-programming',
//     title: 'Asynchronous Programming',
//     description: 'Master callbacks, promises, and async/await',
//     concept: 'async',
//     difficulty: 'intermediate',
//     estimatedTime: '45 min',
//     sections: [
//       {
//         id: 'intro',
//         type: 'ai_explanation',
//         text: `Asynchronous programming is crucial for modern web development! ⏰

// JavaScript is single-threaded, but it can handle multiple operations simultaneously through asynchronous programming. This is essential for:
// - Making API calls
// - Reading files
// - Handling user interactions
// - Timers and delays

// We'll explore three approaches: Callbacks, Promises, and Async/Await.`,
//       },
//       {
//         id: 'callbacks',
//         type: 'interactive_code',
//         prompt: 'Callbacks are functions passed to other functions to be executed later:',
//         initialCode: '// Simulate an asynchronous operation\nfunction fetchUserData(userId, callback) {\n  console.log(`Fetching data for user ${userId}...`);\n  \n  // Simulate network delay\n  setTimeout(() => {\n    let userData = {\n      id: userId,\n      name: "John Doe",\n      email: "john@example.com"\n    };\n    \n    callback(userData);\n  }, 2000);\n}\n\n// Using the callback\nfetchUserData(123, function(user) {\n  console.log("User data received:", user);\n  console.log(`Welcome, ${user.name}!`);\n});\n\nconsole.log("This runs immediately while waiting for user data...");',
//         hint: 'Callbacks can lead to "callback hell" when you have many nested asynchronous operations.',
//       },
//       {
//         id: 'promises',
//         type: 'interactive_code',
//         prompt: 'Promises provide a cleaner way to handle asynchronous operations:',
//         initialCode: '// Create a promise-based function\nfunction fetchUserDataPromise(userId) {\n  return new Promise((resolve, reject) => {\n    console.log(`Fetching data for user ${userId}...`);\n    \n    setTimeout(() => {\n      if (userId > 0) {\n        let userData = {\n          id: userId,\n          name: "Jane Smith",\n          email: "jane@example.com"\n        };\n        resolve(userData); // Success\n      } else {\n        reject(new Error("Invalid user ID")); // Error\n      }\n    }, 1500);\n  });\n}\n\n// Using promises with .then() and .catch()\nfetchUserDataPromise(456)\n  .then(user => {\n    console.log("Promise resolved:", user);\n    return user.name.toUpperCase();\n  })\n  .then(upperName => {\n    console.log("Uppercase name:", upperName);\n  })\n  .catch(error => {\n    console.log("Promise rejected:", error.message);\n  });\n\nconsole.log("Promise created, waiting for resolution...");',
//         hint: 'Promises have three states: pending, resolved (fulfilled), or rejected.',
//       },
//       {
//         id: 'async-await',
//         type: 'interactive_code',
//         prompt: 'Async/await makes asynchronous code look synchronous:',
//         initialCode: '// Same promise function from before\nfunction fetchUserDataPromise(userId) {\n  return new Promise((resolve, reject) => {\n    console.log(`Fetching data for user ${userId}...`);\n    \n    setTimeout(() => {\n      if (userId > 0) {\n        resolve({\n          id: userId,\n          name: "Bob Johnson",\n          email: "bob@example.com"\n        });\n      } else {\n        reject(new Error("Invalid user ID"));\n      }\n    }, 1000);\n  });\n}\n\n// Using async/await\nasync function getUserInfo(userId) {\n  try {\n    console.log("Starting async function...");\n    let user = await fetchUserDataPromise(userId);\n    console.log("User received:", user);\n    \n    let greeting = `Hello, ${user.name}! Your email is ${user.email}`;\n    console.log(greeting);\n    \n    return user;\n  } catch (error) {\n    console.log("Error occurred:", error.message);\n  }\n}\n\n// Call the async function\ngetUserInfo(789);\nconsole.log("Async function called...");',
//         hint: 'async/await is syntactic sugar over promises - it makes the code more readable!',
//       },
//       {
//         id: 'challenge',
//         type: 'challenge',
//         title: 'Async Challenge',
//         prompt: 'Create an async function called "processOrders" that:\n1. Takes an array of order IDs\n2. Fetches each order (simulate with promises)\n3. Calculates the total value of all orders\n4. Returns the result\n\nUse async/await and handle errors properly.',
//         initialCode: '// Simulate fetching an order\nfunction fetchOrder(orderId) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (orderId > 0) {\n        resolve({\n          id: orderId,\n          value: Math.floor(Math.random() * 100) + 10 // Random value 10-109\n        });\n      } else {\n        reject(new Error(`Invalid order ID: ${orderId}`));\n      }\n    }, 500);\n  });\n}\n\n// Create your processOrders function here\n\n\n// Test your function\nprocessOrders([1, 2, 3, 4, 5]).then(result => {\n  console.log("Final result:", result);\n});',
//         solution: 'function fetchOrder(orderId) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (orderId > 0) {\n        resolve({\n          id: orderId,\n          value: Math.floor(Math.random() * 100) + 10\n        });\n      } else {\n        reject(new Error(`Invalid order ID: ${orderId}`));\n      }\n    }, 500);\n  });\n}\n\nasync function processOrders(orderIds) {\n  try {\n    console.log("Processing orders:", orderIds);\n    let totalValue = 0;\n    let processedOrders = [];\n    \n    for (let orderId of orderIds) {\n      console.log(`Fetching order ${orderId}...`);\n      let order = await fetchOrder(orderId);\n      totalValue += order.value;\n      processedOrders.push(order);\n      console.log(`Order ${orderId}: $${order.value}`);\n    }\n    \n    let result = {\n      orders: processedOrders,\n      totalValue: totalValue,\n      count: processedOrders.length\n    };\n    \n    console.log(`Processed ${result.count} orders, total value: $${result.totalValue}`);\n    return result;\n    \n  } catch (error) {\n    console.log("Error processing orders:", error.message);\n    throw error;\n  }\n}\n\nprocessOrders([1, 2, 3, 4, 5]).then(result => {\n  console.log("Final result:", result);\n});',
//         feedbackMessage: {
//           correct: 'Outstanding! You\'ve mastered asynchronous programming with async/await. This is essential for modern web development.',
//           incorrect: 'Good attempt! Make sure your function uses async/await, processes all orders, calculates the total, and handles errors.',
//         },
//       },
//     ],
//   },

//   // ADVANCED LEVEL
//   {
//     id: 'es6-features',
//     title: 'Modern JavaScript (ES6+)',
//     description: 'Explore modern JavaScript features and syntax',
//     concept: 'es6',
//     difficulty: 'advanced',
//     estimatedTime: '50 min',
//     sections: [
//       {
//         id: 'intro',
//         type: 'ai_explanation',
//         text: `ES6 (ECMAScript 2015) and later versions introduced many powerful features! 🚀

// Modern JavaScript includes:
// - Arrow functions
// - Destructuring
// - Template literals
// - Spread/Rest operators
// - Classes
// - Modules
// - Map and Set
// - And much more!

// These features make JavaScript more expressive and powerful.`,
//       },
//       {
//         id: 'arrow-functions-destructuring',
//         type: 'interactive_code',
//         prompt: 'Arrow functions and destructuring make code more concise:',
//         initialCode: '// Arrow functions\nconst add = (a, b) => a + b;\nconst multiply = (a, b) => {\n  console.log(`Multiplying ${a} and ${b}`);\n  return a * b;\n};\n\nconsole.log("5 + 3 =", add(5, 3));\nconsole.log("4 * 6 =", multiply(4, 6));\n\n// Destructuring arrays\nlet numbers = [1, 2, 3, 4, 5];\nlet [first, second, ...rest] = numbers;\nconsole.log("First:", first);\nconsole.log("Second:", second);\nconsole.log("Rest:", rest);\n\n// Destructuring objects\nlet person = { name: "Alice", age: 30, city: "Boston" };\nlet { name, age, city } = person;\nconsole.log(`${name} is ${age} years old and lives in ${city}`);',
//         hint: 'Arrow functions are great for short functions, and destructuring helps extract values cleanly.',
//       },
//       {
//         id: 'spread-rest',
//         type: 'interactive_code',
//         prompt: 'Spread and rest operators (...) are incredibly versatile:',
//         initialCode: '// Spread operator - expanding arrays\nlet arr1 = [1, 2, 3];\nlet arr2 = [4, 5, 6];\nlet combined = [...arr1, ...arr2];\nconsole.log("Combined arrays:", combined);\n\n// Spread with objects\nlet baseConfig = { theme: "dark", language: "en" };\nlet userConfig = { ...baseConfig, theme: "light", fontSize: 14 };\nconsole.log("User config:", userConfig);\n\n// Rest parameters in functions\nfunction sum(...numbers) {\n  return numbers.reduce((total, num) => total + num, 0);\n}\n\nconsole.log("Sum of 1,2,3,4,5:", sum(1, 2, 3, 4, 5));\nconsole.log("Sum of 10,20:", sum(10, 20));\n\n// Array methods with arrow functions\nlet scores = [85, 92, 78, 96, 88];\nlet highScores = scores.filter(score => score >= 90);\nlet doubled = scores.map(score => score * 2);\n\nconsole.log("High scores:", highScores);\nconsole.log("Doubled scores:", doubled);',
//         hint: 'Spread expands arrays/objects, rest collects multiple elements into an array.',
//       },
//       {
//         id: 'classes-modules',
//         type: 'interactive_code',
//         prompt: 'Classes provide a cleaner way to create objects with inheritance:',
//         initialCode: '// ES6 Classes\nclass Animal {\n  constructor(name, species) {\n    this.name = name;\n    this.species = species;\n  }\n  \n  speak() {\n    console.log(`${this.name} makes a sound`);\n  }\n  \n  getInfo() {\n    return `${this.name} is a ${this.species}`;\n  }\n}\n\n// Inheritance\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name, "dog"); // Call parent constructor\n    this.breed = breed;\n  }\n  \n  speak() {\n    console.log(`${this.name} barks!`);\n  }\n  \n  fetch() {\n    console.log(`${this.name} fetches the ball!`);\n  }\n}\n\n// Using classes\nlet genericAnimal = new Animal("Unknown", "mystery");\nlet myDog = new Dog("Buddy", "Golden Retriever");\n\nconsole.log(genericAnimal.getInfo());\ngenericAnimal.speak();\n\nconsole.log(myDog.getInfo());\nmyDog.speak();\nmyDog.fetch();',
//         hint: 'Classes are syntactic sugar over JavaScript\'s prototype-based inheritance.',
//       },
//       {
//         id: 'challenge',
//         type: 'challenge',
//         title: 'Modern JavaScript Challenge',
//         prompt: 'Create a TaskManager class that uses modern JavaScript features:\n1. Use class syntax with constructor\n2. Add methods: addTask, completeTask, getTasks, getStats\n3. Use arrow functions, destructuring, and array methods\n4. Include a static method to create a TaskManager with sample data',
//         initialCode: '// Create your TaskManager class here\n\n\n// Test your class\nlet manager = TaskManager.createWithSampleData();\nmanager.addTask("Learn ES6", "high");\nmanager.addTask("Build project", "medium");\n\nconsole.log("All tasks:", manager.getTasks());\nconsole.log("Stats:", manager.getStats());\n\nmanager.completeTask(0);\nconsole.log("After completing first task:");\nconsole.log("Stats:", manager.getStats());',
//         solution: 'class TaskManager {\n  constructor() {\n    this.tasks = [];\n  }\n  \n  addTask(description, priority = "medium") {\n    const task = {\n      id: this.tasks.length,\n      description,\n      priority,\n      completed: false,\n      createdAt: new Date()\n    };\n    this.tasks.push(task);\n    console.log(`Added task: "${description}" with ${priority} priority`);\n  }\n  \n  completeTask(taskId) {\n    const task = this.tasks.find(t => t.id === taskId);\n    if (task) {\n      task.completed = true;\n      console.log(`Completed task: "${task.description}"`);\n    } else {\n      console.log("Task not found!");\n    }\n  }\n  \n  getTasks(filter = "all") {\n    const filterFunctions = {\n      all: () => true,\n      completed: task => task.completed,\n      pending: task => !task.completed,\n      high: task => task.priority === "high"\n    };\n    \n    return this.tasks.filter(filterFunctions[filter] || filterFunctions.all);\n  }\n  \n  getStats() {\n    const total = this.tasks.length;\n    const completed = this.tasks.filter(task => task.completed).length;\n    const pending = total - completed;\n    const byPriority = this.tasks.reduce((acc, task) => {\n      acc[task.priority] = (acc[task.priority] || 0) + 1;\n      return acc;\n    }, {});\n    \n    return { total, completed, pending, byPriority };\n  }\n  \n  static createWithSampleData() {\n    const manager = new TaskManager();\n    const sampleTasks = [\n      { description: "Review code", priority: "high" },\n      { description: "Write tests", priority: "medium" },\n      { description: "Update documentation", priority: "low" }\n    ];\n    \n    sampleTasks.forEach(({ description, priority }) => {\n      manager.addTask(description, priority);\n    });\n    \n    return manager;\n  }\n}\n\nlet manager = TaskManager.createWithSampleData();\nmanager.addTask("Learn ES6", "high");\nmanager.addTask("Build project", "medium");\n\nconsole.log("All tasks:", manager.getTasks());\nconsole.log("Stats:", manager.getStats());\n\nmanager.completeTask(0);\nconsole.log("After completing first task:");\nconsole.log("Stats:", manager.getStats());',
//         feedbackMessage: {
//           correct: 'Exceptional! You\'ve mastered modern JavaScript features and created a sophisticated TaskManager class.',
//           incorrect: 'Great effort! Make sure your class uses modern syntax, includes all required methods, and demonstrates ES6+ features.',
//         },
//       },
//     ],
//   },

//   {
//     id: 'error-handling',
//     title: 'Error Handling and Debugging',
//     description: 'Learn to handle errors gracefully and debug effectively',
//     concept: 'error-handling',
//     difficulty: 'advanced',
//     estimatedTime: '35 min',
//     sections: [
//       {
//         id: 'intro',
//         type: 'ai_explanation',
//         text: `Error handling is crucial for building robust applications! 🛡️

// Errors are inevitable in programming, but how you handle them makes the difference between a fragile app and a robust one. JavaScript provides several mechanisms:

// - **try/catch/finally**: Handle synchronous errors
// - **Promise.catch()**: Handle promise rejections
// - **Error objects**: Create custom error types
// - **Debugging tools**: Console methods and browser dev tools`,
//       },
//       {
//         id: 'try-catch',
//         type: 'interactive_code',
//         prompt: 'Try/catch blocks help you handle errors gracefully:',
//         initialCode: '// Basic try/catch\nfunction divideNumbers(a, b) {\n  try {\n    if (b === 0) {\n      throw new Error("Division by zero is not allowed!");\n    }\n    let result = a / b;\n    console.log(`${a} ÷ ${b} = ${result}`);\n    return result;\n  } catch (error) {\n    console.log("Error caught:", error.message);\n    return null;\n  } finally {\n    console.log("Division operation completed");\n  }\n}\n\n// Test with valid and invalid inputs\ndivideNumbers(10, 2);\ndivideNumbers(10, 0);\ndivideNumbers(15, 3);\n\n// Handling JSON parsing errors\nfunction parseJSON(jsonString) {\n  try {\n    let data = JSON.parse(jsonString);\n    console.log("Parsed successfully:", data);\n    return data;\n  } catch (error) {\n    console.log("Invalid JSON:", error.message);\n    return null;\n  }\n}\n\nparseJSON(\'{"name": "Alice", "age": 30}\');\nparseJSON(\'invalid json string\');',
//         hint: 'The finally block always executes, whether an error occurs or not.',
//       },
//       {
//         id: 'custom-errors',
//         type: 'interactive_code',
//         prompt: 'Create custom error types for better error handling:',
//         initialCode: '// Custom error classes\nclass ValidationError extends Error {\n  constructor(message, field) {\n    super(message);\n    this.name = "ValidationError";\n    this.field = field;\n  }\n}\n\nclass NetworkError extends Error {\n  constructor(message, statusCode) {\n    super(message);\n    this.name = "NetworkError";\n    this.statusCode = statusCode;\n  }\n}\n\n// Function that validates user data\nfunction validateUser(user) {\n  if (!user.email || !user.email.includes("@")) {\n    throw new ValidationError("Invalid email address", "email");\n  }\n  if (!user.age || user.age < 0 || user.age > 150) {\n    throw new ValidationError("Age must be between 0 and 150", "age");\n  }\n  if (!user.name || user.name.trim().length < 2) {\n    throw new ValidationError("Name must be at least 2 characters", "name");\n  }\n  return true;\n}\n\n// Test validation with different users\nlet users = [\n  { name: "Alice", email: "alice@example.com", age: 30 },\n  { name: "Bob", email: "invalid-email", age: 25 },\n  { name: "C", email: "c@example.com", age: 200 }\n];\n\nusers.forEach((user, index) => {\n  try {\n    validateUser(user);\n    console.log(`User ${index + 1} is valid:`, user.name);\n  } catch (error) {\n    if (error instanceof ValidationError) {\n      console.log(`Validation error for user ${index + 1}:`, error.message, `(Field: ${error.field})`);\n    } else {\n      console.log(`Unexpected error:`, error.message);\n    }\n  }\n});',
//         hint: 'Custom error classes help you categorize and handle different types of errors appropriately.',
//       },
//       {
//         id: 'async-error-handling',
//         type: 'interactive_code',
//         prompt: 'Handle errors in asynchronous code:',
//         initialCode: '// Simulate async operations that might fail\nfunction fetchUserData(userId) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (userId === 999) {\n        reject(new Error("User not found"));\n      } else if (userId < 0) {\n        reject(new Error("Invalid user ID"));\n      } else {\n        resolve({ id: userId, name: `User${userId}`, email: `user${userId}@example.com` });\n      }\n    }, 1000);\n  });\n}\n\n// Method 1: Using .catch() with promises\nfetchUserData(123)\n  .then(user => {\n    console.log("Promise success:", user);\n  })\n  .catch(error => {\n    console.log("Promise error:", error.message);\n  });\n\n// Method 2: Using async/await with try/catch\nasync function getUserSafely(userId) {\n  try {\n    console.log(`Fetching user ${userId}...`);\n    let user = await fetchUserData(userId);\n    console.log("Async success:", user);\n    return user;\n  } catch (error) {\n    console.log("Async error:", error.message);\n    return null;\n  }\n}\n\n// Test both success and failure cases\ngetUserSafely(456);\ngetUserSafely(999);\ngetUserSafely(-1);',
//         hint: 'Always handle both success and error cases in asynchronous operations.',
//       },
//       {
//         id: 'challenge',
//         type: 'challenge',
//         title: 'Error Handling Challenge',
//         prompt: 'Create a robust data processor that:\n1. Validates input data\n2. Processes the data asynchronously\n3. Handles different types of errors appropriately\n4. Provides detailed error reporting\n5. Includes retry logic for network errors',
//         initialCode: '// Simulate processing functions\nfunction validateData(data) {\n  // Add validation logic here\n}\n\nfunction processDataAsync(data) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (Math.random() < 0.3) { // 30% chance of network error\n        reject(new Error("Network timeout"));\n      } else {\n        resolve({ processed: true, result: data.map(item => item * 2) });\n      }\n    }, 1000);\n  });\n}\n\n// Create your robust data processor here\n\n\n// Test data\nlet testData = [\n  [1, 2, 3, 4, 5],        // Valid\n  ["invalid", "data"],     // Invalid\n  [10, 20, 30],          // Valid\n  null,                   // Invalid\n  [100, 200, 300]        // Valid\n];\n\n// Test your processor\ntestData.forEach(async (data, index) => {\n  console.log(`\\nTesting dataset ${index + 1}:`);\n  // Call your processor function here\n});',
//         solution: '// Custom error classes\nclass ValidationError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = "ValidationError";\n  }\n}\n\nclass NetworkError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = "NetworkError";\n  }\n}\n\nfunction validateData(data) {\n  if (!data) {\n    throw new ValidationError("Data cannot be null or undefined");\n  }\n  if (!Array.isArray(data)) {\n    throw new ValidationError("Data must be an array");\n  }\n  if (data.length === 0) {\n    throw new ValidationError("Data array cannot be empty");\n  }\n  if (!data.every(item => typeof item === "number")) {\n    throw new ValidationError("All data items must be numbers");\n  }\n  return true;\n}\n\nfunction processDataAsync(data) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (Math.random() < 0.3) {\n        reject(new NetworkError("Network timeout"));\n      } else {\n        resolve({ processed: true, result: data.map(item => item * 2) });\n      }\n    }, 1000);\n  });\n}\n\nasync function robustDataProcessor(data, maxRetries = 3) {\n  let attempt = 0;\n  \n  while (attempt < maxRetries) {\n    try {\n      // Step 1: Validate input\n      console.log(`Attempt ${attempt + 1}: Validating data...`);\n      validateData(data);\n      \n      // Step 2: Process data\n      console.log("Validation passed. Processing data...");\n      let result = await processDataAsync(data);\n      \n      console.log("✅ Processing successful:", result);\n      return { success: true, data: result, attempts: attempt + 1 };\n      \n    } catch (error) {\n      attempt++;\n      \n      if (error instanceof ValidationError) {\n        console.log(`❌ Validation Error: ${error.message}`);\n        return { success: false, error: error.message, type: "validation" };\n      } else if (error instanceof NetworkError) {\n        console.log(`🔄 Network Error (attempt ${attempt}): ${error.message}`);\n        if (attempt >= maxRetries) {\n          console.log(`❌ Max retries reached. Giving up.`);\n          return { success: false, error: error.message, type: "network", attempts: attempt };\n        }\n        console.log(`Retrying in 1 second...`);\n        await new Promise(resolve => setTimeout(resolve, 1000));\n      } else {\n        console.log(`❌ Unexpected Error: ${error.message}`);\n        return { success: false, error: error.message, type: "unexpected" };\n      }\n    }\n  }\n}\n\n// Test data\nlet testData = [\n  [1, 2, 3, 4, 5],\n  ["invalid", "data"],\n  [10, 20, 30],\n  null,\n  [100, 200, 300]\n];\n\n// Test the processor\nasync function runTests() {\n  for (let i = 0; i < testData.length; i++) {\n    console.log(`\\n=== Testing dataset ${i + 1} ===`);\n    let result = await robustDataProcessor(testData[i]);\n    console.log("Final result:", result);\n  }\n}\n\nrunTests();',
//         feedbackMessage: {
//           correct: 'Outstanding! You\'ve created a robust error handling system with validation, custom errors, and retry logic.',
//           incorrect: 'Good effort! Make sure your processor validates data, handles different error types, and includes retry logic for network errors.',
//         },
//       },
//     ],
//   },

//   {
//     id: 'performance-optimization',
//     title: 'Performance Optimization',
//     description: 'Learn techniques to make your JavaScript code faster and more efficient',
//     concept: 'performance',
//     difficulty: 'advanced',
//     estimatedTime: '40 min',
//     sections: [
//       {
//         id: 'intro',
//         type: 'ai_explanation',
//         text: `Performance optimization is crucial for creating fast, responsive applications! ⚡

// Key areas for JavaScript performance:
// - **Algorithm efficiency**: Choose the right data structures and algorithms
// - **Memory management**: Avoid memory leaks and excessive garbage collection
// - **DOM manipulation**: Minimize reflows and repaints
// - **Asynchronous operations**: Use efficient patterns for async code
// - **Code splitting**: Load only what's needed when it's needed

// Let's explore practical optimization techniques!`,
//       },
//       {
//         id: 'algorithm-optimization',
//         type: 'interactive_code',
//         prompt: 'Compare different approaches to see performance differences:',
//         initialCode: '// Inefficient approach: O(n²) complexity\nfunction findDuplicatesInefficient(arr) {\n  console.time("Inefficient approach");\n  let duplicates = [];\n  \n  for (let i = 0; i < arr.length; i++) {\n    for (let j = i + 1; j < arr.length; j++) {\n      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {\n        duplicates.push(arr[i]);\n      }\n    }\n  }\n  \n  console.timeEnd("Inefficient approach");\n  return duplicates;\n}\n\n// Efficient approach: O(n) complexity\nfunction findDuplicatesEfficient(arr) {\n  console.time("Efficient approach");\n  let seen = new Set();\n  let duplicates = new Set();\n  \n  for (let item of arr) {\n    if (seen.has(item)) {\n      duplicates.add(item);\n    } else {\n      seen.add(item);\n    }\n  }\n  \n  console.timeEnd("Efficient approach");\n  return Array.from(duplicates);\n}\n\n// Test with a large array\nlet testArray = [];\nfor (let i = 0; i < 1000; i++) {\n  testArray.push(Math.floor(Math.random() * 100));\n}\n\nconsole.log("Testing with", testArray.length, "elements");\nlet result1 = findDuplicatesInefficient(testArray.slice(0, 100)); // Smaller subset for demo\nlet result2 = findDuplicatesEfficient(testArray);\n\nconsole.log("Results match:", JSON.stringify(result1.sort()) === JSON.stringify(result2.sort()));',
//         hint: 'Using appropriate data structures like Set and Map can dramatically improve performance.',
//       },
//       {
//         id: 'memory-optimization',
//         type: 'interactive_code',
//         prompt: 'Learn about memory-efficient coding practices:',
//         initialCode: '// Memory-inefficient: Creating many intermediate arrays\nfunction processDataInefficient(data) {\n  console.log("Memory inefficient approach:");\n  \n  let step1 = data.map(x => x * 2);\n  let step2 = step1.filter(x => x > 10);\n  let step3 = step2.map(x => x.toString());\n  let step4 = step3.map(x => x.padStart(3, "0"));\n  \n  console.log("Created", 4, "intermediate arrays");\n  return step4;\n}\n\n// Memory-efficient: Chain operations or use single loop\nfunction processDataEfficient(data) {\n  console.log("Memory efficient approach:");\n  \n  // Method 1: Chaining (still creates intermediate arrays but more readable)\n  let result1 = data\n    .map(x => x * 2)\n    .filter(x => x > 10)\n    .map(x => x.toString())\n    .map(x => x.padStart(3, "0"));\n  \n  // Method 2: Single loop (most memory efficient)\n  let result2 = [];\n  for (let item of data) {\n    let doubled = item * 2;\n    if (doubled > 10) {\n      result2.push(doubled.toString().padStart(3, "0"));\n    }\n  }\n  \n  console.log("Single operation chain or loop");\n  return result2;\n}\n\n// Object pooling example\nclass ObjectPool {\n  constructor(createFn, resetFn) {\n    this.createFn = createFn;\n    this.resetFn = resetFn;\n    this.pool = [];\n  }\n  \n  get() {\n    if (this.pool.length > 0) {\n      return this.pool.pop();\n    }\n    return this.createFn();\n  }\n  \n  release(obj) {\n    this.resetFn(obj);\n    this.pool.push(obj);\n  }\n}\n\n// Example usage\nlet vectorPool = new ObjectPool(\n  () => ({ x: 0, y: 0 }),\n  (obj) => { obj.x = 0; obj.y = 0; }\n);\n\nlet testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nprocessDataInefficient(testData);\nprocessDataEfficient(testData);\n\nconsole.log("Object pool example:");\nlet vector = vectorPool.get();\nvector.x = 10;\nvector.y = 20;\nconsole.log("Using vector:", vector);\nvectorPool.release(vector);\nconsole.log("Vector returned to pool");',
//         hint: 'Avoid creating unnecessary intermediate objects and arrays. Consider object pooling for frequently created/destroyed objects.',
//       },
//       {
//         id: 'async-optimization',
//         type: 'interactive_code',
//         prompt: 'Optimize asynchronous operations for better performance:',
//         initialCode: '// Simulate API calls\nfunction fetchData(id) {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve({ id, data: `Data for ${id}`, timestamp: Date.now() });\n    }, Math.random() * 1000 + 500); // Random delay 500-1500ms\n  });\n}\n\n// Inefficient: Sequential processing\nasync function processSequentially(ids) {\n  console.time("Sequential processing");\n  let results = [];\n  \n  for (let id of ids) {\n    let data = await fetchData(id);\n    results.push(data);\n  }\n  \n  console.timeEnd("Sequential processing");\n  return results;\n}\n\n// Efficient: Parallel processing\nasync function processInParallel(ids) {\n  console.time("Parallel processing");\n  \n  let promises = ids.map(id => fetchData(id));\n  let results = await Promise.all(promises);\n  \n  console.timeEnd("Parallel processing");\n  return results;\n}\n\n// Controlled concurrency for large datasets\nasync function processWithConcurrencyLimit(ids, limit = 3) {\n  console.time("Controlled concurrency");\n  let results = [];\n  \n  for (let i = 0; i < ids.length; i += limit) {\n    let batch = ids.slice(i, i + limit);\n    let batchPromises = batch.map(id => fetchData(id));\n    let batchResults = await Promise.all(batchPromises);\n    results.push(...batchResults);\n    console.log(`Processed batch ${Math.floor(i/limit) + 1}`);\n  }\n  \n  console.timeEnd("Controlled concurrency");\n  return results;\n}\n\n// Test with sample data\nlet testIds = [1, 2, 3, 4, 5];\n\n// Run tests (uncomment one at a time to see timing differences)\nprocessSequentially(testIds).then(results => {\n  console.log("Sequential results:", results.length, "items");\n  \n  return processInParallel(testIds);\n}).then(results => {\n  console.log("Parallel results:", results.length, "items");\n  \n  return processWithConcurrencyLimit([1,2,3,4,5,6,7,8,9], 3);\n}).then(results => {\n  console.log("Controlled concurrency results:", results.length, "items");\n});',
//         hint: 'Use Promise.all() for parallel processing, but consider concurrency limits for large datasets to avoid overwhelming servers.',
//       },
//       {
//         id: 'challenge',
//         type: 'challenge',
//         title: 'Performance Optimization Challenge',
//         prompt: 'Create an optimized data processing system that:\n1. Efficiently processes large datasets\n2. Uses appropriate data structures\n3. Implements caching for repeated operations\n4. Handles async operations optimally\n5. Includes performance monitoring',
//         initialCode: '// Sample data generator\nfunction generateLargeDataset(size) {\n  let data = [];\n  for (let i = 0; i < size; i++) {\n    data.push({\n      id: i,\n      value: Math.floor(Math.random() * 1000),\n      category: ["A", "B", "C", "D"][Math.floor(Math.random() * 4)],\n      timestamp: Date.now() - Math.random() * 86400000 // Random time in last 24h\n    });\n  }\n  return data;\n}\n\n// Simulate expensive operation\nfunction expensiveCalculation(value) {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve(Math.sqrt(value) * Math.PI);\n    }, 10); // Simulate processing time\n  });\n}\n\n// Create your optimized data processor here\n// Requirements:\n// 1. Process data efficiently\n// 2. Cache expensive calculations\n// 3. Use appropriate data structures\n// 4. Handle async operations well\n// 5. Monitor performance\n\n\n// Test your implementation\nlet testData = generateLargeDataset(100);\nconsole.log("Generated test data:", testData.length, "items");\n\n// Test your processor here',
//         solution: 'function generateLargeDataset(size) {\n  let data = [];\n  for (let i = 0; i < size; i++) {\n    data.push({\n      id: i,\n      value: Math.floor(Math.random() * 1000),\n      category: ["A", "B", "C", "D"][Math.floor(Math.random() * 4)],\n      timestamp: Date.now() - Math.random() * 86400000\n    });\n  }\n  return data;\n}\n\nfunction expensiveCalculation(value) {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve(Math.sqrt(value) * Math.PI);\n    }, 10);\n  });\n}\n\nclass OptimizedDataProcessor {\n  constructor() {\n    this.cache = new Map();\n    this.stats = {\n      cacheHits: 0,\n      cacheMisses: 0,\n      totalOperations: 0,\n      processingTime: 0\n    };\n  }\n  \n  // Efficient grouping using Map\n  groupByCategory(data) {\n    let groups = new Map();\n    \n    for (let item of data) {\n      if (!groups.has(item.category)) {\n        groups.set(item.category, []);\n      }\n      groups.get(item.category).push(item);\n    }\n    \n    return groups;\n  }\n  \n  // Cached expensive calculation\n  async getCachedCalculation(value) {\n    if (this.cache.has(value)) {\n      this.stats.cacheHits++;\n      return this.cache.get(value);\n    }\n    \n    this.stats.cacheMisses++;\n    let result = await expensiveCalculation(value);\n    this.cache.set(value, result);\n    \n    // Limit cache size\n    if (this.cache.size > 1000) {\n      let firstKey = this.cache.keys().next().value;\n      this.cache.delete(firstKey);\n    }\n    \n    return result;\n  }\n  \n  // Process data with controlled concurrency\n  async processDataOptimized(data, concurrencyLimit = 10) {\n    console.time("Optimized processing");\n    this.stats.totalOperations++;\n    \n    // Step 1: Group data efficiently\n    let groupedData = this.groupByCategory(data);\n    console.log("Grouped into", groupedData.size, "categories");\n    \n    // Step 2: Process each group with controlled concurrency\n    let results = new Map();\n    \n    for (let [category, items] of groupedData) {\n      let processedItems = [];\n      \n      // Process in batches to control concurrency\n      for (let i = 0; i < items.length; i += concurrencyLimit) {\n        let batch = items.slice(i, i + concurrencyLimit);\n        \n        let batchPromises = batch.map(async item => {\n          let calculatedValue = await this.getCachedCalculation(item.value);\n          return {\n            ...item,\n            processedValue: calculatedValue,\n            efficiency: calculatedValue / item.value\n          };\n        });\n        \n        let batchResults = await Promise.all(batchPromises);\n        processedItems.push(...batchResults);\n      }\n      \n      // Calculate category statistics efficiently\n      let categoryStats = this.calculateCategoryStats(processedItems);\n      results.set(category, {\n        items: processedItems,\n        stats: categoryStats\n      });\n    }\n    \n    console.timeEnd("Optimized processing");\n    this.stats.processingTime = performance.now();\n    \n    return {\n      results,\n      metadata: {\n        totalItems: data.length,\n        categories: groupedData.size,\n        cacheEfficiency: this.stats.cacheHits / (this.stats.cacheHits + this.stats.cacheMisses),\n        stats: this.stats\n      }\n    };\n  }\n  \n  // Efficient statistics calculation\n  calculateCategoryStats(items) {\n    let sum = 0;\n    let min = Infinity;\n    let max = -Infinity;\n    \n    // Single pass through data\n    for (let item of items) {\n      sum += item.processedValue;\n      min = Math.min(min, item.processedValue);\n      max = Math.max(max, item.processedValue);\n    }\n    \n    return {\n      count: items.length,\n      average: sum / items.length,\n      min,\n      max,\n      total: sum\n    };\n  }\n  \n  // Performance monitoring\n  getPerformanceReport() {\n    return {\n      cacheHitRate: `${((this.stats.cacheHits / (this.stats.cacheHits + this.stats.cacheMisses)) * 100).toFixed(2)}%`,\n      totalOperations: this.stats.totalOperations,\n      cacheSize: this.cache.size,\n      memoryUsage: `${(this.cache.size * 50 / 1024).toFixed(2)} KB` // Rough estimate\n    };\n  }\n}\n\n// Test the optimized processor\nasync function runPerformanceTest() {\n  let processor = new OptimizedDataProcessor();\n  let testData = generateLargeDataset(100);\n  \n  console.log("Generated test data:", testData.length, "items");\n  \n  let result = await processor.processDataOptimized(testData);\n  \n  console.log("\\n=== Processing Results ===");\n  console.log("Total items processed:", result.metadata.totalItems);\n  console.log("Categories found:", result.metadata.categories);\n  console.log("Cache efficiency:", (result.metadata.cacheEfficiency * 100).toFixed(2) + "%");\n  \n  console.log("\\n=== Category Statistics ===");\n  for (let [category, data] of result.results) {\n    console.log(`${category}: ${data.items.length} items, avg: ${data.stats.average.toFixed(2)}`);\n  }\n  \n  console.log("\\n=== Performance Report ===");\n  console.log(processor.getPerformanceReport());\n  \n  // Test cache efficiency with second run\n  console.log("\\n=== Testing Cache Efficiency ===");\n  let secondResult = await processor.processDataOptimized(testData.slice(0, 50));\n  console.log("Second run cache efficiency:", (secondResult.metadata.cacheEfficiency * 100).toFixed(2) + "%");\n}\n\nrunPerformanceTest();',
//         feedbackMessage: {
//           correct: 'Exceptional! You\'ve created a highly optimized data processing system with caching, efficient data structures, and performance monitoring.',
//           incorrect: 'Great effort! Make sure your solution includes caching, uses appropriate data structures, handles concurrency, and monitors performance.',
//         },
//       },
//     ],
//   },
// ];{
  id: 'intro-to-python',
  title: 'Introduction to Python',
  description: 'Learn what Python is, how to install it, set up IDEs, and write your first program.',
  concept: 'python-basics',
  difficulty: 'beginner',
  estimatedTime: '30 min',
  sections: [
    {
      id: 'what-is-python',
      type: 'ai_explanation',
      title: 'What is Python?',
      text: `Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum and first released in 1991, Python has grown to become one of the most popular programming languages worldwide. It is widely used for web development, data analysis, artificial intelligence, scientific computing, automation, and more.

Python's design philosophy emphasizes code readability with its use of significant whitespace (indentation). This makes Python an excellent choice for beginners, as well as for professionals aiming to write clean, maintainable code.

Key features of Python include:
- Easy to learn and use: Python has a simple syntax that mirrors natural language.
- Interpreted language: Python code runs line by line, which makes debugging easier.
- Cross-platform: Python runs on Windows, macOS, Linux, and many other systems.
- Large standard library: It includes tools for everything from file handling to networking.
- Extensive community support: Python has thousands of third-party libraries and frameworks.

In summary, Python’s versatility and ease of use make it an ideal language for beginners and experts alike.`
    },
    {
      id: 'install-python',
      type: 'ai_explanation',
      title: 'Installing Python',
      text: `Before you start coding in Python, you need to install the Python interpreter on your computer. Here's a step-by-step guide for installing Python:

1. Download Python:
  - Visit the official Python website at python.org.
  - The website will usually detect your operating system and suggest the best version for you. As of now, Python 3.x is the standard (avoid Python 2, as it's outdated).

2. Run the Installer:
  - Open the downloaded installer.
  - On Windows, make sure to check the box "Add Python 3.x to PATH" before clicking "Install Now." This step allows you to run Python from the command line.
  - Follow the installation prompts.

3. Verify Installation:
  - Open your command prompt (Windows) or terminal (macOS/Linux).
  - Type python --version or python3 --version.
  - If Python is installed correctly, it will display the installed version number.

4. Optional - Install pip:
  - pip is the package installer for Python and usually comes pre-installed.
  - To check if pip is installed, type pip --version in your command prompt or terminal.
  - Pip allows you to install external libraries easily.

Once installed, you are ready to write and execute Python programs!`
    },
    {
      id: 'setup-ides',
      type: 'ai_explanation',
      title: 'Setting Up IDEs (VSCode, PyCharm, Jupyter)',
      text: `An Integrated Development Environment (IDE) helps programmers write, test, and debug code efficiently. Here are three popular IDEs used for Python programming:

1. Visual Studio Code (VSCode):
  - VSCode is a lightweight, free, open-source code editor developed by Microsoft.
  - To set up Python in VSCode: 
    - Download and install VSCode from code.visualstudio.com.
    - Open VSCode and install the Python extension by Microsoft from the Extensions marketplace.
    - VSCode provides features like syntax highlighting, code completion, debugging, and integrated terminal.
    - You can run Python scripts directly within the editor.

2. PyCharm:
  - PyCharm is a powerful IDE developed by JetBrains, designed specifically for Python.
  - Download the Community (free) or Professional version from jetbrains.com/pycharm.
  - PyCharm offers advanced features like smart code navigation, refactoring, integrated testing, and version control.
  - After installation, create a new project and start coding.

3. Jupyter Notebook:
  - Jupyter Notebook is an open-source web application that allows you to create and share live code, equations, visualizations, and narrative text.
  - Especially popular in data science and machine learning communities.
  - To install Jupyter: 
    - Use the command pip install notebook.
    - Run jupyter notebook in your terminal to open the notebook interface in your web browser.
  - Jupyter is great for interactive coding and exploring data step-by-step.

Each IDE has its own strengths, and you can choose one based on your needs and preferences.`
    },
    {
      id: 'first-python-program',
      type: 'ai_explanation',
      title: 'First Python Program: print("Hello, World!")',
      text: `Writing your first program is an exciting step! In Python, the classic first program is to display the phrase "Hello, World!" on the screen.

Here’s the code:
print("Hello, World!")

Explanation:
- print() is a built-in Python function that outputs text or other data to the screen.
- The text inside the parentheses and quotes is called a string.
- When you run this program, Python executes the print function and displays the message.

How to run the program:
1. Open your chosen IDE or a simple text editor.
2. Create a new file and name it hello.py (Python files end with .py).
3. Type the code: print("Hello, World!").
4. Save the file.
5. Run the program:
  - In a terminal or command prompt, navigate to the folder containing the file.
  - Type python hello.py or python3 hello.py and press Enter.

You should see the output:
Hello, World!

Congratulations! You’ve just written and executed your first Python program.`
    }
  ]
} ,

{
  id: 'python-basics',
  title: 'Introduction to Python Programming',
  description: 'Learn the basics of Python including comments, variables, input/output, and type casting.',
  concept: 'python-basics',
  difficulty: 'beginner',
  estimatedTime: '45 min',
  sections: [
    {
      id: 'comments',
      type: 'ai_explanation',
      title: 'Comments',
      text: `In programming, comments are lines in your code that are not executed. They are used to explain what the code does, making it easier for others (and yourself) to understand when revisiting the code later. Comments help keep your code clean, organized, and maintainable.

How to write comments in Python:
- Single-line comments: Start the line with a hash symbol #. Everything after # on that line is ignored by Python.
Example:
# This is a single-line comment explaining the code below
print("Hello, World!")  # This comment is after a code statement

- Multi-line comments: Python doesn’t have a special syntax for multi-line comments, but you can use triple quotes (''' or """) to create block comments or docstrings. These are technically treated as multi-line strings and are often used for documentation.

Example:
'''
This is a multi-line comment.
It can span several lines.
Useful for explaining complex parts.
'''
print("Hello")

Why use comments?
- To clarify the purpose of code sections.
- To temporarily disable code during debugging.
- To provide documentation within your code.

Good commenting practice improves code readability, especially in larger projects.`
    },
    {
      id: 'variables-and-data-types',
      type: 'ai_explanation',
      title: 'Variables and Data Types',
      text: `Variables are like containers that store data values in a program. In Python, you don’t need to declare a variable type explicitly; Python figures it out automatically based on the value you assign.

How to create variables:
age = 25
name = "Alice"
pi = 3.14159
is_student = True

Here, age, name, pi, and is_student are variables holding different types of data.

Common Data Types in Python:
- Integers (int): Whole numbers without decimals.
- Floating-point numbers (float): Numbers with decimals.
- Strings (str): Text enclosed in quotes.
- Boolean (bool): True or False values.
- Other types: Lists, tuples, dictionaries, sets (covered in advanced topics).

Variable naming rules:
- Must start with a letter (a-z, A-Z) or underscore (_).
- Can contain letters, numbers, and underscores.
- Case-sensitive (age and Age are different).
- Avoid Python reserved keywords (like if, for, while).

Variables store information so your program can manipulate and use that data as needed.`
    },
    {
      id: 'input-output',
      type: 'ai_explanation',
      title: 'Input & Output',
      text: `Programs often interact with users by receiving input and displaying output.

Output using print() function:
The print() function outputs data to the screen.

Examples:
print("Welcome to Python!")
print(42)

You can print multiple items separated by commas:
name = "John"
age = 30
print("Name:", name, "Age:", age)

Input using input() function:
To take user input, Python uses the input() function, which waits for the user to type something and press Enter.

Example:
name = input("Enter your name: ")
print("Hello, " + name + "!")

- The text inside input() is a prompt message shown to the user.
- The input() function always returns data as a string, even if the user enters numbers.`
    },
    {
      id: 'type-casting',
      type: 'ai_explanation',
      title: 'Type Casting and Data Types',
      text: `Since user input from input() is always a string, sometimes you need to convert it to another data type, like an integer or float, for calculations.

Common type casting functions:
- int(): Converts a string or float to an integer.
- float(): Converts a string or integer to a floating-point number.
- str(): Converts a number or other data types to a string.

Examples:
age = input("Enter your age: ")  # User inputs '25', age is a string
age = int(age)  # Convert the string to an integer
print("Next year, you will be", age + 1)

If you don’t convert, doing arithmetic on a string causes errors:
age = input("Enter your age: ")
print(age + 1)  # This will give an error because age is a string

Handling type casting errors:
If the user inputs something invalid (e.g., letters instead of numbers), conversion will fail. This can be handled with error checking (advanced topic).

Additional data type examples:
is_raining = False
message = "Hello, Python!"
price = 99.99
x = 10`
    }
  ]
} , 
{
  id: 'python-operators',
  title: 'Understanding Python Operators',
  description: 'Learn about different types of Python operators including arithmetic, comparison, logical, and assignment operators.',
  concept: 'python-operators',
  difficulty: 'beginner',
  estimatedTime: '30 min',
  sections: [
    {
      id: 'arithmetic-operators',
      type: 'ai_explanation',
      title: 'Arithmetic Operators',
      text: `
Arithmetic operators perform mathematical operations on numeric values. Python supports standard operators like addition, subtraction, multiplication, and division.

| Operator | Description               | Example  | Result |
|----------|---------------------------|----------|--------|
| +        | Addition                  | 5 + 3    | 8      |
| -        | Subtraction               | 5 - 3    | 2      |
| *        | Multiplication            | 5 * 3    | 15     |
| /        | Division (float result)   | 5 / 2    | 2.5    |
| //       | Floor Division (integer)  | 5 // 2   | 2      |
| %        | Modulus (remainder)       | 5 % 2    | 1      |
| **       | Exponentiation            | 5 ** 2   | 25     |

Example:
\`\`\`python
a = 10
b = 3
print(a + b)   # 13
print(a / b)   # 3.3333
print(a // b)  # 3
print(a % b)   # 1
print(a ** b)  # 1000
\`\`\`
      `
    },
    {
      id: 'comparison-operators',
      type: 'ai_explanation',
      title: 'Comparison Operators',
      text: `
Comparison operators compare two values and return a Boolean result (True or False).

| Operator | Description              | Example  | Result |
|----------|--------------------------|----------|--------|
| ==       | Equal to                 | 5 == 5   | True   |
| !=       | Not equal to             | 5 != 3   | True   |
| >        | Greater than             | 5 > 3    | True   |
| <        | Less than                | 3 < 5    | True   |
| >=       | Greater than or equal    | 5 >= 5   | True   |
| <=       | Less than or equal       | 3 <= 5   | True   |

Example:
\`\`\`python
x = 10
y = 20
print(x == y)  # False
print(x != y)  # True
print(x > y)   # False
print(x <= y)  # True
\`\`\`
      `
    },
    {
      id: 'logical-operators',
      type: 'ai_explanation',
      title: 'Logical Operators',
      text: `
Logical operators combine multiple Boolean expressions.

| Operator | Description   | Example         | Result |
|----------|---------------|-----------------|--------|
| and      | Logical AND   | True and False  | False  |
| or       | Logical OR    | True or False   | True   |
| not      | Logical NOT   | not True        | False  |

Example:
\`\`\`python
a = 5
print(a > 2 and a < 10)  # True
print(a < 2 or a > 3)    # True
print(not(a == 5))       # False
\`\`\`
      `
    },
    {
      id: 'assignment-operators',
      type: 'ai_explanation',
      title: 'Assignment Operators',
      text: `
Assignment operators assign values to variables, sometimes combining with operations.

| Operator | Description          | Example  | Equivalent To |
|----------|----------------------|----------|---------------|
| =        | Simple assignment    | x = 5    | x = 5         |
| +=       | Add and assign       | x += 3   | x = x + 3     |
| -=       | Subtract and assign  | x -= 2   | x = x - 2     |
| *=       | Multiply and assign  | x *= 4   | x = x * 4     |
| /=       | Divide and assign    | x /= 2   | x = x / 2     |
| //=      | Floor divide assign  | x //= 3  | x = x // 3    |
| %=       | Modulus and assign   | x %= 3   | x = x % 3     |
| **=      | Exponent and assign  | x **= 2  | x = x ** 2    |

Example:
\`\`\`python
x = 10
x += 5  # x becomes 15
x *= 2  # x becomes 30
print(x)  # 30
\`\`\`
      `
    }
  ]
},
{
  id: 'python-control-flow',
  title: 'Control Flow in Python',
  description: 'Learn how to use if, else, elif statements and nested conditions to control the flow of your Python programs.',
  concept: 'python-control-flow',
  difficulty: 'beginner',
  estimatedTime: '40 min',
  sections: [
    {
      id: 'if-else-elif-statements',
      type: 'ai_explanation',
      title: 'if, else, elif Statements',
      text: `
Python uses conditional statements to execute different blocks of code depending on whether a condition is True or False. These statements help your program make decisions.

✅ The if Statement
The if statement checks a condition. If it's True, the code block below it is executed.

Syntax:
\`\`\`python
if condition:
    # code to execute if condition is true
\`\`\`

Example:
\`\`\`python
age = 20
if age >= 18:
    print("You are an adult.")
\`\`\`

Output:
You are an adult.

✅ The else Statement
The else block runs when the if condition is False.

Syntax:
\`\`\`python
if condition:
    # true block
else:
    # false block
\`\`\`

Example:
\`\`\`python
age = 15
if age >= 18:
    print("Adult")
else:
    print("Minor")
\`\`\`

Output:
Minor

✅ The elif Statement
elif (short for else if) lets you check multiple conditions.

Syntax:
\`\`\`python
if condition1:
    # block 1
elif condition2:
    # block 2
elif condition3:
    # block 3
else:
    # fallback block
\`\`\`

Example:
\`\`\`python
score = 72
if score >= 90:
    print("Excellent")
elif score >= 75:
    print("Good")
elif score >= 50:
    print("Average")
else:
    print("Fail")
\`\`\`

Output:
Average

🧠 Key Points:
- Conditions must be followed by a colon (:).
- Blocks of code must be indented (usually 4 spaces).
- Only the first matching condition is executed.
- You can use if alone, or combine it with elif and else.

🧪 Quick Example:
\`\`\`python
day = "Sunday"
if day == "Saturday" or day == "Sunday":
    print("Weekend")
else:
    print("Weekday")
\`\`\`

Output:
Weekend
      `
    },
    {
      id: 'nested-conditions',
      type: 'ai_explanation',
      title: 'Nested Conditions',
      text: `
Sometimes decisions depend on multiple levels of conditions. This is done using nested if statements — an if block inside another if block.

✅ Syntax:
\`\`\`python
if condition1:
    if condition2:
        # nested block
    else:
        # nested else
else:
    # outer else
\`\`\`

✅ Example 1: Voting Eligibility
\`\`\`python
age = 20
citizenship = "Indian"
if age >= 18:
    if citizenship == "Indian":
        print("You can vote in India.")
    else:
        print("You are not an Indian citizen.")
else:
    print("You are too young to vote.")
\`\`\`

Output:
You can vote in India.

✅ Example 2: Login Simulation
\`\`\`python
username = "admin"
password = "1234"
if username == "admin":
    if password == "1234":
        print("Login successful!")
    else:
        print("Incorrect password.")
else:
    print("Username not found.")
\`\`\`

Output:
Login successful!

✅ Avoiding Excessive Nesting
Too many nested if statements can make your code hard to read. You can often simplify using logical operators (and, or).

Improved version:
\`\`\`python
if username == "admin" and password == "1234":
    print("Login successful!")
else:
    print("Login failed.")
\`\`\`

🧠 Practice Example:
Write a program to check:
- If a number is positive, negative, or zero.
- If positive, check if it's even or odd.

Solution:
\`\`\`python
num = int(input("Enter a number: "))
if num > 0:
    if num % 2 == 0:
        print("Positive and even")
    else:
        print("Positive and odd")
elif num == 0:
    print("Zero")
else:
    print("Negative number")
\`\`\`
      `
    }
  ]
},
{
  id: 'getting-started',
  title: 'Getting Started with Python',
  description: 'Introduction to Python, syntax, variables, and basic control flow',
  concept: 'basics',
  difficulty: 'beginner',
  estimatedTime: '15 min',
  sections: [
    {
      id: 'intro',
      type: 'ai_explanation',
      text: `What is Python? Installing Python, using an IDE, and writing your first program using print().`,
    },
    {
      id: 'variables-datatypes',
      type: 'interactive_code',
      prompt: `Learn variables, integers, floats, strings, and booleans. Create variables and print them.`,
      initialCode: `a = 10\nb = "Hello"\nprint(a, b)`,
      hint: `Strings need quotes; numbers do not.`,
    },
    {
      id: 'control-flow',
      type: 'interactive_code',
      prompt: `Use if-elif-else and for/while loops. Write code that loops and makes decisions.`,
      initialCode: `for i in range(3):\n    if i % 2 == 0:\n        print(i, "even")\n    else:\n        print(i, "odd")`,
      hint: `Indentation matters in Python.`,
    },
  ],
},
{
  id: 'intermediate',
  title: 'Intermediate Python',
  description: 'Deep dive into data structures, functions, OOP, and modules',
  concept: 'intermediate',
  difficulty: 'intermediate',
  estimatedTime: '30 min',
  sections: [
    {
      id: 'data-structures',
      type: 'explanation',
      text: `Learn Python’s built-in data types: lists, tuples, sets, dictionaries, and how to manipulate them.`,
    },
    {
      id: 'functions-scope',
      type: 'interactive_code',
      prompt: `Define functions, use parameters and return values, explore local vs global scope.`,
      initialCode: `def greet(name):\n    return f"Hello, {name}"\nprint(greet("Alice"))`,
      hint: `Use def and return statements.`,
    },
    {
      id: 'oop-basics',
      type: 'interactive_code',
      prompt: `Create a simple class with __init__, attributes, and a method.`,
      initialCode: `class Person:\n    def __init__(self, name):\n        self.name = name\n    def greet(self):\n        print("Hi, I'm", self.name)\n\np = Person("Alex")\np.greet()`,
      hint: `Use self to refer to instance variables.`,
    },
    {
      id: 'modules-packages',
      type: 'explanation',
      text: `Learn to organize code with modules and packages; use pip to install and import libraries.`,
    },
  ],
},
{
  id: 'advanced',
  title: 'Advanced Python Concepts',
  description: 'Decorators, generators, type hinting, multithreading, logging, and more',
  concept: 'advanced',
  difficulty: 'advanced',
  estimatedTime: '40 min',
  sections: [
    {
      id: 'decorators-generators',
      type: 'explanation',
      text: `Understand function decorators, generator functions using yield, and iterators.`,
    },
    {
      id: 'type-hinting',
      type: 'explanation',
      text: `Learn how to use type hints and dataclasses for cleaner, more robust code.`,
    },
    {
      id: 'concurrency',
      type: 'explanation',
      text: `Explore threading, multiprocessing, async/await, and concurrency handling.`,
    },
    {
      id: 'logging-testing',
      type: 'explanation',
      text: `Introduce logging module for debugging and pytest for unit testing.`,
    },
  ],
},
{
  id: 'fastapi',
  title: 'Developing APIs with FastAPI',
  description: 'High-performance Python APIs using type hints and async features',
  concept: 'fastapi',
  difficulty: 'expert',
  estimatedTime: '45 min',
  sections: [
    {
      id: 'fastapi-basics',
      type: 'explanation',
      text: `Introduction to FastAPI, setup, and creating your first async endpoint.`,
    },
    {
      id: 'pydantic-validation',
      type: 'explanation',
      text: `Use Pydantic models for data validation, request/response schemas, and automatic documentation.`,
    },
    {
      id: 'dependency-injection',
      type: 'explanation',
      text: `Implement FastAPI’s dependency injection for cleaner, reusable code.`,
    },
    {
      id: 'advanced-rest',
      type: 'explanation',
      text: `Build RESTful routes, use WebSockets, background tasks, authentication, and CORS support.`,
    },
    {
      id: 'deployment',
      type: 'explanation',
      text: `Deploy FastAPI with uvicorn, Docker, optimize performance, monitoring, and logging.`,
    },
  ],
}




];
