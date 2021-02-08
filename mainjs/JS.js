
const date = new Date();

function addSeasonImage(date){
const seasonPicture = document.querySelectorAll('.season-picture');
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
    let copyOfText = inputText.slice();
    let cutText = inputText.slice(1);
    let bigFirstLetter = copyOfText[0].toUpperCase();
    let textWithBigFirstLetter = (bigFirstLetter + cutText).trim();
    cityInput.value = textWithBigFirstLetter;
    
    if(textWithBigFirstLetter.length){
    const filteredCityArray = cityArray.filter(value => value.indexOf(textWithBigFirstLetter) == 0);
    createCurrentList(filteredCityArray)
    filteredCityArray.length = 0;}
   
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



 