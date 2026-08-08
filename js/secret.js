// =====================================
// SECRET REVEAL
// =====================================

const secretSection =
    document.getElementById("secretSection");

const secretIntro =
    document.getElementById("secretIntro");

const secretLock =
    document.getElementById("secretLock");

const secretReveal =
    document.getElementById("secretReveal");

const unlockSecretBtn =
    document.getElementById("unlockSecretBtn");

const secretContinueBtn =
    document.getElementById("secretContinueBtn");

const secretOptions =
    document.querySelectorAll(".secret-option");

const secretFeedback =
    document.getElementById("secretFeedback");


// =====================================
// OPEN SECRET
// =====================================

function openSecret(){

    if(!secretSection) return;

    secretSection.classList.add("active");

    secretIntro.style.display = "block";

    secretLock.classList.remove("active");
    secretReveal.classList.remove("active");

    secretFeedback.textContent = "";

    secretSection.scrollTop = 0;

}


// =====================================
// UNLOCK BUTTON
// =====================================

if(unlockSecretBtn){

    unlockSecretBtn.addEventListener("click",()=>{

        secretIntro.style.display = "none";

        secretLock.classList.add("active");

        secretSection.scrollTop = 0;

    });

}


// =====================================
// SECRET QUESTION
// =====================================

secretOptions.forEach(option=>{

    option.addEventListener("click",()=>{

        // Already answered
        if(option.classList.contains("answered")){

            return;

        }

        option.classList.add("answered");

        const answer =
            option.dataset.answer;

        // =========================
        // CORRECT
        // =========================

        if(answer === "correct"){

            option.classList.add("correct");

            secretFeedback.textContent =
                "❤️ Bilkul sahi... Secret unlocked!";

            secretFeedback.style.color =
                "#4d9b68";

            // Disable all options

            secretOptions.forEach(btn=>{

                btn.style.pointerEvents = "none";

            });

            setTimeout(()=>{

                secretLock.classList.remove("active");

                secretReveal.classList.add("active");

                secretSection.scrollTop = 0;

            },1200);

        }

        // =========================
        // WRONG
        // =========================

        else{

            option.classList.add("wrong");

            secretFeedback.textContent =
                "😂 Galat answer! Ek baar aur socho...";

            secretFeedback.style.color =
                "#c84d6d";

            setTimeout(()=>{

                option.classList.remove("wrong");

                option.classList.remove("answered");

                secretFeedback.textContent = "";

            },700);

        }

    });

});


// =====================================
// CONTINUE TO QUIZ
// =====================================

if(secretContinueBtn){

    secretContinueBtn.addEventListener("click",()=>{

        secretSection.classList.remove("active");

        setTimeout(()=>{

            // Quiz open

            if(typeof openQuiz === "function"){

                openQuiz();

            }

            else{

                const quizSection =
                    document.getElementById("quizSection");

                if(quizSection){

                    quizSection.classList.add("active");

                    quizSection.scrollTop = 0;

                }

            }

        },500);

    });

}