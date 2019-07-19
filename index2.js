// rewrite replayQuiz to not use reload (contact help if this takes more than 5 minutes to do)

const STORE = [{
    question: 'You value your status as an informed person who always watches the news and stays up to date on local and world politics via the internet and social media. However, you are often afraid and imagine that crime rates are out of control. Your mind is using the:',
    answers: {
       a:'Depressive Realism heuristic',
       b:'Availability heuristic',
       c:'Representativeness heuristic',
       d:'Anchoring and Adjustment heuristic'
    },
    correctAnswer: 'b'
    },

    {
    question: 'Certain words and phrases have powerful emotional affects, when your stomache clenches in dread at the word “cancer” or you feel a sense of unease from the word “death”. What shortcut is your mind using?',
    answers: {
       a:'Affect heuristic',
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
    question: 'The horse you bet on in a race loses by a hair. “It would have been better if it hadn’t been close at all!” you lament, racking your brain over all the small differences that would have let your horse win. This is an example of the:',
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
let currentQuestionIndex = 9; 
let currentSlide = 0;
const lightBulbImage = '<svg xmlns="http://www.w3.org/2000/svg" class="lightbulb" role="img" viewbox="0 0 852 1290" version="1" aria-labelledby"colorableLightbulbImage blackBrainLightbulb"> <title id="colorableLightbulbImage"></title> <desc id="blackBrainLightbulb">A stylistic brain inside of a lightbulb"></desc> <g fill="none" fill-rule="evenodd"><g fill="#000"><ellipse cx="426" cy="421" rx="426" ry="421"/><ellipse cx="426" cy="959" rx="187" ry="104"/><ellipse cx="427" cy="1034" rx="186" ry="104"/><ellipse cx="426" cy="1110" rx="184" ry="98"/><ellipse cx="428" cy="1173" rx="167" ry="82"/><ellipse cx="426" cy="1242" rx="77" ry="49"/><path d="M261 922c-7 0-18-17-31-53-19-53-65-112-103-150-26-25 175-25 603 0-39 39-64 67-74 81"/><path d="M730 719c-31 32-51 54-61 67-15 20-30 41-36 55s-29 81-38 81H261"/></g><path fill="#FFF" fill-rule="nonzero" d="M306 194c-13-3-24-5-35-14-3-2-9-6-9-10 0-5 8-9 11-13 7 7 14 13 24 15 19 5 43-3 45-25l19 4c-6 17-17 35-36 39-2 35-29 62-64 62 5 17 9 33 2 50-2 7-6 12-11 17l-8 8c-2 3 1 8 1 12l-3 16c-1 3-3 6-2 9 0 5 6 9 10 12 10 6 22 6 33 1 3-1 6-2 8-5 3-5 1-15 2-21 3-17 13-33 28-42 2 6 6 11 10 15-4 4-9 8-12 13-10 14-10 32-3 47 3 6 7 11 12 15 3 2 7 4 8 7 1 5-4 11-5 16-14-6-26-17-32-31-7 3-14 7-22 8-20 4-37-5-50-19-15 10-27 18-45 20 5 9 8 19 8 29 30-6 59 2 77 28 5 8 8 16 11 24 9-2 19-2 28 2 4 1 9 5 14 6l10-3 19-3 19 4c3 1 6 2 8 0 6-5 9-17 10-24a102 102 0 0 0-25-93c-2-2-7-5-7-9 0-5 10-12 13-16 9-11 16-24 19-38 4-21 1-41-8-60l-10-16c-2-2-5-5-5-7-1-4 4-9 6-12 5-8 8-16 11-25 11-34 5-80-25-103-28-23-64-6-86 16l-14 16c-2 3-4 7-7 9-2 2-6 0-9-1h-17c-23 5-38 29-35 52 6 32 41 57 73 57 12 0 23-1 32-9s11-19 14-30zM491 223a92 92 0 0 0-1 129c2 2 8 6 8 9 0 4-6 9-9 11a101 101 0 0 0-24 91l11 26c9-2 19-6 29-6l17 3 10 3c5-1 9-5 14-6 9-4 18-4 28-2 6-28 30-50 58-54 10-1 20 0 30 2 0-10 4-19 7-29-16-3-31-8-43-20-6 4-11 10-17 13-12 7-27 9-40 5l-16-7c-6 15-19 23-32 31l-7-18c23-7 32-39 23-60l-8-13c-2-2-6-4-6-6-1-5 6-12 8-16a66 66 0 0 1 29 50c0 6-2 12 4 16 12 8 27 8 39 0 4-3 9-7 9-12 0-4-3-9-4-14-1-8 0-15 1-23-15-9-26-28-25-46l6-27-20-4c-15-5-29-16-36-30-3-5-4-11-6-17 0-3 0-8-2-10-3-4-10-6-14-9-10-8-18-19-21-32 4-1 13-5 17-3l4 8c3 5 6 9 10 12 17 12 44 5 56-11 3 3 12 9 12 13s-6 8-9 10c-11 8-22 11-35 14 2 11 5 21 13 29 10 9 22 10 34 10 34 0 77-32 72-70-4-21-19-38-41-40l-13 2-6 1c-3-1-5-6-7-8l-14-18a72 72 0 0 0-61-27c-19 2-36 17-44 33-16 28-16 63-3 92 3 9 8 19 15 25z"/><path fill="#FFF"class="correctLightbulb" fill-rule="nonzero" d="M681 189c-8 19-19 35-36 46-13 9-31 11-38 26-12 24 3 54 31 54-4 5-8 10-10 16-10 27 19 47 43 49 18 2 34-6 52-6 9 1 17 3 25 6 3 1 8 5 12 3 3-1 4-5 6-8 4-9 6-18 6-28 0-35-32-64-66-64 4-6 8-11 11-18 9-21 10-52-11-67-8-5-16-7-25-9zM146 283c-39 0-70 35-66 74 1 11 7 19 12 28 12-3 22-9 35-10 17-3 33 7 49 6 25-1 58-21 48-50-2-6-6-11-10-16 28 0 43-30 31-54-6-12-17-14-28-20a99 99 0 0 1-42-43c-2-3-3-7-6-7-5-2-13 2-18 4-19 10-25 33-21 53 2 14 9 24 16 35zM139 583c-11 34-1 79 39 87h18c6 0 12-1 17-3 0 25-1 56 27 68l14 4c9 1 18 0 26-2 4-1 9-4 13-3l7 5 12 9c18 10 40 13 59 3 37-21 37-71 18-104-4-7-9-15-16-20 27-28 38-76 10-108-5-6-12-11-19-14-9-3-21-3-30 1-4 1-10 7-15 6-4 0-8-5-12-7-10-5-24-9-35-2-8 6-12 17-11 26 0 4 3 10 1 14-2 5-11 8-15 12a46 46 0 0 0-16 37c1 15 12 27 26 32 3 1 10 4 14 3l4-8 7-14c9-13 23-22 39-25l4 18c-12 4-24 10-30 22-13 23 3 54 27 61l-6 18c-21-6-42-29-44-52-11-2-21-4-30-10a58 58 0 0 1-10-95l8-8c2-3 1-7 1-11a49 49 0 0 1 13-28c2-2 5-4 5-7 1-6-4-15-7-20-2-4-5-8-9-11-23-20-53-7-78 0 5-12 9-26 5-39-9-30-46-30-68-15-24 16-33 45-33 72 0 41 13 81 52 101 6 3 12 6 18 7zM687 457c-24-6-54-20-76-2l-10 11c-4 5-10 15-9 22 1 3 4 5 6 7a57 57 0 0 1 13 29c0 3-1 8 1 11l9 8 13 17c14 28 3 62-24 77-9 6-19 8-30 10-3 23-22 45-44 52-1-4-7-12-5-16 2-3 6-5 9-7 5-3 10-8 13-13 17-24 5-61-26-64l4-19a63 63 0 0 1 47 40c1 3 1 6 4 7 5 1 11-2 15-4 22-9 30-34 19-55-4-6-9-12-15-16-3-3-9-5-11-9v-11c0-9 0-19-7-27-10-9-26-6-37 0-4 2-10 9-15 7-7-1-12-7-19-8-23-5-42 8-52 28-10 21-9 47 0 68 3 7 7 12 11 18 2 3 6 6 5 9 0 4-4 7-6 10-5 6-9 12-12 19-12 26-12 61 8 83 18 20 45 23 68 12l15-10 9-7c4-2 10 2 14 3 8 2 16 3 24 2l15-4c18-8 27-26 28-45v-23c26 11 59 0 72-26 8-18 7-39 2-58 54-13 75-72 69-122-3-22-12-47-32-59-20-13-56-14-67 11-6 14-2 31 4 44z"/></g></svg>'

const showNextSlide = () => {
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

const scoreQuiz = () => {
let selectedAnswer = $(`input[name="question${currentQuestionIndex}"]:checked`).val();
let isCorrect = STORE[currentQuestionIndex].correctAnswer == selectedAnswer
if (isCorrect){
    $('#quizModalContainer').html(`
        <label>
            <div id="answerFeedbackCorrect" class="answerFeedback">
                    <label>
                        <h1>Correct! <br>
                        Your current correct score is ${correctScore}, and your incorrect answers is ${incorrectScore}! 
                        </h1>
                    </label>
                    ${lightBulbImage}                   
                    <button type="button" class="bttn" id="nextSlideButton">Next Question!</button>
                    </div>
        </label>`);
    incremementCorrectScore();
} else {
    $('#quizModalContainer').html(`
    <label>
        <div id="answerFeedbackIncorrect" class="answerFeedback">
            <label>   
                <h1>Incorrect! <br>
                        Sorry, your answer was ` + STORE[currentQuestionIndex].answers[selectedAnswer] +` and the correct answer was ` + STORE[currentQuestionIndex].answers[STORE[currentQuestionIndex].correctAnswer] + `."
                </h1>
            </label>
            ${lightBulbImage}
            <button type="button" class="bttn" id="nextSlideButton">Next Question!</button>
        </div>
    </label>`);
    incrementIncorrectScore();
}
let showNextSlideButton = document.getElementById("nextSlideButton");
    nextSlideButton.addEventListener("click", () => {
    showNextSlide();
    })
};

const removeStartPage = () => { 
    $("#startingQuizPage").addClass("hidden");
    }

const displayScorePage = () => {
    if (correctScore === 10) {
        $('#quizModalContainer').html(
            `<div class="slideBackground">
                <div class="finalScoreScreen">
                    <h1>
                        Excellent job! You've gotten a perfect score!
                    </h1>
                    <button type="button" class="bttn" id="replayButton">Play again?</button>
                </div>
            </div>`)
                
    } else if (correctScore < 9 && correctScore >= 5) {
 
        $('#quizModalContainer').append(      
            `<div class="slideBackground">
                <div class="finalScoreScreen">
                    <h1 class="finalScoreText">
                        <label>
                            <p> Fantastic job! You got ${correctScore} questions correct, and ${incorrectScore} wrong.</p>
                        </label>
                    </h1>
                    <button type="button" class="bttn" id="replayButton">Play again?</button>
                </div>
            </div>`)
        
      } else {
 
        $('#quizModalContainer').append(
            `<div class="slideBackground">
                <div class="finalScoreScreen">
                    <h1 class="finalScoreText">
                        <label>
                            <p>Please try again! You got ${correctScore} answers correct, and ${incorrectScore} incorrect.<p>
                        </label>
                    </h1>
                    <button type="button" class="bttn" id="replayButton">Play again?</button>
                </div>
            </div>`)
        
    }

let replayButton = document.getElementById("replayButton");
replayButton.addEventListener("click", () => {
replayQuiz();
displayStarterScreen();
});
};


function buildQuizForm() {
var output = [];
const answers = [];
Object.keys(STORE[currentQuestionIndex].answers).forEach(letter =>         
{
    // <form class="userInputForm"></form>
   answers.push(`<label>
   <input type ="radio" checked name="question${currentQuestionIndex}" value = "${letter}">
   ${letter}:
   ${STORE[currentQuestionIndex].answers[letter]}
   </label>`);
})

let displayQuestionNumber = currentQuestionIndex + 1

output.push(
 `<div class="slideBackground">
       <div class="currentSlide" id="currentSlide[` + currentQuestionIndex.toString() + `]">    
           <div class="quizProgressionTracker">
               <ul class="horizontal-list">
                   <li>Question: <span class="currentQuestionIndex">` + displayQuestionNumber + `</span>/10</li>
                   <li> Incorrect Score: ${incorrectScore}</li>
                   <li> Correct Score: ${correctScore}</li>
               </ul>
           </div>
           <div class="question question-${currentQuestionIndex}" id="question">
           <h1>${STORE[currentQuestionIndex].question}</h1></div>
           <div class="answers">
           <form class="userInputForm"> 
           <div class="answerSpacing"> ${answers.join("")}</div>         
           <button type="button" class="bttn" id="nextButton">Next Question!</button>
           </form> 
       </div>`
)
$("#quizModalContainer").html(output.join(""))
    

let nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", () => {
    scoreQuiz();
    });
}

const startQuiz = () => {
    $("#quizModalContainer").html("#modalGutsTemplate")
    $("#quizProgressionTracker").html("#quizProgressionTracker")
    $("#questionsAndAnswers").html(buildQuizForm())
    hideStartPage();
};


const hideStartPage = () => { 
    $("#startingQuizPage").addClass("hidden");
    console.log("hidestart page fires");
}

const incremementCorrectScore = () => {
    correctScore++;
}

const incrementIncorrectScore = () => {
    incorrectScore++;
};

const incrementcurrentQuestionIndex = () => {
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

// let replayQuiz = () => {
//     location.reload();
// };

const displayStarterScreen = () => {
    $("#quizModalContainer").html("#startingQuizPage")
}

const replayQuiz = () => {
    let incorrectScore = 0;
    let correctScore = 0;
    let currentQuestionIndex = 9; 
    let currentSlide = 0;   
};


document.getElementById('startButton').addEventListener("click", startQuiz);
