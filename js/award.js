// =========================================
// AWARD SECTION
// =========================================

const awardSection = document.getElementById("awardSection");
const awardIntro = document.getElementById("awardIntro");
const awardCard = document.querySelector(".award-card");

const loadingText = document.getElementById("loadingText");
const loadingFill = document.querySelector(".loadingFill");
const flash = document.querySelector(".awardFlash");

const awardContinue =
document.getElementById("awardContinue");

// =========================================
// Loading Messages
// =========================================

const loadingSteps = [

"Collecting Beautiful Memories... 📸",

"Counting Every Smile... 😊",

"Remembering Every Moment... ❤️",

"Adding Love & Blessings... 🌸",

"Preparing Something Special... ✨",

"Almost Ready... 👑"

];

// =========================================

function openAward(){

awardSection.classList.add("active");

awardIntro.style.display="block";

awardCard.style.display="none";

let step=0;

loadingText.textContent=loadingSteps[0];

loadingFill.style.width="0%";

// Loading Animation

const interval=setInterval(()=>{

step++;

if(step<loadingSteps.length){

loadingText.textContent=loadingSteps[step];

loadingFill.style.width=

(step/(loadingSteps.length-1))*100+"%";

}else{

clearInterval(interval);

// Wait

setTimeout(showAward,900);

}

},1200);

}

// =========================================

function showAward(){

// Hide Intro

awardIntro.style.opacity="0";

setTimeout(()=>{

awardIntro.style.display="none";

},600);

// Flash

flash.style.animation="flash .7s";

setTimeout(()=>{

flash.style.animation="";

},700);

// Show Card

setTimeout(()=>{

awardCard.style.display="block";

requestAnimationFrame(()=>{

awardCard.classList.add("show");

awardCard.style.animation=

"awardPop 1s ease";

});

createStars();

},450);

}

// =========================================
// Floating Stars
// =========================================

function createStars(){

setInterval(()=>{

const star=document.createElement("div");

star.className="award-star";

star.innerHTML=Math.random()>.5?"✨":"⭐";

star.style.left=Math.random()*100+"%";

star.style.top="100%";

star.style.animationDuration=

3+Math.random()*2+"s";

awardSection.appendChild(star);

setTimeout(()=>{

star.remove();

},5000);

},400);

}

// =========================================
// Floating Hearts
// =========================================

setInterval(()=>{

if(!awardCard.classList.contains("show")) return;

const heart=document.createElement("div");

heart.className="award-heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.top="100%";

heart.style.animationDuration=

4+Math.random()*2+"s";

awardSection.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},700);

// =========================================
// Continue
// =========================================

awardContinue.addEventListener("click",()=>{

awardSection.classList.remove("active");

openWish();

});

// =====================================
// DOWNLOAD AWARD
// =====================================

// =====================================
// DOWNLOAD CERTIFICATE
// =====================================

const awardDownload = document.getElementById("awardDownload");

if (awardDownload) {

    awardDownload.addEventListener("click", async () => {

        const originalText = awardDownload.innerHTML;

        awardDownload.innerHTML = "⏳ Preparing Certificate...";
        awardDownload.disabled = true;

        try {

            const imageURL =
                "https://wrortruf.github.io/my_jigglypuff/assets/images/certificate.png";

            const response = await fetch(imageURL, {
                cache: "no-store"
            });

            if (!response.ok) {
                throw new Error("Certificate not found");
            }

            const blob = await response.blob();

            const blobURL =
                URL.createObjectURL(blob);

            const link =
                document.createElement("a");

            link.href = blobURL;

            link.download =
                "Abhilipsa-Worlds-Best-Sister.png";

            document.body.appendChild(link);

            link.click();

            link.remove();

            setTimeout(() => {
                URL.revokeObjectURL(blobURL);
            }, 1000);

        } catch (error) {

            console.error(
                "Certificate download failed:",
                error
            );

            alert(
                "Certificate download nahi ho paaya ❤️"
            );

        } finally {

            awardDownload.innerHTML =
                originalText;

            awardDownload.disabled = false;

        }

    });

}