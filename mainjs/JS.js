
const date = new Date();
const cityName = document.querySelector('.cityName');
const zeroDay = document.querySelector('.zeroDay');
const tempZero = document.querySelector('.tempZero');
const iconZero = document.querySelector('.iconZero');
const currentPressure = document.querySelector('.currentPressure');
const currentWindSpeed = document.querySelector('.currentWindSpeed');
const precipitationProbability = document.querySelector('.precipitationProbability');
const firstDay = document.querySelector('.firstDay');
const secondDay = document.querySelector('.secondDay');
const thirdDay = document.querySelector('.thirdDay');
const fourthDay = document.querySelector('.fourthDay');
const fifthDay = document.querySelector('.fifthDay');
const sixthDay = document.querySelector('.sixthDay');
const iconOne = document.querySelector('.iconOne');
const iconTwo = document.querySelector('.iconTwo');
const iconThree = document.querySelector('.iconThree');
const iconFour = document.querySelector('.iconFour');
const iconFife = document.querySelector('.iconFife');
const iconSix = document.querySelector('.iconSix');
const tempOne = document.querySelector('.tempOne');
const tempTwo = document.querySelector('.tempTwo');
const tempThree = document.querySelector('.tempThree');
const tempFour = document.querySelector('.tempFour');
const tempFife = document.querySelector('.tempFife');
const tempSix = document.querySelector('.tempSix');

function addSeasonImage(date){
  const seasonPicture = document.querySelectorAll('.seasonImage');
  const dateOfSpring = new Date(2020,2,21);
  const dateOfSummer = new Date(2020,5,22);
  const dateOfAutumn = new Date(2020,8,23);
  const dateOfWinter = new Date(2020,11,22);
  const currentYear = date.getFullYear();

  switch (true) {
    case ((date >= dateOfSpring.setFullYear(currentYear))&&(date < dateOfSummer.setFullYear(currentYear))):
      seasonPicture.forEach(img => img.src="images/spring.jpg");
      break;
    case ((date >= dateOfSummer.setFullYear(currentYear))&&(date < dateOfAutumn.setFullYear(currentYear))):
      seasonPicture.forEach(img => img.src="images/summer.jpg");
      break;
    case ((date >= dateOfAutumn.setFullYear(currentYear))&&(date < dateOfWinter.setFullYear(currentYear))):
      seasonPicture.forEach(img => img.src="images/autumn.jpg");
      break;
    case ((date >= dateOfWinter.setFullYear(currentYear))|| (date < dateOfSpring.setFullYear(currentYear))):
      seasonPicture.forEach(img => img.src="images/winter.jpg");
      break;
    }

}
addSeasonImage(date);

class WeatherForecast {

  constructor(weatherForDay, numberOfDay,numberOfIcon, numberOfTemp){
    this.weatherForDay = weatherForDay;
    this.numberOfDay = numberOfDay;
    this.numberOfIcon = numberOfIcon;
    this.numberOfTemp = numberOfTemp;
  } 

  changeFormatOfDate(){
    const date = this.weatherForDay.datetime;
    const actualDate = new Date(date);
    return actualDate;
  }
  setDateInDom(){
    const actualDate = this.changeFormatOfDate();
    const options = {weekday: 'long'};
    this.numberOfDay.textContent = actualDate.toLocaleDateString('pl-PL', options);
    const dayOfWeek = document.querySelectorAll('.day-of-week');
    dayOfWeek.forEach(day => day.textContent === 'poniedziałek'? 
      day.textContent = "poniedz.":day.textContent = day.textContent);
  }


  setIcon(){
    const icon = this.weatherForDay.weather.icon;
    this.numberOfIcon.src = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
  }

  setTemperature(){
      const temperature = this.weatherForDay.temp;
      this.numberOfTemp.textContent = `${temperature} \u2103`;
    }
}


class CurrentWeatherForecast extends WeatherForecast{

  constructor(weatherForDay, numberOfDay,numberOfIcon, numberOfTemp, pressure, windSpeed, precipitation){
    super(weatherForDay, numberOfDay,numberOfIcon, numberOfTemp);
    this.pressure = pressure;
    this.windSpeed = windSpeed;
    this.precipitation = precipitation;
  }

 

  setDateInDom(){
    const actualDate = this.changeFormatOfDate();
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    this.numberOfDay.textContent = actualDate.toLocaleDateString('pl-PL', options);
  }


 setCurrentPressure(){
    const press = (this.weatherForDay.pres).toFixed(2);
    this.pressure.textContent =  `${press} hPa`;
  }
  
  setWindSpeed(){
    const windSpeed = Number(this.weatherForDay.wind_spd);
    const windSpeedKmPerHour = ((windSpeed * 100000) * (3.6 * 10)/1000000).toFixed(2);
    this.windSpeed.textContent = ` ${windSpeedKmPerHour} km/h`;

  }
  
  setPrecipitationProbability(){
  
    const precipitationChance = this.weatherForDay.pop;
    this.precipitation.textContent = ` ${precipitationChance} \u0025`;
  
  }
  
}





function showWeatherAfterError(){

  switch(true){
    case(errorToShow.classList.contains('showed-error')):
    errorToShow.classList.replace('showed-error','hidden-error');
  
    case(cityDiv.classList.contains('hidden-city')):
    cityDiv.classList.replace('hidden-city','city-div');
  
  
    case(currentWeather.classList.contains('hidden-current-weather')):
    currentWeather.classList.replace('hidden-current-weather','current-weather');
    

    case(nextDays.classList.contains('hidden-next-days')):
    nextDays.classList.replace('hidden-next-days','next-days' );
  

  }

}



function showWeatherForTheCity(weatherData){
  console.log(weatherData);

  showWeatherAfterError()

  if(weatherData.country_code === 'PL'){

  cityName.textContent = weatherData.city_name;

  const weatherForZeroDay = weatherData.data[0];
  const weatherForFirstDay = weatherData.data[1];
  const weatherForSecondDay = weatherData.data[2];
  const weatherForThirdDay = weatherData.data[3];
  const weatherForFourthDay = weatherData.data[4];
  const weatherForFifthDay = weatherData.data[5];
  const weatherForSixthDay = weatherData.data[6];

  const currentWeatherForecast1 = new CurrentWeatherForecast(weatherForZeroDay, zeroDay, iconZero,tempZero, currentPressure, currentWindSpeed, precipitationProbability );
  const weatherForecast1 = new WeatherForecast(weatherForFirstDay, firstDay, iconOne,tempOne);
  const weatherForecast2 = new WeatherForecast(weatherForSecondDay, secondDay, iconTwo,tempTwo);
  const weatherForecast3 = new WeatherForecast(weatherForThirdDay, thirdDay, iconThree,tempThree);
  const weatherForecast4 = new WeatherForecast(weatherForFourthDay, fourthDay, iconFour,tempFour);
  const weatherForecast5 = new WeatherForecast(weatherForFifthDay, fifthDay, iconFife,tempFife);
  const weatherForecast6 = new WeatherForecast(weatherForSixthDay, sixthDay, iconSix,tempSix);


  currentWeatherForecast1.changeFormatOfDate();
  currentWeatherForecast1.setDateInDom();
  currentWeatherForecast1.setIcon();
  currentWeatherForecast1.setTemperature();
  currentWeatherForecast1.setCurrentPressure();
  currentWeatherForecast1.setWindSpeed();
  currentWeatherForecast1.setPrecipitationProbability();
  
  weatherForecast1.changeFormatOfDate();
  weatherForecast1.setDateInDom();
  weatherForecast1.setIcon();
  weatherForecast1.setTemperature();

  weatherForecast2.changeFormatOfDate();
  weatherForecast2.setDateInDom();
  weatherForecast2.setIcon();
  weatherForecast2.setTemperature();

  weatherForecast3.changeFormatOfDate();
  weatherForecast3.setDateInDom();
  weatherForecast3.setIcon();
  weatherForecast3.setTemperature();

  weatherForecast4.changeFormatOfDate();
  weatherForecast4.setDateInDom();
  weatherForecast4.setIcon();
  weatherForecast4.setTemperature();

  weatherForecast5.changeFormatOfDate();
  weatherForecast5.setDateInDom();
  weatherForecast5.setIcon();
  weatherForecast5.setTemperature();

  weatherForecast6.changeFormatOfDate();
  weatherForecast6.setDateInDom();
  weatherForecast6.setIcon();
  weatherForecast6.setTemperature();
  }

  else{
    
  showError();
  }

}




const errorToShow = document.querySelector('.errorToShow');
const cityDiv = document.querySelector('.cityDiv');
const currentWeather = document.querySelector('.currentWeather');
const nextDays = document.querySelector('.nextDays');

function showError(){

  switch(true){
    case(errorToShow.classList.contains('hidden-error')):
    errorToShow.classList.replace('hidden-error', 'showed-error');
  
    case(cityDiv.classList.contains('city-div')):
    cityDiv.classList.replace('city-div', 'hidden-city');
  
    case(currentWeather.classList.contains('current-weather')):
    currentWeather.classList.replace('current-weather' ,'hidden-current-weather');
  

    case(nextDays.classList.contains('next-days')):
    nextDays.classList.replace('next-days', 'hidden-next-days');
    
  }
 

}

function sendStartRequest(){
  cityToSend = 'Warszawa';
  fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=Warszawa&key=7258246c2f5041928580a2c2e6e62847`)
  .then(response => response.ok? response.json() : undefined)
  .then(weatherData => showWeatherForTheCity(weatherData))
  .catch(() =>{showError()});

}

sendStartRequest();



const cityArray = [ 'Bełchatów', 'Będzin', 'Białystok', 'Bielsko-Biała', 'Bydgoszcz', 'Bytom','Cieszyn', 'Chełm','Chorzów',  'Chrzanów', 'Czechowice-Dziedzice', 'Częstochowa', 'Dąbrowa Górnicza', 'Dębica', 'Elbląg', 'Ełk', 'Gdańsk', 'Gdynia',  'Gliwice', 'Gniezno', 'Gorzów Wielkopolski', 'Grodzisk Mazowiecki', 'Grudziądz', 'Inowrocław','Jarosław', 'Jasło', 'Jastrzębia Góra', 'Jelenia Góra', 'Kalisz', 'Katowice', 'Kluczbork', 'Kłodzko', 'Kołobrzeg', 'Konin', 'Koszalin', 'Kraków', 'Krosno', 'Legnica', 'Lublin', 'Łeba', 'Łowicz', 'Łódź', 'Malbork', 'Mikołów', 'Mysłowice', 'Nowy Sącz', 'Nowy Targ','Nysa', 'Olsztyn', 'Opole', 'Ostrołęka', 'Ostrowiec Świętokrzyski', 'Ostrów Wielkopolski', 'Oświęcim', 'Pabianice', 'Piła', 'Piotrków Trybunalski', 'Płock', 'Poznań', 'Przemyśl', 'Przemyśl', 'Pszczyna', 'Puławy', 'Racibórz', 'Radomsko', 'Rybnik', 'Rzeszów', 'Siedlce', 'Sieradz', 'Skierniewice', 'Słupsk', 'Sochaczew', 'Sopot', 'Sosnowiec', 'Stargard Szczeciński', 'Starogard Gdański', 'Stary Sącz', 'Suwałki', 'Szczecin', 'Świnoujście', 'Tarnowskie Góry', 'Tarnów',  'Tczew','Tomaszów Mazowiecki','Toruń','Tychy', 'Ustronie Morskie', 'Ustroń', 'Wadowice', 'Wałbrzych', 'Warszawa',  'Wrocław', 'Włocławek', 'Zabrze', 'Zakopane', 'Zamość', 'Zielona Góra', 'Żywiec'];




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
    let textWithBigFirstLetter = (bigFirstLetter + cutText);
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





cityButton = document.querySelector('.cityButton');

function sendRequestForYourCity(){
  removePreviousList();
 
  let cityToSend = cityInput.value;
  
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${encodeURIComponent(cityToSend)}&key=7258246c2f5041928580a2c2e6e62847`)
    .then(response => response.ok? response.json() : undefined)
    .then(weatherData => showWeatherForTheCity(weatherData))
    .catch(() => {showError()});
  
  
}

  cityButton.addEventListener('click',sendRequestForYourCity);

