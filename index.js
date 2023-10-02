






btn.addEventListener('click', (e) => {
    e.preventDefault()
   
    forecast(inp.value)
})
const forecast = async (city) => {
    let p = await fetch("http://api.weatherapi.com/v1/forecast.json?key=7e4ea6a9783641f59cd72718231109&days=6&aqi=yes&q=" + city)
    let response = await p.json()

    console.log("kal ka", response)
    document.getElementById("temp").innerHTML = response.current.temp_c + " °C"
    var typet = document.getElementById("cloudy").innerHTML = response.current.condition.text


    document.getElementById("cityname").innerHTML = response.location.name
    document.getElementById("humidity").innerHTML = response.current.humidity + "%"
    document.getElementById("wind-kph").innerHTML = response.current.wind_kph + "kph"

    var x = document.getElementsByClassName("imag")[0]


    var type = response.current.condition.text
    if (type == "Light rain possible") {

        x.src = "gif/Partly cloudy with rain.gif"
    }
    else if (type == "Cloudy") {
        x.src = "gif/Cloudy.gif"
    }
    else if (type == "Hail") {
        x.src = "gif/Hail.gif"
    }
    else if (type == "Snow") {
        x.src = "gif/Snow.gif"
    }
    else if (type == "Sunny") {

        x.src = "gif/Sunny.gif"
    }
    else if (type == "Raining") {
        x.src = "gif/Raining.gif"
    }
    else if (type == "Mist") {
        x.src = "gif/Partly cloudy with rain.gif"
    }
    else if (type == "Patchy Raining") {
        x.src = "gif/Raining.gif"
    }
    else {
        x.src = "gif/Cloudy.gif"
    }



    var y = response.forecast.forecastday[1].day
    var nextd=response.forecast.forecastday[2].day
    



    var typet = y.condition.text
    document.getElementById('conditiont').innerHTML = y.condition.text
    document.getElementById('max_temp').innerHTML = y.maxtemp_c+ " °C"
    document.getElementById('min_temp').innerHTML = y.mintemp_c+ " °C"
    date.innerHTML=response.forecast.forecastday[1].date

    document.getElementById('humidityt').innerHTML = y.avghumidity + "%"
    var n = document.getElementsByClassName("imagg")[0]
    document.getElementById('maxwind-kpht').innerHTML = y.maxwind_kph+ "kph"
    document.getElementById('minwind-kpht').innerHTML = y.maxwind_mph+ "mph"

    if (typet === "Light rain") {

        n.src = "gif/Partly cloudy with rain.gif"
    }
    else if (typet === "Cloudy") {
        n.src = "gif/Cloudy.gif"
    }
    else if (typet === "Hail") {
        n.src = "gif/Hail.gif"
    }
    else if (typet === "Snow") {
        n.src = "gif/Snow.gif"
    }
    else if (typet === "Sunny") {

        n.src = "gif/Sunny.gif"
    }
    else if (typet === "Raining") {
        n.src = "gif/Raining.gif"
    } else if (typet === "Patchy Raining") {
        n.src = "gif/Raining.gif"
    }
    else {
        n.src = "gif/Cloudy.gif"
    }
    // for next day
    var ntypet = nextd.condition.text
    ndate.innerHTML=response.forecast.forecastday[2].date
    document.getElementById('nconditiont').innerHTML = nextd.condition.text
    document.getElementById('nmax_temp').innerHTML = nextd.maxtemp_c+ " °C"
    document.getElementById('nmin_temp').innerHTML = nextd.mintemp_c+ " °C"

    document.getElementById('nhumidityt').innerHTML = nextd.avghumidity + "%"
    var imt = document.getElementsByClassName("nimagg")[0]
    console.log(imt)
    document.getElementById('nmaxwind-kpht').innerHTML = nextd.maxwind_kph+ "kph"
    document.getElementById('nminwind-kpht').innerHTML = nextd.maxwind_mph+ "mph"

    if (ntypet === "Light rain") {

        imt.src = "gif/Partly cloudy with rain.gif"
    }
    else if (ntypet === "Cloudy") {
        imt.src = "gif/Cloudy.gif"
    }
    else if (ntypet === "Hail") {
        imt.src = "gif/Hail.gif"
    }
    else if (ntypet === "Snow") {
        imt.src = "gif/Snow.gif"
    }
    else if (ntypet === "Sunny") {

        imt.src = "gif/Sunny.gif"
    }
    else if (ntypet === "Raining") {
        imt.src = "gif/Raining.gif"
    } else if (ntypet === "Patchy Raining") {
        imt.src = "gif/Raining.gif"
    }
    else {
        imt.src = "gif/Cloudy.gif"
    }
    // for  day
    var ntypet = nextd.condition.text
    document.getElementById('nconditiont').innerHTML = nextd.condition.text
    document.getElementById('nmax_temp').innerHTML = nextd.maxtemp_c+ " °C"
    document.getElementById('nmin_temp').innerHTML = nextd.mintemp_c+ " °C"

    document.getElementById('nhumidityt').innerHTML = nextd.avghumidity + "%"
    var imt = document.getElementsByClassName("nimagg")[0]
    console.log(imt)
    document.getElementById('nmaxwind-kpht').innerHTML = nextd.maxwind_kph+ "kph"
    document.getElementById('nminwind-kpht').innerHTML = nextd.maxwind_mph+ "mph"

    if (ntypet === "Light rain") {

        imt.src = "gif/Partly cloudy with rain.gif"
    }
    else if (ntypet === "Cloudy") {
        imt.src = "gif/Cloudy.gif"
    }
    else if (ntypet === "Hail") {
        imt.src = "gif/Hail.gif"
    }
    else if (ntypet === "Snow") {
        imt.src = "gif/Snow.gif"
    }
    else if (ntypet === "Sunny") {

        imt.src = "gif/Sunny.gif"
    }
    else if (ntypet === "Raining") {
        imt.src = "gif/Raining.gif"
    } else if (ntypet === "Patchy Raining") {
        imt.src = "gif/Raining.gif"
    }
    else {
        imt.src = "gif/Cloudy.gif"
    }

}
forecast("Delhi")