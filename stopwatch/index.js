const display=document.getElementById("display");
const startBtn=document.getElementById("startBtn");
const stopBtn=document.getElementById("stopBtn");
const resetBtn=document.getElementById("resetBtn");

let timer;
let startTime;
let elapsedTime=0;
let isRunning=false;

startBtn.addEventListener("click",()=>{

    if(!isRunning)
    {
        startTime=Date.now()-elapsedTime;
        timer=setInterval(update,10);
        isRunning=true;
    }
})

const stop = () => {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
};

stopBtn.addEventListener("click", stop);

resetBtn.addEventListener("click", () => {
    stop();
    startTime = 0;
    elapsedTime = 0;
    timer = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
});

const update=()=>{

    elapsedTime=Date.now()-startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let min = Math.floor(elapsedTime / (1000 * 60)) % 60;
    let sec = Math.floor(elapsedTime / 1000) % 60;
    let ms=Math.floor(elapsedTime%100)
    hours=String(hours).padStart(2,0);
    min=String(min).padStart(2,0);
    sec=String(sec).padStart(2,0);
    ms=String(ms).padStart(2,0);
    display.textContent=`${hours}:${min}:${sec}:${ms}`;
}
