/* 
    Создадим небольше приложение которые выведит нам изобрадение породы собаки.
    (Пример DogApiDemo.mp4) 

    Будем использовать API https://dog.ceo/dog-api/.

    1)  В файле data.js находятся породы собак.
        Нам надо добавить в <select id='dogSelector'> несколько опций <option value="value">name</option>.
        Мы можем сделать это руками, но лучше использовать цикл.
        Пройдя через данные для каждой из породы, мы можем добавить:
            `<option value=${breed.value}>${breed.name}</option>`

    2)  Добавить addEventListener('change',название функции), которая будет срабатывать на изменение нашего поля.

        При изменении поля мы должны получить данные о породе и подставить эти данные в наш АПИ:
            https://dog.ceo/api/breed/ПОРОДА/images/random

        Дальше создаем запрос на сервер fetch()
            fetch(url)
                .then(response => response.json())
                .then(data => renderDogData(data))
                .catch(error => alert(error));

    3)  Выводим изображение:
    
        - создаем функцию renderDogData(); 
        - берем наш элемент, в котором будем выводить фотографию;
        - используя innerHTML, добавляем img tag с src=${data.message}.
*/

const apiURL = 'https://dog.ceo/api/';
const dogSelector = document.getElementById('dogSelector');
const dogImg = document.getElementById('dogImg');
let url = '';
/*
function createBreedList() {                                            // function renderSelectOptions(data) {      КРАСИВОЕ РЕШЕНИЕ!
  let htmlDogs = data.map(function (breed, i)  {                        //     data.forEach(breed => {  
    return `<option value ="${breed.value}">${breed.name} </option>`;   //         dogSelector.innerHTML += `<option value=${breed.value}>${breed.name}</option>`
  })                                                                    //     })
  dogSelector.innerHTML = htmlDogs.join('');                            // }
}
*/

function createBreedList() {
    let htmlDogs = data.map(function (breed, i) {
        if (i === 0) {
            return `<option>Choose a dog breed</option>` +                 // попробовала обработать первое состояние селектора,
                `<option value ="${breed.value}">${breed.name} </option>`; // когда еще ничего не было введено (Choose a dog breed).
        } else {
            return `<option value ="${breed.value}">${breed.name} </option>`;
        }
    })
    dogSelector.innerHTML = htmlDogs.join('');
}

function renderDogData(data) {
    dogImg.innerHTML = `<img src='${data.message}'>`
}

function getBreedImg() {
    if (dogSelector.value !== 'Choose a dog breed') {                     // если только не запрос на выбор, обращаемся к apiURL,
        url = apiURL + `breed/${dogSelector.value}/images/random`;        // в противном случае, картинку не выводим.
        fetch(url)
            .then(response => response.json())
            .then(data => renderDogData(data))
            .catch(error => alert(error));

    } else {
        dogImg.innerHTML = '';
    }
}

createBreedList()
dogSelector.addEventListener('change', getBreedImg);