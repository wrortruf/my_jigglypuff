// =====================================
// FINAL SECTION
// =====================================

const finalSection = document.getElementById("finalSection");
const finalText = document.getElementById("finalText");

const finalPhoto = document.getElementById("finalPhoto");
const finalPhotoBox = document.querySelector(".final-photo-box");
const finalButtons = document.querySelector(".final-buttons");

const replayBtn = document.getElementById("replayBtn");
const galleryBtn = document.getElementById("galleryBtn");
const exitBtn = document.getElementById("exitBtn");


// =====================================
// FINAL TEXT
// =====================================

const finalLines = [

    "Har safar ka ek khoobsurat anjaam hota hai... ❤️",

    "Aur meri is chhoti si journey ka sabse khoobsurat hissa hamesha aap hi rahengi.",

    "Chahe waqt kitna bhi badal jaaye...",

    "Chahe hum kitne bhi bade kyun na ho jaayein...",

    "Mere liye aap hamesha meri sabse pyaari aur sabse khaas didi rahengi. 🤍",

    "Thank You...",

    "😊 Har us muskaan ke liye jo aapne meri wajah se di.",

    "🤗 Har us care ke liye jo aapne bina kahe ki.",

    "🌸 Har us dua ke liye jo aapne mere liye maangi.",

    "💖 Har us pyaar ke liye jo aapne hamesha mujhe diya.",

    "📸 Har us yaad ke liye jo humne saath milkar banayi.",

    "✨ Bhagwan se meri bas itni si dua hai...",

    "Ki aapki zindagi hamesha khushiyon, pyaar aur sukoon se bhari rahe.",

    "❤️ Happy Rakshabandhan, Didi! ❤️",

    "Always With Love...",

    "🤍 Your Nikamma Bhai Pranjal 🤍"

];


// =====================================
// FINAL PHOTOS
// =====================================

const finalPhotos = [

    "assets/images/memories/1.png",
    "assets/images/memories/2.png",
    "assets/images/memories/3.png",
    "assets/images/memories/5.png",
    "assets/images/memories/19.png",
    "assets/images/memories/9.png",
    "assets/images/memories/13.png",
    "assets/images/memories/16.png",
    "assets/images/memories/12.png",
    "assets/images/memories/25.png"

];


// =====================================
// PHOTO TIMER
// =====================================

let photoTimer = null;
let photoIndex = 0;


// =====================================
// OPEN FINAL
// =====================================

function openFinal() {

    if (!finalSection) return;

    // Show final section
    finalSection.classList.add("active");

    // Scroll to top
    finalSection.scrollTop = 0;

    // Reset everything
    finalText.innerHTML = "";

    finalPhotoBox.classList.remove("show");
    finalButtons.classList.remove("show");

    photoIndex = 0;

    const movieCredits = document.getElementById("movieCredits");

    if (movieCredits) {
        movieCredits.classList.remove("show");

        const creditsScroll =
            movieCredits.querySelector(".credits-scroll");

        if (creditsScroll) {
            creditsScroll.style.animation = "none";
            creditsScroll.offsetHeight;
            creditsScroll.style.animation = "";
        }
    }

    // Clear previous timer
    if (photoTimer) {
        clearTimeout(photoTimer);
        photoTimer = null;
    }

    // Start typing
    let index = 0;

    function typeNext() {

        if (index >= finalLines.length) {

            setTimeout(() => {

                playFinalPhotos();

            }, 800);

            return;
        }

        const p = document.createElement("p");

        p.style.opacity = "0";
        p.style.marginBottom = "14px";

        p.textContent = finalLines[index];

        finalText.appendChild(p);

        requestAnimationFrame(() => {

            p.style.transition = "opacity .8s ease";
            p.style.opacity = "1";

        });

        index++;

        setTimeout(typeNext, 1300);
    }

    typeNext();
}


// =====================================
// PLAY FINAL PHOTOS
// =====================================

function playFinalPhotos() {

    if (!finalPhoto || !finalPhotoBox) return;

    // Make sure old timer is gone
    if (photoTimer) {
        clearTimeout(photoTimer);
        photoTimer = null;
    }

    // Start from first photo
    photoIndex = 0;

    showFinalPhoto(photoIndex);

}


// =====================================
// SHOW PHOTO
// =====================================

function showFinalPhoto(index) {

    if (index >= finalPhotos.length) {

        // =====================================
        // PHOTOS FINISHED
        // =====================================

        setTimeout(() => {

            const movieCredits =
                document.getElementById("movieCredits");

            const finalTitle =
                document.getElementById("finalTitle");

            const finalTextElement =
                document.getElementById("finalText");

            const photoBox =
                document.querySelector(".final-photo-box");


            // =====================================
            // HIDE OLD FINAL CONTENT
            // =====================================

            if (finalTitle) {

                finalTitle.style.transition =
                    "opacity 1s ease";

                finalTitle.style.opacity = "0";
            }


            if (finalTextElement) {

                finalTextElement.style.transition =
                    "opacity 1s ease";

                finalTextElement.style.opacity = "0";
            }


            if (photoBox) {

                photoBox.style.transition =
                    "opacity 1s ease";

                photoBox.style.opacity = "0";
            }


            // =====================================
            // SHOW MOVIE CREDITS
            // =====================================

            setTimeout(() => {

                if (!movieCredits) {

                    finalButtons.classList.add("show");

                    return;
                }


                movieCredits.classList.add("show");


                // =====================================
                // RESTART CREDIT ANIMATION
                // =====================================

                const creditsScroll =
                    movieCredits.querySelector(
                        ".credits-scroll"
                    );


                if (creditsScroll) {

                    creditsScroll.style.animation = "none";

                    // Force browser reflow
                    void creditsScroll.offsetHeight;

                    creditsScroll.style.animation =
                        "movieCreditsScroll 32s linear forwards";
                }


                // =====================================
                // CREDITS FINISHED
                // =====================================

                setTimeout(() => {

                    finalButtons.classList.add("show");

                }, 32000);


            }, 1000);


        }, 1500);


        return;
    }

    // Fade out current photo
    finalPhoto.style.opacity = "0";
    finalPhoto.style.transform = "scale(1.08)";

    setTimeout(() => {

        // Change image ONLY after fade out
        finalPhoto.src = finalPhotos[index];

        // Fade in new photo
        requestAnimationFrame(() => {

            finalPhoto.style.opacity = "1";
            finalPhoto.style.transform = "scale(1)";

        });

        // Show photo container
        finalPhotoBox.classList.add("show");

        // Wait 3 seconds before next photo
        photoTimer = setTimeout(() => {

            photoIndex++;

            showFinalPhoto(photoIndex);

        }, 3000);

    }, 600);

}


// =====================================
// FLOATING HEARTS
// =====================================

setInterval(() => {

    if (!finalSection || !finalSection.classList.contains("active")) {
        return;
    }

    const heart = document.createElement("div");

    heart.className = "final-heart";

    heart.innerHTML =
        Math.random() > 0.5 ? "❤️" : "🤍";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.bottom = "-40px";

    heart.style.animationDuration =
        (4 + Math.random() * 3) + "s";

    finalSection.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}, 700);


// =====================================
// REPLAY
// =====================================

if (replayBtn) {

    replayBtn.addEventListener("click", () => {

        if (photoTimer) {
            clearTimeout(photoTimer);
        }

        location.reload();

    });

}


// =====================================
// MEMORY GALLERY
// =====================================

if (galleryBtn) {

    galleryBtn.addEventListener("click", () => {

        if (photoTimer) {
            clearTimeout(photoTimer);
            photoTimer = null;
        }

        finalSection.classList.remove("active");

        setTimeout(() => {

            openMemoryGallery();

        }, 300);

    });

}


// =====================================
// EXIT
// =====================================

// =====================================
// CINEMATIC EXIT / GOODBYE EXPERIENCE
// =====================================

const exitEnding = document.getElementById("exitEnding");

const exitOpening = document.getElementById("exitOpening");
const exitMemory = document.getElementById("exitMemory");
const exitMessage = document.getElementById("exitMessage");
const exitTheEnd = document.getElementById("exitTheEnd");

const exitRestart = document.getElementById("exitRestart");
const restartJourneyBtn =
    document.getElementById("restartJourneyBtn");

const exitMemoryPhoto =
    document.getElementById("exitMemoryPhoto");


// =====================================
// EXIT MEMORY
// =====================================

// Yahan apni favourite photo rakh sakte ho
const exitPhoto =
    "assets/images/memories/25.png";


// =====================================
// TIMERS
// =====================================

let exitTimers = [];

function clearExitTimers() {

    exitTimers.forEach(timer => {
        clearTimeout(timer);
    });

    exitTimers = [];

}


// =====================================
// HELPER
// =====================================

function exitDelay(callback, time) {

    const timer = setTimeout(callback, time);

    exitTimers.push(timer);

    return timer;
}


// =====================================
// HIDE ALL EXIT PHASES
// =====================================

function hideExitPhases() {

    if (exitOpening)
        exitOpening.classList.remove("show");

    if (exitMemory)
        exitMemory.classList.remove("show");

    if (exitMessage)
        exitMessage.classList.remove("show");

    if (exitTheEnd)
        exitTheEnd.classList.remove("show");

}


// =====================================
// START EXIT EXPERIENCE
// =====================================

function startExitExperience() {

    if (!exitEnding) return;


    // Clear previous animation timers
    clearExitTimers();


    // Hide all phases
    hideExitPhases();


    // Hide restart button
    if (exitRestart) {

        exitRestart.classList.remove("show");

    }


    // Set favourite memory
    if (exitMemoryPhoto) {

        exitMemoryPhoto.src = exitPhoto;

    }


    // Reset ending scroll
    exitEnding.scrollTop = 0;


    // Show ending screen
    exitEnding.classList.add("active");


    // =================================
    // PHASE 1
    // =================================

    exitDelay(() => {

        if (exitOpening) {

            exitOpening.classList.add("show");

        }

    }, 800);


    // =================================
    // PHASE 1 → PHASE 2
    // =================================

    exitDelay(() => {

        if (exitOpening) {

            exitOpening.classList.remove("show");

        }

        exitDelay(() => {

            if (exitMemory) {

                exitMemory.classList.add("show");

            }

        }, 900);

    }, 4200);


    // =================================
    // PHASE 2 → PHASE 3
    // =================================

    exitDelay(() => {

        if (exitMemory) {

            exitMemory.classList.remove("show");

        }

        exitDelay(() => {

            if (exitMessage) {

                exitMessage.classList.add("show");

            }

        }, 900);

    }, 8500);


    // =================================
    // PHASE 3 → PHASE 4
    // =================================

    exitDelay(() => {

        if (exitMessage) {

            exitMessage.classList.remove("show");

        }

        exitDelay(() => {

            if (exitTheEnd) {

                exitTheEnd.classList.add("show");

            }

        }, 1000);

    }, 15500);


    // =================================
    // SHOW RESTART
    // =================================

    exitDelay(() => {

        if (exitRestart) {

            exitRestart.classList.add("show");

        }

    }, 19000);

}


// =====================================
// EXIT BUTTON
// =====================================

if (exitBtn) {

    exitBtn.addEventListener("click", () => {

        // Stop final photo slideshow
        if (photoTimer) {

            clearTimeout(photoTimer);

            photoTimer = null;

        }


        // Stop any existing exit animation
        clearExitTimers();


        // Hide final section
        if (finalSection) {

            finalSection.classList.remove("active");

            finalSection.style.opacity = "";

        }


        // Start cinematic ending
        startExitExperience();

    });

}


// =====================================
// START AGAIN
// =====================================

if (restartJourneyBtn) {

    restartJourneyBtn.addEventListener("click", () => {

        clearExitTimers();


        // Hide ending
        if (exitEnding) {

            exitEnding.classList.remove("active");

        }


        // Small pause before restart
        setTimeout(() => {

            location.reload();

        }, 500);

    });

}


// =====================================
// ESC KEY
// =====================================

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        exitEnding &&
        exitEnding.classList.contains("active")
    ) {

        clearExitTimers();

        exitEnding.classList.remove("active");

    }

});