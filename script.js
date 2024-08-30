const quizData = [
    {
        question: "quantos é 24x12?",
        a: "288",
        b: "290",
        c: "300",
        d: "312",
        correct: "a",
    },
    {
        question: "qual o valor da divisão de 25 por 7?",
        a: "2,4",
        b: "4,6",
        c: "3,5",
        d: "3,2",
        correct: "c",
    },
    {
        question: "qual o produto de 25x34?",
        a: "740",
        b: "765",
        c: "860",
        d: "850",
        correct: "d",
    },
    {
        question: "qual a soma de 45,7+56,8?",
        a: "101,7",
        b: "103",
        c: "99,8",
        d: "102,5",
        correct: "d",
    },
    {
        question: "quantos é 25+56?",
        a: "81",
        b: "80",
        c: "79",
        d: "78",
        correct: "a",
    },
    {
        question: "qual o resultado da subtração 23,6-15,4?",
        a: "8,2",
        b: "7,9",
        c: "8",
        d: "6,5",
        correct: "a",
    },
    {
        question: "qual a soma de 378+4538?",
        a: "4914",
        b: "4910",
        c: "4916",
        d: "4927",
        correct: "c",
    },
    {
        question: "qual dos seguintes números é primo?",
        a: "18",
        b: "24",
        c: "29",
        d: "42",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})