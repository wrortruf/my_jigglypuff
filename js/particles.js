// ======================================
// RAKSHABANDHAN PREMIUM PARTICLES SYSTEM
// ======================================



// ================= PETALS =================


const petalContainer = document.getElementById("petals");


if(petalContainer){


const petals = [

"assets/images/petal1.png",
"assets/images/petal2.png",
"assets/images/petal3.png"

];



function createPetal(){



const petal = document.createElement("img");



petal.className = "petal";



petal.src =
petals[
Math.floor(Math.random()*petals.length)
];



// random position

petal.style.left =
Math.random()*100 + "%";



// random size

let size =
18 + Math.random()*25;


petal.style.width =
size+"px";



// speed

let duration =
8 + Math.random()*10;


petal.style.animationDuration =
duration+"s";



// random delay

petal.style.animationDelay =
Math.random()*3+"s";



// opacity

petal.style.opacity =
0.4 + Math.random()*0.6;



// random rotation

petal.style.setProperty(
"--rotate",
Math.random()*360+"deg"
);





petalContainer.appendChild(petal);





setTimeout(()=>{

petal.remove();

},(duration+3)*1000);



}



setInterval(()=>{


createPetal();


},350);



}









// ================= SPARKLES =================



const sparkleContainer =
document.getElementById("sparkles");



if(sparkleContainer){



for(let i=0;i<90;i++){



const sparkle =
document.createElement("div");



sparkle.className =
"sparkle";





sparkle.style.left =
Math.random()*100+"%";



sparkle.style.top =
Math.random()*100+"%";





let size =
2 + Math.random()*5;



sparkle.style.width =
size+"px";


sparkle.style.height =
size+"px";




sparkle.style.animationDelay =
Math.random()*4+"s";



sparkle.style.animationDuration =
2+Math.random()*3+"s";




sparkleContainer.appendChild(sparkle);



}



}









// ================= FLOATING LIGHTS =================



const lightContainer =
document.getElementById("floatingLights");



if(lightContainer){



function createLight(){



const light =
document.createElement("div");



light.className =
"floating-light";




light.style.left =
Math.random()*100+"%";



light.style.bottom =
"-30px";



let size =
10 + Math.random()*25;



light.style.width =
size+"px";


light.style.height =
size+"px";



light.style.animationDuration =
8+Math.random()*8+"s";



lightContainer.appendChild(light);





setTimeout(()=>{

light.remove();

},15000);



}





setInterval(()=>{


createLight();


},800);



}










// ================= TOUCH FRIENDLY =================


// Mobile pe particles thode kam

if(window.innerWidth < 600){


document.documentElement.style
.setProperty(
"--particle-speed",
"0.8"
);


}