// local variables:

// fetch metod
// fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
  // inputval.value === введённый город
  // apik = "3045dd712ffe6e702e3245525ac7fa38"

// on btn click функция
  // addEventListener
  // fetch
  // response
  // вывести данные
  // температура приходит в кельвинах нам надо переделать в градусы  
      // для этого надо отнять 273 тогда получим градусы 

  // datu response piemers
  //   {
  //     "coord": {
  //         "lon": 23.7128,
  //         "lat": 56.65
  //     },
  //     "weather": [
  //         {
  //             "id": 802,
  //             "main": "Clouds",
  //             "description": "scattered clouds",
  //             "icon": "03d"
  //         }
  //     ],
  //     "base": "stations",
  //     "main": {
  //         "temp": 293.17,
  //         "feels_like": 292.48,
  //         "temp_min": 293.17,
  //         "temp_max": 293.17,
  //         "pressure": 1014,
  //         "humidity": 48,
  //         "sea_level": 1014,
  //         "grnd_level": 1014
  //     },
  //     "visibility": 10000,
  //     "wind": {
  //         "speed": 4.6,
  //         "deg": 299,
  //         "gust": 8.75
  //     },
  //     "clouds": {
  //         "all": 46
  //     },
  //     "dt": 1655294073,
  //     "sys": {
  //         "type": 1,
  //         "id": 1876,
  //         "country": "LV",
  //         "sunrise": 1655256795,
  //         "sunset": 1655320681
  //     },
  //     "timezone": 10800,
  //     "id": 459279,
  //     "name": "Jelgava",
  //     "cod": 200
  // }

  const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";
  const apik = "3045dd712ffe6e702e3245525ac7fa38";
  
  const cityinput = document.querySelector('#cityinput');
  const submit = document.querySelector('#add');
  const temperature = document.getElementById('temp');
  const wind = document.getElementById('wind');
  const description = document.getElementById('description');
  const cityoutput = document.getElementById('cityoutput');

  let City;
  
  
  submit.addEventListener('click', viewWeather);
  
  function viewWeather() {

    City = cityinput.value;

    GetCityAPI(City);
  }
  
function GetCityAPI(City) {
  let reqURL = apiURL + `${City}`+ "&appid=" + `${apik}`; // можно записать вот так = `${apiURL}${City}&appid=${apik}`
  const url = new URL(reqURL);

    fetch(url)
    .then(response => response.json())
    .then(data => renderData(data))
    .catch(error => alert(error));
}

function renderData(data) {
  cityoutput.innerHTML = "Метеоданные по городу " + City;                             // `Метеоданные по городу ${City}`
  temperature.innerHTML = "Температура:" + (data.main.temp - 273).toFixed(2);         // `Температура: ${(data.main.temp - 273).toFixed(2))}`
  wind.innerHTML = "Ветер:" + (data.wind.speed).toFixed(2) + " m/c";                  // `Ветер: ${(data.wind.speed.toFixed(2))}m/c` 
  description.innerHTML = "Описание:" + data.weather.main + ", " + data.weather.description; // `Описание: ${data.weather[0].main} ${data.weather.description}`
}

/*
отлично пару моментов

при написании кода стоит придерживаться такого подхода 

в начале дефинируем все что нам надо переменные и функции, а только потом их используем 

*/
