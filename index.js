

const mainfun = async (city) => {
    var p = await fetch("http://api.weatherapi.com/v1/current.json?key=7e4ea6a9783641f59cd72718231109&aqi=yes&q=" + city)
    var response = await p.json()
   
    console.log(response)


    // console.log(response.region)
    // console.log(response.current.temp_c)
    // console.log(response.current.condition.icon)

    document.getElementById("temp").innerHTML = response.current.temp_c+ " °C"
    var typet = document.getElementById("cloudy").innerHTML = response.current.condition.text 
    // var typei= document.getElementsByClassName("imag").src= response.current.condition.icon
    // console.log("icon",typei);
    

    document.getElementById("cityname").innerHTML = response.location.name
    document.getElementById("humidity").innerHTML = response.current.humidity+"%"
    document.getElementById("wind-kph").innerHTML = response.current.wind_kph+"kph"

// var code = response.current.condition.code
    var x= document.getElementsByClassName("imag")[0]

    // console.log(inp.value)
    // console.log(code)
    // // console.log("Success is img load")
    // console.log()
    var  type= response.current.condition.text

    
   
   console.log("try",type)
   console.log(x)
    if (type =="Light rain possible") {
    
        x.src = "./Partly cloudy with rain.gif"
    }
    else if (type == "Cloudy") {
        x.src = "./Cloudy.gif"
    }
    else if (type == "Hail") {
        x.src = "./Hail.gif"
    }
    else if (type == "Snow") {
        x.src = "./Snow.gif"
    }
    else if (type =="Sunny") {
   
       x.src = "./Sunny.gif"
    }
    else if (type == "Raining") {
        x.src = "./Raining.gif"
    }
    else if (type == "Mist") {
        x.src = "./Partly cloudy with rain.gif"
    }
    else if (type == "Patchy Raining") {
        x.src = "./Raining.gif"
    }
    else{
        x.src="./Cloudy.gif"
    }
    
}


mainfun("Delhi")

btn.addEventListener('click', (e) => {
    e.preventDefault()
    mainfun(inp.value)
    forecast(inp.value)
})
const forecast = async (city) => {
    let p = await fetch("http://api.weatherapi.com/v1/forecast.json?key=7e4ea6a9783641f59cd72718231109&days=6&aqi=yes&q=" + city)
    let response = await p.json()
    // return response
    console.log("kal ka",response)
    //   document.getElementById("").
    var y = response.forecast.forecastday[1].day
    // var z= response.forecast.forecastday[1].day
    console.log(y)
   
    console.log("ja h nam",name)
    var typet =y.condition.text
    document.getElementById('conditiont').innerHTML = y.condition.text
    document.getElementById('max_temp').innerHTML = y.maxtemp_c
    document.getElementById('min_temp').innerHTML = y.mintemp_c
    //   document.getElementById('use').src=y.condition.icon
     document.getElementById('humidityt').innerHTML = y.avghumidity
    var n= document.getElementsByClassName("imagg")[0]
      document.getElementById('maxwind-kpht').innerHTML=y.maxwind_kph
      document.getElementById('minwind-kpht').innerHTML=y.minwind_kph

    if (typet === "Light rain") {
        // type.preventDefault()
        document.getElementsByClassName("imagg")[0].src = "./Partly cloudy with rain.gif"
    }
    else if (typet === "Cloudy") {
        n.src = "./Cloudy.gif"
    }
    else if (typet === "Hail") {
        n.src = "./Hail.gif"
    }
    else if (typet === "Snow") {
        n.src = "./Snow.gif"
    }
    else if (typet === "Sunny") {
   
        document.getElementsByClassName("imagg")[0].src = "./Sunny.gif"
    }
    else if (typet === "Raining") {
        n.src = "./Raining.gif"
    }else if (typet === "Patchy Raining") {
        n.src = "./Raining.gif"
    }
    else {
        n.src = "./Cloudy.gif"
    }

}
forecast("Delhi")