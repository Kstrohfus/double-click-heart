const loveMe = document.querySelector(".loveMe")
const timesLoved = document.querySelector("#times")

let clickTime = 0

loveMe.addEventListener("click", (e) => {
 if(clickTime === 0) {
    clickTime = new Date().getTime()
 } else {
    if((new Date().getTime() - clickTime) < 800) {
   } else {
        clickTime = new Date().getTime()
    }
 }
})