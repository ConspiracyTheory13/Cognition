
// import {STORE} from './questionLibrary2.js';
// function questionLibrary() {
    const STORE = [{
             question: 'You value your status as an informed person who always watches the news and stays up to date on local and world politics via the internet and social media. However, you are often afraid and imagine that crime rates are out of control. Your mind is using the:',
             answers: {
                a:'Depressive Realism heuristic.',
                b:'Availability heuristic.',
                c:'Representativeness heuristic.',
                d:'Anchoring and Adjustment heuristic'
             },
             correctAnswer: 'b'
             },
        
             {
             question: 'Certain words and phrases have powerful emotional affects, when your stomache clenches in dread at the word “cancer” or you feel a sense of unease from the word “death”. What shortcut is your mind using?',
             answers: {
                a:'Affect heuristic.',
                b:'Terror Management Theory',
                c:'Scapegoat Theory',
                d:'Gut Reaction heuristic'
        },
             correctAnswer: 'a'
//this is where the rest of the questions will be pasted in.
            }
    ];


let incorrectScore = 0;
let correctScore = 0;
let questionNumber = 0;
let currentQuestion = 0;
let letter = [];
let currentSlide = 0;

let buttons =
`<button type="button" class="nextButton hidden" id="nextButton">Next Question!</button>       
<button type="button" class="bttn hidden" id="scoreButton">Score me!</button>       
<button type="button" class="bttn hidden" id="replayButton">Play again?</button>`;  

function buildQuizForm() {
    console.log('build quiz form is being run!')
     var output = [];
 STORE.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (var letter in currentQuestion.answers) {
            answers.push( `<label>
          <input type ="radio" name="question${questionNumber}" value = "${letter}">
          ${letter}:
          ${currentQuestion.answers[letter]}
          </label> <br>`);
        }
        //most likely problem is that you're using this id="slideBackground"
        //`id=${'slideBackground'+questionNumber}
        
        output.push(
          `<div class="slideBackground">
                <div class="hidden" +  id="currentSlide[` + questionNumber.toString() + `]">    
                    <div class="table" id="quizProgressionTracker">
                        <ul id="horizontal-list">
                            <li>Question: <span class="currentQuestion">` + currentQuestion + `</span>/10</li>
                            <li> Incorrect Score: ${incorrectScore}</li>
                            <li> Correct Score: ${correctScore}</li>
                        </ul>
                    </div>
                    <div class="question-${questionNumber}">
                    <h1>${STORE[questionNumber].question}</h1>
                    <div class="answers">${answers.join("")}</div>
                    <button type="button" class="bttn hidden" id="nextButton">Next Question!</button>
                </div>
                </div>`
)
    // quizModalContainer.innerHTML = output.join("")
    $("#quizModalContainer").html(output.join(""))
})
}

// const nextButton = document.getElementById("nextButton");
// const slides = document.querySelectorAll(".slide");

const createSlide = () => {
    console.log("createslide is firing"); 
    updateCurrentQuestion();
    updateQuestionNumber();
    currentSlide = document.getElementById('currentSlide['+ questionNumber.toString() + ']');
    currentSlide.classList.toggle("hidden", false);

};

//   const showNextSlide = () => {
//     updateQuestionNumber();
//     updateCurrentQuestion();             
//     showSlide(currentSlide + 1);
//   }



  const startQuiz = () => {
    console.log('startQuiz is being run!')
     $("#quizModalContainer").html("#modalGutsTemplate")
     $("#quizProgressionTracker").html("#quizProgressionTracker")
     $("#questionsAndAnswers").html(buildQuizForm())
     $("#buttonContainer").html(buttons) 
     createSlide();
    //  $("#nextButton").removeClass("hidden");
    //  hideStartPage();
     };


const hideStartPage = () => { 
    console.log('hidestartpage running');
     $("#startingQuizPage").addClass("hidden");
}

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
    //$('.questionNumber').text(questionNumber+1)
};

const userCorrectAnswer = () => {
    incremementCorrectScore();
    correctAnswerFeedback();
}

const userIncorrectAnswer = () => {
    incrementIncorrectScore();
    incorrectAnswerFeedback();
}
  
let replayQuiz = () => {
    location.reload();
};

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('startButton').addEventListener("click", startQuiz);
    // document.getElementById('nextButton').addEventListener("click", plusSlides(n));
    // document.getElementById('replayButton').addEventListener("click", replayQuiz);
    // document.querySelector('form').addEventListener("submit", scoreUserInput);


  
});  
  