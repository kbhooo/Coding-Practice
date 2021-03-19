
import data from "./quiz.json";

const $startButton = document.querySelector('.start-button');
const $section = document.querySelector("section");
const $quizBoard = document.querySelector(".board");
const $quizTitle = document.querySelector(".quiz-title");
const $quizCode = document.querySelector(".quiz-code");
const $quizAnswerExample = document.querySelector(".answer-example");
const $quizTotalIndex = data.length;
let quizCurrentIndex = 0;
let score = 0;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  section.remove("show");
  sectionEnd.classList.remove("show");
  sectionQuiz.classList.add("show");
  showQuiz(quizCurrent, correctCount);
  totalScore.textContent = quizTotalIndex;
  countScore.textContent = score;
  showQuiz(quizCurrentIndex);
}




if (dataIndex === 21) {
  resultOfQuiz();
}


function printQuiz() {
    const startButtonCheck = document.querySelector(".start-button");
    const quizLeft = data.length - quizIndex;

  if (startButtonCheck) $section.removeChild($startButton);
  while ($quizAnswerExample.hasChildNodes()) {
    $quizAnswerExample.removeChild($quizAnswerExample.firstChild);
    }

function result() {
    console.log(`정답입니다!`);
    $section.removeChild($quizBoard);
    }

$quizScore.textContent = `${answerScore} / ${data.length}`;
$quizLeft.textContent = quizLeft;
$quizTitle.textContent = data[quizIndex].question;
$quizCode.textContent = "";  

if (data[quizIndex].code !== null) {
  $quizCode.textContent = data[quizIndex].code;
}

for(let i = 0; i < data[quizIndex].choices.length; i++) {
  const $choiceButton = document.createElement("button");
  $choiceButton.textContent = data[quizIndex].choices[i];
  $quizAnswerExample.appendChild($choiceButton);

  $choiceButton.addEventListener("click",checkAnswer);
  } 
}

function clickGameStart() {
    printQuiz();
  }
  
  function init() {
    $startButton.addEventListener("click",clickGameStart);
  }
  
  init()
