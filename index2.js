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
        },
        
        {
             question: 'You and your buddy Larry are flipping coins for a probability experiment. Somehow you’ve come up with heads five times in a row! “That’s it,” Larry says. “The next one has got to be tails. It’s statistically impossible!”. Larry is using the:',
             answers: {
                a:'Law of the instrument effect',
                b:'Statistical Bias',
                c:'Gambler Fallacy',
                d:'50/50 Theory'
        },
             correctAnswer: 'c'
        },
    
        {    question: 'The speaker at the cat flatterer convention is asking for audience members to guess the value of an ultra deluxe set of premium cat furniture. “How much do you think it’s worth?” he asks the audience. “At least 3k, right?” the tendency for the audience to then venture guesses closer in range to the speakers represents the:',
             answers: {   
                a:'Attentional Bias',
                b:'Fluency Heuristic',
                c:'Anchoring Heuristic',
                d:'Speaker Fallacy'
        },
             correctAnswer: 'c'
        },
        
        {
             question: 'The tendency for people to value that which is communicated more skillfully or elegantly represents the:',
             answers: {
                a:'Anchoring Heuristic',
                b:'Fluency Heuristic',
                c:'Brain in a Vat',
                d:'Same Bias'
        },     
             correctAnswer: 'b'
        },
    
        {
             question: 'The tendency to ignore (generic, general information) and focus on specific information is the:',
             answers: {
                a:'Simulation heuristic.',
                b:'Gambler’s Fallacy',
                c:'Impact Bias',
                d:'Base rate fallacy'
        },
             correctAnswer: 'd'
        },
        
        {
             question: 'You watch with baited breath as your race horse glides neck and neck with another, round and around the track. On the final lap your house begins to lag, but at the stretch makes a miraculous recovery. Nonetheless, your horse still loses. “It would have been better if it hadn’t been close at all!” you lament, racking your brain over all the small differences that would have let your horse win. This is an example of the:',
             answers: {
                a:'Simulation heuristic',
                b:'Gambler’s Fallacy',
                c:'Impact Bias',
                d:'Learned Helplessness'
        },
             correctAnswer: 'a'
        },
        
        {
             question: 'The tendency for a person to recognize and remember details that confirm preconceived notions is an example of:',
             answers: {
                a:'Simulation heuristic.',
                b:'Observer-expectancy Effect',
                c:'Optimism Bias',
                d:'Confirmation bias'
        },
             correctAnswer: 'd'
        },
        
        {
             question: 'The tendency to prescribe a person’s apparent behavior to their personality and to ignore circumstance is the:',
             answers: {
                a:'Simulation heuristic.',
                b:'Gambler Fallacy',
                c:'Fundamental Attribution Error',
                d:'Learned Helplessness',
    
        },     
            correctAnswer: 'c'
        },
        
        {
             question: 'The tendency for an individual to attribute the overall validity of a decision based on the eventual outcome is known as',
             answers: {
                a:'Outcome Bias',
                b:'Normalcy Bias',
                c:'Omission Bias',
                d:'Learned Helplessness'
        },
             correctAnswer: 'a'
            }
    ];


let incorrectScore = 0;
let correctScore = 0;
let questionNumber = 0;
let currentQuestion = 0;
let letter = [];

let quizProgressionTracker = `<div class="quizProgressionTracker">
<div class="table">
    <ul id="horizontal-list">
        <li>Question: <span class="currentQuestion"> ${currentQuestion} </span>/10</li>
        <li> Incorrect Score: ${incorrectScore}</li>
        <li> Correct Score: ${correctScore}</li>
    </ul>
</div>
</div>`;

function buildQuiz() {
    var output = [];
    STORE.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
        for (STORE[questionNumber].answers in currentQuestion.answers) {
          answers.push( `<label>
          <input type ="radio" name="question${questionNumber}" value = "${letter}">
          ${letter}:
          ${currentQuestion.answers[letter]}
          </label>`);
        }
        output.push(
          `<div class = "quizModalContainer">
           <div class="question-${questionNumber}">
           <h1>${STORE[questionNumber].question}</h1>
           <div class="answers.join"("")} </div>
           </div>`
         );
    }});
    
    quizModalContainer.innerHTML = output.join("");
    }
    
    // <form class="answerContainer">
    //       <label class="answerOption">
    //       <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
    //       <span>${STORE[questionNumber].answers[0]}</span>
    //       </label>
    //       <label class="answerOption">
    //       <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
    //       <span>${STORE[questionNumber].answers[1]}</span>
    //       </label>
    //       s<label class="answerOption">
    //       <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
    //       <span>${STORE[questionNumber].answers[2]}</span>
    //       </label>
    //       <label class="answerOption">
    //       <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
    //       <span>${STORE[questionNumber].answers[3]}</span>
    //       </label>
    //       </div>          
 
// let questionForm = 
//     `<div class="question-${questionNumber}">
// <h1>${STORE[questionNumber].question}</h1>
// <form class="answerContainer">
// <label class="answerOption">
// <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
// <span>${STORE[questionNumber].answers[0]}</span>
// </label>
// <label class="answerOption">
// <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
// <span>${STORE[questionNumber].answers[1]}</span>
// </label>
// s<label class="answerOption">
// <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
// <span>${STORE[questionNumber].answers[2]}</span>
// </label>
// <label class="answerOption">
// <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
// <span>${STORE[questionNumber].answers[3]}</span>
// </label>
// </div>`

// function iterateQuestionForm() { 
//     // let storeLength = STORE.length;
//     for (var i = 0; i < STORE.Length; i++) {
//         return STORE.questionForm;
//         console.log(STORE[i]);
//     }

    const startQuiz = () => { 
    $("#quizModalContainer").modal({
              fadeDuration: 100,
              closeExisting: false,
              escapeClose: false,
              clickClose: false,
              showClose: false
    }).append(quizProgressionTracker).append(buildQuiz)
    $('#nextButton').removeClass("hidden")
};



// } else {
   // renderResults();
   // restartQuiz();
   // $('.questionNumber').text(10)
//    console.log('else runs');
// }

// const incremementCorrectScore = () => {
//     correctScore++;
// }

// const incrementIncorrectScore = () => {
//     incorrectScore++;
// };

const updateCurrentQuestion = () => {
    currentQuestion ++;
    // $('.currentQuestion').text(currentQuestion+1);
}

const updateQuestionNumber = () => { 
    questionNumber ++;
    // $('.questionNumber').text(questionNumber+1)
};

// const userCorrectAnswer = () => {
//     incremementCorrectScore();
//     correctAnswerFeedback();
// }

// const userIncorrectAnswer = () => {
//     incrementIncorrectScore();
//     incorrectAnswerFeedback();
// }

// const renderQuestion = () => {
//     $('#nextButton').on("click", (function(event) {
//         if (questionNumber < STORE.length) {    
//             updateCurrentQuestion();
//             updateQuestionNumber();
//             $('#quizModalContainer').html(iterateQuestionForm());
//             return questionForm;
//         }
//     }));
// }
  
const renderNextQuestion = () => {
    $('#quizModalContainer').on('click', '#nextBttn', function (event) {
        console.log("Hey from RenderNextQuestion")
        renderQuestion();
        }
        )};

// function renderNextQuestion() {
//     scoreUserInput();
    // renderQuestion();
//     updateCurrentQuestion();
//     updateQuestionNumber();
//   };

// let scoreUser = (correctScore) => {
//     if (correctScore === 10) {
//         $('#quizModalContPainer').html( `div class="perfectScore">"perfectScore!"</div>`)  
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

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('startButton').addEventListener("click", startQuiz);
    // document.getElementById('nextButton').addEventListener("click", questionForm);
    // document.getElementById('replayButton').addEventListener("click", replayQuiz);
    // document.querySelector('form').addEventListener("submit", scoreUserInput);

});

buildQuiz();