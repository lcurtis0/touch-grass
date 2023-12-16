const questions = [
    {
        question:'How are you feeling today?',
        options:[
            { choice:'Happy', insert:'false' },
            { choice:'Sad', insert:'false' },
            { choice:'Angry', insert:'false' },
            { choice:'Excited', insert:'false'},
            { choice:'Other', insert:'true' }
        ]
    },
    {
        question:'What is is causing you to feel this way?',
        options:[
            { choice:'School', insert:'false' },
            { choice:'Work', insert:'false' },
            { choice:'Home', insert:'false' },
            { choice:'Bills', insert:'false'},
            { choice:'Other', insert:'true' }
        ]
    },
    {
        question:'What is your favorite food?',
        options:[
            { choice:'School', insert:'false' },
            { choice:'Work', insert:'false' },
            { choice:'Home', insert:'false' },
            { choice:'Bills', insert:'false'},
            { choice:'Other', insert:'true' }
        ],
    },
    {
        question:'What is your favorite movie?',
        options:['Titanic','Avengers','Harry Potter','The Dark Knight'],
    }
]


const schoolquestion = [
    {
        question:'what about school made you feel this way?',
        options:['Titanic','Avengers','Harry Potter','The Dark Knight'],
    },
]

const workquestion = [
    {
        question:'what about work made you feel this way?',
        options:['Titanic','Avengers','Harry Potter','The Dark Knight'],
    },
]

const homequestion = [
    {
        question:'what about home made you feel this way?',
        options:['Titanic','Avengers','Harry Potter','The Dark Knight'],
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.querySelector("#Next-id");

var askAboutDay = 0;

var currentQuestionIndex = 0;

// ---------------------------------------------
var currentQuestion = questions[currentQuestionIndex];

// ----------------------------------------------

startButton.addEventListener("click", startAsking);

function startAsking() {
    startButton.classList.add("hide");
    questionElement.classList.remove("hide");
    nextButton.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(currentQuestion);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.options.forEach((option) => {
        const button = document.createElement("button");
        button.innerText = option.choice;
        button.classList.add("btn");
        if (option.insert) {
            button.dataset.insert = option.insert;

            const input = document.createElement("input");
            input.classList.add("input");
            input.classList.add("hide");
            input.placeholder = "Enter your answer here";
            input.id = "input";
            answerButtons.appendChild(input);

        }

        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });


    
}