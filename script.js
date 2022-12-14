
import { countriesArr } from "./files/countries.js";



const messageDisplay = document.querySelector(".message");
const nextButton = document.querySelector(".next-button");
const startButton = document.querySelector(".start-button");
const display = document.querySelector(".question-display");
const score = document.querySelector(".score");
const homeButton = document.querySelector(".home");
const answersContainer = document.querySelector(".answers");
const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");
const D = document.getElementById("D");
let firstCounter = 0;
const cardAnswers = document.querySelectorAll(".cards__answer");
let totalScores = 0;
let answers = false;
let randomQuestion;
let currentQuestionIndex;


const startQuiz = () => {
    startButton.classList.add("hide");
    nextButton.classList.remove("hide");
    randomQuestion = countriesArr.sort(() => Math.random() -0.5);
    currentQuestionIndex = 0;
    setNextQuestion();
    answersContainer.dataset.start = "true";
}


const setNextQuestion = () => {
    displayNextQuestion(randomQuestion[currentQuestionIndex]);
}


const displayNextQuestion = () => {
    display.textContent = countriesArr[firstCounter].question;
    A.textContent = countriesArr[firstCounter].A[0];
    B.textContent = countriesArr[firstCounter].B[0];
    C.textContent = countriesArr[firstCounter].C[0];
    D.textContent = countriesArr[firstCounter].D[0];
    
    A.dataset.answer = countriesArr[firstCounter].A[1];
    B.dataset.answer = countriesArr[firstCounter].B[1];
    C.dataset.answer = countriesArr[firstCounter].C[1];
    D.dataset.answer = countriesArr[firstCounter].D[1];
    
    firstCounter++;
    reset();
}



const selectAnswer = (event) => {
    if (answersContainer.dataset.start === "true") {
        const selectedButton = event.target;
        if (selectedButton.dataset.answer === "correct") {
            answers = true;
            selectedButton.classList.add("correct");
            messageDisplay.innerText = "Congratulation, that is correct!";
        } else if (selectedButton.dataset.answer === "incorrect") {
            selectedButton.classList.add("incorrect");
            messageDisplay.innerText = "That is incorrect."
        }
        nextButton.classList.remove("hide");
    }
};


// reset function when moving on to next question
const reset = () => {
    nextButton.classList.add("hide");
    A.classList.remove("correct", "incorrect");
    B.classList.remove("correct", "incorrect");
    C.classList.remove("correct", "incorrect");
    D.classList.remove("correct", "incorrect");
    messageDisplay.innerText = "";
    A.disabled = false;
    B.disabled = false;
    C.disabled = false;
    D.disabled = false;
} 




const resetPage = () => {
    totalScores = 0;
    score.textContent = `Scores:`;
    startButton.classList.remove("hide");
    answersContainer.dataset.start = "";
    display.innerText = "";
    A.textContent = "";
    B.textContent = "";
    C.textContent = "";
    D.textContent = "";

    A.dataset.answer = "";
    B.dataset.answer = "";
    C.dataset.answer = "";
    D.dataset.answer = "";
    reset();
    A.disabled = true;
    B.disabled = true;
    C.disabled = true;
    D.disabled = true;
}



const disableButtons = (event) => {
    const selectedButton = event.target;
    if (selectedButton === A) {
        B.disabled = true;
        C.disabled = true;
        D.disabled = true;
    } else if (selectedButton === B) {
        A.disabled = true;
        C.disabled = true;
        D.disabled = true;
    } else if (selectedButton === C) {
        A.disabled = true;
        B.disabled = true;
        D.disabled = true;
    } else if (selectedButton === D) {
        A.disabled = true;
        B.disabled = true;
        C.disabled = true;
    }
}


const calculateScores = (event) => {
    const selectedButton = event.target;
    if (selectedButton.dataset.answer == "correct") {
        totalScores++;
    }
    score.textContent = `Score: ${totalScores} / ${countriesArr.length}`;
}



startButton.addEventListener("click", startQuiz);
answersContainer.addEventListener("click", selectAnswer);
nextButton.addEventListener("click", setNextQuestion);
homeButton.addEventListener("click", resetPage);
answersContainer.addEventListener("click", calculateScores);
answersContainer.addEventListener("click", disableButtons);