var currentQuestion = 0
var score = 0
var totQuestions = Object.keys(test).length
console.log(totQuestions)

var container = document.getElementById('quizContainer')
var questionEl = document.getElementById('question')
var opt1 = document.getElementById('option1')
var opt2 = document.getElementById('option2')
var opt3 = document.getElementById('option3')
var opt4 = document.getElementById('option4')
var nextButton = document.getElementById('nextButton')
var resultCount = document.getElementById('result')


function loadQuestion (questionIndex) {
	var q = questions[questionIndex]
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1
	opt2.textContent = q.option2
	opt3.textContent = q.option3
	opt4.textContent = q.option4
}