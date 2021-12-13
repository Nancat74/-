/*все варианты ответа*/ 
const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');

/*our options*/

const optionElements = document.querySelectorAll('.option');

/*question*/
const question = document.getElementById('question');

const numberOfQuestion = document.getElementById('number-of-question'), //номер вопроса
      numberOfAllQuestions = document.getElementById('number-of-all-questions'); //количество всех вопросов

let indexOfQuestion, // индекс текущего вопроса
    indexOfPage = 0; // индекс страницы

const answersTracker = document.getElementById('answers-tracker'); // обертка трекера
const btnNext = document.getElementById('btn-next'); // кнопка далее

let score = 0; //итоговый результат викторины

const corectAnswer = document.getElementById('correct-answer'), //количество правильных ответов
      numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'); //количество всех вопросов(в мод окне)
      btnTryAgain = document.getElementById('btn-try-again'); //кнопка начать викторину заново

const questions = [
    {
        question: 'Какой знак в JavaScript присваивает значение?',
        options: [
        '==',
        '=',
        '===',
        '+',
    ],
        rightAnswer: 1
    },
    {
        question: 'Результат выражения: "20" + 7',
        options: [
            '27',
            '207',
            'undefined',
            'error',
        ],
        rightAnswer: 1
    },
    {    
        question: 'Какой метод массива отбирает элементы, подходящие под условие?',
        options: [
            'map',
            'reduce',
            'filter',
            'push',
    ],
        rightAnswer: 2
    },
    {
        question: 'Java и JavaScript - это одно и то же?',
        options: [
            'да',
            'нет, это 2 разных языка программирования',
            'нет, но можно записывать код Java и JavaScript в одном документе',
            'да, но цели использования отличаются',
    ],
        rightAnswer: 1
    },
];

numberOfAllQuestions.innerHTML = questions.length;

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question; //сам вопрос

    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];

    numberOfQuestion.innerHTML = indexOfPage + 1;//установка текущ стр
    indexOfPage++; //увелич индекса стрs
};
 let completedAnswers = [] //для заданных вопросов

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = false; // якорь проверки одинак вопросов

    if(indexOfPage == questions.length){
        quizOver()
    }else {
        if(completedAnswers.length > 0){
            completedAnswers.forEach(item => {
                if(item == randomNumber){
                    hitDuplicate = true;
                }
            });
            if(hitDuplicate){
                randomQuestion();
            }else {
                indexOfQuestion = randomNumber;
                load();
            }
        }
        if(completedAnswers.length == 0){
            indexOfQuestion = randomNumber;
            load();
        }
    }
        completedAnswers.push(indexOfQuestion);
};
const checkAnswer = el =>{
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer){
        el.target.classList.add('correct');
        updateAnswerTracker('correct');
        score++;
    }else {
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    disabledOptions();

}

for(option of optionElements){
    option.addEventListener('click', e => checkAnswer(e));
}

const disabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.add('disabled');
        if(item.dataset.id == questions[indexOfQuestion].rightAnswer){
            item.classList.add('correct');
        }
    })
}

const enableOptions = () => {
    optionElements.forEach(item =>{
        item.classList.remove('disabled', 'correct', 'wrong');
    })
}
const answerTracker = () => {
    questions.forEach(() => {
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    })
};

const updateAnswerTracker = status => {
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}

const validate = () => {
    if(!optionElements[0].classList.contains('disabled')){
        alert('вам нужно выбрать один из вариантов ответа');
    }else {
        randomQuestion();
        enableOptions();
    }
}

const quizOver = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    corectAnswer.innerHTML = score;
    numberOfAllQuestions2.innerHTML = questions.length;
};

const tryAgain = () => {
    window.location.reload();
};

btnTryAgain.addEventListener('click', tryAgain);

btnNext.addEventListener('click', () => {
    validate();
})

window.addEventListener('load', () => {
    randomQuestion();
    answerTracker();
})

