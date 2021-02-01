var sec = document.getElementById("sec");
var mint = document.getElementById("mint");
var hour = document.getElementById("hour");
var interval;


function timer() {

    sec.value--
    sec.value.innerHTML = sec.value;

    if (sec.value <= 0) {
        mint.value--
        mint.value.innerHTML = mint.value;
        sec.value = 59;

    }
    else if (mint.value <= 0) {
        hour.value--
        hour.value.innerHTML = hour.value;
        

    }



}

function start() {

    interval = setInterval(timer, 1000)
}
function pause() {

    clearInterval(interval)

}
function reset() {

    pause()
    sec.value = 00;
    mint.value = 00;
    hour.value = 00;

}


var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
var second = date.getSeconds();
var runTime;
var time = document.getElementById("date").innerHTML = hour + " " + ":" + " " + min + " " + ":" + " " + second
