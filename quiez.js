// Questions that will be asked
const Questions = [{
	q: "Who is the primeminister of India?",
	a: [{ text: "Manmohan Singh", isCorrect: false },
	{ text: "Amit Shaha", isCorrect: false },
	{ text: "Narendra Modi", isCorrect: true },
	{ text: "J P Nadda", isCorrect: false }
	]

},
{
	q: "What is the capital of Thailand?",
	a: [{ text: "Lampang", isCorrect: false, isSelected: false },
	{ text: "Phuket", isCorrect: false },
	{ text: "Ayutthaya", isCorrect: false },
	{ text: "Bangkok", isCorrect: true }
	]

},
{
	q: "Who is the CM of Maharashtra?",
	a: [{ text: "Devendra Fadnvis", isCorrect: false, isSelected: false },
	{ text: "Ajit Pawar", isCorrect: false },
	{ text: "Uddhav Thakare", isCorrect: false },
	{ text: "Eknath Shinde", isCorrect: true }
	]

},
{
	q: "What is the capital of India",
	a: [{ text: "Surat", isCorrect: false },
	{ text: "Vadodara", isCorrect: false },
	{ text: "Delhi", isCorrect: true },
	{ text: "Mumbai", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
