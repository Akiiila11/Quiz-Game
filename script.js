var questions = [
  {
    question: "HyperText Markup Language stands for?",
    choices: ["HTML", "CSS", "JQUERY", "XML"],
    answer: "HTML",
  },
  {
    question: "Cascading Style Sheets Stands for?",
    choices: ["CSS", "HTML", "JQUERY", "HTTP"],
    answer: "CSS",
  },
  {
    question: "Which is a javascript Framework/Library?",
    choices: ["React", "Laravel", "Django", "Sass"],
    answer: "React",
  },
  {
    question: "Which is a backend Language?",
    choices: ["PHP", "HTML", "React", "All"],
    answer: "PHP",
  },
  {
    question: "Which is best for AI",
    choices: ["React", "Laravel", "Python", "Sass"],
    answer: "Python",
  },
];

var currentQuestionIndex = 0;
var score = 0;

// display questions
function displayQuestion(){
  if(currentQuestionIndex < questions.length){
    var currentQuestion = questions[currentQuestionIndex]
    document.getElementById("question").innerText = currentQuestion.question

    for (let i=0; i<currentQuestion.choices.length; i++)
    {
      let button = document.getElementById("btn" +i)
      button.innerText = currentQuestion.choices[i]
      button.onclick = function()
      {
        checkAnswer(currentQuestion.choices[i])
      }
    }
    document.getElementById("progress").innerText = "Question" + (currentQuestionIndex + 1) + " of " + questions.length
   }
   else{
    showScores()
   }
}

function showScores(){
  document.getElementById("quiz").innerHTML = " <h2> Quiz Completed!</h2>  <h2> Your Score:  "  + score + "  </h2> <a href='index.html'>Take Quiz Again</a> "
}

function checkAnswer(answer){
  debugger
  var correctAnswer = questions[currentQuestionIndex].answer
  if(answer === correctAnswer) 
  {
    score++
  }
  currentQuestionIndex++
  displayQuestion()

}

// start countdown timer

var timeLeft = 60
var countdownElement = document.getElementById("count-down")

function startCountdown(){
    var timer = setInterval(function(){
        if(timeLeft <= 0){
            clearInterval(timer)
        }
        else{
            countdownElement.innerText = "Time Left: " + timeLeft + "seconds";
            timeLeft--
        }
    },1000)
}
displayQuestion()
startCountdown()

