const gen = () => {
    const target = document.querySelector('.clock')

    for(let i = 0; i < 60; i++){
        target.innerHTML += "<div class='line line"+i+"'></div>"
        let ele = document.querySelector('.line' + i)
        ele.style.setProperty('--rotation', 360/(60/i))
    }
}

gen()