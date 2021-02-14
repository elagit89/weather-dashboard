
const date = new Date();

function addSeasonImage(date){
const seasonPicture = document.querySelectorAll('.seasonImage');
const dateOfSpring = new Date(2020,2,21);
const dateOfSummer = new Date(2020,5,22);
const dateOfAutumn = new Date(2020,8,23);
const dateOfWinter = new Date(2020,11,22);
const currentYear = date.getFullYear();


if(date >= dateOfSpring.setFullYear(currentYear)){
  seasonPicture.forEach(img => img.src="images/spring.png");

  }

if(date >= dateOfSummer.setFullYear(currentYear)){
  seasonPicture.forEach(img => img.src="images/summer.png");

  }
 
if( date >= dateOfAutumn.setFullYear(currentYear)){
  seasonPicture.forEach(img => img.src="images/autumn.png");

  }
if(date >= dateOfWinter.setFullYear(currentYear)|| date <= dateOfSpring.setFullYear(currentYear)){
  seasonPicture.forEach(img => img.src="images/winter.png");

  }
}

console.log(addSeasonImage(date));




const cityName = document.querySelector('.cityName');
const currentDate = document.querySelector('.currentDate');
const currentTemperature = document.querySelector('.currentTemperature');
const mainIcon = document.querySelector('.mainIcon');
const currentPressure = document.querySelector('.currentPressure');
const currentWindSpeed = document.querySelector('.currentWindSpeed');
const precipitationProbability = document.querySelector('.precipitationProbability');

function setCurrentDate(weatherData){
  const today = weatherData.data[0].datetime;
  const year = Number(today.slice(0,4));
  const month = Number(today.slice(5,7))-1;
  const day = Number(today.slice(8));
  const actualDate = new Date(year,month,day);
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  currentDate.textContent = actualDate.toLocaleDateString('pl-PL', options);
}

function setTemperature(weatherData){
  const temperature = weatherData.data[0].temp;
  currentTemperature.textContent = `${temperature} \u2103`;
  
}

function setIcon(weatherData){
  icon = weatherData.data[0].weather.icon;
  mainIcon.src = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
  
}

function setCurrentPressure(weatherData){
  const pressure = (weatherData.data[0].pres).toFixed(2);
  currentPressure.textContent = `ciśnienie: ${pressure} hPa`;

}

function setWindSpeed(weatherData){
  const windSpeed = Number(weatherData.data[0].wind_spd);
  const windSpeedKmPerHour = ((windSpeed * 100000) * (3.6 * 10)/1000000).toFixed(2);
  currentWindSpeed.textContent = `prędkość wiatru: ${windSpeedKmPerHour} km/h`;


}

function setPrecipitationProbability(weatherData){

  const precipitationChance = weatherData.data[0].pop;
  precipitationProbability.textContent = `prawdopodobieństwo opadów: ${precipitationChance} \u0025`;

}

function showWeatherForTheCity(weatherData){
  cityName.textContent = weatherData.city_name;
  
  setCurrentDate(weatherData);
  setTemperature(weatherData);
  setIcon(weatherData);
  setCurrentPressure(weatherData);
  setWindSpeed(weatherData);
  setPrecipitationProbability(weatherData);
  
  
  console.log(weatherData);

}


function sendStartRequest(){

  fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=Warszawa&key=7258246c2f5041928580a2c2e6e62847')
  .then(response => response.ok? response.json() : undefined)
  .then(weatherData => showWeatherForTheCity(weatherData))
  .catch(() => console.log('Wystąpił błąd'));

}

console.log(sendStartRequest());



const cityArray = ['Augustów', 'Bełchatów', 'Będzin', 'Białystok', 'Bielsko-Biała', 'Bochnia', 'Brzeg', 'Bydgoszcz', 'Bytom', 'Chełm', 'Chrzanów', 'Chorzów','Cieszyn', 'Czechowice-Dziedzice', 'Częstochowa', 'Dąbrowa Górnicza', 'Dębica', 'Elbląg', 'Ełk', 'Gdańsk', 'Gdynia',  'Gliwice', 'Głogówek', 'Gniezno', 'Goczałkowice-Zdrój', 'Gorzów Wielkopolski', 'Grodzisk Mazowiecki', 'Grudziądz','Jarosław', 'Jasło', 'Jastrzębia Góra', 'Jelenia Góra', 'Kalisz', 'Katowice', 'Kielce', 'Kluczbork', 'Kłodzko', 'Kołobrzeg', 'Konin', 'Koszalin', 'Kościan', 'Kraków', 'Krosno', 'Kutno', 'Legnica', 'Leszno', 'Leżajsk', 'Lublin', 'Łeba', 'Łowicz', 'Łódź', 'Malbork', 'Mikołów', 'Mysłowice', 'Nowy Sącz', 'Nysa', 'Olsztyn', 'Opole', 'Ostrołęka', 'Ostrów Świętokrzyski', 'Ostrów Wielkopolski', 'Oświęcim', 'Pabianice', 'Piła', 'Piotrków Trybunalski', 'Płock', 'Poznań', 'Prudnik', 'Przemyśl', 'Przemyśl', 'Pszczyna', 'Puławy', 'Racibórz', 'Radomsko', 'Rawicz', 'Rybnik', 'Rzeszów', 'Siedlce', 'Sieradz', 'Skierniewice', 'Słupsk', 'Sochaczew', 'Sopot', 'Sosnowiec', 'Stargard Szczeciński', 'Starogard Gdański', 'Stary Sącz', 'Suwałki', 'Szczawnica', 'Szczecin', 'Świdnica', 'Świętochłowice', 'Świnoujście', 'Tarnowskie Góry', 'Tarnów',  'Tczew','Tomaszów Mazowiecki','Toruń','Tychy', 'Tymbark', 'Ustronie Morskie', 'Ustroń', 'Wadowice', 'Wałbrzych', 'Warszawa', 'Wieliczka', 'Wisła', 'Wrocław', 'Włocławek', 'Zabrze', 'Zakopane', 'Zamość', 'Zielona Góra', 'Zgierz', 'Zwardoń', 'Żyrardów', 'Żywiec'];




const cityInput = document.querySelector('.cityInput');
const cityList = document.querySelector('.cityList');




   function removePreviousList(){
    const list = document.querySelectorAll('li');
    
        list.forEach(element => element.remove());
    
   }


    function createCurrentList(filteredCityArray){
    const fragment = document.createDocumentFragment();
    filteredCityArray.forEach(city =>{
    const newElement = document.createElement('li');
    newElement.value = city;
    newElement.textContent = city;
    fragment.appendChild(newElement);
      }
    )
   cityList.appendChild(fragment);
   }


   function isAnyCityAvailable(e){
   
    removePreviousList();

    let inputText = e.target.value;
    if(inputText.length){
    let cutText = inputText.slice(1);
    let bigFirstLetter = inputText[0].toUpperCase();
    let textWithBigFirstLetter = (bigFirstLetter + cutText).trim();
    cityInput.value = textWithBigFirstLetter;
    const filteredCityArray = cityArray.filter(value => value.indexOf(textWithBigFirstLetter) == 0);
    createCurrentList(filteredCityArray)
    filteredCityArray.length = 0;
    }

   }

cityInput.addEventListener('keyup',isAnyCityAvailable);


function addCityToInput(e){

  cityInput.value = '';
  let cityToAdd = e.target.textContent;
  cityInput.value = cityToAdd;
  const list = document.querySelectorAll('li'); 
  list.forEach(element => element.remove());


}
cityList.addEventListener('click', addCityToInput);







 