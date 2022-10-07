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


// variables to later shuffle questions, and for current question
let randomQuestion;
let currentQuestionIndex;


// function to start
const startQuiz = (event) => {
    startButton.classList.add("hide");
    nextButton.classList.remove("hide");
    randomQuestion = countriesArr.sort(() => Math.random() -0.5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

// function to set new question
const setNextQuestion = (question) => {
    displayNextQuestion(randomQuestion[currentQuestionIndex]);
}

// function to set next question
const displayNextQuestion = (country) => {
    countriesArr.forEach((country) => {
        display.innerText = country.question;

        A.innerText = country.A[0];
        B.innerText = country.B[0];
        C.innerText = country.C[0];
        D.innerText = country.D[0];

        A.dataset.answer = country.A[1];
        B.dataset.answer = country.B[1];
        C.dataset.answer = country.C[1];
        D.dataset.answer = country.D[1];
    })

    reset();

}

// function to select answer
const selectAnswer = (event) => {
    const selectedButton = event.target;
    if (selectedButton.dataset.answer === "correct") {
        selectedButton.classList.add("correct");
    } else {
        selectedButton.classList.add("incorrect");
    }
    nextButton.classList.remove("hide");
};

//function to reset
const reset = () => {
    nextButton.classList.add("hide");

}

// function for clicking on next question

// function for when the correct button is clicked. change colour to green, 

// function countdown

// function

// Add event listener
startButton.addEventListener("click", startQuiz);
answersContainer.addEventListener("click", selectAnswer);

