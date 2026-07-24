const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const musicStartBtn = document.getElementById("startBtn");

let isPlaying = false;

function playMusic() {

    if (!bgMusic) return;

    bgMusic.volume = 1;

    bgMusic.play().then(() => {

        isPlaying = true;

        if (musicBtn) {

            musicBtn.textContent = "🎵";

        }

    }).catch(() => {});

}

if (musicBtn) {

    musicBtn.addEventListener("click", () => {

        if (!bgMusic) return;

        if (isPlaying) {

            bgMusic.pause();

            isPlaying = false;

            musicBtn.textContent = "🔇";

        } else {

            playMusic();

        }

    });

}

if (startBtn) {

    musicStartBtntartBtn.addEventListener("click", () => {

        if (!isPlaying) {

            playMusic();

        }

    });

}