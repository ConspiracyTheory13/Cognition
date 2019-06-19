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
let currentQuestionIndex = 0; 
let currentSlide = 0;

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
            <div class="answerFeedback" id="answerFeedbackCorrect">
                    <img src="brainlightbulbcorrect.png" alt="a black light bulb with a brain pattern colored yellow">
                    <label>
                        <h1>Correct!</h1>
                        <button type="button" class="bttn" id="nextSlideButton">Next Question!</button>
                    </label>
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
            <img src="brainlightbulb.png" alt="a black light bulb with a brain pattern colored yellow">
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

const removeStartPageBackground = () => { 
    $("Background.png").addClass("hidden");
    }

const displayScorePage = () => {
    if (correctScore === 10) {
        $('#quizModalContainer').html(
            `<div class="slideBackground">
                <div class="finalScoreScreen">
                    <h1 class="finalScoreText">
                        <label>
                            <p> Excellent job! You've gotten a perfect score!</p>
                        </label>
                    </h1>
                    <button type="button" class="bttn" id="replayButton">Play again?</button>
                </div>
            </div> `)
                
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
});
};

function buildQuizForm() {
var output = [];
const answers = [];
Object.keys(STORE[currentQuestionIndex].answers).forEach(letter =>         
{
   answers.push( `
    <label>
        <form>
            <input type ="radio" checked name="question${currentQuestionIndex}" value = "${letter}">
            ${letter}:
            ${STORE[currentQuestionIndex].answers[letter]}
     </label> <br>`);
})

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
    

let nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", () => {
    scoreQuiz();
    });
}

const startQuiz = () => {
    $("#quizModalContainer").html("#modalGutsTemplate")
    $("#quizProgressionTracker").html("#quizProgressionTracker")
    $("#questionsAndAnswers").html(buildQuizForm())
    createSlide();
    hideStartPage();
};


const hideStartPage = () => { 
    $("#startingQuizPage").addClass("hidden");
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

let replayQuiz = () => {
    location.reload();
};

document.getElementById('startButton').addEventListener("click", startQuiz);
