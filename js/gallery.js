// ==========================
// MEMORY GALLERY
// ==========================

const memories = window.memories || [];

const memoryPhoto = document.getElementById("memoryPhoto");
const quoteEnglish = document.getElementById("quoteEnglish");


const memoryCount = document.getElementById("memoryCount");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const skipBtn = document.getElementById("skipBtn");

let current = 0;
let slideshow;

// ==========================
// LOAD MEMORY
// ==========================

function loadMemory(index){

    if(memories.length===0) return;

    const data = memories[index];

    memoryPhoto.classList.remove("show");

    setTimeout(()=>{

        memoryPhoto.src = data.image;

        quoteEnglish.style.opacity="0";
        

        setTimeout(()=>{

            quoteEnglish.textContent=data.english;
            

            quoteEnglish.style.opacity="1";
            

        },200);

        memoryPhoto.onload=()=>{

            memoryPhoto.classList.add("show");

        };

        memoryCount.textContent=
        `${index+1} / ${memories.length}`;

    },350);

}

// ==========================
// NEXT
// ==========================

function nextMemory(){

    current++;

    if(current>=memories.length){

        clearInterval(slideshow);

        document.getElementById("memorySection").classList.remove("active");

        document.getElementById("letterSection").classList.add("active");

        // Yahan baad me Emotional Letter open karenge

        return;

    }

    loadMemory(current);

}

// ==========================
// PREVIOUS
// ==========================

function previousMemory(){

    current--;

    if(current<0){

        current=0;

    }

    loadMemory(current);

}

// ==========================
// AUTO
// ==========================

function startSlideshow(){

    clearInterval(slideshow);

    loadMemory(current);

    slideshow=setInterval(()=>{

        nextMemory();

    },5000);

}

// ==========================
// BUTTONS
// ==========================

if(nextBtn){

nextBtn.onclick=()=>{

clearInterval(slideshow);

nextMemory();

startSlideshow();

};

}

if(prevBtn){

prevBtn.onclick=()=>{

clearInterval(slideshow);

previousMemory();

startSlideshow();

};

}

if(skipBtn){

    skipBtn.onclick=()=>{

        clearInterval(slideshow);

        current = memories.length - 1;

        document.getElementById("memorySection").classList.remove("active");

        document.getElementById("letterSection").classList.add("active");

        if(envelopeBox){
            envelopeBox.classList.remove("hide");
        }

        if(letterPage){
            letterPage.classList.remove("show");
        }

        if(envelope){
            envelope.classList.remove("open");
        }

        if(tapOpen){
            tapOpen.style.display = "block";
        }

    };

}

function startGallery(){

    current = 0;

    startSlideshow();

}