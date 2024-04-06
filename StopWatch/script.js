const display = document.getElementById("display");
let timer = null;
let StartTime = 0;
let elasedTime =0;
let isRunning = false;

function start() {  

if (!isRunning) {
    StartTime = Date.now() - elasedTime;
    timer = setInterval(update,10);
    isRunning = true;
   }
}
function stop(){
    if (isRunning) {
        clearInterval(timer);
        elasedTime = Date.now() - StartTime;
        isRunning = false;
    }
}
function reset(){
    clearInterval(timer);
    StartTime=0;
    elasedTime=0;
    isRunning = false;
    display.textContent="00:00:00:00";
}
function update(){
    const currentTime = Date.now();
    elasedTime = currentTime - StartTime;
    let hours = Math.floor(elasedTime / (1000*60*60));
    let  minutes = Math.floor(elasedTime / (1000*60) % 60);
    let  seconds = Math.floor(elasedTime / 1000 % 60);
    let  milliseconds = Math.floor(elasedTime % 1000 /10 );
    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    milliseconds = String(milliseconds).padStart(2,"0");
    display.textContent= `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
