// nazwa funkcji, 1000milisekund czyli co jedą sekundę
setInterval(setClock,1000)

const hourHand = document.querySelector(".hour")
const minuteHand = document.querySelector(".minute")
const secondHand = document.querySelector(".second")

function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(hourHand,hoursRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(secondHand,secondsRatio)

}

function setRotation(ele, rotationRatio){
    ele.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()