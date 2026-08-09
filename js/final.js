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

if (exitBtn) {

    exitBtn.addEventListener("click", () => {

        if (photoTimer) {
            clearTimeout(photoTimer);
        }

        finalSection.style.transition = "2s";
        finalSection.style.opacity = "0";

        setTimeout(() => {

            document.body.innerHTML = `

                <div style="
                    min-height:100vh;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    background:#000;
                    color:white;
                    font-family:Poppins,sans-serif;
                    text-align:center;
                    padding:25px;
                ">

                    <h1 style="font-size:50px;">
                        ❤️
                    </h1>

                    <h2>
                        Thank You For Being
                        The Best Sister
                    </h2>

                    <p style="
                        margin-top:20px;
                        opacity:.8;
                    ">

                        Made With Love

                        <br>

                        Your Brother 🤍

                    </p>

                </div>

            `;

        }, 2000);

    });

}