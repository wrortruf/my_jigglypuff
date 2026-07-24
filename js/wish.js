const wishSection=document.getElementById("wishSection");

const wishLines=document.getElementById("wishLines");

const wishContinue=document.getElementById("wishContinue");

const wishes=[

"🌸 Meri dua hai ki aap hamesha khush rahein.",

"😊 Aapki pyari si muskaan kabhi kam na ho.",

"❤️ Har mushkil aapse hamesha door rahe.",

"✨ Aapke saare sapne ek din zaroor poore hon.",

"🌈 Har naya din aapke liye nayi khushiyan lekar aaye.",

"💖 Aap hamesha isi tarah sabka khayal rakhti rahein.",

"🌹 Bhagwan aapko lambi umar aur acchi sehat de.",

"🤍 Aapki zindagi hamesha pyaar aur sukoon se bhari rahe.",

"❤️ Mere liye aap hamesha meri sabse pyaari didi rahengi."

];

function openWish(){

wishSection.classList.add("active");

wishLines.innerHTML = "";

wishContinue.style.display = "none";

wishContinue.style.opacity = "0";

wishContinue.style.pointerEvents = "none";

let i=0;

function nextLine(){

if(i>=wishes.length){

wishContinue.style.display = "inline-block";

setTimeout(()=>{

    wishContinue.style.opacity = "1";

    wishContinue.style.pointerEvents = "auto";

},100);

return;

}

const p=document.createElement("p");

p.className="wish-line";

p.textContent=wishes[i];

wishLines.appendChild(p);

i++;

setTimeout(nextLine,1200);

}

nextLine();

}

wishContinue.addEventListener("click",()=>{

    wishSection.classList.remove("active");

    setTimeout(()=>{

        openStars();

    },500);

});