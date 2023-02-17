async function getWeatherByZip() {
    let weatherKey = 'fed200574f31448d3c4ef74409fc60bf';
    var zipCode = document.getElementById("zipcode").value;

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${weatherKey}&units=imperial`
    )
    
    const data = await response.json()
    console.log(data)
}