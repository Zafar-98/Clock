let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let s = document.querySelector(".s")
let m = document.querySelector(".m")
let h = document.querySelector(".h")

// console.log(hours, minutes, s, m, h);

// let x = 0
// let y

// function recursion() {
//     console.log(x);
//     x++
//     if (x <= 20) {
//         y = setTimeout(() => {
//             recursion()
//         }, 200);
        
//         if (x == 5) {
//             clearInterval(y)
//         }
//     }
// }

// clearTimeout()
// clearInterval()

// recursion()

function clock() {
    
    let time = new Date()
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    
    hours.innerHTML = hour <= 9 ? '0'+hour : hour
    minutes.innerHTML = min <= 9 ? '0'+min : min
    // if (sec <= 9) {
    //     minutes.innerHTML = '0'+sec
    // } else {
    //     minutes.innerHTML = sec
    // }
    
    h.style.transform = `rotate(${hour * 30}deg)`
    m.style.transform = `rotate(${min * 6}deg)`
    s.style.transform = `rotate(${sec * 6}deg)`
    
    setTimeout(() => {
        clock()
    }, 1000);
    
}

clock()

let tabsItem = document.querySelectorAll(".tabsItem")
let tabsContentItem = document.querySelectorAll(".tabsContentItem")

for (let i = 0; i < tabsItem.length; i++) {
    // console.log(tabsItem[i]);
    // console.log(tabsContentItem[i]);
    tabsItem[i].addEventListener("click", function () {
        // console.log(this);
        // this.classList.add("active") class qo'shib beradi
        // this.classList.remove() class olib tashidi
        // this.classList.contains() class tekshirib beradi
        // this.classList.toggle() class bosa olib tashidi, agar bomasa qo'shib beradi
        for (let k = 0; k < tabsItem.length; k++) {
            // console.log(tabsItem[k]);
            tabsItem[k].classList.remove("active")
            tabsContentItem[k].classList.remove("active")
        }
        this.classList.add("active")
        tabsContentItem[i].classList.add("active")
    })
}
let stopwatch__clock = document.querySelector(".stopwatch__clock")
let stopwatch__btn = document.querySelector(".stopwatch__btn")
let stopwatch__hours = document.querySelector(".stopwatch__hours")
let stopwatch__minutes = document.querySelector(".stopwatch__minutes")
let stopwatch__seconds = document.querySelector(".stopwatch__seconds")


stopwatch__btn.addEventListener ("click", () => {
    if(stopwatch__btn.innerHTML ="stop"){
        (stopwatch__btn == "start") }
        else{
            (stopwatch__btn.innerHTML = "stop")
            
        }



function stopwatch(){
    stopwatch__seconds++;
    if (stopwatch__seconds>= 60) {
        stopwatch__seconds = 0;
        stopwatch__minutes++;
     if (stopwatch__minutes >= 60) {
            stopwatch__minutes = 0;
            stopwatch__hours++;
        }
    }
}
function stopwatch(){
    let startTime = new Date()
    let stopwatchHour = startTime.getHours()
    let stopwatchMin = startTime.getMinutes()
    let stopwatchSec = startTime.getSeconds()
  
    
    stopwatch__hours.innerHTML = stopwatchHour <= 9 ? '0'+stopwatchHour : stopwatchHour
    stopwatch__minutes.innerHTML = stopwatchMin <= 9 ? '0'+stopwatchMin: stopwatchMin
    stopwatch__seconds.innerHTML = stopwatchSec <= 9 ? '0'+stopwatchSec : stopwatchSec

    
}
setTimeout(() => {
    stopwatch()
}, 200);


}) 
stopwatch()
















































/*function tick(){
    stopwatch__seconds++;
    if (stopwatch__seconds>= 60) {
        stopwatch__seconds = 0;
        stopwatch__minutes++;
        if (stopwatch__minutes >= 60) {
            stopwatch__minutes = 0;
            stopwatch__hours++;
        }
    }
}
function add() {
    tick();
    stopwatch__hours.innerHTML = hours <= 9 ? '0'+hours : hours
    stopwatch__minutes.innerHTML = min <= 9 ? '0'+min : min
    stopwatch__seconds.innerHTML = sec <= 9 ? "0"+sec : sec
    timer();
    
}
function timer() {
    t = setTimeout(add, 200);
}
tick()*/
