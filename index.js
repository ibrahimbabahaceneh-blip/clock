
function Time(){
    const time = new Date()
    const hour = time.getHours().toString().padStart(2 , 0)
    const min = time.getMinutes().toString().padStart(2 , 0)
    const sec = time.getSeconds().toString().padStart(2 , 0)
    const clock = `${hour}:${min}:${sec}`
    const day = time.getDate().toString().padStart(2 , 0)
    let month = time.getMonth() + 1
    month = month.toString().padStart(2, 0)
    const year = time.getFullYear()
    const date = `${year}/${month}/${day}`

    document.getElementById("date").textContent = date
    document.getElementById("clock").textContent = clock;
}

Time()
setInterval(Time , 1000)