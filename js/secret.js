// =====================================
// SECRET PUZZLE
// Replaces Old Secret Reveal
// =====================================

const secretSection = document.getElementById("secretSection");

const secretIntro = document.getElementById("secretIntro");
const secretPuzzle = document.getElementById("secretPuzzle");
const secretReveal = document.getElementById("secretReveal");

const unlockSecretBtn = document.getElementById("unlockSecretBtn");
const secretContinueBtn = document.getElementById("secretContinueBtn");

const secretPuzzleBoard =
    document.getElementById("secretPuzzleBoard");

const secretMoves =
    document.getElementById("secretMoves");

const secretProgressFill =
    document.getElementById("secretProgressFill");

const secretProgressText =
    document.getElementById("secretProgressText");

const secretFeedback =
    document.getElementById("secretFeedback");

const secretHintBtn =
    document.getElementById("secretHintBtn");

const secretMemoryPhoto =
    document.getElementById("secretMemoryPhoto");


// =====================================
// SETTINGS
// =====================================

const PUZZLE_SIZE = 3;
const TOTAL_PIECES = PUZZLE_SIZE * PUZZLE_SIZE;


// Secret image
// Change this to whichever photo you want
const secretPhoto =
    "assets/images/memories/13.png";


// =====================================
// STATE
// =====================================

let puzzlePieces = [];

let selectedPiece = null;

let moveCount = 0;

let puzzleStarted = false;

let puzzleCompleted = false;


// =====================================
// OPEN SECRET PUZZLE
// =====================================

function openSecretPuzzle(){

    if(!secretSection){
        console.warn("secretSection not found");
        return;
    }

    // Show section
    secretSection.classList.add("active");

    // Reset scroll
    secretSection.scrollTop = 0;

    // Show intro
    showSecretIntro();

}


// =====================================
// INTRO
// =====================================

function showSecretIntro(){

    if(secretIntro){
        secretIntro.style.display = "block";
    }

    if(secretPuzzle){
        secretPuzzle.style.display = "none";
    }

    if(secretReveal){
        secretReveal.style.display = "none";
    }

}


// =====================================
// START PUZZLE
// =====================================

if(unlockSecretBtn){

    unlockSecretBtn.addEventListener("click",()=>{

        if(puzzleStarted) return;

        puzzleStarted = true;

        if(secretIntro){

            secretIntro.style.opacity = "0";

            setTimeout(()=>{

                secretIntro.style.display = "none";

                if(secretPuzzle){

                    secretPuzzle.style.display = "block";

                    secretPuzzle.style.opacity = "0";

                    requestAnimationFrame(()=>{

                        secretPuzzle.style.opacity = "1";

                    });

                }

                startPuzzle();

            },500);

        }

    });

}


// =====================================
// START / RESET PUZZLE
// =====================================

function startPuzzle(){

    moveCount = 0;

    selectedPiece = null;

    puzzleCompleted = false;

    secretFeedback.textContent = "";

    updateMoves();

    createPuzzle();

}


// =====================================
// CREATE PUZZLE
// =====================================

function createPuzzle(){

    if(!secretPuzzleBoard) return;

    secretPuzzleBoard.innerHTML = "";

    puzzlePieces = [];


    // Correct order
    for(let i = 0; i < TOTAL_PIECES; i++){

        puzzlePieces.push(i);

    }


    // Shuffle
    shufflePuzzle();


    // Render
    renderPuzzle();

}


// =====================================
// SHUFFLE
// =====================================

function shufflePuzzle(){

    let attempts = 0;

    do{

        for(let i = puzzlePieces.length - 1; i > 0; i--){

            const random =
                Math.floor(Math.random() * (i + 1));

            [
                puzzlePieces[i],
                puzzlePieces[random]
            ] =
            [
                puzzlePieces[random],
                puzzlePieces[i]
            ];

        }

        attempts++;

        // Avoid accidentally starting solved
        if(isPuzzleSolved()){

            puzzlePieces.reverse();

        }

    }while(
        isPuzzleSolved() &&
        attempts < 20
    );

}


// =====================================
// RENDER PUZZLE
// =====================================

function renderPuzzle(){

    secretPuzzleBoard.innerHTML = "";

    puzzlePieces.forEach((piece,index)=>{

        const tile =
            document.createElement("div");

        tile.className =
            "secret-puzzle-piece";


        // Correct piece number
        tile.dataset.piece =
            piece;

        tile.dataset.index =
            index;


        // Background image
        tile.style.backgroundImage =
            `url("${secretPhoto}")`;


        // 3x3 image positioning
        const row =
            Math.floor(piece / PUZZLE_SIZE);

        const col =
            piece % PUZZLE_SIZE;


        tile.style.backgroundPosition =
            `${col * 50}% ${row * 50}%`;


        // Selected state
        if(selectedPiece === index){

            tile.classList.add("selected");

        }


        // Correct state
        if(piece === index){

            tile.classList.add("correct");

        }


        // ---------------------------------
        // TAP / CLICK
        // ---------------------------------

        tile.addEventListener("click",()=>{

            handlePieceClick(index);

        });


        // ---------------------------------
        // DRAG
        // ---------------------------------

        tile.draggable = true;


        tile.addEventListener("dragstart",(e)=>{

            selectedPiece = index;

            tile.classList.add("dragging");

            if(e.dataTransfer){

                e.dataTransfer.effectAllowed =
                    "move";

                e.dataTransfer.setData(
                    "text/plain",
                    index
                );

            }

        });


        tile.addEventListener("dragend",()=>{

            tile.classList.remove("dragging");

        });


        tile.addEventListener("dragover",(e)=>{

            e.preventDefault();

            tile.classList.add("drag-over");

        });


        tile.addEventListener("dragleave",()=>{

            tile.classList.remove("drag-over");

        });


        tile.addEventListener("drop",(e)=>{

            e.preventDefault();

            tile.classList.remove("drag-over");

            const fromIndex =
                Number(
                    e.dataTransfer.getData(
                        "text/plain"
                    )
                );

            const toIndex = index;


            if(
                Number.isInteger(fromIndex) &&
                fromIndex !== toIndex
            ){

                swapPieces(
                    fromIndex,
                    toIndex
                );

            }

        });


        secretPuzzleBoard.appendChild(tile);

    });


    updateProgress();

}


// =====================================
// TAP TO SWAP
// =====================================

function handlePieceClick(index){

    if(puzzleCompleted) return;


    // First piece
    if(selectedPiece === null){

        selectedPiece = index;

        renderPuzzle();

        secretFeedback.textContent =
            "✨ Ab doosra piece choose karo.";

        return;

    }


    // Same piece
    if(selectedPiece === index){

        selectedPiece = null;

        renderPuzzle();

        secretFeedback.textContent = "";

        return;

    }


    // Swap
    swapPieces(
        selectedPiece,
        index
    );

}


// =====================================
// SWAP
// =====================================

function swapPieces(from,to){

    if(puzzleCompleted) return;


    [
        puzzlePieces[from],
        puzzlePieces[to]
    ] =
    [
        puzzlePieces[to],
        puzzlePieces[from]
    ];


    moveCount++;

    selectedPiece = null;


    updateMoves();

    renderPuzzle();


    // Feedback
    if(isPuzzleSolved()){

        completePuzzle();

    }else{

        secretFeedback.textContent =
            moveCount === 1
                ? "Good start! ❤️"
                : "Keep going... 🧩";

    }

}


// =====================================
// CHECK SOLVED
// =====================================

function isPuzzleSolved(){

    return puzzlePieces.every(
        (piece,index)=>
            piece === index
    );

}


// =====================================
// UPDATE MOVES
// =====================================

function updateMoves(){

    if(secretMoves){

        secretMoves.textContent =
            `Moves: ${moveCount}`;

    }

}


// =====================================
// UPDATE PROGRESS
// =====================================

function updateProgress(){

    if(
        !secretProgressFill ||
        !secretProgressText
    ) return;


    let correct = 0;


    puzzlePieces.forEach(
        (piece,index)=>{

            if(piece === index){

                correct++;

            }

        }
    );


    const percentage =
        (correct / TOTAL_PIECES) * 100;


    secretProgressFill.style.width =
        `${percentage}%`;


    secretProgressText.textContent =
        `${correct} / ${TOTAL_PIECES} Pieces`;

}


// =====================================
// HINT
// =====================================

if(secretHintBtn){

    secretHintBtn.addEventListener("click",()=>{

        if(puzzleCompleted) return;


        // Find first incorrect piece
        const wrongIndex =
            puzzlePieces.findIndex(
                (piece,index)=>
                    piece !== index
            );


        if(wrongIndex === -1) return;


        const correctPiece =
            wrongIndex;


        // Find where correct piece currently is
        const correctPosition =
            puzzlePieces.indexOf(
                correctPiece
            );


        if(correctPosition === wrongIndex){

            return;

        }


        // Highlight the two pieces
        const tiles =
            secretPuzzleBoard.querySelectorAll(
                ".secret-puzzle-piece"
            );


        if(tiles[wrongIndex]){

            tiles[wrongIndex]
                .classList.add("hint");

        }


        if(tiles[correctPosition]){

            tiles[correctPosition]
                .classList.add("hint");

        }


        secretFeedback.textContent =
            "💡 Hint: Ye dono pieces swap karo.";


        setTimeout(()=>{

            tiles.forEach(tile=>{

                tile.classList.remove("hint");

            });

        },1800);

    });

}


// =====================================
// PUZZLE COMPLETE
// =====================================

function completePuzzle(){

    if(puzzleCompleted) return;

    puzzleCompleted = true;


    secretFeedback.textContent =
        "🎉 You solved it!";


    updateProgress();


    // Add completion animation
    secretPuzzleBoard.classList.add(
        "puzzle-complete"
    );


    // Disable interactions shortly
    setTimeout(()=>{

        if(secretPuzzle){

            secretPuzzle.style.opacity = "0";

        }


        setTimeout(()=>{

            if(secretPuzzle){

                secretPuzzle.style.display =
                    "none";

            }


            openSecretReveal();

        },700);

    },1200);

}


// =====================================
// SECRET REVEAL
// =====================================

function openSecretReveal(){

    if(!secretReveal) return;


    secretReveal.style.display =
        "block";

    secretReveal.style.opacity =
        "0";


    // Set image
    if(secretMemoryPhoto){

        secretMemoryPhoto.src =
            secretPhoto;

        secretMemoryPhoto.style.opacity =
            "0";

    }


    requestAnimationFrame(()=>{

        secretReveal.style.opacity =
            "1";

    });


    // Reveal image
    setTimeout(()=>{

        if(secretMemoryPhoto){

            secretMemoryPhoto.style.opacity =
                "1";

        }

    },700);


    // Animate text
    const lines =
        secretReveal.querySelectorAll(
            ".reveal-line, .reveal-highlight"
        );


    lines.forEach((line,index)=>{

        line.style.opacity = "0";

        line.style.transform =
            "translateY(15px)";


        setTimeout(()=>{

            line.style.transition =
                ".7s ease";

            line.style.opacity =
                "1";

            line.style.transform =
                "translateY(0)";

        },1200 + index * 1000);

    });


    // Final secret
    const finalSecret =
        secretReveal.querySelector(
            ".final-secret"
        );


    if(finalSecret){

        finalSecret.style.opacity =
            "0";

        finalSecret.style.transform =
            "translateY(25px)";


        setTimeout(()=>{

            finalSecret.style.transition =
                "1s ease";

            finalSecret.style.opacity =
                "1";

            finalSecret.style.transform =
                "translateY(0)";

        },3800);

    }

}


// =====================================
// CONTINUE TO QUIZ
// =====================================

if(secretContinueBtn){

    secretContinueBtn.addEventListener(
        "click",
        ()=>{

            if(secretSection){

                secretSection.classList.remove(
                    "active"
                );

            }


            // Reset after transition
            setTimeout(()=>{

                // IMPORTANT:
                // Tumhare quiz.js mein agar
                // openQuiz() function hai,
                // wahi use hoga.

                if(typeof openQuiz === "function"){

                    openQuiz();

                }else{

                    const quizSection =
                        document.getElementById(
                            "quizSection"
                        );

                    if(quizSection){

                        quizSection.classList.add(
                            "active"
                        );

                        quizSection.scrollTop = 0;

                    }

                }

            },700);

        }
    );

}


// =====================================
// SAFETY
// =====================================

// Agar page reload ke baad secret section
// accidentally active ho, puzzle reset rahe.

window.addEventListener("load",()=>{

    if(secretPuzzle){

        secretPuzzle.style.display =
            "none";

    }

    if(secretReveal){

        secretReveal.style.display =
            "none";

    }

});