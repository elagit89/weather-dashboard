
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


class WeatherForecast {
  constructor(weatherForDay, numberOfDay,numberOfIcon, numberOfTemp){
  this.weatherForDay = weatherForDay;
  this.numberOfDay = numberOfDay;
  this.numberOfIcon = numberOfIcon;
  this.numberOfTemp = numberOfTemp;
  
  }
  changeFormatOfDate(){
    const date = this.weatherForDay.datetime;
    const year = Number(date.slice(0,4));
    const month = Number(date.slice(5,7))-1;
    const day = Number(date.slice(8));
    const actualDate = new Date(year,month,day);
    return actualDate;
  }
  setDateInDom(){
    const actualDate = this.changeFormatOfDate();
    const options = {weekday: 'long'};
    this.numberOfDay.textContent = actualDate.toLocaleDateString('pl-PL', options);
    const dayOfWeek = document.querySelectorAll('.day-of-week');
    dayOfWeek.forEach(day => day.textContent === 'poniedziałek'? day.textContent = "poniedz.":day.textContent = day.textContent);
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
    this.pressure.textContent = `ciśnienie: ${press} hPa`;
  }
  
  setWindSpeed(){
    const windSpeed = Number(this.weatherForDay.wind_spd);
    const windSpeedKmPerHour = ((windSpeed * 100000) * (3.6 * 10)/1000000).toFixed(2);
    this.windSpeed.textContent = `prędkość wiatru: ${windSpeedKmPerHour} km/h`;

  }
  
  setPrecipitationProbability(){
  
    const precipitationChance = this.weatherForDay.pop;
    this.precipitation.textContent = `prawdopodobieństwo opadów: ${precipitationChance} \u0025`;
  
  }
  

}

function showWeatherForTheCity(weatherData){
  console.log(weatherData);
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


  console.log (currentWeatherForecast1.changeFormatOfDate());
  console.log (currentWeatherForecast1.setDateInDom());
  console.log(currentWeatherForecast1.setIcon());
  console.log(currentWeatherForecast1.setTemperature());
  console.log(currentWeatherForecast1.setCurrentPressure());
  console.log(currentWeatherForecast1.setWindSpeed());
  console.log(currentWeatherForecast1.setPrecipitationProbability());
  
  console.log (weatherForecast1.changeFormatOfDate());
  console.log (weatherForecast1.setDateInDom());
  console.log(weatherForecast1.setIcon());
  console.log(weatherForecast1.setTemperature());

  console.log (weatherForecast2.changeFormatOfDate());
  console.log (weatherForecast2.setDateInDom());
  console.log(weatherForecast2.setIcon());
  console.log(weatherForecast2.setTemperature());

  console.log (weatherForecast3.changeFormatOfDate());
  console.log (weatherForecast3.setDateInDom());
  console.log(weatherForecast3.setIcon());
  console.log(weatherForecast3.setTemperature());

  console.log (weatherForecast4.changeFormatOfDate());
  console.log (weatherForecast4.setDateInDom());
  console.log(weatherForecast4.setIcon());
  console.log(weatherForecast4.setTemperature());

  console.log (weatherForecast5.changeFormatOfDate());
  console.log (weatherForecast5.setDateInDom());
  console.log(weatherForecast5.setIcon());
  console.log(weatherForecast5.setTemperature());

  console.log (weatherForecast6.changeFormatOfDate());
  console.log (weatherForecast6.setDateInDom());
  console.log(weatherForecast6.setIcon());
  console.log(weatherForecast6.setTemperature());

  
}

function sendStartRequest(){
  cityToSend = 'Warszawa';
  fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=Warszawa&key=7258246c2f5041928580a2c2e6e62847`)
  .then(response => response.ok? response.json() : undefined)
  .then(weatherData => showWeatherForTheCity(weatherData))
  .catch(() => console.log('Wystąpił błąd'));

}

console.log(sendStartRequest());



const cityArray = ['Augustów', 'Bełchatów', 'Będzin', 'Białystok', 'Bielsko-Biała', 'Bochnia', 'Brzeg', 'Bydgoszcz', 'Bytom', 'Chełm', 'Chrzanów', 'Chorzów','Cieszyn', 'Czechowice-Dziedzice', 'Częstochowa', 'Dąbrowa Górnicza', 'Dębica', 'Elbląg', 'Ełk', 'Gdańsk', 'Gdynia',  'Gliwice', 'Głogówek', 'Gniezno', 'Goczałkowice-Zdrój', 'Gorzów Wielkopolski', 'Grodzisk Mazowiecki', 'Grudziądz','Jarosław', 'Jasło', 'Jastrzębia Góra', 'Jelenia Góra', 'Kalisz', 'Katowice', 'Kielce', 'Kluczbork', 'Kłodzko', 'Kołobrzeg', 'Konin', 'Koszalin', 'Kościan', 'Kraków', 'Krosno', 'Kutno', 'Legnica', 'Leszno', 'Leżajsk', 'Lublin', 'Łeba', 'Łowicz', 'Łódź', 'Malbork', 'Mikołów', 'Mysłowice', 'Nowy Sącz', 'Nysa', 'Olsztyn', 'Opole', 'Ostrołęka', 'Ostrowiec Świętokrzyski', 'Ostrów Wielkopolski', 'Oświęcim', 'Pabianice', 'Piła', 'Piotrków Trybunalski', 'Płock', 'Poznań', 'Prudnik', 'Przemyśl', 'Przemyśl', 'Pszczyna', 'Puławy', 'Racibórz', 'Radomsko', 'Rawicz', 'Rybnik', 'Rzeszów', 'Siedlce', 'Sieradz', 'Skierniewice', 'Słupsk', 'Sochaczew', 'Sopot', 'Sosnowiec', 'Stargard Szczeciński', 'Starogard Gdański', 'Stary Sącz', 'Suwałki', 'Szczawnica', 'Szczecin', 'Świdnica', 'Świętochłowice', 'Świnoujście', 'Tarnowskie Góry', 'Tarnów',  'Tczew','Tomaszów Mazowiecki','Toruń','Tychy', 'Tymbark', 'Ustronie Morskie', 'Ustroń', 'Wadowice', 'Wałbrzych', 'Warszawa', 'Wieliczka', 'Wisła', 'Wrocław', 'Włocławek', 'Zabrze', 'Zakopane', 'Zamość', 'Zielona Góra', 'Zgierz', 'Zwardoń', 'Żyrardów', 'Żywiec'];




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





cityButton = document.querySelector('.cityButton');

function sendRequestForYourCity(){
  const cityInput = document.querySelector('.cityInput');
  let cityToSend = cityInput.value;
  
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityToSend}&key=7258246c2f5041928580a2c2e6e62847`)
    .then(response => response.ok? response.json() : undefined)
    .then(weatherData => showWeatherForTheCity(weatherData))
    .catch(() => console.log('Wystąpił błąd'));
  
  
}

  cityButton.addEventListener('click',sendRequestForYourCity);

