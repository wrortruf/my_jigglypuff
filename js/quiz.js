// =====================================
// BROTHER QUIZ
// =====================================

const quizSection = document.getElementById("quizSection");

const quizIntro = document.getElementById("quizIntro");
const quizGame = document.getElementById("quizGame");
const quizResult = document.getElementById("quizResult");

const startQuizBtn = document.getElementById("startQuizBtn");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const continueQuizBtn = document.getElementById("continueQuizBtn");

const quizProgress = document.getElementById("quizProgress");
const quizScore = document.getElementById("quizScore");

const quizProgressFill =
    document.getElementById("quizProgressFill");

const questionNumber =
    document.getElementById("questionNumber");

const questionText =
    document.getElementById("questionText");

const quizOptions =
    document.getElementById("quizOptions");

const quizFeedback =
    document.getElementById("quizFeedback");

const finalQuizScore =
    document.getElementById("finalQuizScore");

const quizResultTitle =
    document.getElementById("quizResultTitle");

const quizResultMessage =
    document.getElementById("quizResultMessage");


// =====================================
// QUIZ QUESTIONS
// =====================================

const quizQuestions = [

    {
        question: "Mere liye aapka sabse important role kya hai? ❤️",

        options: [
            "Sirf meri sister",
            "Meri best friend bhi",
            "Meri teacher",
            "Meri enemy 😂"
        ],

        answer: 1
    },


    {
        question: "Main aapko sabse zyada kis naam se bulata hoon? 😌",

        options: [
            "Didi",
            "Madam",
            "Aunty 😂",
            "Boss"
        ],

        answer: 0
    },


    {
        question: "Agar mujhe koi problem ho toh main sabse pehle kya chahta hoon? 🤍",

        options: [
            "Koi mujhe advice de",
            "Koi meri baat sune",
            "Mujhe akela chhod de",
            "Mujhe khana khila de 😂"
        ],

        answer: 1
    },


    {
        question: "Meri sabse badi weakness kya hai? 😂",

        options: [
            "Overthinking",
            "Bahut zyada padhna",
            "Subah jaldi uthna",
            "Har waqt serious rehna"
        ],

        answer: 0
    },


    {
        question: "Aapke liye meri sabse important feeling kya hai? ❤️",

        options: [
            "Respect",
            "Pyaar",
            "Care",
            "Ye teeno"
        ],

        answer: 3
    },


    {
        question: "Agar hum dono mein fight ho jaaye toh pehle kaun maanega? 😂",

        options: [
            "Didi",
            "Bhai",
            "Dono",
            "Koi nahi 😭"
        ],

        answer: 1
    },


    {
        question: "Main aapko lekar sabse zyada kya chahta hoon? 🌸",

        options: [
            "Aap hamesha khush raho",
            "Aap mujhe gifts do",
            "Aap mujhe treat do 😂",
            "Aap mujhe kabhi daanto nahi"
        ],

        answer: 0
    },


    {
        question: "Mere liye hamari memories kitni important hain? 📸",

        options: [
            "Thodi si",
            "Normal",
            "Bahut zyada",
            "Bilkul nahi"
        ],

        answer: 2
    },


    {
        question: "Agar duniya mein sab kuch badal jaaye toh kya nahi badlega? 🤍",

        options: [
            "Hamari photos",
            "Hamari memories",
            "Mera pyaar aur respect",
            "Mera phone 😂"
        ],

        answer: 2
    },


    {
        question: "Last question... Main aapko kitna pyaar karta hoon? ❤️",

        options: [
            "Thoda",
            "Bahut",
            "Bahut zyada",
            "Iska koi number hi nahi hai ♾️"
        ],

        answer: 3
    }

];


// =====================================
// QUIZ VARIABLES
// =====================================

let currentQuestion = 0;
let score = 0;
let answered = false;


// =====================================
// OPEN QUIZ
// =====================================

function openQuiz() {

    if (!quizSection) return;

    quizSection.classList.add("active");

    quizIntro.style.display = "block";
    quizGame.style.display = "none";
    quizResult.style.display = "none";

    quizSection.scrollTop = 0;

}


// =====================================
// START QUIZ
// =====================================

function startQuiz() {

    currentQuestion = 0;
    score = 0;
    answered = false;

    quizIntro.style.display = "none";
    quizGame.style.display = "block";
    quizResult.style.display = "none";

    quizScore.textContent = "Score: 0";

    showQuestion();

}


// =====================================
// SHOW QUESTION
// =====================================

function showQuestion() {

    answered = false;

    quizFeedback.textContent = "";

    quizFeedback.className = "";

    nextQuestionBtn.style.display = "none";

    const question =
        quizQuestions[currentQuestion];


    // Question number

    questionNumber.textContent =
        currentQuestion + 1;


    // Header counter

    quizProgress.textContent =
        `Question ${currentQuestion + 1} / ${quizQuestions.length}`;


    // Progress bar

    const progress =
        ((currentQuestion) /
        quizQuestions.length) * 100;

    quizProgressFill.style.width =
        progress + "%";


    // Question

    questionText.textContent =
        question.question;


    // Clear old options

    quizOptions.innerHTML = "";


    // Create options

    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className = "quiz-option";

        button.innerHTML = `
            <span class="option-letter">
                ${String.fromCharCode(65 + index)}
            </span>

            <span class="option-text">
                ${option}
            </span>
        `;

        button.addEventListener(
            "click",
            () => checkAnswer(index, button)
        );

        quizOptions.appendChild(button);

    });

}


// =====================================
// CHECK ANSWER
// =====================================

function checkAnswer(selectedIndex, selectedButton) {

    if (answered) return;

    answered = true;


    const question =
        quizQuestions[currentQuestion];


    const allOptions =
        document.querySelectorAll(".quiz-option");


    // Disable all buttons

    allOptions.forEach(button => {

        button.disabled = true;

    });


    // Correct answer

    if (selectedIndex === question.answer) {

        score++;

        selectedButton.classList.add("correct");

        quizFeedback.innerHTML =
            "✨ Correct! Didi knows her bhai very well! ❤️";

        quizFeedback.className =
            "correct-feedback";

    }

    // Wrong answer

    else {

        selectedButton.classList.add("wrong");

        allOptions[
            question.answer
        ].classList.add("correct");

        quizFeedback.innerHTML =
            "😂 Oops! Close one... Correct answer highlighted above ❤️";

        quizFeedback.className =
            "wrong-feedback";

    }


    // Update score

    quizScore.textContent =
        `Score: ${score}`;


    // Show next button

    nextQuestionBtn.style.display =
        "inline-flex";

}


// =====================================
// NEXT QUESTION
// =====================================

function nextQuestion() {

    currentQuestion++;

    if (
        currentQuestion >=
        quizQuestions.length
    ) {

        finishQuiz();

        return;

    }

    showQuestion();

}


// =====================================
// FINISH QUIZ
// =====================================

function finishQuiz() {

    quizGame.style.display = "none";

    quizResult.style.display = "block";

    quizProgressFill.style.width = "100%";


    // Final score

    finalQuizScore.textContent =
        score;


    // Result message

    if (score === 10) {

        quizResultTitle.textContent =
            "Perfect Score! 🥹❤️";

        quizResultMessage.textContent =
            "10/10! Didi, aap toh apne bhai ko usse bhi zyada jaanti hain jitna woh khud ko jaanta hai. 😂❤️";

    }

    else if (score >= 8) {

        quizResultTitle.textContent =
            "Amazing! ❤️";

        quizResultMessage.textContent =
            "Aapko apne nikamme bhai ke baare mein kaafi kuch pata hai. Clearly, bond strong hai! 🤍";

    }

    else if (score >= 5) {

        quizResultTitle.textContent =
            "Not Bad! 😂";

        quizResultMessage.textContent =
            "Thoda aur time mere saath spend karna padega Didi... phir 10/10 pakka! ❤️";

    }

    else {

        quizResultTitle.textContent =
            "Arre Didi! 😭😂";

        quizResultMessage.textContent =
            "Lagta hai bhai ke baare mein thoda revision karna padega. Lekin koi baat nahi... pyaar mein marks nahi dekhe jaate. ❤️";

    }

}


// =====================================
// START BUTTON
// =====================================

if (startQuizBtn) {

    startQuizBtn.addEventListener(
        "click",
        startQuiz
    );

}


// =====================================
// NEXT BUTTON
// =====================================

if (nextQuestionBtn) {

    nextQuestionBtn.addEventListener(
        "click",
        nextQuestion
    );

}


// =====================================
// CONTINUE TO AWARD
// =====================================

if (continueQuizBtn) {

    continueQuizBtn.addEventListener(
        "click",
        () => {

            quizSection.classList.remove(
                "active"
            );

            setTimeout(() => {

                if (typeof openAward === "function") {

                    openAward();

                } else {

                    console.error(
                        "openAward() function not found."
                    );

                }

            }, 700);

        }
    );

}


// =====================================
// INITIAL STATE
// =====================================

if (quizSection) {

    quizSection.classList.remove("active");

}