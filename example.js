// let scoreUserInput = () => {
//     event.preventDefault();
//     let userAnswer = $('input:checked');
//     let answer = selected.val();
//     let correctAnswer = `${STORE[questionNumber].correctAnswer}`
// if (answer === correctAnswer) {
//     $('#quizModalContainer').html( `div class="correctAnswer">"Correct!"</div>`)  
// } else {
//     $('#quizModalContainer').html( `div class="incorrectAnswer">"Sorry, the correct answer was ${correctAnswer}!"</div>`) 
// }
// };
    // (answer===correctAnswer) ? $('#quizModalContainer').html( `div class="correctAnswer">"Correct!"</div>`) : ? $('#quizModalContainer').html( `div class="incorrectAnswer">"Sorry, the correct answer was ${correctAnswer}!"</div>`) 

    //  const userIsCorrect = checkUserAnswer(answer);
//     if(userIsCorrect) {
//       generateCorrectFeedback();
//     } else {
//       generateIncorrectFeedback();
//     }
//   });
// }

// }

// //user selects answer on submit run user feedback
// function userSelectAnswer () {
//     $('form').on('submit', function (event) {
//       event.preventDefault();
//       let selected = $('input:checked');
//       let answer = selected.val();
//       let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
//       if (answer === correctAnswer) {
//         selected.parent().addClass('correct');
//         ifAnswerIsCorrect();
//       } else {
//         selected.parent().addClass('wrong');
//         ifAnswerIsWrong();
//       }
//     });
//   }
  
//   }
// document.getElementById("quizForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     scoreUserInput();
// }, false);



//user selects answer on submit run user feedback
function userSelectAnswer () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
      selected.parent().addClass('correct');
      ifAnswerIsCorrect();
    } else {
      selected.parent().addClass('wrong');
      ifAnswerIsWrong();
    }
  });
}



//user feedback for correct answer
function userAnswerFeedbackCorrect () {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it right!</b></p><button type=button class="nextButton">Next</button></div>`);
}

//user feedback for wrong answer
function userAnswerFeedbackWrong () {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  // let iconImage = `${STORE[questionNumber].icon}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it wrong</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

//update score text
function updateScore () {
  changeScore();
  $('.score').text(score);
}

//what happens when the user clicks next
function renderNextQuestion () {
  $('main').on('click', '.nextButton', function (event) {
    changeQuestionNumber();
    renderQuestion();
    userSelectAnswer();
  });
}

//run quiz functions
function createQuiz () {
  startQuiz();
  renderQuestion();
  userSelectAnswer();
  renderNextQuestion();
}

$(createQuiz);


let newSTORE = STORE.map(function(FUCKKK){
    `<div class="question">
    <h1>FUCKKK.question</h1>
    <form class="answerContainer">
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="{FUCKKK.answers[0]" name="answer" required>
    <span>FUCKKK.answers[0]</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="FUCKKK.answers[1]}" name="answer" required>
    <span>FUCKKK.answers[1]</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="FUCKKK.answers[2]" name="answer" required>
    <span>FUCKKK.answers[2]</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="FUCKKK.answers[3]" name="answer" required>
    <span>FUCKKK.answers[3]</span>
    </label>
    </div>
    <button type="nextQuestion" id="nextBttn" class="bttn">Next Question</button>;`
};