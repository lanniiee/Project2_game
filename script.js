// make a js file of questions and answers. Then import to this js file.
import { countriesArr } from "./files/countries.js";


// Select elements from HTML
const nextButton = document.querySelector(".next-button");
const startButton = document.querySelector(".start-button");
const display = document.querySelector(".question-display");
const score = document.querySelector(".score");
const countdown = document.querySelector(".score");
const homeButton = document.querySelector(".home");
const answersContainer = document.querySelector(".answers");
const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");
const D = document.getElementById("D");
let firstCounter = 0;


// variables to later shuffle questions, and for current question
let randomQuestion;
let currentQuestionIndex;


// function to start
const startQuiz = () => {
    startButton.classList.add("hide");
    nextButton.classList.remove("hide");
    randomQuestion = countriesArr.sort(() => Math.random() -0.5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

// function to set new question random
const setNextQuestion = () => {
    displayNextQuestion(randomQuestion[currentQuestionIndex]);
}

// function to set next question when clicking next button
const displayNextQuestion = () => {
    display.textContent = countriesArr[firstCounter].question;
    A.textContent = countriesArr[firstCounter].A[0];
    B.textContent = countriesArr[firstCounter].B[0];
    C.textContent = countriesArr[firstCounter].C[0];
    D.textContent = countriesArr[firstCounter].D[0];
    
    A.dataset.answer = countriesArr[firstCounter].A[1];
    B.dataset.answer =countriesArr[firstCounter].B[1];
    C.dataset.answer = countriesArr[firstCounter].C[1];
    D.dataset.aanswer = countriesArr[firstCounter].D[1];
    
    firstCounter++;
    reset();
}
// function to select answer
const selectAnswer = (event) => {
    const selectedButton = event.target;
    if (selectedButton.dataset.answer === "correct") {
        selectedButton.classList.add("correct");
        selectedButton.style.backgroundColor = "green";
    } else {
        selectedButton.classList.add("incorrect");
        selectedButton.style.backgroundColor = "red";
    }
    nextButton.classList.remove("hide");
};

//function to reset
const reset = () => {
    nextButton.classList.add("hide");
}

//function to reset page
const resetPage = () => {
    location.reload();
}

// function countdown

// function

// Add event listener
startButton.addEventListener("click", startQuiz);
answersContainer.addEventListener("click", selectAnswer);
nextButton.addEventListener("click", setNextQuestion);
homeButton.addEventListener("click", resetPage);