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
        A.innerText = country.A;
        B.innerText = country.B;
        C.innerText = country.C;
        D.innerText = country.D;
    })

}

// function to select answer
const selectAnswer = (event) => {
    const selectedButton = event.target;
    const buttonValue = event.target.value;
    countriesArr.forEach((country) => {
        if (buttonValue === country.answer) {
            console.log("correct");
        }
    })
}

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

