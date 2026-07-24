const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const startBtn = document.getElementById("startBtn");

let isPlaying = false;

// Music Start Function
function playMusic() {

    bgMusic.volume = 0.4;

    bgMusic.play()
        .then(() => {

            isPlaying = true;
            musicBtn.textContent = "🎵";

        })
        .catch(err => {
            console.log("Music blocked:", err);
        });

}

// Music Toggle

musicBtn.addEventListener("click", () => {

    if (isPlaying) {

        bgMusic.pause();

        isPlaying = false;

        musicBtn.textContent = "🔇";

    } else {

        playMusic();

    }

});

// First click on Start button

startBtn.addEventListener("click", () => {

    if (!isPlaying) {

        playMusic();

    }

});