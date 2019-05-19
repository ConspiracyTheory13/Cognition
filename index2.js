import {STORE} from './questionLibrary.js';

let incorrectScore = 0;
let correctScore = 0;
let questionNumber = 0;
let currentQuestion = 0;

// const submitBttn = `<button type="submit" id="submitBttn" class= "bttn" hidden>Score Me!</button>`;
// const replayBttn = `<button type="replay" id="replayBttn" class= "bttn" hidden>Play again?</button>`;
// const nextBttn = `<button type="next" id="nextBttn" class="bttn">Next Question!</button>`;

let questionForm =
    `<div class= "quizProgressionTracker">
    <ul><li>Question: <span class="currentQuestion"> ${currentQuestion} </span>/10</li> </ul>
    <li> Incorrect Score: ${incorrectScore}</li>
    <li> Correct Score: ${correctScore}</li>
    </div> 

    <div class="question-${questionNumber}">
    <h1>${STORE[questionNumber].question}</h1>
    <form class="answerContainer">
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
    <span>${STORE[questionNumber].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
    <span>${STORE[questionNumber].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
    <span>${STORE[questionNumber].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
    <span>${STORE[questionNumber].answers[3]}</span>
    </label>
    </div>
    <button type="nextQuestion" id="nextBttn" class="bttn">Next Question</button>;`  

const incremementCorrectScore = () => {
    correctScore++;
}

const incrementIncorrectScore = () => {
    incorrectScore++;
};

const updateCurrentQuestion = () => {
    currentQuestion ++;
    $('.currentQuestion').text(currentQuestion+1);
}

const updateQuestionNumber = () => { 
    questionNumber ++;
    $('.questionNumber').text(questionNumber+1)
}

const userCorrectAnswer = () => {
    incremementCorrectScore();
    correctAnswerFeedback();
}

const userIncorrectAnswer = () => {
    incrementIncorrectScore();
    incorrectAnswerFeedback();
}

const startQuiz = () => { 
    $("#quizModalContainer").modal({
              fadeDuration: 100,
              closeExisting: false,
              escapeClose: false,
              clickClose: false,
              showClose: false
    }).append($(questionForm));
};

const renderQuestion = () => {
    $('#quizModalContainer').html(questionForm());
};
  
const renderNextQuestion = () => {
        $('#quizModalContainer').on('click', '#nextBttn', function (event) {
        scoreUserInput();
        renderQuestion();
        updateCurrentQuestion();
        updateQuestionNumber();
  })};

// let scoreUser = (correctScore) => {
//     if (correctScore === 10) {
//         $('#quizModalContainer').html( `div class="perfectScore">"perfectScore!"</div>`)  
//     } else if (correctScore < 9 && correctScore >= 5) {
//         $('#quizModalContainer').html( `div class="goodScore">"goodScore!"</div>`) 
//     } else {
//         $('#quizModalContainer').html( `div class="badScore">"Please try again!"</div>`)
//     }
    
//     return (correctScore === 10) ? $('#quizModalContainer').html
//          : (correctScore < 9 && correctScore >=5) ? $('#quizModalContainer').html( `div class="goodScore">"goodScore!"</div>`) 
//          : (correctScore < 5) ? $('#quizModalContainer').html( `div class="badScore">"Please try again!"</div>`)
// };

let replayQuiz = () => {
    location.reload();
};

    document.getElementById('startBttn').addEventListener("click", startQuiz);
    document.getElementById('nextBttn').addEventListener("click", renderNextQuestion);
    document.getElementById('replayBttn').addEventListener("click", replayQuiz);
    document.querySelector('form').addEventListener("submit", scoreUserInput);
