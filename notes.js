     //    },
        
     //    {
     //         question: 'You and your buddy Larry are flipping coins for a probability experiment. Somehow you’ve come up with heads five times in a row! “That’s it,” Larry says. “The next one has got to be tails. It’s statistically impossible!”. Larry is using the:',
     //         answers: {
     //            a:'Law of the instrument effect',
     //            b:'Statistical Bias',
     //            c:'Gambler Fallacy',
     //            d:'50/50 Theory'
     //    },
     //         correctAnswer: 'c'
     //    },
    
     //    {    question: 'The speaker at the cat flatterer convention is asking for audience members to guess the value of an ultra deluxe set of premium cat furniture. “How much do you think it’s worth?” he asks the audience. “At least 3k, right?” the tendency for the audience to then venture guesses closer in range to the speakers represents the:',
     //         answers: {   
     //            a:'Attentional Bias',
     //            b:'Fluency Heuristic',
     //            c:'Anchoring Heuristic',
     //            d:'Speaker Fallacy'
     //    },
     //         correctAnswer: 'c'
     //    },
        
     //    {
     //         question: 'The tendency for people to value that which is communicated more skillfully or elegantly represents the:',
     //         answers: {
     //            a:'Anchoring Heuristic',
     //            b:'Fluency Heuristic',
     //            c:'Brain in a Vat',
     //            d:'Same Bias'
     //    },     
     //         correctAnswer: 'b'
     //    },
    
     //    {
     //         question: 'The tendency to ignore (generic, general information) and focus on specific information is the:',
     //         answers: {
     //            a:'Simulation heuristic.',
     //            b:'Gambler’s Fallacy',
     //            c:'Impact Bias',
     //            d:'Base rate fallacy'
     //    },
     //         correctAnswer: 'd'
     //    },
        
     //    {
     //         question: 'You watch with baited breath as your race horse glides neck and neck with another, round and around the track. On the final lap your house begins to lag, but at the stretch makes a miraculous recovery. Nonetheless, your horse still loses. “It would have been better if it hadn’t been close at all!” you lament, racking your brain over all the small differences that would have let your horse win. This is an example of the:',
     //         answers: {
     //            a:'Simulation heuristic',
     //            b:'Gambler’s Fallacy',
     //            c:'Impact Bias',
     //            d:'Learned Helplessness'
     //    },
     //         correctAnswer: 'a'
     //    },
        
     //    {
     //         question: 'The tendency for a person to recognize and remember details that confirm preconceived notions is an example of:',
     //         answers: {
     //            a:'Simulation heuristic.',
     //            b:'Observer-expectancy Effect',
     //            c:'Optimism Bias',
     //            d:'Confirmation bias'
     //    },
     //         correctAnswer: 'd'
     //    },
        
     //    {
     //         question: 'The tendency to prescribe a person’s apparent behavior to their personality and to ignore circumstance is the:',
     //         answers: {
     //            a:'Simulation heuristic.',
     //            b:'Gambler Fallacy',
     //            c:'Fundamental Attribution Error',
     //            d:'Learned Helplessness',
    
     //    },     
     //        correctAnswer: 'c'
     //    },
        
     //    {
     //         question: 'The tendency for an individual to attribute the overall validity of a decision based on the eventual outcome is known as',
     //         answers: {
     //            a:'Outcome Bias',
     //            b:'Normalcy Bias',
     //            c:'Omission Bias',
     //            d:'Learned Helplessness'
     //    },
     //         correctAnswer: 'a'
     
     
     
     
     //     const startQuiz = () => { 
//      $("#quizModalContainer").modal({
//               fadeDuration: 100,
//               closeExisting: false,
//               escapeClose: false,
//               clickClose: false,
//               showClose: false
//     }).append(buildQuizForm)
// };
function createSlide(questionNumber) {
     currentSlide = document.getElementById('slide' + [questionNumber])
     currentSlide.classList.remove('hidden');
    
 
     //      console.log("createSlide is firing")
 
 //      var element = document.getElementById("myDIV");
 //      element.classList.remove("mystyle");
 //    }
         //  currentSlide = n;
     
      //  slides[n].addClass('active-slide');
     //  slides[currentSlide].removeClass('active-slide');
 
     //  $('slide'+ [questionNumber]).removeClass('hidden');
     //  id="$('slide` + [questionNumber] + `')
  
     //  if(currentSlide === slides.length-1){
     // //    nextButton.style.display = 'none';
     // //    submitButton.style.display = 'inline-block';
     //  }
     //  else{
     // //    nextButton.style.display = 'inline-block';
     // //    submitButton.style.display = 'none';
     //  }
// } else {f
   // renderResults();
   // restartQuiz();
   // $('.questionNumber').text(10)
//    console.log('else runs');
// }

// let quizProgressionTracker =
// `<div class="table">
//     <ul id="horizontal-list">
//         <li>Question: <span class="currentQuestion"> ${currentQuestion} </span>/10</li>
//         <li> Incorrect Score: ${incorrectScore}</li>
//         <li> Correct Score: ${correctScore}</li>
//     </ul>
// </div>`;   

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

// function createSlide(n) {
//     let i;
//     let slides = document.getElementsByClassName(".slide");
//     $('#currentSlide')
//           .addClass('active');
//     $('#slides')
//         .addClass('hidden')

//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     }    
//     slides[slideIndex-1].style.display = "block";  
// }
//     currentSlide = n;
// };
// let currentSlide = 0;


// let slideIndex = `${STORE[questionNumber].question}`;
// createSlide(slideIndex);

// function plusSlides(n) {
//   createSlide(slideIndex += n);
// }

// function currentSlide(n) {
//   createSlide(slideIndex = n);
// }

//copy paste example code