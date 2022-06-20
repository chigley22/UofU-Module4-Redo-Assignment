// Questions

var questions = [
    {
        title: "Which type of JavaScript language is __ ",
        choices: ["Object-Oriented","Object-Based","Assembly-language","High-level"],
        answer: "Object-Based"
    },
    {
        title: "Which one of the following also known as Conditional Expression:",
        choices: ["Alternative to if-else","Switch statement","If-then-else statement","Immediate if"],
        answer: "Immediate if"
    },
    {
        title: "In JavaScript, what is a block of statement",
        choices: ["Conditional block","Block that combines a number of statements into a single compound statement","Both conditional block and single statement","Block that contains a single statement"],
        answer: "Block that combines a number of statements into a single compound statements"
    },
    {
        title: "When interpreter encounters an empty statements, what will it do:",
        choices: ["Shows Warning","Prompts to complete the statement","Throws an error","Ignores the statement"],
        answer: "Ignores the statement"
    },
    {
        title: "The 'function' and 'var' are known as:",
        choices: ["Keywords","Data Types","Declaration statements","Prototypes"],
        answer: "Declaration statements"
    },
    {
        title: "Which of the following variables take precedence over ther others if the names are the same?",
        choices: ["Global variable","The local element","The two of the above","None of the above"],
        answer: "The local element"
    },
    {
        title: "Which one of the following is the correct way for calling the JavaScript code",
        choices: ["Preprocessor","Triggering Event","RMI","Function/Method"],
        answer: "Function/Method"
    },
    {
        title: "Which of the following type of a variable is volatile",
        choices: ["Mutable variable","Dynamic variable","Volatile variable","Immutable variable"],
        answer: "Mutable variable"
    },
    {
        title: "In JavaScript, what will be used for calling the function definition expression",
        choices: ["Function prototype","Function literal","Function calling","Function declaration"],
        answer: "Function literal"
    },
    {
        title: "Which one of the following is used for the calling a function or a method in the JavaScript:",
        choices: ["Property Access Expression","Functional expression","Invocation expression","Primary expression"],
        answer: "Invocation expression"
    },
]


var beginBtn = document.getElementById("begin")
var timerEl = document.getElementById("time")
var questionsEl = document.getElementById("questions")
var multipleChoiceEl = document.getElementById("multipleChoice")
var submitBtn = document.getElementById("submit")
var initialsEl = document.getElementById("initials")
var timerID
var currentQuestionIndex = 0
var time = questions.length * 15



function beginQuiz() {
    var beginQuizEl = document.getElementById("beginQuiz")
    beginQuizEl.setAttribute("class","hide")

    questionsEl.removeAttribute("class")

    timerID = setInterval(clockTick, 1000)

    timerEl.textContent = time

    getQuestion()
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex]

    var titleEl = document.getElementById("questionHeader")
    titleEl.textContent = currentQuestion.title

    multipleChoiceEl.innerHTML = ""

    currentQuestion.choices.forEach(function (choice, i) {
        var choiceNode = document.createElement("button")
        choiceNode.setAttribute("class","choice")
        choiceNode.setAttribute("value", choice)

        choiceNode.textContent = i + 1 + "." + choice
        choiceNode.onclick = questionClick
        multipleChoiceEl.appendChild(choiceNode)
    })
}


function endQuiz() {
    clearInterval(timerID)

    var endQuizEl = document.getElementById("endQuiz")
    endQuizEl.removeAttribute("class","hide")

    var resultsScoreEl = document.getElementById("resultsScore")
    resultsScoreEl.textContent = time

    questionsEl.setAttribute("class","hide")
}

function clockTick() {
    time--
    timerEl.textContent = time

    if (time <= 0) {
        endQuiz()
    }
}

if (beginBtn !== null){
    beginBtn.onclick = beginQuiz
}

function questionClick() {
    if (this.value !== questions[currentQuestionIndex].answer){
        time -= 15
        if(time < 0) {
            time = 0
        }

        timerEl.textContent = time
    }

    currentQuestionIndex++
    if (currentQuestionIndex === questions.length) {
        endQuiz()
    } else {
        getQuestion()
    }
}

function saveResults () {
    var initials = initialsEl.value.trim()

    if (initials !== "") {
        if (window.localStorage.getItem("results") === null) {
            window.localStorage.setItem("results", JSON.stringify([]))
        }

        var results = JSON.parse(window.localStorage.getItem("results"))

        console.log(results)

        var newResult = {
            result: time,
            initials: initials
        }

        results.push(newResult)
        window.localStorage.setItem("results", JSON.stringify(results))

        window.location.href = "scores.html"
    }
}

if (submitBtn !== null){
    submitBtn.onclick = saveResults
}

