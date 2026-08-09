// =====================================
// ⭐ STARRY WISHES + ❤️ HEART CONSTELLATION
// =====================================

const starSection = document.getElementById("starSection");

const stars = document.querySelectorAll(".wish-star");

const starMessageCard =
    document.getElementById("starMessageCard");

const starMessage =
    document.getElementById("starMessage");

const nextStarBtn =
    document.getElementById("nextStarBtn");

const starCount =
    document.getElementById("starCount");

const finalStarBox =
    document.getElementById("finalStarBox");

const finishJourney =
    document.getElementById("finishJourney");


// =====================================
// 🌸 BLESSINGS
// =====================================

const starBlessings = [

    "🌸 Meri dil se ye dua hai ki Bhagwan aapki har sachchi dua kabool kare aur aapki zindagi ko hamesha khushiyon aur barkat se bhar de.",

    "❤️ Aapki pyari si muskaan hamesha isi tarah chamakti rahe, kyunki aapki ek muskaan se hi apno ke chehre par khushi aa jaati hai.",

    "✨ Bhagwan kare aapke har sapne ko poora hone ka mauka mile aur aapko har kadam par safalta aur khushiyan milti rahein.",

    "🌷 Aapki zindagi hamesha pyaar, sukoon aur khoobsurat yaadon se bhari rahe. Har naya din aapke liye ek nayi umeed lekar aaye.",

    "🤍 Agar kabhi koi mushkil aapke raaste mein aaye, to Bhagwan aapko usse ladne ki himmat aur har baar jeetne ki taqat de.",

    "😊 Aap hamesha isi tarah haste, muskurate aur sabka dil khush karte rahein. Aapki khushi hi meri sabse badi dua hai.",

    "🌈 Har nayi subah aapke liye naye sapne, naye mauke aur anek khushiyan lekar aaye. Aapka har din pehle se bhi zyada khoobsurat ho.",

    "💖 Safalta, pyaar aur sukoon hamesha aapke saath chale. Aap jis bhi raaste par kadam rakhein, har jagah khushiyan hi aapka intezaar karein.",

    "🌺 Mere liye aap sirf meri didi hi nahi, balki meri sabse acchi dost, meri taqat aur meri inspiration bhi hain. Bhagwan aapko hamesha khush rakhe.",

    "⭐ Happy Rakshabandhan! ❤️ Meri ye dua hamesha rahegi ki Bhagwan aapko lambi umar, acchi sehat, beinteha khushiyan aur har sapne ki kamyabi de. Aap hamesha isi tarah muskurati rahein aur meri zindagi ki sabse pyaari didi bani rahein."

];


// =====================================
// VARIABLES
// =====================================

let collected = 0;

let constellationCreated = false;

let shootingStarTimer = null;

let sparkleTimer = null;


// =====================================
// ⭐ OPEN STAR SECTION
// =====================================

function openStars() {

    if (!starSection) {

        console.error("❌ starSection not found!");

        return;

    }

    starSection.classList.add("active");

    collected = 0;

    constellationCreated = false;


    // ---------------------------------
    // Remove old constellation
    // ---------------------------------

    const oldConstellation =
        starSection.querySelector(
            ".heart-constellation"
        );

    if (oldConstellation) {

        oldConstellation.remove();

    }


    // ---------------------------------
    // Reset final box
    // ---------------------------------

    if (finalStarBox) {

        finalStarBox.classList.remove("show");

    }


    // ---------------------------------
    // Reset message
    // ---------------------------------

    if (starMessageCard) {

        starMessageCard.classList.remove("show");

    }


    if (starMessage) {

        starMessage.textContent = "";

    }


    // ---------------------------------
    // Reset counter
    // ---------------------------------

    if (starCount) {

        starCount.textContent =
            `0 / ${stars.length} Stars Collected`;

    }


    // ---------------------------------
    // Reset stars
    // ---------------------------------

    stars.forEach((star) => {

        star.style.display = "block";

        star.style.opacity = "1";

        star.style.pointerEvents = "auto";

        star.style.transform =
            "translate(-50%, -50%) scale(1)";

        star.dataset.clicked = "false";

        star.classList.remove("heart-star");

    });


    // ---------------------------------
    // Start effects
    // ---------------------------------

    startStarEffects();

}


// =====================================
// ⭐ STAR CLICK
// =====================================

stars.forEach((star, index) => {

    star.addEventListener("click", function () {

        if (
            star.dataset.clicked === "true" ||
            constellationCreated
        ) {

            return;

        }


        star.dataset.clicked = "true";

        star.style.pointerEvents = "none";


        // ---------------------------------
        // Click animation
        // ---------------------------------

        star.style.transform =
            "translate(-50%, -50%) scale(1.8)";

        star.style.opacity = "0";


        // ---------------------------------
        // Burst
        // ---------------------------------

        createBurst(star);


        // ---------------------------------
        // Hide after animation
        // ---------------------------------

        setTimeout(() => {

            star.style.display = "none";

        }, 500);


        // ---------------------------------
        // Show blessing
        // ---------------------------------

        if (starMessage) {

            starMessage.textContent =
                starBlessings[index] ||
                "❤️ Aap hamesha khush rahein.";

        }


        if (starMessageCard) {

            starMessageCard.classList.add("show");

        }

    });

});


// =====================================
// ❤️ NEXT BLESSING
// =====================================

if (nextStarBtn) {

    nextStarBtn.addEventListener("click", () => {

        if (starMessageCard) {

            starMessageCard.classList.remove("show");

        }


        collected++;


        if (starCount) {

            starCount.textContent =
                `${collected} / ${stars.length} Stars Collected`;

        }


        // ---------------------------------
        // ALL STARS COLLECTED
        // ---------------------------------

        if (collected >= stars.length) {

            setTimeout(() => {

                createHeartConstellation();

            }, 700);

        }

    });

}


// =====================================
// ❤️ CREATE HEART CONSTELLATION
// =====================================

function createHeartConstellation() {

    if (constellationCreated) {

        return;

    }

    constellationCreated = true;


    if (!starSection) {

        return;

    }


    // =================================
    // Container
    // =================================

    const constellation =
        document.createElement("div");

    constellation.className =
        "heart-constellation";


    // =================================
    // SVG CONNECTING LINES
    // =================================

    const svg =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );

    svg.classList.add(
        "constellation-lines"
    );

    svg.setAttribute(
        "viewBox",
        "0 0 100 100"
    );

    svg.setAttribute(
        "preserveAspectRatio",
        "none"
    );


    // Heart shape coordinates
    // 10 stars

    const positions = [

        { x: 23, y: 31 },

        { x: 36, y: 23 },

        { x: 50, y: 34 },

        { x: 64, y: 23 },

        { x: 77, y: 31 },

        { x: 69, y: 46 },

        { x: 59, y: 58 },

        { x: 50, y: 71 },

        { x: 41, y: 58 },

        { x: 31, y: 46 }

    ];


    // =================================
    // Draw heart connections
    // =================================

    const connections = [

        [0, 1],

        [1, 2],

        [2, 3],

        [3, 4],

        [4, 5],

        [5, 6],

        [6, 7],

        [7, 8],

        [8, 9],

        [9, 0],

        [1, 9],

        [2, 8],

        [2, 6],

        [3, 5]

    ];


    connections.forEach(
        ([from, to], lineIndex) => {

            const line =
                document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "line"
                );

            line.setAttribute(
                "x1",
                positions[from].x
            );

            line.setAttribute(
                "y1",
                positions[from].y
            );

            line.setAttribute(
                "x2",
                positions[to].x
            );

            line.setAttribute(
                "y2",
                positions[to].y
            );

            line.classList.add(
                "constellation-line"
            );

            line.style.animationDelay =
                `${lineIndex * 0.12}s`;

            svg.appendChild(line);

        }
    );


    constellation.appendChild(svg);


    // =================================
    // Create stars
    // =================================

    stars.forEach((star, index) => {

        const pos = positions[index];

        if (!pos) {

            return;

        }


        // Move existing star into constellation

        star.style.display = "block";

        star.style.opacity = "1";

        star.style.pointerEvents = "none";

        star.classList.add("heart-star");


        star.style.left =
            pos.x + "%";

        star.style.top =
            pos.y + "%";


        star.style.transform =
            "translate(-50%, -50%) scale(0)";


        constellation.appendChild(star);


        // Animate one by one

        setTimeout(() => {

            star.style.transform =
                "translate(-50%, -50%) scale(1)";

        }, 300 + index * 120);

    });


    // =================================
    // Center glow
    // =================================

    const centerGlow =
        document.createElement("div");

    centerGlow.className =
        "constellation-center-glow";


    constellation.appendChild(
        centerGlow
    );


    // =================================
    // Center text
    // =================================

    const centerMessage =
        document.createElement("div");

    centerMessage.className =
        "constellation-center";

    centerMessage.innerHTML = `

        <div class="constellation-heart">
            ❤️
        </div>

        <div class="constellation-name">
            ABHILIPSA
        </div>

        <div class="constellation-subtitle">
            My Forever Star ✨
        </div>

    `;


    constellation.appendChild(
        centerMessage
    );


    // =================================
    // Small floating particles
    // =================================

    for (let i = 0; i < 16; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            "constellation-particle";

        particle.textContent =
            i % 2 === 0 ? "✦" : "·";


        particle.style.left =
            (10 + Math.random() * 80) +
            "%";

        particle.style.top =
            (10 + Math.random() * 80) +
            "%";

        particle.style.animationDelay =
            Math.random() * 2 + "s";


        constellation.appendChild(
            particle
        );

    }


    starSection.appendChild(
        constellation
    );


    // =================================
    // Final box
    // =================================

    setTimeout(() => {

        if (finalStarBox) {

            finalStarBox.classList.add("show");

        }

    }, 5200);

}


// =====================================
// ✨ STAR BURST
// =====================================

function createBurst(star) {

    if (!starSection) {

        return;

    }


    const rect =
        star.getBoundingClientRect();

    const sectionRect =
        starSection.getBoundingClientRect();


    const x =
        rect.left -
        sectionRect.left +
        rect.width / 2;


    const y =
        rect.top -
        sectionRect.top +
        rect.height / 2;


    for (let i = 0; i < 12; i++) {

        const burst =
            document.createElement("div");

        burst.className =
            "star-burst";

        burst.textContent =
            i % 2 === 0 ? "✦" : "✨";


        burst.style.left =
            x + "px";

        burst.style.top =
            y + "px";


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            40 +
            Math.random() * 80;


        burst.style.setProperty(
            "--burst-x",
            Math.cos(angle) *
            distance +
            "px"
        );


        burst.style.setProperty(
            "--burst-y",
            Math.sin(angle) *
            distance +
            "px"
        );


        starSection.appendChild(
            burst
        );


        setTimeout(() => {

            burst.remove();

        }, 1200);

    }

}


// =====================================
// 🌠 SHOOTING STAR
// =====================================

function createShootingStar() {

    if (
        !starSection ||
        !starSection.classList.contains("active")
    ) {

        return;

    }


    if (constellationCreated) {

        return;

    }


    const shoot =
        document.createElement("div");

    shoot.className =
        "shooting-star";


    shoot.style.top =
        (5 + Math.random() * 35) +
        "%";


    shoot.style.left =
        "-160px";


    starSection.appendChild(
        shoot
    );


    setTimeout(() => {

        shoot.remove();

    }, 2200);

}


// =====================================
// ✨ FLOATING SPARKLE
// =====================================

function createSparkle() {

    if (
        !starSection ||
        !starSection.classList.contains("active")
    ) {

        return;

    }


    const sparkle =
        document.createElement("div");

    sparkle.className =
        "mini-sparkle";


    sparkle.textContent =
        Math.random() > 0.5
            ? "✨"
            : "✦";


    sparkle.style.left =
        Math.random() * 100 +
        "%";


    sparkle.style.top =
        Math.random() * 100 +
        "%";


    sparkle.style.fontSize =
        (12 + Math.random() * 15) +
        "px";


    starSection.appendChild(
        sparkle
    );


    setTimeout(() => {

        sparkle.remove();

    }, 3000);

}


// =====================================
// Start / Stop Effects
// =====================================

function startStarEffects() {

    if (shootingStarTimer) {

        clearInterval(
            shootingStarTimer
        );

    }

    if (sparkleTimer) {

        clearInterval(
            sparkleTimer
        );

    }


    shootingStarTimer =
        setInterval(
            createShootingStar,
            3500
        );


    sparkleTimer =
        setInterval(
            createSparkle,
            800
        );

}


// =====================================
// ❤️ FINISH JOURNEY
// =====================================

if (finishJourney) {

    finishJourney.addEventListener(
        "click",
        () => {

            if (
                shootingStarTimer
            ) {

                clearInterval(
                    shootingStarTimer
                );

            }


            if (
                sparkleTimer
            ) {

                clearInterval(
                    sparkleTimer
                );

            }


            if (starSection) {

                starSection.classList.remove(
                    "active"
                );

            }


            if (
                typeof openFinal ===
                "function"
            ) {

                openFinal();

            } else {

                console.error(
                    "❌ openFinal() function not found!"
                );

            }

        }
    );

}


// =====================================
// 🌟 OPTIONAL: CLEANUP
// =====================================

window.addEventListener(
    "beforeunload",
    () => {

        if (
            shootingStarTimer
        ) {

            clearInterval(
                shootingStarTimer
            );

        }


        if (sparkleTimer) {

            clearInterval(
                sparkleTimer
            );

        }

    }
);


// =====================================
// EXPORT
// =====================================

window.openStars = openStars;