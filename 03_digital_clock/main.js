
const time = document.getElementById("time")

setInterval(function(){
    let date = new Date();
    time.innerHTML = date.toLocaleString();
    time.style.display ="flex";
    time.style.justifyContent ="center";
    time.style.fontSize ="2rem";
    time.style.color ="white";
    time.style.textShadow ="2px 2px black";


}, 1000);