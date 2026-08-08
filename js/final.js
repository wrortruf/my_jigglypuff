// =====================================
// FINAL SECTION
// =====================================

const finalSection = document.getElementById("finalSection");

const finalText = document.getElementById("finalText");

const finalPhotoBox = document.querySelector(".final-photo-box");

const finalButtons = document.querySelector(".final-buttons");

const replayBtn = document.getElementById("replayBtn");

const galleryBtn = document.getElementById("galleryBtn");

const exitBtn = document.getElementById("exitBtn");

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

const finalPhotos=[

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

function openFinal(){

    finalSection.classList.add("active");

    // Scroll to top every time
    finalSection.scrollTop = 0;
    // Agar browser support kare:
    // finalSection.scrollTo({ top: 0, behavior: "instant" });

    finalText.innerHTML = "";

    finalPhotoBox.classList.remove("show");

    finalButtons.classList.remove("show");

    let index = 0;

    function typeNext(){

        if(index >= finalLines.length){

            setTimeout(()=>{

                playFinalPhotos();

            },800);

            return;

        }

        const p = document.createElement("p");

        p.style.opacity = "0";
        p.style.marginBottom = "14px";

        p.textContent = finalLines[index];

        finalText.appendChild(p);

        requestAnimationFrame(()=>{

            p.style.transition = ".8s";

            p.style.opacity = "1";

        });

        index++;

        setTimeout(typeNext,1300);

    }

    typeNext();

}

// =====================================
// Floating Hearts
// =====================================

setInterval(()=>{

    if(!finalSection.classList.contains("active")) return;

    const heart=document.createElement("div");

    heart.className="final-heart";

    heart.innerHTML=Math.random()>.5?"❤️":"🤍";

    heart.style.left=Math.random()*100+"%";

    heart.style.bottom="-40px";

    heart.style.animationDuration=
    (4+Math.random()*3)+"s";

    finalSection.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },7000);

},700);

// =====================================
// Replay
// =====================================

if(replayBtn){

    replayBtn.addEventListener("click",()=>{

        location.reload();

    });

}

// =====================================
// Save Memory
// =====================================

// ===============================
// MEMORY GALLERY
// ===============================

if(galleryBtn){

    galleryBtn.addEventListener("click",()=>{

        finalSection.classList.remove("active");

        openMemoryGallery();

    });

}

// =====================================
// Exit
// =====================================

if(exitBtn){

    exitBtn.addEventListener("click",()=>{

        finalSection.style.transition="2s";

        finalSection.style.opacity="0";

        setTimeout(()=>{

            document.body.innerHTML=`

            <div style="

            height:100vh;

            display:flex;

            justify-content:center;

            align-items:center;

            flex-direction:column;

            background:#000;

            color:white;

            font-family:Poppins;

            text-align:center;

            padding:25px;

            ">

            <h1 style="font-size:50px;">❤️</h1>

            <h2>

            Thank You For Being

            The Best Sister

            </h2>

            <p style="margin-top:20px;opacity:.8;">

            Made With Love

            <br>

            Your Brother 🤍

            </p>

            </div>

            `;

        },2000);

    });

}

function playFinalPhotos(){

    let i = 0;

    finalPhoto.src = finalPhotos[0];

    finalPhoto.style.opacity = "1";
    finalPhoto.style.transform = "scale(1)";

    finalPhotoBox.classList.add("show");

    function nextPhoto(){

        i++;

        // Last photo complete
        if(i >= finalPhotos.length){

            // Last photo ko 2 sec dikhne do
            setTimeout(()=>{

                finalButtons.classList.add("show");

            },2000);

            return;

        }

        // Fade Out
        finalPhoto.style.opacity = "0";
        finalPhoto.style.transform = "scale(1.08)";

        setTimeout(()=>{

            // Change Image
            finalPhoto.src = finalPhotos[i];

            // Fade In
            finalPhoto.style.opacity = "1";
            finalPhoto.style.transform = "scale(1)";

        },600);

        // Next after 3 sec
        setTimeout(nextPhoto,3000);

    }

    // First image bhi 3 sec dikhe
    setTimeout(nextPhoto,3000);

}

galleryBtn.addEventListener("click",()=>{

    openMemoryGallery();

});