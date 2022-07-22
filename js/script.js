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

    hours.innerHTML = hour <= 9 ? '0' + hour : hour
    minutes.innerHTML = min <= 9 ? '0' + min : min
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


// Timer

let stopwatchHours = document.querySelector(".stopwatch__hours")
let stopwatchMinutes = document.querySelector(".stopwatch__minutes")
let stopwatchSeconds = document.querySelector(".stopwatch__seconds")
let stopwatchBtn = document.querySelector(".stopwatch__btn")
let tabsLinkSpan = document.querySelector(".tabsLink__span")

let stop;

stopwatchBtn.addEventListener("click", function () {

    if (this.innerHTML == "start") {
        this.innerHTML = "stop"
        tabsLinkSpan.classList.add("active")
        stopWatch()
    } else if (this.innerHTML == "stop") {
        this.innerHTML = "clear"
        tabsLinkSpan.classList.remove("active")
        tabsLinkSpan.classList.add("active_clear")
        clearInterval(stop)
    } else if (this.innerHTML == "clear") {
        this.innerHTML = "start"
        tabsLinkSpan.classList.remove("active_clear")
        stopwatchSeconds.innerHTML = 0
        stopwatchMinutes.innerHTML = 0
        stopwatchHours.innerHTML = 0
    }

})

function stopWatch() {

    stopwatchSeconds.innerHTML++

    if (stopwatchSeconds.innerHTML > 59) {
        stopwatchSeconds.innerHTML = 0
        stopwatchMinutes.innerHTML++

        if (stopwatchMinutes.innerHTML > 5) {
            stopwatchMinutes.innerHTML = 0
            stopwatchHours.innerHTML++
        }
    }

    stop = setTimeout(() => {
        stopWatch()
    }, 10);

}

// stopWatch()

// Timer