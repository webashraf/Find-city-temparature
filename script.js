let cityInputName = document.getElementById('cityInput');
const valueSearch = document.getElementById('inputValueSearch');
const displayCity = document.getElementById('displayCity');
const temparetureDisplay = document.getElementById('temparatureDisplay');
const cloudSun = document.getElementById('cloudsOrSun');



// https://api.openweathermap.org/ to load weather data;

valueSearch.addEventListener('click', ()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInputName.value}&APPID=dbf317298fe77c0d0d40199cd56d27a2`)
    .then(respo => respo.json())
    .then(data => {
        console.log(data);
        // const fullData = data;
        const cityName = data.name;
        const cityTemp = data.main.temp;
        const cityTempCelsius = cityTemp - 273.15;
        const temp = cityTempCelsius.toFixed(2);
        const visualWeather = data.weather[0].main;
        console.log(cityName, cityTemp, cityTempCelsius, temp, visualWeather);

        if (temp < 0) {
            temparetureDisplay.style.color = '#fff'
        }
        else if (temp > 25) {
            temparetureDisplay.style.color = 'tomato'
        }
        else if (temp > 30) {
            temparetureDisplay.style.color = 'red'
        }
        else if (temp > 35) {
            temparetureDisplay.style.color = '#990000'
        }

        console.log('click', cityInputName.value);
        cityInputName.value = ''
        displayCity.innerHTML = cityName;
        temparetureDisplay.innerHTML = temp;
        cloudSun.innerHTML = visualWeather
    })
    .catch(error => {
        displayCity.innerHTML = `City is not found.`;
        console.error('There was a fetch error!', error);
    });

})

