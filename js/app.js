let inputElement = document.getElementById("imageLink")

async function getWeatherByZip(zipCode) {
    let weatherKey = 'fed200574f31448d3c4ef74409fc60bf';

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${weatherKey}&units=imperial`
    )
    
    const data = await response.json()
    determineWeather(data)
}


function determineWeather(data){
    let select = document.getElementById("selectMood");
    console.log(data.main.temp_max)
    let value = Number(select.value);
   

    if(value === 1){
        if (data.main.temp_max > 80 && data.clouds.all === 0 && data.main.weather[0] !== 'windy'){
            localStorage.setItem(
                'weather', 'sunny'            
            )
            localStorage.setItem(
                'url', HHOT            
            )
        } else if (data.main.weather[0] === 'snowy' && data.main.temp_max < 50){
            localStorage.setItem(
                'weather', 'winter'            
            )
            localStorage.setItem(
                'url', HWINTER            
            )
        } else if (data.main.weather[0] === 'rain'){
            localStorage.setItem(
                'weather', 'rain'            
            )
            localStorage.setItem(
                'url', HRAIN            
            )
        } else if (data.main.weather[0] === 'windy'){
            localStorage.setItem(
                'weather', 'windy'            
            )
            localStorage.setItem(
                'url', HWINDY            
            )
        }
    }else if(value === 2){
        if (data.main.temp_max > 80 && data.clouds.all === 0 && data.main.weather[0] !== 'windy'){
            localStorage.setItem(
                'weather', 'sunny'            
            )
            localStorage.setItem(
                'url', SHOT            
            )
        } else if (data.main.weather[0] === 'snowy' && data.main.temp_max < 50){
            localStorage.setItem(
                'weather', 'winter'            
            )
            localStorage.setItem(
                'url', SWINTER            
            )
        } else if (data.main.weather[0] === 'rain'){
            localStorage.setItem(
                'weather', 'rain'            
            )
            localStorage.setItem(
                'url', SRAIN            
            )
        } else if (data.main.weather[0] === 'windy'){
            localStorage.setItem(
                'weather', 'windy'            
            )
            localStorage.setItem(
                'url', SWINDY            
            )
        }
    }else if(value === 3){
        if (data.main.temp_max > 80 && data.clouds.all === 0 && data.main.weather[0] !== 'windy'){
            localStorage.setItem(
                'weather', 'sunny'            
            )
            localStorage.setItem(
                'url', AHOT            
            )
        } else if (data.main.weather[0] === 'snowy' && data.main.temp_max < 50){
            localStorage.setItem(
                'weather', 'winter'            
            )
            localStorage.setItem(
                'url', AWINTER            
            )
        } else if (data.main.weather[0] === 'rain'){
            localStorage.setItem(
                'weather', 'rain'            
            )
            localStorage.setItem(
                'url', ARAIN            
            )
        } else if (data.main.weather[0] === 'windy'){
            localStorage.setItem(
                'weather', 'windy'            
            )
            localStorage.setItem(
                'url', AWINDY            
            )
        }
    }
}