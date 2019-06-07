// 1 set up score display (only at the end)
// make sure to bind that cool restart function to the score display
// rewrite replayQuiz to not use reload (contact help if this takes more than 5 minutes to do)

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

    {    
    question: 'The speaker at the cat flatterer convention is asking for audience members to guess the value of an ultra deluxe set of premium cat furniture. “How much do you think it’s worth?” he asks the audience. “At least 3k, right?” the tendency for the audience to then venture guesses closer in range to the speakers represents the:',
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
let currentQuestionIndex = 5; 
let currentSlide = 0;
let buttons = `<button type="button" class="bttn hidden" id="scoreButton">Score me!</button>`
let replayButton= `<button type="button" class="bttn" id="replayButton">Play again?</button>`    

const scoreQuiz = () => {
console.log('scoring quiz')
let selectedAnswer = $(`input[name="question${currentQuestionIndex}"]:checked`).val();
let isCorrect = STORE[currentQuestionIndex].correctAnswer == selectedAnswer
if (isCorrect){
console.log ('ding ding ding!');
    $('.quizModalContainer').html(`
    <div class="correctAnswer">
        Congratulations! Your answer is correct!
        <img src="brainlightbulb.png" alt="brainlightbulblitup">
    </div>
    <button type="button" class="bttn" id="nextButton">Next Question!</button>`);
    incremementCorrectScore();
} else {
    $('.quizModalContainer').html(`
    <div class="incorrectAnswer">
        Sorry your answer was` + selectedAnswer +`and the correct answer was` + isCorrect + `.")
    <img src="brainlightbulb.png" alt="brainlightbulbdim">
    </div>
    <button type="button" class="bttn" id="nextButton">Next Question!</button>`);
    incrementIncorrectScore();
}
// So I feel like this should work but it's not, so I just added the button
// to the end of the goodFeedback/badFeedback divs.
// $('#quizModalContainer').append(`<button type="button" class="bttn" id="nextButton">Next Question!</button>`)
console.log(`you've got ${correctScore} right, and ${incorrectScore} wrong.`)
}

const removeStartPageBackground = () => { 
    console.log('hidestartpage running');
    $("Background.png").addClass("hidden");
    }

const displayScorePage = () => {
    if (correctScore === 10) {
        $('#quizModalContainer').html(
            `<div class="slideBackground">
                <div class="finalScoreScreen">
                    <h1 class="finalScoreText">
                        <p> Excellent job! You've gotten a perfect score!</p>
                    </h1>
                </div>
            </div> `)
        
    } else if (correctScore < 9 && correctScore >= 5) {
 
        $('#quizModalContainer').append(      
            `<div class="slideBackground">
                <div class="finalScoreScreen">
                    <h1 class="finalScoreText">
                        <p> Fantastic job! You got ${correctScore} questions correct, and ${incorrectScore} wrong.</p>
                    </h1>
                </div>
            </div>`)
        
      } else {
 
        $('#quizModalContainer').append(
            `<div class="slideBackground">
                <div class="finalScoreScreen">
                    <h1 class="finalScoreText">
                        <p>Please try again! You got ${correctScore} answers correct, and ${incorrectScore} incorrect.<p>
                    </h1>
            </div>`)
    }
    $('#buttons').append(replayButton);
    };

function buildQuizForm() {
console.log('build quiz form is being run!')
var output = [];
const answers = [];
Object.keys(STORE[currentQuestionIndex].answers).forEach(letter =>         
{
   answers.push( `
    <label>
        <form>
            <input type ="radio" name="question${currentQuestionIndex}" value = "${letter}">
            ${letter}:
            ${STORE[currentQuestionIndex].answers[letter]}
     </label> <br>`);
})

console.log(currentQuestionIndex)
let displayQuestionNumber = currentQuestionIndex + 1

output.push(
 `<div class="slideBackground">
       <div  id="currentSlide[` + currentQuestionIndex.toString() + `]">    
           <div id="quizProgressionTracker">
               <ul id="horizontal-list">
                   <li>Question: <span class="currentQuestionIndex">` + displayQuestionNumber + `</span>/10</li>
                   <li> Incorrect Score: ${incorrectScore}</li>
                   <li> Correct Score: ${correctScore}</li>
               </ul>
           </div>
           <div class="question-${currentQuestionIndex}" id="question">
           <h1>${STORE[currentQuestionIndex].question}</h1>
           <div class="answers">${answers.join("")}           
           <button type="button" class="bttn" id="nextButton">Next Question!</button>
           </div>
       </div>
       </div>
       </form>`
)
$("#quizModalContainer").html(output.join(""))
    
const showNextSlide = () => {
    console.log("showNextSlide is firing");
    scoreQuiz();
    $("#quizModalContainer").html("")
    incrementcurrentQuestionIndex();
    let areWeDone = currentQuestionIndex >= STORE.length
    if (areWeDone){
        console.log ('quiz over!')
        displayScorePage()
        } else {
        buildQuizForm();
        }
};

let nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", () => {
showNextSlide();
console.log("Button clicked.");
});
}


const createSlide = () => {
console.log("createslide is firing"); 
};


const startQuiz = () => {
console.log('startQuiz is being run!')
$("#quizModalContainer").html("#modalGutsTemplate")
$("#quizProgressionTracker").html("#quizProgressionTracker")
$("#questionsAndAnswers").html(buildQuizForm())
$("#buttonContainer").html(buttons) 
createSlide();
hideStartPage();
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

const incrementcurrentQuestionIndex = () => {
console.log('incrementcurrentQuestionIndex run')
currentQuestionIndex ++;
}


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

document.getElementById('startButton').addEventListener("click", startQuiz);
// document.getElementById('nextButton').addEventListener("click", showNextSlide);
// document.getElementById('replayButton').addEventListener("click", replayQuiz);
// document.querySelector('form').addEventListener("submit", scoreUserInput);

// document.addEventListener("DOMContentLoaded", function(){

// });  
