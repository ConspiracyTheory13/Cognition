// 'use strict'
$(document).ready(function() {
     let questionNumber = 0;
     let score = 0;

     let questionForm =
               '<div class= "quizProgressionTracker">' +
                    '<ul>' +
                         '<li>Question: <span class="questionNumber">0</span>/10</li>' +
                         '<li>Score: <span class="score">0</span></li>' +
                    '</ul>' +
               '</div>' +
               '<form role="questionandanswers">' +
               '<h1>' + STORE[0].question + '</h1>' +
               '<input type="radio" class= "answerOption" name="answer" value="" checked>' + STORE[questionNumber].answers[0] + '<br>' +
               '<input type="radio" class= "answerOption" name="answer" value="">' + STORE[questionNumber].answers[1] + '<br>' +
               '<input type="radio" class= "answerOption" name="answer" value="">' + STORE[questionNumber].answers[2] + '<br>' +
               '<input type="radio" class= "answerOption" name="answer" value="">' + STORE[questionNumber].answers[3] + '<br>' +
               '</form>'+
               '<button type="button" class="bttn" id="nextBttn">Next Question!</button>'


     $('.startBttn').on("click",(function(event){
          $('#answerFormRender').append(questionForm);
          $("#answerFormRender").modal({
                    fadeDuration: 100,
                    closeExisting: false,
                    escapeClose: false,
                    clickClose: false,
                    showClose: false
          });

     nxtButton();
     }));

function nxtButton() {
          //for loop?
          if (questionNumber < STORE.length) {
          $('#nextBttn').on("click", (function(event) {
          console.log('nextbuttonfires');
          questionNumber ++;
          return questionForm = '<form id"questionAnswers" role="questionandanswers">' +
          '<h1>' + STORE[questionNumber].question + '</h1>' +
          '<input type="radio" class= "answerOption" name="answer" value="" checked>' + STORE[questionNumber].answers[0] + '<br>' +
          '<input type="radio" class= "answerOption" name="answer" value="">' + STORE[questionNumber].answers[1] + '<br>' +
          '<input type="radio" class= "answerOption" name="answer" value="">' + STORE[questionNumber].answers[2] + '<br>' +
          '<input type="radio" class= "answerOption" name="answer" value="">' + STORE[questionNumber].answers[3] + '<br>' +
          '</form>' +
          $("#answerFormRender").html(questionForm) +
          nxtButton();
          }));
          } else {
          renderResults();
          restartQuiz();
          $('.questionNumber').text(10);
          }}

// $('#nextBttn').on("click", (function(event){
// console.log('nextbuttonfires');
// questionNumber ++;
// questionForm = '<form id"questionAnswers" role="questionandanswers">' +
// '<h1>' + STORE[questionNumber].question + '</h1>' +
// '<input type="radio" class= "answerOption" name="answer" value="" checked>' + STORE[questionNumber].answers[0] + '<br>' +
// '<input type="radio" class= "answerOption" name="answer" value="">' + STORE[questionNumber].answers[1] + '<br>' +
// '<input type="radio" class= "answerOption" name="answer" value="">' + STORE[questionNumber].answers[2] + '<br>' +
// '<input type="radio" class= "answerOption" name="answer" value="">' + STORE[questionNumber].answers[3] + '<br>' +
// '</form>'
// $("#answerFormRender").html(questionForm);
// }));
// }



     // function buildQuestion() {
     //
     //      if (questionNumber < STORE.length) {
     //           questionNumber ++;
     //           return  `<div class="question-${questionNumber[0]}">
     //                    <h1>${STORE[questionNumber].question}</h1>
     //                    <form>
     //                    <fieldset>
     //                    <label class="answerOption">
     //                    <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
     //                    <span>${STORE[questionNumber].answers[0]}</span>
     //                    </label>
     //                    <label class="answerOption">
     //                    <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
     //                    <span>${STORE[questionNumber].answers[1]}</span>
     //                    </label>
     //                    <label class="answerOption">
     //                    <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
     //                    <span>${STORE[questionNumber].answers[2]}</span>
     //                    </label>
     //                    <label class="answerOption">
     //                    <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
     //                    <span>${STORE[questionNumber].answers[3]}</span>
     //                    </label>
     //                    <button type="submit" class="submitButton">Submit</button>
     //                    </fieldset>
     //                    </form>
     //                    </div>`;
//          } else {
//          renderResults();
//          restartQuiz();
//          $('.questionNumber').text(10);
//          }
// }

function advanceQuestionNumber () {
     questionNumber ++;
     $('.questionNumber').text(questionNumber+1);
}

function updateScore() {
     score++;
}

function callQuestion () {
     $('.questionAnswerForm').html(buildQuestion());
};

     // function renderQuiz () {
     //   startQuiz();
     //   renderQuestion();
     //   userSelectAnswer();
     //   renderNextQuestion();
     // }
     //
     // $(renderQuiz);
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


});



//                }
// // function startbttn:
//when jQuery calls questionForm, I need it to move a question and it's answers
//from my const STORE in the file questionlibrary.js. The question needs to be
// appended into h1, and the answers need to be appended into each radio button.

// submitAnswer, function tallyUserScore:
// on submit, I need it to check submitted answer against correctAnswer in
// STORE.questionLibrary.js, if correct I need it to increase correctScore by one, if
// incorrect I need it to increase incorrectScore by one.

// function nextQuestion:
// call another question from STORE.questionLibrary.js
// This question cannot be the same question from store, additionally this function
// must render a previous question button.
// on submit, repeat function tallyUserScore

// reiterate 4 or 9 times(depends on how many questions I want) using function
//callQuestion

//on load of final question, reload submit button that will tallyUserFinalScore then
//use an if else loop, for scores above half go to one screen, for scores below half go
//to another. Regardless of score- a restart button is neccessary.

     // $().append()

// 'modal:before-open';

     // $( "#dataTable tbody tr" ).on( "click", function() {
     //   console.log( $( this ).text() );
     // });

// <div class="quizProgression">

// </div>

// Over all the quiz will need to load the
// quizStart page that contains the beginning
// paragraph and the "start quiz" button

//load next question

//repeat 9 tiimes under final question,
//then load scoring page and restart button

//candy features;
//pagination instead of forward/backwards bttns
