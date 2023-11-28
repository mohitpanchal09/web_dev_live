let button=document.querySelector('button')
let input = document.querySelector('input')
let weatherData=document.querySelector('.weather-data')
button.addEventListener('click',()=>{
    
    let city=input.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7a70812681190434a7ce0cf5a6729f23`).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        weatherData.innerHTML=`<p id="temp">temperature: ${data.main.temp}</p>
    <p id="wind">wind speed: ${data.wind.speed}</p>
    <p id="humidity">humidity: ${data.main.humidity}</p>
    <p id="mintemp">min temperature: ${data.main.temp_min}</p>
    <p id="maxtemp">max temperature: ${data.main.temp_max}</p>`
    }).catch((err)=>{
        weatherData.innerHTML=`
        <p>city not found</p>
        `
    })
    input.value=''
})