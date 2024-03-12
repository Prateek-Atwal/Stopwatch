let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let hour = 0;
let min = 0;
let sec = 0;
let isOn = false;
let timerObj;

function startTimer(){
    isOn = true;
    if(isOn){
        sec += 1;
        if(sec > 59){
            min += 1;
            sec = 0;
        }
        if(min > 59){
            hour += 1;
            sec = 0;
            min = 0;
        }
        console.log(sec.toString().padStart(2, "0"))
        document.getElementById("hour").textContent = hour.toString().padStart(2, "0");
        document.getElementById("min").textContent = min.toString().padStart(2, "0")
        document.getElementById("sec").textContent = sec.toString().padStart(2, "0")
        timerObj = setTimeout(startTimer, 1000)
        start.disabled = true;
    }
}

function stopTimer(){
    clearTimeout(timerObj);
    start.disabled = false;
}

function resetTimer(){
    hour = 0;
    min = 0;
    sec = 0;
    isOn = false;
    document.getElementById('hour').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    clearTimeout(timerObj);
    start.disabled = false;
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);