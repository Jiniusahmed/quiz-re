/*const quizData = [
    {
        question:"How old is you?",
        a:"10",
        b:"17",
        c:"26",
        d:"110",
        correct: "c"
    },{
        question:"What is the most used proggraming languge in 2021?",
        a:"Java",
        b:"c",
        c:"Python",
        d:"Javascript",
        correct:"d"
    },{
        question:"Who is the president of US?",
        a:"Saifur Rahman Nirob",
        b:"Minhaz Rafi",
        c:"A.B siddik",
        d:"Jinius Ahmed",
        correct:"a"
    },{
        question:"What does HTML stand for?",
        a:"Hypertext markup language",
        b:"Cascading style seet",
        c:"Jason Object Notation",
        d:"Application proggraming interface",
        correct:"a"
    },{
        question:"What year Javascript Launched",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"None of the approve",
        correct:"d"
    }
];

const quiz = document.getElementById('quiz');
const answerels = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


et currentQuiz = 0;
let score = 0;
let answer = undefined;



loadquiz();


function loadquiz(){
    deselectedanswer()
    
   
    const currentquizData = quizData[currentquiz];

    questionEl.innerText = currentquizData.question;

    a_text.innerText = currentquizData.a;
    b_text.innerText = currentquizData.b;
    c_text.innerText = currentquizData.c;
    d_text.innerText = currentquizData.d;


    
}















function getselected(){
    const answerels = document.querySelectorAll(".answer");




    let answer = undefined;

    answerels.forEach((answerels) =>{
        if(answerels.checked){
            answer = answerels.id;
        }
    });

      return answer;
    
}






function deselectedanswer(){
    answerels.forEach((answerels) =>{
        answerels.checked = false;
    });
};




submitBtn.addEventListener("click",()=>{
    const answer = getselected();




if(answer){

    if(answer=== quizData[currentquiz].correct){
        score++;
    }



    currentquiz++;

    if(answer){
        if(currentquiz < quizData.length){
            loadquiz();
        }else{
            alert("you finished your all work")
        }
    
    }
        
}    
     
});






*/














const quizData = [{
    question: 'How old is Saifur Islam Nirob?',
    a: '24 Age',
    b: '27 Age',
    c: '29 Age',
    d: '32 Age',
    correct: 'c',
}, {
    question: 'What is the most use programming language in 2020?',
    a: 'Python',
    b: 'Java',
    c: 'C++',
    d: 'JavaScript',
    correct: 'b',
}, {
    question: 'Who is the Prime Minister of Bangladesh?',
    a: 'Jinius Ahmed',
    b: 'Khaleda Zia',
    c: 'Saifur Islam Nirob',
    d: 'Sheikh Hasina',
    correct: 'd',
}, {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Application Programming Interface',
    correct: 'a',
}, {
    question: 'What years was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '2001',
    d: 'none of the avobe',
    correct: 'b',
}];

const quiz = document.getElementById('quiz');
const answerEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');


const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let answer = undefined;

loadQuiz();

function loadQuiz() {
    deselecteAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {

    let answer = undefined;

    answerEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselecteAnswers() {

    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}




submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {

            quiz.innerHTML = `
            <h2>You answer correctly at ${score}/${quizData.length} question</h2> 
            <button onclick="location.reload()">Reload</button>

            `;
        }
    }
});
