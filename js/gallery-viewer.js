// =====================================
// MEMORY GALLERY
// =====================================
const viewerBack =
document.getElementById("viewerBack");
const memoryGallery = document.getElementById("memoryGallery");
const galleryGrid = document.getElementById("galleryGrid");
const galleryCounter = document.getElementById("galleryCounter");

const closeGallery = document.getElementById("closeGallery");

const imageViewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");

const viewerClose = document.getElementById("viewerClose");
const viewerPrev = document.getElementById("viewerPrev");
const viewerNext = document.getElementById("viewerNext");

const viewerCount = document.getElementById("viewerCount");


// =====================================
// CHANGE THIS IF YOUR PHOTO COUNT CHANGES
// =====================================

const TOTAL_PHOTOS = 25;


// =====================================

let currentImage = 0;


// =====================================
// Open Gallery
// =====================================

function openMemoryGallery(){

    if(finalSection)
        finalSection.classList.remove("active");

    memoryGallery.classList.add("active");

    galleryGrid.innerHTML = "";

    galleryCounter.textContent =
    `0 / ${TOTAL_PHOTOS} Memories`;

    createGallery();

}


// =====================================
// Create Images
// =====================================

function createGallery(){

    for(let i=1;i<=TOTAL_PHOTOS;i++){

        const card=document.createElement("div");

        card.className="gallery-item";

        const img=document.createElement("img");

        img.src=`assets/images/memories/${i}.png`;

        img.loading="lazy";

        img.alt=`Memory ${i}`;

        card.appendChild(img);

        galleryGrid.appendChild(card);

        // Fade Animation

        setTimeout(()=>{

            card.classList.add("show");

            galleryCounter.textContent=
            `${i} / ${TOTAL_PHOTOS} Memories`;

        },i*120);

        // Click

        card.addEventListener("click",()=>{

            currentImage=i;

            openViewer(i);

        });

    }

}


// =====================================
// Viewer
// =====================================

function openViewer(index){

    console.log("Opening:", index);

    imageViewer.classList.add("active");

    viewerImage.src = `assets/images/memories/${index}.png`;

    console.log(viewerImage.src);

    viewerCount.textContent =
    `${index} / ${TOTAL_PHOTOS}`;

}


// =====================================
// Close Viewer
// =====================================

viewerClose.addEventListener("click",()=>{

    imageViewer.classList.remove("active");

});


// =====================================
// Next
// =====================================

viewerNext.addEventListener("click",()=>{

    currentImage++;

    if(currentImage>TOTAL_PHOTOS){

        currentImage=1;

    }

    openViewer(currentImage);

});


// =====================================
// Previous
// =====================================

viewerPrev.addEventListener("click",()=>{

    currentImage--;

    if(currentImage<1){

        currentImage=TOTAL_PHOTOS;

    }

    openViewer(currentImage);

});


// =====================================
// Back
// =====================================

closeGallery.addEventListener("click",()=>{

    memoryGallery.classList.remove("active");

    if(finalSection)
        finalSection.classList.add("active");

});


// =====================================
// ESC
// =====================================

document.addEventListener("keydown",(e)=>{

    if(!imageViewer.classList.contains("active")) return;

    if(e.key==="Escape"){

        imageViewer.classList.remove("active");

    }

    if(e.key==="ArrowRight"){

        viewerNext.click();

    }

    if(e.key==="ArrowLeft"){

        viewerPrev.click();

    }

});


// =====================================
// Swipe Support (Mobile)
// =====================================

let startX=0;

viewerImage.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

});

viewerImage.addEventListener("touchend",(e)=>{

    let endX=e.changedTouches[0].clientX;

    if(endX-startX>50){

        viewerPrev.click();

    }

    else if(startX-endX>50){

        viewerNext.click();

    }

});

if(viewerBack){

    viewerBack.addEventListener("click",()=>{

        imageViewer.classList.remove("active");

    });

}