var currentQuestion = 0
var score = 0
var totQuestions = test.length
// alert(totQuestions)
console.log(totQuestions)

var container = document.getElementById('quizContainer')
var questionEl = document.getElementById('question')
var opt1 = document.getElementById('option1')
var opt2 = document.getElementById('option2')
var opt3 = document.getElementById('option3')
var opt4 = document.getElementById('option4')
var nextButton = document.getElementById('nextButton')
var resultCont = document.getElementById('result')


function loadQuestion(questionIndex) {
	var q = test[questionIndex]
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1
	opt2.textContent = q.option2
	opt3.textContent = q.option3
	opt4.textContent = q.option4
}

function loadNextQuestion() {
	var selectedOption = document.querySelector('input[type=radio]:checked')
	if (!selectedOption) {
		alert('please select your answer')
		return
	}

	var answer = selectedOption.value
	// alert(answer + test[currentQuestion].answer)

	if (test[currentQuestion].answer == answer) {
		score += 10
	}

	selectedOption.checked = false
	currentQuestion++
	if (currentQuestion == totQuestions - 1) {
		nextButton.textContent = 'Finish'
	}

	if(currentQuestion == totQuestions) {
		container.style.display = 'none'
		resultCont.style.display = ''
		resultCont.textContent = 'Your Score: ' + score
		return
	}
	loadQuestion(currentQuestion)
}

loadQuestion(currentQuestion)