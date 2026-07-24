// =====================================
// STARRY WISHES
// =====================================

const starSection = document.getElementById("starSection");

const stars = document.querySelectorAll(".wish-star");

const starMessageCard = document.getElementById("starMessageCard");

const starMessage = document.getElementById("starMessage");

const nextStarBtn = document.getElementById("nextStarBtn");

const starCount = document.getElementById("starCount");

const finalStarBox = document.getElementById("finalStarBox");

const finishJourney = document.getElementById("finishJourney");


// =====================================
// Blessings
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

let collected = 0;


// =====================================
// Open Section
// =====================================

function openStars(){

    if(!starSection) return;

    starSection.classList.add("active");

    collected=0;

    starCount.textContent=
    `0 / ${stars.length} Stars Collected`;

    starMessageCard.classList.remove("show");

    finalStarBox.classList.remove("show");

    stars.forEach(star=>{

        star.style.display="block";

        star.style.opacity="1";

        star.style.pointerEvents="auto";

        star.style.transform="scale(1)";

        star.dataset.clicked="false";

    });

}


// =====================================
// Click Stars
// =====================================

stars.forEach((star,index)=>{

    star.onclick = function(){

        if(star.dataset.clicked==="true") return;

        star.dataset.clicked="true";

        star.style.pointerEvents="none";

        star.style.transform="scale(1.7)";

        star.style.opacity="0";

        createBurst(star);

        setTimeout(()=>{

            star.style.display="none";

        },400);

        starMessage.textContent = starBlessings[index];

        starMessageCard.classList.add("show");

    };

});


// =====================================
// Continue Button
// =====================================

if(nextStarBtn){

nextStarBtn.onclick=function(){

starMessageCard.classList.remove("show");

collected++;

starCount.textContent=

`${collected} / ${stars.length} Stars Collected`;

if(collected===stars.length){

setTimeout(()=>{

finalStarBox.classList.add("show");

},700);

}

};

}

// =====================================
// Shooting Star Animation
// =====================================

function createShootingStar(){

    if(!starSection ||
       !starSection.classList.contains("active")) return;

    const shoot=document.createElement("div");

    shoot.className="shooting-star";

    shoot.style.top=Math.random()*35+"%";

    shoot.style.left="-150px";

    starSection.appendChild(shoot);

    setTimeout(()=>{

        shoot.remove();

    },2200);

}

setInterval(createShootingStar,3500);


// =====================================
// Floating Sparkles
// =====================================

function createSparkle(){

    if(!starSection ||
       !starSection.classList.contains("active")) return;

    const sparkle=document.createElement("div");

    sparkle.className="mini-sparkle";

    sparkle.innerHTML=Math.random()>.5?"✨":"💛";

    sparkle.style.left=Math.random()*100+"%";

    sparkle.style.top=Math.random()*100+"%";

    sparkle.style.fontSize=
    (18+Math.random()*18)+"px";

    starSection.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },3000);

}

setInterval(createSparkle,800);





// =====================================
// Finish Journey
// =====================================

if(finishJourney){

    finishJourney.addEventListener("click",()=>{

        starSection.classList.remove("active");

        openFinal();

        // ===== NEXT SECTION =====
        // Example:
        // finalSection.classList.add("active");

        // next section

        // openFinal();

        console.log("Journey Finished");

    });

}

function createBurst(star){

    for(let i=0;i<8;i++){

        const burst=document.createElement("div");

        burst.className="mini-sparkle";

        burst.innerHTML="✨";

        burst.style.position="absolute";

        burst.style.left=star.offsetLeft+20+"px";

        burst.style.top=star.offsetTop+20+"px";

        burst.style.fontSize=(12+Math.random()*10)+"px";

        burst.style.transform=

        `translate(${(Math.random()-.5)*120}px,

        ${(Math.random()-.5)*120}px)`;

        starSection.appendChild(burst);

        setTimeout(()=>{

            burst.remove();

        },1200);

    }

}