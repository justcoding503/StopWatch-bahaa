let seconds = 0;
let tens = 0;
let minutes = 0;
let outSeconds = document.getElementById('seconds');
let outTens = document.getElementById('tens');
let outMinutes = document.getElementById('minutes');
let start = document.getElementById('Start');
let Stop = document.getElementById('Stop');
let reset = document.getElementById('Reset');

function starttimer(){
    tens++;
    if(tens<=9){
        outTens.innerHTML = "0"+tens;
    }
    if(tens>9){
        outTens.innerHTML = tens;
    }
    if(tens>99){
        seconds++;
        outSeconds.innerHTML="0"+seconds
        tens = 0;
        outTens.innerHTML = "00";
    }
    if(seconds>9){
        outSeconds.innerHTML=seconds;
    }
    if(seconds>59){
        minutes++;
        tens = 0;
        outTens.innerHTML = "00"
        outMinutes.innerHTML="0"+minutes
        seconds = 0;
        outSeconds.innerHTML = "00";
    }
    if(minutes>9){
        outMinutes.innerHTML=minutes;
    }
};

let interval


start.addEventListener('click',function(){
    clearInterval(interval);
    interval = setInterval(starttimer,10)
});

Stop.addEventListener('click',function(){
    clearInterval(interval);
});

reset.addEventListener('click',function(){
    clearInterval(interval);
    tens = 0;
    outTens.innerHTML = '00';
    seconds = 0;
    outSeconds.innerHTML = '00';
    minutes = 0;
    outMinutes.innerHTML = '00'
});

