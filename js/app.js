// ==========================
// Elements
// ==========================

console.log("App Loaded");


const letterSection = document.getElementById("letterSection");
const loader = document.getElementById("loader");
const startBtn = document.getElementById("startBtn");
const welcome = document.getElementById("welcome");

const giftSection = document.getElementById("giftSection");
const giftBox = document.getElementById("giftBox");

const rakhiSection = document.getElementById("rakhiSection");

const memorySection = document.getElementById("memorySection");
const continueBtn = document.getElementById("continueBtn");





// ==========================
// Loader
// ==========================

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.display = "none";

    }, 1800);

});

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

            openAward();

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

