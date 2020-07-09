
var min =0
var sec=0
var ms=0
var interval;

var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msHeading = document.getElementById("ms")


function timer() {
    ms++
    msHeading.innerHTML=ms
    if (ms>=100){
        sec++
        secHeading.innerHTML=sec
        ms=0
    }else if(sec>=60){
        min++
        minHeading.innerHTML=min
        sec=0

    }
}

function start(){
interval = setInterval(timer,10)
document.getElementById("start").disabled = true;
}

function stop(){
    clearInterval(interval)
    document.getElementById("start").disabled = false;
}

function reset(){
    ms='00'
    sec='00'
    min='00'
    minHeading.innerHTML=min
    secHeading.innerHTML=sec
    msHeading.innerHTML=ms
    stop()
    
}