const countdownScreen =
document.getElementById("countdownScreen");


// Yaha date set karo

const targetDate =
new Date("August 28, 2025 10:00:00").getTime();



const countdown =
setInterval(()=>{


const now =
new Date().getTime();



const distance =
targetDate - now;



if(distance <= 0){


clearInterval(countdown);



countdownScreen.style.opacity="0";


setTimeout(()=>{

countdownScreen.style.display="none";

},1000);



return;

}




let days =
Math.floor(
distance/(1000*60*60*24)
);



let hours =
Math.floor(
(distance%(1000*60*60*24))
/(1000*60*60)
);



let minutes =
Math.floor(
(distance%(1000*60*60))
/(1000*60)
);



let seconds =
Math.floor(
(distance%(1000*60))
/1000
);



document.getElementById("day").innerHTML =
String(days).padStart(2,"0");


document.getElementById("hour").innerHTML =
String(hours).padStart(2,"0");


document.getElementById("minute").innerHTML =
String(minutes).padStart(2,"0");


document.getElementById("second").innerHTML =
String(seconds).padStart(2,"0");



},1000);