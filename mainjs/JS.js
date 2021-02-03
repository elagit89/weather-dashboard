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
    let text = e.target.value;
    if(text.length){
    const filteredCityArray = cityArray.filter(value => value.indexOf(text) == 0);
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



 