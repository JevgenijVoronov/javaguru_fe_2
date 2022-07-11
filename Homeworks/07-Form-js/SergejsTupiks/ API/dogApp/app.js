/* 
    Создадим небольше приложение которые выведит нам изобрадение пароды собок
    Пример DogApiDemo.mp4 

    Будем использовать API https://dog.ceo/dog-api/

    1)  в файле data.js добавлены пароды собак
        нам надо добавить в  <select id='dogSelector'> добавить несколько опций <option value="value">name</option>
        Мы можем сделать это руками, но лучше использовать цикл 
        Пройдя через данные для каждой из пароды мы можем добавить
            `<option value=${breed.value}>${breed.name}</option>`

    2)  Добавить addEventListener('change', названиеФункции) которая будет срабатывать на измение нашего поля 

        При изменение поля мы должны получить данные о породе и родставить эти данные в наш АПИ
            https://dog.ceo/api/breed/ПОРОДА/images/random

        дальше создаем запрос на сервер fetch()
            fetch(url)
                .then(response => response.json())
                .then(data => renderDogData(data))
                .catch(error => alert(error));

    3)  Выводим изображение
    
        - создаем функцию renderDogData() 
        - берем наш элемент в котором будем выводить фотографию
        - используя innerHTML добавляем img tag с src=${data.message}
*/

