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
// 🌸 RAKSHABANDHAN — PREMIUM LOADING SYSTEM
// =====================================================

console.log("🌸 Rakshabandhan Journey Initializing...");

// =====================================================
// ELEMENTS
// =====================================================

const loader = document.getElementById("loader");

const loaderProgress = document.getElementById("loaderProgress");
const loaderPercent = document.getElementById("loaderPercent");
const loaderStatus = document.getElementById("loaderStatus");
const loaderTip = document.getElementById("loaderTip");

const loaderHeart = document.getElementById("loaderHeart");
const loaderRing = document.getElementById("loaderRing");


// =====================================================
// SETTINGS
// =====================================================

// Loader kabhi bahut jaldi disappear nahi hoga
const MIN_LOADING_TIME = 4500;

// Maximum fake-progress speed
const PROGRESS_LIMIT_BEFORE_LOAD = 94;


// =====================================================
// LOADING MESSAGES
// =====================================================

const loadingMessages = [

    "Preparing something special for you...",

    "Gathering little moments of happiness...",

    "Adding a little love to this journey...",

    "Preparing beautiful memories...",

    "Creating something from the heart...",

    "Almost ready...",

    "Just a little more magic...",

    "Putting everything together...",

    "One last little touch...",

    "Your journey is almost ready ❤️"

];


// =====================================================
// LOADING TIPS
// =====================================================

const loadingTips = [

    "Some bonds are felt, not explained. 🤍",

    "A sister is a little piece of home. 🌸",

    "The best memories are made together. ✨",

    "Some people make ordinary moments special. 💖",

    "A little love can make a big difference. 🌷",

    "This little journey was made with love. ❤️",

    "Because some relationships deserve more than words. 🤍"

];


// =====================================================
// VARIABLES
// =====================================================

let progress = 0;

let realLoadingFinished = false;

let loaderStartTime = Date.now();

let progressTimer = null;

let messageIndex = 0;

let tipIndex = 0;


// =====================================================
// SAFE TEXT UPDATE
// =====================================================

function updateText(element, text) {

    if (!element) return;

    element.style.opacity = "0";

    setTimeout(() => {

        element.textContent = text;

        element.style.opacity = "1";

    }, 180);

}


// =====================================================
// UPDATE PROGRESS
// =====================================================

function updateProgress(value) {

    progress = Math.max(
        0,
        Math.min(100, value)
    );

    // Progress bar
    if (loaderProgress) {

        loaderProgress.style.width =
            progress + "%";

    }


    // Percentage
    if (loaderPercent) {

        loaderPercent.textContent =
            Math.floor(progress) + "%";

    }


    // Ring progress
    if (loaderRing) {

        loaderRing.style.setProperty(
            "--progress",
            progress
        );

    }


    // Heart animation
    if (loaderHeart) {

        const scale =
            1 + (progress / 100) * 0.12;

        loaderHeart.style.transform =
            `scale(${scale})`;

    }

}


// =====================================================
// FAKE PROGRESS
// =====================================================

function startFakeProgress() {

    progressTimer = setInterval(() => {

        // Don't go beyond the safe limit
        if (progress >= PROGRESS_LIMIT_BEFORE_LOAD) {

            return;

        }


        // Slow down as we approach the end
        let increment;

        if (progress < 30) {

            increment =
                1.8 + Math.random() * 2.2;

        }
        else if (progress < 60) {

            increment =
                0.8 + Math.random() * 1.5;

        }
        else if (progress < 80) {

            increment =
                0.35 + Math.random() * 0.9;

        }
        else {

            increment =
                0.12 + Math.random() * 0.35;

        }


        updateProgress(
            Math.min(
                PROGRESS_LIMIT_BEFORE_LOAD,
                progress + increment
            )
        );

    }, 180);

}


// =====================================================
// LOADING MESSAGE ROTATION
// =====================================================

function startMessageRotation() {

    updateText(
        loaderStatus,
        loadingMessages[0]
    );


    setInterval(() => {

        // Stop changing after loading
        if (realLoadingFinished) return;

        messageIndex++;

        if (
            messageIndex >=
            loadingMessages.length
        ) {

            messageIndex = 0;

        }


        updateText(
            loaderStatus,
            loadingMessages[messageIndex]
        );

    }, 1900);

}


// =====================================================
// LOADING TIP ROTATION
// =====================================================

function startTipRotation() {

    updateText(
        loaderTip,
        loadingTips[0]
    );


    setInterval(() => {

        if (realLoadingFinished) return;

        tipIndex++;

        if (
            tipIndex >=
            loadingTips.length
        ) {

            tipIndex = 0;

        }


        updateText(
            loaderTip,
            loadingTips[tipIndex]
        );

    }, 3000);

}


// =====================================================
// RESOURCE PRELOADING
// =====================================================

function preloadImages() {

    const images =
        document.querySelectorAll("img");

    const promises = [];


    images.forEach(img => {

        const src =
            img.getAttribute("src");

        if (!src) return;


        promises.push(

            new Promise(resolve => {

                const image =
                    new Image();


                image.onload = () => {

                    resolve();

                };


                image.onerror = () => {

                    // Don't block the entire website
                    resolve();

                };


                image.src = src;

            })

        );

    });


    return Promise.all(promises);

}


// =====================================================
// PRELOAD AUDIO
// =====================================================

function preloadAudio() {

    const audioElements =
        document.querySelectorAll("audio");

    const promises = [];


    audioElements.forEach(audio => {

        if (!audio.src) return;


        promises.push(

            new Promise(resolve => {

                // Already loaded
                if (
                    audio.readyState >= 2
                ) {

                    resolve();

                    return;

                }


                const done = () => {

                    audio.removeEventListener(
                        "canplaythrough",
                        done
                    );

                    audio.removeEventListener(
                        "error",
                        done
                    );

                    resolve();

                };


                audio.addEventListener(
                    "canplaythrough",
                    done
                );


                audio.addEventListener(
                    "error",
                    done
                );


                // Safety timeout
                setTimeout(
                    done,
                    6000
                );

            })

        );

    });


    return Promise.all(promises);

}


// =====================================================
// WAIT FOR DOCUMENT
// =====================================================

function waitForWindowLoad() {

    return new Promise(resolve => {

        if (
            document.readyState ===
            "complete"
        ) {

            resolve();

            return;

        }


        window.addEventListener(
            "load",
            resolve,
            {
                once: true
            }
        );

    });

}


// =====================================================
// COMPLETE LOADING
// =====================================================

async function finishLoading() {

    realLoadingFinished = true;


    // Stop fake progress
    if (progressTimer) {

        clearInterval(
            progressTimer
        );

        progressTimer = null;

    }


    // Make sure minimum loading duration
    const elapsed =
        Date.now() -
        loaderStartTime;

    const remaining =
        Math.max(
            0,
            MIN_LOADING_TIME - elapsed
        );


    await new Promise(resolve => {

        setTimeout(
            resolve,
            remaining
        );

    });


    // Smoothly finish progress
    const start =
        progress;

    const duration =
        900;

    const animationStart =
        performance.now();


    function animateComplete(now) {

        const elapsed =
            now -
            animationStart;

        const percentage =
            Math.min(
                elapsed / duration,
                1
            );


        // Ease out
        const eased =
            1 -
            Math.pow(
                1 - percentage,
                3
            );


        updateProgress(
            start +
            (100 - start) * eased
        );


        if (percentage < 1) {

            requestAnimationFrame(
                animateComplete
            );

        }
        else {

            showLoaderComplete();

        }

    }


    requestAnimationFrame(
        animateComplete
    );

}


// =====================================================
// LOADER COMPLETE
// =====================================================

function showLoaderComplete() {

    updateText(
        loaderStatus,
        "Everything is ready. ❤️"
    );


    updateText(
        loaderTip,
        "Your little journey begins now..."
    );


    if (loaderHeart) {

        loaderHeart.classList.add(
            "loader-heart-complete"
        );

    }


    if (loader) {

        loader.classList.add(
            "loader-complete"
        );

    }


    // Small pause after 100%
    setTimeout(() => {

        hideLoader();

    }, 1100);

}


// =====================================================
// HIDE LOADER
// =====================================================

function hideLoader() {

    if (!loader) return;


    loader.classList.add(
        "hide"
    );


    setTimeout(() => {

        loader.style.display =
            "none";

        loader.classList.remove(
            "active"
        );

    }, 1200);

}


// =====================================================
// INITIALIZE LOADER
// =====================================================

async function initializeLoader() {

    console.log(
        "🌸 Loading journey..."
    );


    // Start animations
    startFakeProgress();

    startMessageRotation();

    startTipRotation();


    // Run actual loading tasks together
    try {

        await Promise.all([

            waitForWindowLoad(),

            preloadImages(),

            preloadAudio()

        ]);

    }
    catch (error) {

        console.warn(
            "Some resources could not be loaded:",
            error
        );

    }


    // Actual loading complete
    await finishLoading();


    console.log(
        "❤️ Journey Ready!"
    );

}


// =====================================================
// START
// =====================================================

if (loader) {

    loaderStartTime =
        Date.now();

    initializeLoader();

}
else {

    console.warn(
        "⚠️ Loader element not found."
    );

}

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