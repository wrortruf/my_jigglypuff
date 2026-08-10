// ==========================
// Elements
// ==========================

console.log("App Loaded");


const letterSection = document.getElementById("letterSection");
const startBtn = document.getElementById("startBtn");
const welcome = document.getElementById("welcome");

const giftSection = document.getElementById("giftSection");
const giftBox = document.getElementById("giftBox");

const rakhiSection = document.getElementById("rakhiSection");

const memorySection = document.getElementById("memorySection");
const continueBtn = document.getElementById("continueBtn");



// =====================================================
// 🌸 RAKSHABANDHAN PREMIUM LOADER
// Smooth • Long • Mobile Friendly
// =====================================================

(function () {

    "use strict";

    const loader = document.getElementById("loader");

    if (!loader) {
        console.warn("❌ Loader not found");
        return;
    }

    // =================================================
    // ELEMENTS
    // =================================================

    const statusText =
        document.getElementById("loaderStatusText");

    const subText =
        document.getElementById("loaderSubText");

    const percentage =
        document.getElementById("loaderPercentage");

    const progressBar =
        document.getElementById("loaderProgressBar");

    const progressLabel =
        document.getElementById("loaderProgressLabel");

    const loadedCount =
        document.getElementById("loaderLoadedCount");

    const totalCount =
        document.getElementById("loaderTotalCount");

    const quoteText =
        document.getElementById("loaderQuoteText");

    const completeScreen =
        document.getElementById("loaderComplete");


    // =================================================
    // STAGES
    // =================================================

    const stages = [
        document.getElementById("loaderStage1"),
        document.getElementById("loaderStage2"),
        document.getElementById("loaderStage3"),
        document.getElementById("loaderStage4")
    ];


    // =================================================
    // LOADING MESSAGES
    // =================================================

    const messages = [

        {
            main: "Preparing something special...",
            sub: "A little surprise is slowly coming together.",
            label: "Setting everything up..."
        },

        {
            main: "Adding a little warmth...",
            sub: "Because this little journey is made with love.",
            label: "Creating the atmosphere..."
        },

        {
            main: "Preparing your wishes...",
            sub: "Every little word has been chosen with care.",
            label: "Preparing heartfelt wishes..."
        },

        {
            main: "Bringing everything together...",
            sub: "Making every little detail special.",
            label: "Putting everything together..."
        },

        {
            main: "Adding the final touch...",
            sub: "Almost ready for you...",
            label: "Finishing the little details..."
        },

        {
            main: "One last moment...",
            sub: "Your little journey is almost ready. ❤️",
            label: "Almost there..."
        }

    ];


    // =================================================
    // QUOTES
    // =================================================

    const quotes = [

        "Some moments are worth waiting for...",

        "The best memories are made with the people we love.",

        "A little love can turn an ordinary moment into a beautiful memory.",

        "Some bonds don't need words. They simply stay in the heart.",

        "The smallest surprises can carry the biggest feelings.",

        "This little journey was made especially for you. 🤍",

        "Because some people deserve something made with love."

    ];


    // =================================================
    // SETTINGS
    // =================================================

    // Long enough to feel intentional,
    // but not unnecessarily slow.
    const MINIMUM_TIME = 8500;

    // Small extra time after the browser is ready.
    const READY_BUFFER = 500;

    const startTime = performance.now();

    let progress = 0;
    let targetProgress = 0;

    let currentMessage = -1;
    let quoteIndex = 0;

    let pageReady =
        document.readyState === "complete";

    let finished = false;


    // =================================================
    // INITIAL UI
    // =================================================

    if (totalCount) {
        totalCount.textContent = "100";
    }

    if (loadedCount) {
        loadedCount.textContent = "0";
    }

    if (percentage) {
        percentage.textContent = "0%";
    }

    if (progressBar) {
        progressBar.style.width = "0%";
    }

    if (quoteText) {
        quoteText.textContent = quotes[0];
    }


    // =================================================
    // PAGE READY
    // =================================================

    if (!pageReady) {

        window.addEventListener(
            "load",
            function () {

                pageReady = true;

            },
            { once: true }
        );

    }


    // =================================================
    // MESSAGE UPDATE
    // =================================================

    function setMessage(index) {

        if (index === currentMessage) {
            return;
        }

        currentMessage = index;

        const data = messages[index];

        if (!data) {
            return;
        }


        // Status

        if (statusText) {

            statusText.style.opacity = "0";

            setTimeout(function () {

                if (finished) return;

                statusText.textContent =
                    data.main;

                statusText.style.opacity = "1";

            }, 160);

        }


        // Subtext

        if (subText) {

            subText.style.opacity = "0";

            setTimeout(function () {

                if (finished) return;

                subText.textContent =
                    data.sub;

                subText.style.opacity = "1";

            }, 200);

        }


        // Progress label

        if (progressLabel) {

            progressLabel.style.opacity = "0";

            setTimeout(function () {

                if (finished) return;

                progressLabel.textContent =
                    data.label;

                progressLabel.style.opacity = "1";

            }, 220);

        }

    }


    // =================================================
    // STAGE UPDATE
    // =================================================

    function updateStages(value) {

        let activeStage = 0;


        if (value >= 25) {
            activeStage = 1;
        }

        if (value >= 50) {
            activeStage = 2;
        }

        if (value >= 75) {
            activeStage = 3;
        }


        stages.forEach(function (stage, index) {

            if (!stage) return;


            stage.classList.remove(
                "active",
                "completed"
            );


            if (index < activeStage) {

                stage.classList.add(
                    "completed"
                );

            }


            if (index === activeStage) {

                stage.classList.add(
                    "active"
                );

            }

        });

    }


    // =================================================
    // PROGRESS UI
    // =================================================

    function updateProgress(value) {

        value = Math.max(
            0,
            Math.min(
                100,
                Math.round(value)
            )
        );


        // =============================================
        // Percentage
        // =============================================

        if (percentage) {

            percentage.textContent =
                value + "%";

        }


        // =============================================
        // Counter
        // =============================================

        if (loadedCount) {

            loadedCount.textContent =
                value;

        }


        // =============================================
        // Progress Bar
        // IMPORTANT:
        // width ke badle transform use kar rahe hain
        // Mobile par zyada smooth rahega.
        // =============================================

        if (progressBar) {

            progressBar.style.transform =
                `scaleX(${value / 100})`;

        }


        // =============================================
        // Message
        // IMPORTANT:
        // Har frame message change nahi hoga.
        // =============================================

        let messageIndex;


        if (value < 18) {

            messageIndex = 0;

        }
        else if (value < 35) {

            messageIndex = 1;

        }
        else if (value < 55) {

            messageIndex = 2;

        }
        else if (value < 75) {

            messageIndex = 3;

        }
        else if (value < 94) {

            messageIndex = 4;

        }
        else {

            messageIndex = 5;

        }


        // Sirf tab message change hoga
        // jab actual stage change ho.

        if (messageIndex !== currentMessage) {

            setMessage(messageIndex);

        }


        // =============================================
        // Stages
        // =============================================

        updateStages(value);

    }


    // =================================================
    // QUOTE ROTATION
    // =================================================

    function changeQuote() {

        if (finished || !quoteText) {
            return;
        }


        quoteText.style.opacity = "0";


        setTimeout(function () {

            if (finished) {
                return;
            }


            quoteIndex++;

            if (quoteIndex >= quotes.length) {
                quoteIndex = 0;
            }


            quoteText.textContent =
                quotes[quoteIndex];


            quoteText.style.opacity = "1";

        }, 300);

    }


    const quoteTimer =
        setInterval(
            changeQuote,
            3000
        );


    // =================================================
    // CALCULATE TARGET PROGRESS
    // =================================================

    function calculateTargetProgress() {

        const elapsed =
            performance.now() - startTime;


        // ---------------------------------------------
        // Slow beginning
        // ---------------------------------------------

        if (elapsed < 1200) {

            return 10;

        }


        if (elapsed < 2300) {

            return 22;

        }


        if (elapsed < 3400) {

            return 35;

        }


        if (elapsed < 4600) {

            return 48;

        }


        if (elapsed < 5800) {

            return 61;

        }


        if (elapsed < 6800) {

            return 73;

        }


        if (elapsed < 7600) {

            return 84;

        }


        if (elapsed < MINIMUM_TIME) {

            return 93;

        }


        // ---------------------------------------------
        // Don't finish until browser is ready
        // ---------------------------------------------

        if (!pageReady) {

            return 96;

        }


        const extraElapsed =
            elapsed -
            MINIMUM_TIME;


        const extraProgress =
            Math.min(
                4,
                (
                    extraElapsed /
                    READY_BUFFER
                ) * 4
            );


        return 96 + extraProgress;

    }


    // =================================================
    // FINISH LOADER
    // =================================================

    function finishLoader() {

        if (finished) {
            return;
        }

        finished = true;


        clearInterval(
            quoteTimer
        );


        // ---------------------------------------------
        // 100%
        // ---------------------------------------------

        progress = 100;

        updateProgress(100);


        // ---------------------------------------------
        // Complete stages
        // ---------------------------------------------

        stages.forEach(function (stage) {

            if (!stage) {
                return;
            }


            stage.classList.remove(
                "active"
            );


            stage.classList.add(
                "completed"
            );

        });


        // ---------------------------------------------
        // Final message
        // ---------------------------------------------

        if (statusText) {

            statusText.style.opacity = "0";


            setTimeout(function () {

                statusText.textContent =
                    "Everything is ready for you. ❤️";

                statusText.style.opacity =
                    "1";

            }, 150);

        }


        if (subText) {

            subText.textContent =
                "Your little journey is waiting.";

        }


        if (progressLabel) {

            progressLabel.textContent =
                "Ready ✨";

        }


        // ---------------------------------------------
        // Complete screen
        // ---------------------------------------------

        setTimeout(function () {

            if (completeScreen) {

                completeScreen.classList.add(
                    "show"
                );

            }

        }, 350);


        // ---------------------------------------------
        // Hide loader
        // ---------------------------------------------

        setTimeout(function () {

            loader.classList.add(
                "hide"
            );


            setTimeout(function () {

                loader.style.display =
                    "none";

                loader.setAttribute(
                    "aria-hidden",
                    "true"
                );


                if (completeScreen) {

                    completeScreen.style.display =
                        "none";

                }

            }, 1000);

        }, 1600);

    }


    // =================================================
    // ANIMATION LOOP
    // =================================================

    function animateLoader() {

        if (finished) {
            return;
        }


        targetProgress =
            calculateTargetProgress();


        // ---------------------------------------------
        // Smooth movement
        // ---------------------------------------------

        const difference =
            targetProgress -
            progress;


        // Faster when far away,
        // slower when approaching target.

        progress +=
            difference * 0.045;


        // ---------------------------------------------
        // Prevent tiny floating values
        // ---------------------------------------------

        if (
            Math.abs(
                targetProgress -
                progress
            ) < 0.05
        ) {

            progress =
                targetProgress;

        }


        updateProgress(
            progress
        );


        // ---------------------------------------------
        // FINISH CONDITION
        // ---------------------------------------------

        const elapsed =
            performance.now() -
            startTime;


        if (
            pageReady &&
            elapsed >=
            MINIMUM_TIME +
            READY_BUFFER &&
            progress >= 99.5
        ) {

            finishLoader();

            return;

        }


        requestAnimationFrame(
            animateLoader
        );

    }


    // =================================================
    // START
    // =================================================

    updateProgress(0);


    // Give browser one frame to paint
    // the 0% state before animation begins.

    requestAnimationFrame(function () {

        requestAnimationFrame(function () {

            animateLoader();

        });

    });

})();



// ==========================
// Start Journey
// ==========================

if (startBtn) {

    startBtn.addEventListener("click", () => {

        welcome.style.opacity = "0";

        setTimeout(() => {

            welcome.style.display = "none";

            giftSection.classList.add("active");

        }, 800);

    });

}

// ==========================
// Gift Box
// ==========================

if (giftBox) {

    giftBox.addEventListener("click", () => {

        giftBox.style.pointerEvents = "none";

        giftBox.classList.add("shake");

        setTimeout(() => {

            giftBox.classList.remove("shake");
            giftBox.classList.add("open");

        }, 700);

        setTimeout(() => {

            giftSection.style.opacity = "0";

            setTimeout(() => {

                giftSection.style.display = "none";

                rakhiSection.classList.add("active");

            }, 700);

        }, 1700);

    });

}

// ==========================
// Memory Data
// ==========================

// ==========================
// Memory Data
// ==========================


// ==========================
// Rakhi Click
// ==========================

const rakhi = document.getElementById("rakhi");

if (rakhi) {

    rakhi.addEventListener("click", () => {

        rakhi.style.pointerEvents = "none";

        rakhi.style.transition = ".8s";

        rakhi.style.transform =
            "scale(1.4) rotate(720deg)";

        rakhi.style.filter =
            "drop-shadow(0 0 60px gold)";

        setTimeout(() => {

            rakhiSection.style.opacity = "0";

            setTimeout(() => {

                rakhiSection.style.display = "none";

                memorySection.classList.add("active");

                startGallery();

            }, 700);

        }, 900);

    });

}

// ==========================
// Envelope
// ==========================

const envelope = document.getElementById("envelope");
const envelopeBox = document.querySelector(".envelope-box");
const letterPage = document.getElementById("letterPage");
const tapOpen = document.getElementById("tapOpen");

if(envelope){

    envelope.addEventListener("click",()=>{

        tapOpen.style.display="none";

        envelope.classList.add("open");

        setTimeout(()=>{

            envelopeBox.classList.add("hide");

            if (letterPage) {

                letterPage.classList.add("show");

            }

        },1500);

    });

}

const promiseSection = document.getElementById("promiseSection");
const promiseBtn = document.getElementById("promiseBtn");

const lines = document.querySelectorAll(".promise-text .line");

function openPromise(){

    letterSection.classList.remove("active");

    promiseSection.classList.add("active");

    // Reset
    lines.forEach(line=>{
        line.classList.remove("show");
    });

    promiseBtn.classList.remove("show");

    let i = 0;

    function revealNext(){

        if(i >= lines.length){

            promiseBtn.classList.add("show");

            return;

        }

        lines[i].classList.add("show");

        i++;

        setTimeout(revealNext,1200);

    }

    revealNext();

}

if(continueBtn){

    continueBtn.addEventListener("click",()=>{

        openPromise();

    });

}

const blessingSection=document.getElementById("blessingSection");

const blessingText=document.getElementById("blessingText");

const blessingCounter=document.getElementById("blessingCounter");

const nextBlessingBtn=document.getElementById("nextBlessingBtn");

const blessings=[

"🌸 Meri dil se ye dua hai ki Bhagwan aapki har sachchi dua kabool kare. Aapke jeevan mein kabhi kisi cheez ki kami na ho aur har naya din aapke liye ek nayi khushi aur nayi umeed lekar aaye.",

"❤️ Aapki muskaan hamesha isi tarah khilti rahe. Chahe zindagi mein kitni bhi mushkilein aayein, lekin aapke chehre ki ye pyari si smile kabhi kam na ho, kyunki aapki muskaan se hi ghar mein khushiyan aati hain.",

"✨ Bhagwan kare aapke har sapne ko sach hone ka mauka mile. Jo bhi aap apne dil se chahti hain, woh ek din zaroor poora ho aur aapko har kadam par safalta mile.",

"🌼 Meri dua hai ki aap hamesha swasth, khush aur muskurati rahein. Aapki zindagi mein kabhi kisi bhi tarah ka dukh ya pareshani zyada der tak na tik paaye.",

"🌸 Zindagi ka har naya din aapke liye naye mauke, nayi khushiyan aur khoobsurat yaadein lekar aaye. Bhagwan aapki zindagi ko pyaar, sukoon aur barkat se bhar dein.",

"💖 Har mushkil aapse hamesha door rahe aur agar kabhi koi kathin waqt aaye bhi, to Bhagwan aapko usse ladne ki himmat aur usse jeetne ki taqat zaroor dein.",

"🌷 Aapka har kadam safalta ki taraf badhe. Har faisla sahi sabit ho aur har mehnat ka phal aapko usse bhi zyada mile jitni aap umeed karti hain.",

"☀️ Har subah aapke liye ek nayi roshni lekar aaye aur har raat sukoon se bhari ho. Aapke jeevan ka har pal khushiyon, pyaar aur apno ke saath bitaaye hue khoobsurat lamhon se bhar jaaye.",

"🤍 Aap hamesha isi tarah pyaari, dayalu aur mazboot bani rahein. Duniya chahe kitni bhi badal jaaye, lekin aapka achha dil aur aapki masoomiyat hamesha waise hi bani rahe.",

"❤️ Is Rakshabandhan par meri sirf itni si dua hai ki Bhagwan aapko lambi umar, acchi sehat, beinteha khushiyan, har sapne ki kamyabi aur hamesha apno ka pyaar de. Aap hamesha khush rahein, muskurati rahein aur meri zindagi ki sabse pyaari didi bankar hamesha mere saath rahein. Happy Rakshabandhan! ❤️"

];

let blessingIndex=0;

function showBlessing(){

blessingText.classList.remove("show");

setTimeout(()=>{

blessingText.textContent=blessings[blessingIndex];

blessingCounter.textContent=`${blessingIndex+1} / ${blessings.length}`;

blessingText.classList.add("show");

},300);

}

function openBlessings(){

promiseSection.classList.remove("active");

blessingSection.classList.add("active");

blessingIndex=0;

showBlessing();

}

if (nextBlessingBtn) {

    nextBlessingBtn.addEventListener("click", () => {

        blessingIndex++;

        if (blessingIndex >= blessings.length) {

            blessingSection.classList.remove("active");

            openSecretPuzzle();

            return;

        }

        showBlessing();

    });

}

if (promiseBtn) {

    promiseBtn.addEventListener("click", () => {

        openBlessings();

    });

}


// =====================================
// 🚀 DEBUG: DIRECT STAR SECTION
// =====================================
/*
const DEBUG_STAR = false;

if (DEBUG_STAR) {

    window.addEventListener("load", () => {

        setTimeout(() => {

            console.log("⭐ DEBUG MODE: Opening Star Section");

            // Loader hide
            const loader = document.getElementById("loader");

            if (loader) {
                loader.style.display = "none";
            }

            // Countdown hide
            const countdown =
                document.getElementById("countdownScreen");

            if (countdown) {
                countdown.style.display = "none";
                countdown.classList.remove("active");
            }

            // Hide all sections
            document.querySelectorAll("section").forEach(section => {

                section.classList.remove("active");

            });

            // =====================================
            // OPEN STAR SECTION
            // =====================================

            const starSection =
                document.getElementById("starSection");

            if (!starSection) {

                console.error("❌ starSection nahi mila!");

                return;
            }

            starSection.classList.add("active");

            // =====================================
            // IMPORTANT
            // Reset Star Game
            // =====================================

            if (typeof openStars === "function") {

                openStars();

            }

            console.log("⭐ Star Section opened!");

        }, 1000);

    });

}
*/