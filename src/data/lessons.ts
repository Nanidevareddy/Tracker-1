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
