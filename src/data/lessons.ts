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
  {
    "id": "intro-to-python",
    "title": "Introduction to Python",
    "description": "Learn what Python is, how to install it, set up IDEs, and write your first program.",
    "concept": "python-basics",
    "difficulty": "beginner",
    "estimatedTime": "30 min",
    "sections": [
      {
        "id": "what-is-python",
        "type": "ai_explanation",
        "title": "What is Python?",
        "text": "Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum and first released in 1991, Python has grown to become one of the most popular programming languages worldwide. It is widely used for web development, data analysis, artificial intelligence, scientific computing, automation, and more.\n\nPython's design philosophy emphasizes code readability with its use of significant whitespace (indentation). This makes Python an excellent choice for beginners, as well as for professionals aiming to write clean, maintainable code.\n\nKey features of Python include:\n- Easy to learn and use: Python has a simple syntax that mirrors natural language.\n- Interpreted language: Python code runs line by line, which makes debugging easier.\n- Cross-platform: Python runs on Windows, macOS, Linux, and many other systems.\n- Large standard library: It includes tools for everything from file handling to networking.\n- Extensive community support: Python has thousands of third-party libraries and frameworks.\n\nIn summary, Python’s versatility and ease of use make it an ideal language for beginners and experts alike."

      },
      {
  "id": "what-is-python",
  "type": "ai_explanation",
  "title": "What is Python?",
  "text": "Python is a high-level language. Here is an intro video:<br><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/UrsmFxElp5k\" frameborder=\"0\" allowfullscreen></iframe>"
}
      {
  "id": "what-is-python",
  "type": "ai_explanation",
  "title": "What is Python?",
  "text": "Python is a high-level language. Here is an intro video:<br><a href=\"https://www.youtube.com/embed/UrsmFxElp5k\" target=\"_blank\" class=\"text-blue-600 underline\">▶ Watch Intro to Python</a>"
},

        
      {
        "id": "setup-ides",
        "type": "ai_explanation",
        "title": "Setting Up IDEs (VSCode, PyCharm, Jupyter)",
        "text": "An Integrated Development Environment (IDE) helps programmers write, test, and debug code efficiently. Here are three popular IDEs used for Python programming:\n\n1. Visual Studio Code (VSCode):\n  - VSCode is a lightweight, free, open-source code editor developed by Microsoft.\n  - To set up Python in VSCode: \n    - Download and install VSCode from code.visualstudio.com.\n    - Open VSCode and install the Python extension by Microsoft from the Extensions marketplace.\n    - VSCode provides features like syntax highlighting, code completion, debugging, and integrated terminal.\n    - You can run Python scripts directly within the editor.\n\n2. PyCharm:\n  - PyCharm is a powerful IDE developed by JetBrains, designed specifically for Python.\n  - Download the Community (free) or Professional version from jetbrains.com/pycharm.\n  - PyCharm offers advanced features like smart code navigation, refactoring, integrated testing, and version control.\n  - After installation, create a new project and start coding.\n\n3. Jupyter Notebook:\n  - Jupyter Notebook is an open-source web application that allows you to create and share live code, equations, visualizations, and narrative text.\n  - Especially popular in data science and machine learning communities.\n  - To install Jupyter: \n    - Use the command pip install notebook.\n    - Run jupyter notebook in your terminal to open the notebook interface in your web browser.\n  - Jupyter is great for interactive coding and exploring data step-by-step.\n\nEach IDE has its own strengths, and you can choose one based on your needs and preferences."
      },
      {
        "id": "first-python-program",
        "type": "ai_explanation",
        "title": "First Python Program: print(\"Hello, World!\")",
        "text": "Writing your first program is an exciting step! In Python, the classic first program is to display the phrase \"Hello, World!\" on the screen.\n\nHere’s the code:\nprint(\"Hello, World!\")\n\nExplanation:\n- print() is a built-in Python function that outputs text or other data to the screen.\n- The text inside the parentheses and quotes is called a string.\n- When you run this program, Python executes the print function and displays the message.\n\nHow to run the program:\n1. Open your chosen IDE or a simple text editor.\n2. Create a new file and name it hello.py (Python files end with .py).\n3. Type the code: print(\"Hello, World!\").\n4. Save the file.\n5. Run the program:\n  - In a terminal or command prompt, navigate to the folder containing the file.\n  - Type python hello.py or python3 hello.py and press Enter.\n\nYou should see the output:\nHello, World!\n\nCongratulations! You’ve just written and executed your first Python program."
      }
    ]
  },
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
  "id": "loops-in-python",
  "title": "Loops in Python",
  "description": "Understand how to use loops in Python to execute blocks of code repeatedly. Learn about for loops, while loops, nested loops, and control statements like break, continue, and pass.",
  "concept": "control-flow",
  "difficulty": "beginner",
  "estimatedTime": "45 min",
  "sections": [
    {
      "id": "for-loops",
      "type": "ai_explanation",
      "title": "📄 Page 1: For Loops",
      "text": "### What is a For Loop?\nA `for` loop is a control flow statement used to repeat a block of code a fixed number of times, typically iterating over elements of a sequence such as a list, tuple, string, or range.\n\n### How For Loops Work\n- Iterates over each item in a sequence.\n- Executes the loop block for every item.\n- Stops automatically when all items are processed.\n\n### Syntax:\n```python\nfor variable in sequence:\n    # loop body\n```\n\n### Examples:\n```python\n# Iterate over a list\nfruits = [\"apple\", \"banana\", \"cherry\"]\nfor fruit in fruits:\n    print(fruit)\n\n# Iterate over a string\nfor letter in \"hello\":\n    print(letter)\n\n# Loop through numbers\nfor i in range(5):  # 0 to 4\n    print(i)\n```\n\n### Using range() in For Loops\n- `range(stop)` → 0 to stop-1\n- `range(start, stop)` → start to stop-1\n- `range(start, stop, step)` → increments by step\n\n```python\nfor i in range(1, 10, 2):\n    print(i)\n# Output: 1 3 5 7 9\n```\n\n### Common Use-Cases:\n- Looping through lists or arrays\n- Repeating tasks a fixed number of times\n- Generating sequences of numbers"
    },
    {
      "id": "while-loops",
      "type": "ai_explanation",
      "title": "📄 Page 2: While Loops",
      "text": "### What is a While Loop?\nA `while` loop repeats as long as a certain condition remains true. It's ideal when the number of iterations is not known in advance.\n\n### How While Loops Work\n- Checks the condition before each iteration\n- Executes the loop body if the condition is `True`\n- Stops once the condition becomes `False`\n\n### Syntax:\n```python\nwhile condition:\n    # loop body\n```\n\n### Example:\n```python\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1\n```\n\n### Important Notes:\n- Ensure the condition eventually becomes false to avoid infinite loops\n- Use `break` to exit loops if necessary\n\n### Common Use-Cases:\n- Waiting for user input\n- Polling a sensor until a condition is met\n- Running background tasks until stopped"
    },
    {
      "id": "break-continue-pass",
      "type": "ai_explanation",
      "title": "📄 Page 3: Break, Continue, and Pass",
      "text": "### Break Statement\nImmediately terminates the loop.\n\n```python\nfor i in range(10):\n    if i == 5:\n        break\n    print(i)\n# Output: 0 1 2 3 4\n```\n\n### Continue Statement\nSkips the current iteration and goes to the next.\n\n```python\nfor i in range(5):\n    if i == 2:\n        continue\n    print(i)\n# Output: 0 1 3 4\n```\n\n### Pass Statement\nDoes nothing. Often used as a placeholder.\n\n```python\nfor i in range(3):\n    pass  # Code to be written later\n\n# Example in conditional\nif condition_met:\n    pass  # Placeholder\nelse:\n    print(\"Condition not met\")\n```"
    },
    {
      "id": "nested-loops-and-control",
      "type": "ai_explanation",
      "title": "📄 Page 4: Nested Loops and Loop Control",
      "text": "### Nested Loops\nA loop inside another loop. Useful for multi-dimensional data.\n\n```python\nfor i in range(3):\n    for j in range(2):\n        print(f\"i={i}, j={j}\")\n```\n\n### Loop Control with else\nAn optional `else` block runs **if the loop finishes without a break**.\n\n```python\nfor i in range(5):\n    print(i)\nelse:\n    print(\"Loop completed without break\")\n```\n\n### Infinite Loops\nCreated by conditions that never become false. Can be controlled with `break`.\n\n```python\nwhile True:\n    user_input = input(\"Enter 'exit' to stop: \")\n    if user_input == \"exit\":\n        break\n```\n\n**Caution:** Use infinite loops only when necessary (e.g., waiting for input)."
    }
  ]
},
  {
  "id": "data-structures-basics",
  "title": "Data Structures: Basics",
  "description": "Learn the core built-in data structures in Python — lists, tuples, sets, and dictionaries. Understand how to use them, their properties, and common operations.",
  "concept": "python-data-structures",
  "difficulty": "beginner",
  "estimatedTime": "60 min",
  "sections": [
    {
      "id": "lists",
      "type": "ai_explanation",
      "title": "📄 Page 1: Lists",
      "text": "### What is a List?\n- A list is an **ordered**, **mutable** collection of elements.\n- Lists can store any data type: numbers, strings, booleans, even other lists.\n- Lists **allow duplicates**.\n\n### Syntax:\n```python\nmy_list = [1, 2, 3, \"apple\", True]\n```\n\n### Basic Operations:\n```python\nfruits = [\"apple\", \"banana\", \"cherry\"]\nprint(fruits[0])            # Access first element: \"apple\"\nfruits.append(\"orange\")     # Add item\nfruits.remove(\"banana\")     # Remove item\nprint(len(fruits))          # List length: 3\n```\n\n### Useful Methods:\n- `insert(index, item)` – Insert item at a specific position\n- `pop()` – Remove and return the last item\n- `sort()` – Sort the list\n- `reverse()` – Reverse list order\n\n### List Slicing:\n```python\nmy_list = [10, 20, 30, 40, 50]\nprint(my_list[1:4])  # Output: [20, 30, 40]\n```\n\n### Lists Are Mutable:\n```python\nmy_list[0] = 100\n```"
    },
    {
      "id": "tuples",
      "type": "ai_explanation",
      "title": "📄 Page 2: Tuples",
      "text": "### What is a Tuple?\n- A tuple is an **ordered**, **immutable** collection.\n- Once created, its values **cannot be changed**.\n- Tuples can be used as **keys in dictionaries** (lists cannot).\n\n### Syntax:\n```python\nmy_tuple = (1, 2, 3)\n```\n\n### Accessing Elements:\n```python\nprint(my_tuple[1])  # Output: 2\n```\n\n### Tuple Unpacking:\n```python\na, b, c = my_tuple\nprint(a)  # Output: 1\n```\n\n### Immutability:\n```python\nmy_tuple[0] = 100  # ❌ Raises TypeError\n```"
    },
    {
      "id": "sets",
      "type": "ai_explanation",
      "title": "📄 Page 3: Sets",
      "text": "### What is a Set?\n- A set is an **unordered** collection of **unique** elements.\n- Automatically removes duplicates.\n- **No indexing** is allowed.\n\n### Syntax:\n```python\nmy_set = {1, 2, 3, 2}\nprint(my_set)  # Output: {1, 2, 3}\n```\n\n### Set Operations:\n```python\nmy_set.add(4)            # Add an element\nmy_set.remove(2)         # Remove an element\nprint(3 in my_set)       # Check if 3 is in the set → True\n```\n\n### Useful Set Methods:\n- `union()` – Combine two sets\n- `intersection()` – Common elements\n- `difference()` – Items in one set but not the other\n\n### Example:\n```python\na = {1, 2, 3}\nb = {3, 4, 5}\nprint(a.union(b))          # {1, 2, 3, 4, 5}\nprint(a.intersection(b))   # {3}\n```\n\n### No Indexing:\n```python\nmy_set[0]  # ❌ Raises TypeError\n```"
    },
    {
      "id": "dictionaries",
      "type": "ai_explanation",
      "title": "📄 Page 4: Dictionaries",
      "text": "### What is a Dictionary?\n- A dictionary stores **key-value pairs**.\n- It is **unordered**, **mutable**, and **keys must be unique and immutable**.\n- Keys can be strings, numbers, or tuples.\n\n### Syntax:\n```python\nmy_dict = {\"name\": \"Alice\", \"age\": 25}\n```\n\n### Accessing and Modifying:\n```python\nprint(my_dict[\"name\"])        # Access value\nmy_dict[\"age\"] = 26            # Update value\nmy_dict[\"city\"] = \"Delhi\"      # Add new key-value pair\n```\n\n### Useful Dictionary Methods:\n- `keys()` – List of all keys\n- `values()` – List of all values\n- `items()` – List of key-value pairs\n- `get(key)` – Access value safely (returns `None` if key not found)\n\n### Example:\n```python\nfor key, value in my_dict.items():\n    print(key, value)\n```\n\n**Note:** Keys must be unique and immutable."
    }
  ]
},
  {
  "id": "functions-expanded",
  "title": "Functions (Expanded)",
  "description": "Master Python functions: defining, calling, arguments, scope, anonymous functions, and best practices.",
  "concept": "python-functions",
  "difficulty": "intermediate",
  "estimatedTime": "75 min",
  "sections": [
    {
      "id": "defining-calling-functions",
      "type": "ai_explanation",
      "title": "📄 Page 1: Defining and Calling Functions (Detailed)",
      "text": "### What is a Function?\n- A function groups a set of instructions that perform a task.\n- Functions help avoid code repetition and improve readability.\n\n### Syntax:\n```python\ndef function_name(parameters):\n    # code block\n    return result  # Optional\n```\n\n### Example:\n```python\ndef say_hello():\n    print(\"Hello!\")\nsay_hello()  # Output: Hello!\n```\n\n### Important Points:\n- Function names follow the same rules as variables.\n- The code inside the function runs only when the function is called."
    },
    {
      "id": "arguments-return-values",
      "type": "ai_explanation",
      "title": "📄 Page 2: Arguments and Return Values (Detailed)",
      "text": "### Positional Arguments:\n- Arguments are matched by position.\n\n```python\ndef multiply(a, b):\n    return a * b\n\nprint(multiply(4, 5))  # Output: 20\n```\n\n### Keyword Arguments:\n- Arguments can be passed by explicitly naming them.\n\n```python\nprint(multiply(b=3, a=6))  # Output: 18\n```\n\n### Return Statement:\n- Functions can return any data type.\n- If no return is specified, the function returns `None` by default.\n\n```python\ndef no_return():\n    print(\"I return nothing!\")\n\nresult = no_return()\nprint(result)  # Output: None\n```"
    },
    {
      "id": "default-arguments",
      "type": "ai_explanation",
      "title": "📄 Page 3: Default Arguments (Expanded)",
      "text": "### Combining Positional and Default Arguments:\n- Default arguments must come **after** positional arguments.\n\n```python\ndef greet(name, msg=\"Welcome!\"):\n    print(f\"Hello {name}, {msg}\")\n\ngreet(\"Alice\")                  # Hello Alice, Welcome!\ngreet(\"Bob\", \"Good to see you\") # Hello Bob, Good to see you\n```\n\n### Common Use Case:\n- Use default arguments to handle optional parameters gracefully."
    },
    {
      "id": "scope-local-global",
      "type": "ai_explanation",
      "title": "📄 Page 4: Scope (Local/Global) (Expanded)",
      "text": "### LEGB Rule (Python Variable Scope):\n- **Local:** Inside current function.\n- **Enclosing:** Any enclosing function’s scope.\n- **Global:** Top-level of the module/script.\n- **Built-in:** Python’s built-in names.\n\n### Example of Nested Function & Enclosing Scope:\n```python\ndef outer():\n    x = \"outer x\"\n\n    def inner():\n        print(x)  # Accessing enclosing variable\n\n    inner()\n\nouter()  # Output: outer x\n```\n\n### Global Keyword Use:\n- Be careful using `global`; it can make debugging harder.\n- Prefer passing variables as arguments if possible.\n\n### Nonlocal Keyword:\n- Used inside nested functions to modify variables in enclosing scopes.\n\n```python\ndef outer():\n    x = 5\n    def inner():\n        nonlocal x\n        x = 10\n    inner()\n    print(x)  # Output: 10\n\nouter()\n```"
    },
    {
      "id": "anonymous-functions",
      "type": "ai_explanation",
      "title": "📄 Page 5: Anonymous Functions (Bonus)",
      "text": "### Lambda Functions:\n- Small, unnamed functions used for short operations.\n\n```python\nsquare = lambda x: x * x\nprint(square(4))  # Output: 16\n```\n\n### Use with `map()`, `filter()`, and `sorted()`:\n```python\nnumbers = [1, 2, 3, 4, 5]\n\n# Squares using map and lambda\nsquares = list(map(lambda x: x**2, numbers))\nprint(squares)  # [1, 4, 9, 16, 25]\n\n# Filter even numbers\nevens = list(filter(lambda x: x % 2 == 0, numbers))\nprint(evens)  # [2, 4]\n```"
    },
    {
      "id": "best-practices",
      "type": "ai_explanation",
      "title": "📄 Page 6: Best Practices for Functions",
      "text": "### Best Practices:\n- Use **meaningful names**.\n- Keep functions **short and focused**.\n- Use **docstrings** to explain what the function does.\n\n```python\ndef greet(name):\n    \"\"\"\n    Prints a greeting message for the given name.\n    \"\"\"\n    print(f\"Hello, {name}!\")\n```\n\n- Avoid **side effects** (unexpected changes outside the function).\n- Prefer **pure functions** where output depends only on input."
    }
  ]
},
  {
  "id": "error-handling",
  "title": "Error Handling",
  "description": "Master error handling in Python using try, except, finally, else blocks, and learn about common exceptions, best practices, and debugging tips.",
  "concept": "python-error-handling",
  "difficulty": "intermediate",
  "estimatedTime": "60 min",
  "sections": [
    {
      "id": "try-except",
      "type": "ai_explanation",
      "title": "📄 Page 1: try and except",
      "text": "### What is try-except?\n- The `try` block lets you test a block of code for errors.\n- The `except` block lets you handle the error gracefully without crashing the program.\n\n### Syntax:\n```python\ntry:\n    # Code that might raise an exception\nexcept ExceptionType as e:\n    # Code to handle the exception\n    print(f\"Error occurred: {e}\")\n```\n\n### Example:\n```python\ntry:\n    num = int(input(\"Enter a number: \"))\n    print(f\"You entered {num}\")\nexcept ValueError as e:\n    print(f\"Invalid input: {e}\")\n```\n\n### Key Points:\n- Catch specific exceptions to handle different error types appropriately.\n- Use `except Exception:` to catch all exceptions (not recommended for debugging).\n- You can have multiple except blocks to handle multiple exception types.\n\n### Example of Multiple Excepts:\n```python\ntry:\n    value = int(input(\"Enter a number: \"))\n    result = 10 / value\nexcept ValueError:\n    print(\"Please enter a valid integer.\")\nexcept ZeroDivisionError:\n    print(\"Division by zero is not allowed.\")\n```"
    },
    {
      "id": "else-finally",
      "type": "ai_explanation",
      "title": "📄 Page 2: else and finally",
      "text": "### The `else` block\n- Runs only if the `try` block **does not** raise an exception.\n- Useful for code that should run only when everything in the `try` succeeds.\n\n### The `finally` block\n- Always executes after the try and except blocks, no matter what.\n- Ideal for cleanup code like closing files or releasing resources.\n\n### Syntax:\n```python\ntry:\n    # risky code\nexcept SomeError:\n    # error handling\nelse:\n    # runs if no exception\nfinally:\n    # always runs\n```\n\n### Example:\n```python\ntry:\n    f = open('file.txt', 'r')\n    data = f.read()\nexcept FileNotFoundError:\n    print(\"File not found.\")\nelse:\n    print(\"File read successfully.\")\nfinally:\n    f.close()\n    print(\"File closed.\")\n```\n\n### Important Notes:\n- Use `finally` to guarantee resource cleanup.\n- `else` helps separate the normal execution path from error handling.\n\n### When to use:\n- Use `try-except` for error handling.\n- Use `else` for code that should run only if no error occurs.\n- Use `finally` for mandatory cleanup."
    },
    {
      "id": "common-exceptions",
      "type": "ai_explanation",
      "title": "📄 Page 3: Common Exceptions",
      "text": "### Commonly Encountered Python Exceptions\n\n| Exception Name       | Description                                         | Example                                      |\n|----------------------|-----------------------------------------------------|----------------------------------------------|\n| `ValueError`         | Invalid value type given to a function              | `int('abc')`                                 |\n| `TypeError`          | Operation/function applied to an incorrect type     | `'2' + 2`                                    |\n| `IndexError`         | Sequence index out of range                          | `my_list = [1]; my_list[5]`                   |\n| `KeyError`           | Dictionary key not found                             | `my_dict = {}; my_dict['name']`                |\n| `ZeroDivisionError`  | Division or modulo by zero                           | `10 / 0`                                     |\n| `FileNotFoundError`  | Trying to open a non-existent file                   | `open('nofile.txt')`                         |\n| `AttributeError`     | Accessing invalid attribute of an object            | `None.some_method()`                          |\n\n### Example Handling Multiple Exceptions\n```python\ntry:\n    x = int(input(\"Enter a number: \"))\n    result = 10 / x\nexcept (ValueError, ZeroDivisionError) as e:\n    print(f\"An error occurred: {e}\")\nelse:\n    print(f\"Result is {result}\")\n```\n\n### Best Practices for Handling Exceptions\n- Catch only exceptions you can handle.\n- Avoid bare `except:` blocks as they catch all exceptions including system exit signals.\n- Log exceptions for debugging.\n- Use exception chaining (`raise ... from ...`) to maintain the original traceback.\n\n### Raising Exceptions\n- You can raise exceptions intentionally using `raise`:\n```python\nif x < 0:\n    raise ValueError(\"Negative values not allowed\")\n```"
    },
    {
      "id": "custom-exceptions",
      "type": "ai_explanation",
      "title": "📄 Page 4: Custom Exceptions",
      "text": "### Why Custom Exceptions?\n- To provide meaningful error messages specific to your application.\n- To differentiate your exceptions from built-in ones.\n\n### Defining Custom Exceptions\n```python\nclass MyCustomError(Exception):\n    \"\"\"Custom exception for specific errors.\"\"\"\n    pass\n\n# Usage\ntry:\n    raise MyCustomError(\"Something went wrong!\")\nexcept MyCustomError as e:\n    print(f\"Caught custom error: {e}\")\n```\n\n### Best Practices\n- Inherit from built-in `Exception` class.\n- Add custom attributes or methods if needed.\n- Use docstrings to document your custom exceptions."
    },
    {
      "id": "debugging-tips",
      "type": "ai_explanation",
      "title": "📄 Page 5: Debugging and Best Practices",
      "text": "### Debugging Tips\n- Use `print()` statements or logging to trace errors.\n- Use Python's built-in debugger `pdb`:\n```bash\npython -m pdb your_script.py\n```\n- Use `traceback` module to print detailed error information:\n```python\nimport traceback\ntry:\n    # code\nexcept Exception as e:\n    print(\"An error occurred\")\n    traceback.print_exc()\n```\n\n### Best Practices for Error Handling\n- Handle exceptions at the appropriate level.\n- Avoid suppressing exceptions unless necessary.\n- Always clean up resources (files, connections) using `finally` or context managers (`with` statement).\n- Use specific exceptions to avoid catching unrelated errors.\n\n### Using Context Managers for Resource Management\n```python\nwith open('file.txt', 'r') as f:\n    data = f.read()  # No need for explicit close()\n```\n\n### Summary\n- Use `try-except` to catch and handle errors.\n- Use `else` for code that runs if no exception occurs.\n- Use `finally` for cleanup.\n- Understand and handle common exceptions.\n- Consider custom exceptions for better clarity.\n- Use debugging tools to identify and fix errors efficiently."
    }
  ]
},
  {
  "id": "modules-and-packages",
  "title": "Modules and Packages",
  "description": "Learn how to import modules, explore Python's standard library, and install external packages using pip.",
  "concept": "python-modules",
  "difficulty": "intermediate",
  "estimatedTime": "45 min",
  "sections": [
    {
      "id": "importing-modules",
      "type": "ai_explanation",
      "title": "Importing Modules",
      "text": "A module is a Python file (.py) containing reusable code such as functions, classes, and variables. Modules help organize your code into manageable parts.\n\nYou can import entire modules or specific components:\n\n```python\nimport math\nprint(math.sqrt(16))\n\nfrom math import sqrt\nprint(sqrt(25))\n\nimport math as m\nprint(m.pi)\n```\n\nYou can also import your own modules by creating a Python file and importing it in another.\n\nNote:\n- Modules are loaded once and cached.\n- Use aliases for better readability.\n- Avoid using `from module import *` to prevent namespace pollution."
    },
    {
      "id": "standard-library-overview",
      "type": "ai_explanation",
      "title": "Standard Library Overview",
      "text": "Python’s Standard Library includes many built-in modules for common programming tasks. Some key modules include:\n\n- `os`: Operating system interfaces, e.g., `os.listdir()` to list files.\n- `sys`: System-specific functions, e.g., `sys.argv` for command-line arguments.\n- `math`: Mathematical functions, e.g., `math.factorial(5)`.\n- `random`: Generate random numbers, e.g., `random.choice()`.\n- `datetime`: Date and time operations.\n- `json`: JSON encoding and decoding.\n- `re`: Regular expressions.\n- `collections`: Specialized container datatypes.\n\nExample:\n```python\nimport datetime\nnow = datetime.datetime.now()\nprint(f\"Current date and time: {now}\")\n```"
    },
    {
      "id": "installing-external-packages",
      "type": "ai_explanation",
      "title": "Installing External Packages (pip)",
      "text": "pip is Python's standard package manager to install, upgrade, and manage third-party libraries.\n\nBasic pip commands:\n```\npip install package_name          # Install a package\npip install --upgrade package_name # Upgrade a package\npip uninstall package_name        # Uninstall a package\npip list                         # List installed packages\n```\n\nUsing virtual environments isolates project dependencies:\n\n```bash\npython -m venv env               # Create virtual environment\nsource env/bin/activate          # Activate on Linux/macOS\n.\\env\\Scripts\\activate         # Activate on Windows\npip install package_name         # Install inside env\ndeactivate                      # Exit env\n```\n\nExample: Installing and using `requests`:\n```bash\npip install requests\n```\n\n```python\nimport requests\nresponse = requests.get('https://api.github.com')\nprint(response.status_code)\nprint(response.json())\n```\n\nBest practices:\n- Use virtual environments.\n- Keep dependencies in `requirements.txt`.\n- Organize large projects with packages."
    }
  ]
},
  {
  "id": "intermediate-level",
  "title": "Intermediate Level",
  "description": "Explore intermediate Python topics including file handling, advanced data structures, OOP, functional programming, and more.",
  "concept": "python-intermediate",
  "difficulty": "intermediate",
  "estimatedTime": "2 hours",
  "sections": [
    {
      "id": "file-handling",
      "type": "ai_explanation",
      "title": "File Handling",
      "text": "Python’s file handling allows interaction with files using built-in functions.\n\nThe `open()` function returns a file object; modes define read/write behavior:\n- `'r'`: read (default, error if file not found)\n- `'w'`: write (creates or truncates)\n- `'a'`: append (writes at end)\n- `'x'`: create exclusive file, fails if exists\n- `'b'`: binary mode\n- `'t'`: text mode (default)\n\nExample:\n```python\n# Writing to a file\nwith open('example.txt', 'w') as file:\n    file.write('Hello World!\\n')\n\n# Reading from a file\nwith open('example.txt', 'r') as file:\n    content = file.read()\n    print(content)\n```\n\nReading methods:\n- `read()`: read entire file\n- `readline()`: read one line at a time\n- `readlines()`: read all lines into a list\n\nAlways use `with` statement to ensure file is closed properly, even if errors occur."
    },
    {
      "id": "working-with-text-csv",
      "type": "ai_explanation",
      "title": "Working with Text and CSV Files",
      "text": "Working with text files involves reading/writing strings.\n\nCSV files store tabular data and are handled with the `csv` module.\n\nExample:\n```python\nimport csv\n\n# Reading CSV file\nwith open('data.csv', newline='') as csvfile:\n    reader = csv.reader(csvfile, delimiter=',')\n    for row in reader:\n        print(row)\n\n# Writing CSV file\nwith open('output.csv', 'w', newline='') as csvfile:\n    writer = csv.writer(csvfile)\n    writer.writerow(['Name', 'Age', 'Country'])\n    writer.writerow(['Alice', 30, 'USA'])\n```\n\nAdvanced features include:\n- Handling different delimiters (e.g., tabs)\n- Using `csv.DictReader` and `csv.DictWriter` for dictionary-based access\n- Managing quoting and escape characters for complex CSV files"
    },
    {
      "id": "context-managers",
      "type": "ai_explanation",
      "title": "Context Managers (with statement)",
      "text": "Context managers simplify resource management (files, network connections).\n\nThe `with` statement guarantees setup and cleanup.\n\nExample:\n```python\nwith open('file.txt', 'r') as f:\n    data = f.read()\n# File closed automatically\n```\n\nCreating custom context managers:\n\nUsing `contextlib`:\n```python\nfrom contextlib import contextmanager\n\n@contextmanager\ndef managed_file(filename):\n    f = open(filename, 'w')\n    try:\n        yield f\n    finally:\n        f.close()\n\nwith managed_file('hello.txt') as f:\n    f.write('Hello World')\n```\n\nOr using class with `__enter__` and `__exit__`:\n```python\nclass ManagedFile:\n    def __init__(self, filename):\n        self.filename = filename\n    def __enter__(self):\n        self.file = open(self.filename, 'w')\n        return self.file\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        self.file.close()\n```\n\nProper error handling inside `__exit__` allows handling exceptions gracefully."
    },
    {
      "id": "list-comprehensions",
      "type": "ai_explanation",
      "title": "List Comprehensions",
      "text": "List comprehensions allow creation of lists in one concise expression.\n\nSyntax: `[expression for item in iterable if condition]`\n\nExamples:\n```python\n# Squares of numbers 0-9\nsquares = [x**2 for x in range(10)]\n\n# Even squares\neven_squares = [x**2 for x in range(10) if x % 2 == 0]\n\n# Flatten a nested list\nmatrix = [[1,2,3], [4,5,6]]\nflat = [num for row in matrix for num in row]\n```\n\nBenefits:\n- Cleaner, shorter code\n- Faster execution compared to loops\n\nCaution:\n- Avoid overly complex expressions; break into functions if needed."
    },
    {
      "id": "dictionary-comprehensions",
      "type": "ai_explanation",
      "title": "Dictionary Comprehensions",
      "text": "Similar to list comprehensions but build dictionaries.\n\nSyntax: `{key_expr: value_expr for item in iterable if condition}`\n\nExample:\n```python\n# Map numbers to their squares\nsquare_dict = {x: x**2 for x in range(6)}\n\n# Filter with condition\nfiltered_dict = {x: x**2 for x in range(10) if x % 2 == 0}\n```\n\nUseful to transform or filter existing dictionaries or iterables into new dictionaries."
    },
    {
      "id": "nested-data-structures",
      "type": "ai_explanation",
      "title": "Nested Data Structures",
      "text": "Complex data often requires nested containers.\n\nExamples:\n```python\n# List of dictionaries\ndata = [\n    {'name': 'Alice', 'scores': [90, 85, 88]},\n    {'name': 'Bob', 'scores': [72, 80, 79]}\n]\n\n# Dictionary with list values\ngrades = {'math': [90, 80], 'science': [88, 84]}\n```\n\nAccessing nested data:\n```python\nprint(data[0]['scores'][1])  # 85\nprint(grades['science'][0])  # 88\n```\n\nNested comprehensions can be used for transformation:\n```python\nall_scores = [score for student in data for score in student['scores']]\n```\n\nUnderstanding nesting is crucial for data manipulation and JSON handling."
    },
    {
      "id": "classes-and-objects",
      "type": "ai_explanation",
      "title": "Classes and Objects",
      "text": "OOP centers around classes (templates) and objects (instances).\n\nClasses bundle data (attributes) and behaviors (methods).\n\nExample:\n```python\nclass Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    def greet(self):\n        print(f'Hello, my name is {self.name}')\n\np1 = Person('Alice', 30)\np1.greet()\n```\n\nOOP promotes encapsulation, modularity, and code reuse."
    },
    {
      "id": "init-and-self",
      "type": "ai_explanation",
      "title": "__init__ and self",
      "text": "`__init__` is a special method called when a new object is created. It initializes instance attributes.\n\n`self` refers to the current instance, allowing attribute access.\n\nExample:\n```python\nclass Car:\n    def __init__(self, brand, model):\n        self.brand = brand\n        self.model = model\n    def info(self):\n        print(f'{self.brand} {self.model}')\n\ncar = Car('Toyota', 'Corolla')\ncar.info()\n```\n\nWithout `self`, Python won’t know which instance’s attribute to use."
    },
    {
      "id": "methods-and-attributes",
      "type": "ai_explanation",
      "title": "Methods and Attributes",
      "text": "Attributes hold data; methods define behaviors.\n\nAttributes can be:\n- Instance attributes (unique per object)\n- Class attributes (shared across all instances)\n\nExample:\n```python\nclass Employee:\n    company = 'ABC Corp'  # class attribute\n\n    def __init__(self, name, salary):\n        self.name = name  # instance attribute\n        self.salary = salary\n\n    def display(self):\n        print(f'{self.name} works at {self.company} earning {self.salary}')\n\nemp = Employee('John', 50000)\nemp.display()\n```\n\nMethods can access attributes and perform operations."
    },
    {
      "id": "inheritance",
      "type": "ai_explanation",
      "title": "Inheritance",
      "text": "Inheritance lets one class derive from another, reusing code.\n\nThe derived class inherits attributes and methods and can override or extend them.\n\nExample:\n```python\nclass Animal:\n    def speak(self):\n        print('Animal sound')\n\nclass Dog(Animal):\n    def speak(self):\n        print('Bark')\n\ndog = Dog()\ndog.speak()  # Bark\n```\n\nSupports hierarchical relationships and polymorphism."
    },
    {
      "id": "encapsulation-and-polymorphism",
      "type": "ai_explanation",
      "title": "Encapsulation and Polymorphism",
      "text": "Encapsulation protects data by restricting access.\n\nConventionally, prefix attribute names with `_` or `__` to indicate privacy.\n\nPolymorphism means different classes can be treated the same through common interfaces.\n\nExample:\n```python\nclass Bird:\n    def fly(self):\n        print('Bird flying')\n\nclass Plane:\n    def fly(self):\n        print('Plane flying')\n\nfor obj in [Bird(), Plane()]:\n    obj.fly()  # Both can fly, different implementations\n```\n\nPromotes flexible and maintainable code design."
    },
    {
      "id": "anonymous-functions",
      "type": "ai_explanation",
      "title": "Anonymous Functions",
      "text": "Lambda functions are unnamed, single-expression functions.\n\nSyntax: `lambda arguments: expression`\n\nExample:\n```python\nadd = lambda x, y: x + y\nprint(add(3, 4))  # 7\n```\n\nOften used as short inline functions, especially with higher-order functions."
    },
    {
      "id": "functional-programming-in-python",
      "type": "ai_explanation",
      "title": "Functional Programming in Python",
      "text": "Python supports functional programming features like `map()`, `filter()`, and `reduce()`.\n\n- `map(func, iterable)`: applies `func` to each element.\n- `filter(func, iterable)`: filters elements where `func` returns True.\n- `reduce(func, iterable)`: applies `func` cumulatively (from `functools`).\n\nExample:\n```python\nfrom functools import reduce\n\nnums = [1, 2, 3, 4, 5]\nsquares = list(map(lambda x: x**2, nums))\nevens = list(filter(lambda x: x % 2 == 0, nums))\nsum_all = reduce(lambda x, y: x + y, nums)\n\nprint(squares)  # [1, 4, 9, 16, 25]\nprint(evens)    # [2, 4]\nprint(sum_all)  # 15\n```\n\nUseful for concise data transformations."
    },
    {
      "id": "iter-next",
      "type": "ai_explanation",
      "title": "__iter__ and __next__",
      "text": "Iterators implement `__iter__()` (returns the iterator object) and `__next__()` (returns the next item).\n\nExample:\n```python\nclass Counter:\n    def __init__(self, low, high):\n        self.current = low\n        self.high = high\n    def __iter__(self):\n        return self\n    def __next__(self):\n        if self.current > self.high:\n            raise StopIteration\n        else:\n            self.current += 1\n            return self.current - 1\n\nfor num in Counter(1, 3):\n    print(num)  # 1 2 3\n```\n\nEnables custom iteration behavior."
    },
    {
      "id": "yield-keyword",
      "type": "ai_explanation",
      "title": "yield Keyword",
      "text": "`yield` creates a generator function, which produces a sequence of values lazily.\n\nExample:\n```python\ndef countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nfor i in countdown(5):\n    print(i)\n```\n\nGenerators save memory by generating items on demand."
    },
    {
      "id": "generator-expressions",
      "type": "ai_explanation",
      "title": "Generator Expressions",
      "text": "Generator expressions are like list comprehensions but use `()` and produce iterators instead of lists.\n\nExample:\n```python\ngen = (x**2 for x in range(5))\nprint(next(gen))  # 0\nprint(list(gen))  # [1, 4, 9, 16]\n```\n\nThey are memory efficient for large data sets since values are generated on demand rather than stored in memory."
    }
  ]
},
//   {
//   "id": "advanced-level",
//   "title": "Advanced Level",
//   "topics": [
//     {
//       "id": "working-with-json-and-apis",
//       "title": "Working with JSON and APIs",
//       "sections": [
//         {
//           "id": "json-parsing",
//           "title": "JSON Parsing",
//           "text": "JSON (JavaScript Object Notation) is a lightweight, text-based format for data interchange. It is widely used for transmitting data in web applications.\n\nIn Python, the built-in `json` module allows parsing JSON strings or files into Python objects and vice versa.\n\nExample:\n```python\nimport json\n\n# JSON string\njson_data = '{\"name\": \"Alice\", \"age\": 30, \"is_student\": false}'\n\n# Parse JSON string to Python dictionary\ndata = json.loads(json_data)\nprint(data['name'])  # Output: Alice\n\n# Serialize Python object to JSON string\njson_string = json.dumps(data, indent=4)\nprint(json_string)\n```\n\nAdvanced:\n- Use `json.load()` and `json.dump()` for reading/writing JSON files.\n- Handle exceptions like `json.JSONDecodeError` for invalid JSON.\n- Customize serialization with `default` parameter for complex objects.\n\nExample of custom serialization:\n```python\nclass User:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\nuser = User('Bob', 25)\n\njson_str = json.dumps(user, default=lambda o: o.__dict__)\nprint(json_str)\n```"
//         },
//         {
//           "id": "making-http-requests-using-requests",
//           "title": "Making HTTP Requests using requests",
//           "text": "The `requests` library is the de facto standard for making HTTP requests in Python. It simplifies sending GET, POST, PUT, DELETE, and other HTTP methods.\n\nExample GET request:\n```python\nimport requests\n\nresponse = requests.get('https://jsonplaceholder.typicode.com/posts/1')\nif response.status_code == 200:\n    data = response.json()  # Parse JSON response\n    print(data['title'])\nelse:\n    print('Request failed with status', response.status_code)\n```\n\nExample POST request:\n```python\npayload = {'title': 'foo', 'body': 'bar', 'userId': 1}\nresponse = requests.post('https://jsonplaceholder.typicode.com/posts', json=payload)\nprint(response.status_code)  # 201 Created\nprint(response.json())\n```\n\nAdvanced usage:\n- Set headers, cookies, timeouts.\n- Handle redirects and sessions.\n- Upload files with `files` parameter.\n- Stream large responses to save memory."
//         },
//         {
//           "id": "consuming-rest-apis",
//           "title": "Consuming REST APIs",
//           "text": "REST (Representational State Transfer) APIs provide structured access to resources using standard HTTP methods.\n\nBest practices when consuming REST APIs:\n- Read API documentation carefully.\n- Handle HTTP status codes correctly (e.g., 200 OK, 404 Not Found, 401 Unauthorized).\n- Authenticate using tokens, API keys, OAuth, etc.\n- Rate-limit requests to avoid getting blocked.\n\nExample of fetching paginated data:\n```python\nimport requests\n\nurl = 'https://api.example.com/items'\nparams = {'page': 1, 'per_page': 10}\nall_items = []\n\nwhile True:\n    response = requests.get(url, params=params)\n    data = response.json()\n    all_items.extend(data['items'])\n    if not data['has_more']:\n        break\n    params['page'] += 1\n\nprint(f'Total items fetched: {len(all_items)}')\n```\n\nUse libraries like `httpx` for async requests, retries, and connection pooling."
//         }
//       ]
//     },
//     {
//       "id": "regular-expressions",
//       "title": "Regular Expressions",
//       "sections": [
//         {
//           "id": "pattern-matching",
//           "title": "Pattern Matching",
//           "text": "Regular expressions (regex) allow flexible and powerful pattern matching in strings.\n\nPython's `re` module provides methods for matching, searching, splitting, and replacing text.\n\nCommonly used functions:\n- `re.match()` - match pattern at the beginning of string\n- `re.search()` - search pattern anywhere in string\n- `re.findall()` - find all occurrences\n- `re.sub()` - replace occurrences\n\nExample:\n```python\nimport re\n\ntext = 'Contact: john.doe@example.com'\npattern = r'[\\w.-]+@[\\w.-]+'  # Basic email pattern\nmatch = re.search(pattern, text)\nif match:\n    print('Email found:', match.group())\n```\n\nAdvanced:\n- Use groups `()` to capture parts of matches.\n- Use raw strings `r''` to avoid escape issues.\n- Use flags like `re.IGNORECASE`.\n\nExample of groups:\n```python\npattern = r'(\\w+)@(\\w+).(\\w+)'\nmatch = re.match(pattern, 'alice@example.com')\nif match:\n    print('Username:', match.group(1))\n    print('Domain:', match.group(2))\n```\n\nRemember that complex regexes can impact performance and readability."
//         },
//         {
//           "id": "common-use-cases",
//           "title": "Common Use Cases",
//           "text": "Regular expressions are used for:\n\n- Data validation (emails, phone numbers, postal codes)\n- Extracting information from text (URLs, hashtags, dates)\n- Text cleaning and preprocessing (removing whitespace, special characters)\n- Log file analysis\n- Syntax highlighting\n\nExample: Validate US phone number\n```python\npattern = r'^\\(\\d{3}\\) \\d{3}-\\d{4}$'\nprint(bool(re.match(pattern, '(123) 456-7890')))  # True\n```\n\nExample: Extract URLs from text\n```python\npattern = r'https?://[\\w./-]+'\nurls = re.findall(pattern, 'Visit https://example.com or http://test.org')\nprint(urls)\n```\n\nAlways test regexes thoroughly to avoid false positives or negatives."
//         }
//       ]
//     },
//     {
//       "id": "multithreading-and-multiprocessing",
//       "title": "Multithreading & Multiprocessing",
//       "sections": [
//         {
//           "id": "threading-module",
//           "title": "threading module",
//           "text": "The `threading` module allows concurrent execution of code using threads within the same process.\n\nThreads share memory space, which enables fast communication but requires synchronization.\n\nExample:\n```python\nimport threading\nimport time\n\ndef worker(id):\n    for i in range(3):\n        print(f'Worker {id}: {i}')\n        time.sleep(1)\n\nthreads = []\nfor i in range(2):\n    t = threading.Thread(target=worker, args=(i,))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()\n```\n\nUse `Lock`, `RLock`, `Semaphore` for synchronizing shared data.\n\nLimitations:\n- Python's Global Interpreter Lock (GIL) allows only one thread to execute Python bytecode at a time, limiting CPU-bound parallelism."
//         },
//         {
//           "id": "multiprocessing-module",
//           "title": "multiprocessing module",
//           "text": "The `multiprocessing` module bypasses the GIL by creating separate processes.\n\nEach process has its own memory space, enabling true parallelism.\n\nExample:\n```python\nfrom multiprocessing import Process\nimport os\n\ndef worker(num):\n    print(f'Worker {num} process ID: {os.getpid()}')\n\nif __name__ == '__main__':\n    processes = []\n    for i in range(4):\n        p = Process(target=worker, args=(i,))\n        processes.append(p)\n        p.start()\n    for p in processes:\n        p.join()\n```\n\nCommunication between processes is done using queues, pipes, shared memory.\n\nUseful for CPU-intensive tasks like data processing, image manipulation."
//         },
//         {
//           "id": "async-vs-sync-basics",
//           "title": "Async vs Sync basics",
//           "text": "Synchronous code executes sequentially, blocking on I/O operations.\n\nAsynchronous code allows multiple operations to run concurrently by yielding control during waits.\n\nPython's `asyncio` module supports async programming.\n\nExample:\n```python\nimport asyncio\n\nasync def say_after(delay, message):\n    await asyncio.sleep(delay)\n    print(message)\n\nasync def main():\n    task1 = asyncio.create_task(say_after(1, 'Hello'))\n    task2 = asyncio.create_task(say_after(2, 'World'))\n\n    print('Tasks started')\n    await task1\n    await task2\n\nasyncio.run(main())\n```\n\nAdvantages of async:\n- Efficiently handle many I/O-bound tasks\n- Reduce context switching overhead\n\nLimitations:\n- Requires event loop\n- Not suitable for CPU-bound tasks without offloading\n\nUse async frameworks like `aiohttp` for web servers."
//         }
//       ]
//     },
//     {
//       "id": "context-managers-and-with-statement",
//       "title": "Context Managers and with Statement",
//       "sections": [
//         {
//           "id": "custom-context-managers",
//           "title": "Custom Context Managers",
//           "text": "Context managers handle setup and cleanup operations automatically.\n\nPython provides `contextlib` to simplify context manager creation.\n\nExample using `@contextmanager` decorator:\n```python\nfrom contextlib import contextmanager\n\n@contextmanager\ndef open_file(filename, mode):\n    f = open(filename, mode)\n    try:\n        yield f\n    finally:\n        f.close()\n\nwith open_file('example.txt', 'w') as file:\n    file.write('Hello, World!')\n```\n\nBenefits:\n- Ensures resources are released even if exceptions occur\n- Improves code readability\n\nUse cases:\n- File handling\n- Database connections\n- Locks and synchronization"
//         },
//         {
//           "id": "enter-and-exit-methods",
//           "title": "__enter__ and __exit__ methods",
//           "text": "Classes can implement `__enter__()` and `__exit__()` methods to define context management behavior.\n\nExample:\n```python\nclass ManagedFile:\n    def __init__(self, filename):\n        self.filename = filename\n\n    def __enter__(self):\n        self.file = open(self.filename, 'w')\n        return self.file\n\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        self.file.close()\n\nwith ManagedFile('hello.txt') as f:\n    f.write('Hello, world!')\n```\n\nThe `__exit__` method can handle exceptions if needed by inspecting its parameters.\n\nThis approach provides precise control over resource management."
//         }
//       ]
//     }
//   ]
// }
];
