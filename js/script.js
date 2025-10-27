//////////////////////////////
//// Target Dom Node
/////////////////////////////

const showQuestionInHeading = document.getElementById("question");
const showOptions = document.getElementById("option");
const catchNextBtn = document.getElementById("nxtBtn");
const catchResetBtn = document.getElementById("reset");
const catchCountNumber = document.getElementById("countNumber");

////////////////////////////////
//// Make Question Object
////////////////////////////////

const questions = [
  {
    question: "Which method is used to deep clone an object in JavaScript?",
    options: [
      "Object.assign()",
      "JSON.parse(JSON.stringify(obj))",
      "obj.clone()",
      "structuredClone(obj)",
    ],
    answer: "structuredClone(obj)",
  },
  {
    question: "What is the output of `typeof NaN` in JavaScript?",
    options: ["undefined", "object", "number", "NaN"],
    answer: "number",
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    options: ["Boolean", "Undefined", "Float", "Symbol"],
    answer: "Float",
  },
  {
    question:
      "Which lifecycle method is invoked after a React component is mounted?",
    options: [
      "componentDidMount",
      "componentWillMount",
      "render",
      "shouldComponentUpdate",
    ],
    answer: "componentDidMount",
  },
  {
    question: "What does the `?.` operator do in JavaScript?",
    options: [
      "Optional chaining",
      "Null check",
      "Object destructuring",
      "Type casting",
    ],
    answer: "Optional chaining",
  },
  {
    question: "In CSS, which property controls stacking order?",
    options: ["z-index", "order", "stacking-order", "layer-index"],
    answer: "z-index",
  },
  {
    question: "Which of the following is a feature of ES6?",
    options: [
      "Var keyword",
      "Arrow functions",
      "Function hoisting",
      "XMLHttpRequest",
    ],
    answer: "Arrow functions",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "style", "id", "css"],
    answer: "style",
  },
  {
    question: "Which of these is NOT a valid HTTP request method?",
    options: ["GET", "POST", "FETCH", "DELETE"],
    answer: "FETCH",
  },
  {
    question: "What will `0.1 + 0.2 === 0.3` return in JavaScript?",
    options: ["true", "false", "NaN", "undefined"],
    answer: "false",
  },
  // {
  //   question: "Which of the following is a pure function in JavaScript?",
  //   options: [
  //     "function add(a,b){ return a+b }",
  //     "function rand(){ return Math.random() }",
  //     "function alertHello(){ alert('Hi') }",
  //     "function setName(name){ this.name=name }",
  //   ],
  //   answer: "function add(a,b){ return a+b }",
  // },
  // {
  //   question:
  //     "What is the default value of `this` in JavaScript functions (non-strict mode)?",
  //   options: ["undefined", "null", "window/global object", "function itself"],
  //   answer: "window/global object",
  // },
  // {
  //   question: "Which of the following is not a React hook?",
  //   options: ["useState", "useEffect", "useRender", "useContext"],
  //   answer: "useRender",
  // },
  // {
  //   question: "In Node.js, which module is used to handle file operations?",
  //   options: ["fs", "path", "http", "os"],
  //   answer: "fs",
  // },
  // {
  //   question: "Which operator is used for exponentiation in JavaScript?",
  //   options: ["^", "**", "Math.pow", "%"],
  //   answer: "**",
  // },
  // {
  //   question: "Which of these is true about closures in JavaScript?",
  //   options: [
  //     "A closure is a function with preserved outer scope variables",
  //     "Closures are only used in classes",
  //     "Closures prevent memory leaks",
  //     "Closures cannot access global variables",
  //   ],
  //   answer: "A closure is a function with preserved outer scope variables",
  // },
  // {
  //   question: "Which of these events does not bubble in JavaScript?",
  //   options: ["click", "focus", "keydown", "dblclick"],
  //   answer: "focus",
  // },
  // {
  //   question: "What will `typeof null` return in JavaScript?",
  //   options: ["null", "undefined", "object", "number"],
  //   answer: "object",
  // },
  // {
  //   question: "Which HTTP status code represents 'Unauthorized'?",
  //   options: ["401", "403", "404", "500"],
  //   answer: "401",
  // },
  // {
  //   question: "In React, which key is important when rendering lists?",
  //   options: ["id", "index", "key", "ref"],
  //   answer: "key",
  // },
  // {
  //   question: "Which CSS property is used for smooth transitions?",
  //   options: ["animation", "transition", "transform", "motion"],
  //   answer: "transition",
  // },
  // {
  //   question: "Which of the following is NOT a JavaScript loop?",
  //   options: ["for", "while", "repeat", "do...while"],
  //   answer: "repeat",
  // },
  // {
  //   question: "Which method converts a JavaScript object to a JSON string?",
  //   options: [
  //     "JSON.parse()",
  //     "JSON.stringify()",
  //     "Object.toString()",
  //     "JSON.objectify()",
  //   ],
  //   answer: "JSON.stringify()",
  // },
];

// use let to create index , score , selectOption variable

let index = 0;
let score = 0;
let selectOption = null;

// show number of question index
// let questionIndex = 0;

// create a function to show question

function showQuestion() {
  
  catchCountNumber.innerText = `${index + 1}/ ${questions.length}`;

  
  /**
   *  question incoming from questions object
   *   index comes from let index = 0;
   */
  let q = questions[index];
  showQuestionInHeading.textContent = q.question;
  catchNextBtn.disabled = true;
  selectOption = null;
  /**
   * options incoming from questions object
   * use forEach loop to show all options
   * in loop create a button for each option
   * append each button to showOptions
   */

  showOptions.innerHTML = "";

  q.options.forEach((items, index) => {
    let arr = ["A", "B", "C", "D"];
    let button = document.createElement("button");
    button.className = "optButton cursor-pointer text-start";
    button.innerHTML = arr[index] + " . " + items;
    button.addEventListener("click", () => {
      selectOption = items;
      heighlightSelection(button);
      catchNextBtn.disabled = false;
    });
    showOptions.appendChild(button);
  });
}

function heighlightSelection(items) {
  let allBtn = showOptions.querySelectorAll("button");
  allBtn.forEach((b) => {
    b.classList.remove("selected");
    b.style.background = "transparent";
  });
  items.classList.add("selected");
  items.style.background = "#84ff009f";
}

catchNextBtn.addEventListener("click", () => {
  if (selectOption === null) return;

  if (selectOption === questions[index].answer) score++;

  index++;
  if (index < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
});

/**
 * create a function for showing results
 * this showing in the dom
 */

function showResults() {
  showQuestionInHeading.textContent = "Quiz Completed!";
  showOptions.innerHTML = `<div class={ w-full text-xl font-medium}>
    
 Your score is ${score * 10} out of ${questions.length * 10}
  
  </div>`;
  showOptions.classList.remove("grid", "grid-cols-2", "gap-7");
  showOptions.classList.add(
    "text-center",
    "flex",
    "justify-center",
    "items-center"
  );
  catchNextBtn.style.display = "none";
}

catchResetBtn.addEventListener("click", () => {
  index = 0;
  score = 0;
  showOptions.classList.add("grid", "grid-cols-2", "gap-7");
  showOptions.classList.remove(
    "text-center",
    "flex",
    "justify-center",
    "items-center"
  );
  catchNextBtn.style.display = "block";

  showQuestion();
});
showQuestion();
