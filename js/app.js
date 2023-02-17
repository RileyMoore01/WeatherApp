async function getWeatherByZip() {
    let weatherKey = 'fed200574f31448d3c4ef74409fc60bf';
    var zipCode = document.getElementById("zipcode").value;

    if (!zipCode)
    {
        alert("Not a valid zip code");
    }

    else
    {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${weatherKey}&units=imperial`
        )
        
        const data = await response.json()
        console.log(data)
        console.log(zipCode)
        moveIndexPage();
    }
}

function moveIndexPage() {
    var container = document.getElementById("input-page");
    container.style.transform = "translateY(-1000px)";
}