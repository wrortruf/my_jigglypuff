// =====================================
// QUIZ SECTION
// =====================================

const quizSection = document.getElementById("quizSection");

const quizIntro = document.getElementById("quizIntro");
const quizGame = document.getElementById("quizGame");
const quizResult = document.getElementById("quizResult");

const startQuizBtn = document.getElementById("startQuizBtn");
const nextQuizBtn = document.getElementById("nextQuizBtn");
const replayQuizBtn = document.getElementById("replayQuizBtn");
const quizContinueBtn = document.getElementById("quizContinueBtn");

const quizCurrentQuestion =
    document.getElementById("quizCurrentQuestion");

const quizTotalQuestions =
    document.getElementById("quizTotalQuestions");

const quizScore =
    document.getElementById("quizScore");

const quizProgressFill =
    document.getElementById("quizProgressFill");

const streakCount =
    document.getElementById("streakCount");

const bestStreak =
    document.getElementById("bestStreak");

const quizCategory =
    document.getElementById("quizCategory");

const quizQuestionIcon =
    document.getElementById("quizQuestionIcon");

const quizQuestion =
    document.getElementById("quizQuestion");

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

const correctAnswers =
    document.getElementById("correctAnswers");

const wrongAnswers =
    document.getElementById("wrongAnswers");


// =====================================
// QUESTIONS
// =====================================

const quizQuestions = [

    {
        category: "😂 Funny Question",
        icon: "😂",

        question:
            "Mere baare mein sabse zyada true kya hai?",

        options: [
            "Main bahut serious hoon 😐",
            "Main thoda nikamma hoon 😂",
            "Main kabhi nahi sota 😎",
            "Main hamesha time par hota hoon 🤡"
        ],

        answer: 1,

        correctMessage:
            "Hahaha! Didi mujhe bahut achhe se jaanti hain 😂❤️",

        wrongMessage:
            "Didi... itna bhi innocent mat banao mujhe 😂"
    },


    {
        category: "❤️ Brother-Sister Bond",
        icon: "❤️",

        question:
            "Agar Didi ko kabhi meri zarurat ho, toh main kya karunga?",

        options: [
            "Ignore kar dunga 😴",
            "Baad mein dekhunga 😂",
            "Jitna ho sake hamesha saath rahunga ❤️",
            "Phone silent kar dunga 📵"
        ],

        answer: 2,

        correctMessage:
            "Bilkul! Aapke liye main hamesha available rahunga. 🤍",

        wrongMessage:
            "Nahi nahi... ye wala answer toh galat hai Didi 😭❤️"
    },


    {
        category: "🌸 Personality",
        icon: "🌸",

        question:
            "Meri sabse badi problem kya hai?",

        options: [
            "Overthinking 🤯",
            "Bahut zyada confidence 😎",
            "Bahut jaldi uthna 🌅",
            "Har waqt exercise karna 🏃"
        ],

        answer: 0,

        correctMessage:
            "YES! Overthinking meri permanent membership hai 😂🤯",

        wrongMessage:
            "Didi, meri overthinking ko underestimate kar diya 😭"
    },


    {
        category: "📸 Memory Question",
        icon: "📸",

        question:
            "Humari memories mere liye kya represent karti hain?",

        options: [
            "Bas random photos 📷",
            "Time pass 😂",
            "Meri life ke beautiful moments ❤️",
            "Kuch bhi nahi 😶"
        ],

        answer: 2,

        correctMessage:
            "Exactly! Har memory mere liye bahut special hai. ❤️📸",

        wrongMessage:
            "Nahi Didi... ye photos sirf photos nahi hain. 🥹"
    },


    {
        category: "😂 Who Is More Likely?",
        icon: "🤣",

        question:
            "Hum dono mein se pehle sorry kaun bolega?",

        options: [
            "Didi 😌",
            "Main 😭",
            "Dono ego mein rahenge 😂",
            "Jo pehle bhooka hoga 🍕"
        ],

        answer: 1,

        correctMessage:
            "Haan bhai... kabhi kabhi main hi maan jaunga 😂❤️",

        wrongMessage:
            "Achhaaa... Didi ko mujhse zyada confidence hai 😂"
    },


    {
        category: "🤍 Emotional",
        icon: "🤍",

        question:
            "Mere liye Didi ki sabse important cheez kya hai?",

        options: [
            "Unka phone 📱",
            "Unka fashion 👗",
            "Unka khush rehna aur muskurana ❤️",
            "Unka room 😭"
        ],

        answer: 2,

        correctMessage:
            "Bas isi smile ko hamesha dekhna chahta hoon. 🥹❤️",

        wrongMessage:
            "Nahi Didi... aapki smile se zyada important kuch nahi. 🤍"
    },


    {
        category: "🎁 Surprise Question",
        icon: "🎁",

        question:
            "Agar mujhe Didi ko ek gift dena ho jo kabhi khatam na ho, toh kya dunga?",

        options: [
            "Chocolate 🍫",
            "Flowers 🌹",
            "Ek expensive gift 🎁",
            "Hamesha saath aur support 🤍"
        ],

        answer: 3,

        correctMessage:
            "Exactly! Gift khatam ho sakta hai, support nahi. ❤️",

        wrongMessage:
            "Chocolate bhi achhi hai... par answer kuch aur tha 😂"
    },


    {
        category: "🌈 Future",
        icon: "🌈",

        question:
            "Main Didi ke future ke liye sabse zyada kya chahta hoon?",

        options: [
            "Fame ⭐",
            "Bahut saara paisa 💰",
            "Khushi, sukoon aur success ❤️",
            "Bahut saari shopping 🛍️"
        ],

        answer: 2,

        correctMessage:
            "Yes! Meri sabse badi wish hai ki aap hamesha khush rahein. 🌸",

        wrongMessage:
            "Paisa important hai... par meri wish usse bhi zyada simple hai. ❤️"
    },


    {
        category: "🫶 Our Bond",
        icon: "🫶",

        question:
            "Waqt badalne ke baad bhi hamare bond ke baare mein kya nahi badlega?",

        options: [
            "Kuch bhi nahi",
            "Pyaar aur respect ❤️",
            "Sirf photos 📸",
            "Bas Rakhi ka din 😂"
        ],

        answer: 1,

        correctMessage:
            "Exactly. Waqt badal sakta hai, bond nahi. 🤍",

        wrongMessage:
            "Nahi Didi... kuch cheezein waqt ke saath nahi badalti. ❤️"
    },


    {
        category: "💖 Final Question",
        icon: "💖",

        question:
            "Aapke liye mera sabse honest message kya hai?",

        options: [
            "Aap bas meri Didi hain.",
            "Aap meri life ka ek bahut important hissa hain. ❤️",
            "Aap mujhe bahut irritate karti hain 😂",
            "Mujhe kuch nahi kehna 😶"
        ],

        answer: 1,

        correctMessage:
            "Aur ye answer hamesha true rahega. ❤️🥹",

        wrongMessage:
            "Last question mein bhi galat? 😭😂"
    }

];


// =====================================
// QUIZ VARIABLES
// =====================================

let currentQuizQuestion = 0;

let currentQuizScore = 0;

let currentStreak = 0;

let currentBestStreak = 0;

let totalCorrect = 0;

let totalWrong = 0;

let answerSelected = false;


// =====================================
// TOTAL QUESTIONS
// =====================================

if (quizTotalQuestions) {

    quizTotalQuestions.textContent =
        quizQuestions.length;

}


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

    currentQuizQuestion = 0;
    currentQuizScore = 0;

    currentStreak = 0;
    currentBestStreak = 0;

    totalCorrect = 0;
    totalWrong = 0;

    answerSelected = false;

    quizScore.textContent = "0";
    streakCount.textContent = "0";

    quizIntro.style.display = "none";

    quizResult.style.display = "none";

    quizGame.style.display = "block";

    quizSection.scrollTop = 0;

    loadQuizQuestion();

}


// =====================================
// LOAD QUESTION
// =====================================

function loadQuizQuestion() {

    if (
        !quizQuestions.length ||
        currentQuizQuestion >= quizQuestions.length
    ) {

        finishQuiz();

        return;

    }


    answerSelected = false;


    const data =
        quizQuestions[currentQuizQuestion];


    // Question number

    quizCurrentQuestion.textContent =
        currentQuizQuestion + 1;


    // Progress

    const progress =
        ((currentQuizQuestion) /
        quizQuestions.length) * 100;


    quizProgressFill.style.width =
        progress + "%";


    // Category

    quizCategory.textContent =
        data.category;


    // Icon

    quizQuestionIcon.textContent =
        data.icon;


    // Question

    quizQuestion.textContent =
        data.question;


    // Clear old options

    quizOptions.innerHTML = "";

    quizFeedback.innerHTML = "";

    quizFeedback.className =
        "quiz-feedback";


    // Hide next button

    nextQuizBtn.style.display =
        "none";


    // Create options

    const shuffledOptions =
        data.options.map((text, index) => {

            return {
                text: text,
                originalIndex: index
            };

        });


    shuffleArray(shuffledOptions);


    shuffledOptions.forEach((option) => {

        const button =
            document.createElement("button");

        button.className =
            "quiz-option";


        button.type = "button";


        button.innerHTML = `
            <span class="option-letter">
                ${getOptionLetter(option.originalIndex)}
            </span>

            <span class="option-text">
                ${option.text}
            </span>
        `;


        button.addEventListener(
            "click",
            () => {

                selectQuizAnswer(
                    option.originalIndex,
                    button
                );

            }
        );


        quizOptions.appendChild(button);

    });


    // Small entrance animation

    quizQuestion.style.opacity = "0";
    quizQuestion.style.transform =
        "translateY(12px)";


    setTimeout(() => {

        quizQuestion.style.transition =
            ".5s ease";

        quizQuestion.style.opacity =
            "1";

        quizQuestion.style.transform =
            "translateY(0)";

    }, 50);


    // Scroll question into view on mobile

    setTimeout(() => {

        quizQuestion.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 100);

}


// =====================================
// OPTION LETTER
// =====================================

function getOptionLetter(index) {

    const letters = [
        "A",
        "B",
        "C",
        "D"
    ];

    return letters[index] || "•";

}


// =====================================
// SELECT ANSWER
// =====================================

function selectQuizAnswer(
    selectedIndex,
    selectedButton
) {

    if (answerSelected) return;

    answerSelected = true;


    const data =
        quizQuestions[currentQuizQuestion];


    const optionButtons =
        quizOptions.querySelectorAll(
            ".quiz-option"
        );


    // Disable all

    optionButtons.forEach(button => {

        button.disabled = true;

    });


    const correct =
        selectedIndex === data.answer;


    // =================================
    // CORRECT
    // =================================

    if (correct) {

        currentQuizScore += 10;

        totalCorrect++;

        currentStreak++;


        if (
            currentStreak >
            currentBestStreak
        ) {

            currentBestStreak =
                currentStreak;

        }


        quizScore.textContent =
            currentQuizScore;


        streakCount.textContent =
            currentStreak;


        selectedButton.classList.add(
            "correct"
        );


        quizFeedback.innerHTML = `
            <div class="feedback-icon">
                ❤️
            </div>

            <strong>
                Correct! 🎉
            </strong>

            <p>
                ${data.correctMessage}
            </p>

            <span class="feedback-points">
                +10 Points
            </span>
        `;


        quizFeedback.classList.add(
            "correct-feedback"
        );


        createQuizHearts(
            selectedButton
        );

    }


    // =================================
    // WRONG
    // =================================

    else {

        totalWrong++;

        currentStreak = 0;

        streakCount.textContent =
            "0";


        selectedButton.classList.add(
            "wrong"
        );


        // Highlight correct answer

        optionButtons.forEach(button => {

            const text =
                button.querySelector(
                    ".option-text"
                );

            if (
                text &&
                text.textContent.trim() ===
                data.options[data.answer]
            ) {

                button.classList.add(
                    "correct-answer"
                );

            }

        });


        quizFeedback.innerHTML = `
            <div class="feedback-icon">
                😂
            </div>

            <strong>
                Oops! 😭
            </strong>

            <p>
                ${data.wrongMessage}
            </p>

            <span class="feedback-answer">
                Correct Answer:
                ${data.options[data.answer]}
            </span>
        `;


        quizFeedback.classList.add(
            "wrong-feedback"
        );

    }


    // =================================
    // LAST QUESTION
    // =================================

    if (
        currentQuizQuestion >=
        quizQuestions.length - 1
    ) {

        nextQuizBtn.textContent =
            "See My Result 🏆";

    }


    nextQuizBtn.style.display =
        "inline-flex";


    setTimeout(() => {

        nextQuizBtn.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }, 200);

}


// =====================================
// NEXT QUESTION
// =====================================

function nextQuizQuestion() {

    if (!answerSelected) return;


    currentQuizQuestion++;


    if (
        currentQuizQuestion >=
        quizQuestions.length
    ) {

        finishQuiz();

        return;

    }


    loadQuizQuestion();

}


// =====================================
// FINISH QUIZ
// =====================================

function finishQuiz() {

    quizGame.style.display =
        "none";

    quizResult.style.display =
        "block";


    // Final score

    finalQuizScore.textContent =
        currentQuizScore;


    correctAnswers.textContent =
        totalCorrect;


    wrongAnswers.textContent =
        totalWrong;


    bestStreak.textContent =
        currentBestStreak;


    // Progress complete

    quizProgressFill.style.width =
        "100%";


    // Result title/message

    const result =
        getQuizResult(
            currentQuizScore
        );


    quizResultTitle.textContent =
        result.title;


    quizResultMessage.textContent =
        result.message;


    // Scroll result to top

    quizSection.scrollTop = 0;


    setTimeout(() => {

        quizResult.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 100);


    // Confetti/hearts

    createResultCelebration();

}


// =====================================
// RESULT MESSAGES
// =====================================

function getQuizResult(score) {


    if (score === 100) {

        return {

            title:
                "🏆 World's Best Sister ❤️",

            message:
                "100/100! 😭❤️ Aap toh mujhe mujhse bhi zyada jaanti hain. Officially, aap World's Best Didi hain!"

        };

    }


    if (score >= 80) {

        return {

            title:
                "👑 Perfect Didi Material ❤️",

            message:
                "Bahut khoob Didi! Aap mujhe bahut achhe se jaanti hain. Bas kuch answers mein thoda aur practice chahiye. 😂❤️"

        };

    }


    if (score >= 60) {

        return {

            title:
                "🌸 Amazing Sister ❤️",

            message:
                "Aapne kaafi achha kiya! Kuch answers galat hue, lekin hamara bond kisi score ka mohtaj nahi hai. 🤍"

        };

    }


    if (score >= 40) {

        return {

            title:
                "😂 Thodi Aur Practice",

            message:
                "Didi... lagta hai mujhe aapko aur zyada tang karna padega taaki aap mujhe aur achhe se jaan sakein. 😂❤️"

        };

    }


    return {

        title:
            "🥹 Still The Best Didi",

        message:
            "Score thoda kam ho sakta hai... lekin mere liye aapki jagah kabhi kam nahi ho sakti. ❤️"

    };

}


// =====================================
// SHUFFLE ARRAY
// =====================================

function shuffleArray(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }


    return array;

}


// =====================================
// HEART PARTICLES
// =====================================

function createQuizHearts(target) {

    if (!quizGame) return;


    const rect =
        target.getBoundingClientRect();


    for (
        let i = 0;
        i < 7;
        i++
    ) {

        const heart =
            document.createElement("span");


        heart.className =
            "quiz-floating-heart";


        heart.textContent =
            Math.random() > .4
                ? "❤️"
                : "✨";


        heart.style.left =
            (
                rect.left +
                rect.width / 2 +
                (Math.random() * 80 - 40)
            ) + "px";


        heart.style.top =
            (
                rect.top +
                window.scrollY +
                20
            ) + "px";


        heart.style.animationDelay =
            (Math.random() * .3) + "s";


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 1600);

    }

}


// =====================================
// RESULT CELEBRATION
// =====================================

function createResultCelebration() {

    const emojis = [
        "❤️",
        "✨",
        "🌸",
        "💖",
        "⭐",
        "🤍"
    ];


    for (
        let i = 0;
        i < 20;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.className =
            "quiz-result-particle";


        particle.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.animationDelay =
            Math.random() * 2 + "s";


        particle.style.animationDuration =
            (
                3 +
                Math.random() * 3
            ) + "s";


        quizResult.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 6500);

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

if (nextQuizBtn) {

    nextQuizBtn.addEventListener(
        "click",
        nextQuizQuestion
    );

}


// =====================================
// REPLAY QUIZ
// =====================================

if (replayQuizBtn) {

    replayQuizBtn.addEventListener(
        "click",
        () => {

            // Remove old particles

            quizResult
                .querySelectorAll(
                    ".quiz-result-particle"
                )
                .forEach(
                    particle =>
                        particle.remove()
                );


            startQuiz();

        }
    );

}


// =====================================
// CONTINUE TO AWARD
// =====================================

if (quizContinueBtn) {

    quizContinueBtn.addEventListener(
        "click",
        () => {

            quizSection.classList.remove(
                "active"
            );


            setTimeout(() => {

                if (
                    typeof openAward ===
                    "function"
                ) {

                    openAward();

                } else {

                    console.warn(
                        "openAward() function not found."
                    );

                }

            }, 500);

        }
    );

}


// =====================================
// OPTIONAL:
// Allow openQuiz() from another section
// =====================================

window.openQuiz = openQuiz;


// =====================================
// INITIAL STATE
// =====================================

if (quizSection) {

    quizSection.classList.remove(
        "active"
    );

}


if (quizGame) {

    quizGame.style.display =
        "none";

}


if (quizResult) {

    quizResult.style.display =
        "none";

}