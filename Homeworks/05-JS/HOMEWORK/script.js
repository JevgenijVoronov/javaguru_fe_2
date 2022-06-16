// 1) создать массив из букв []
// 2) используя prompt вывести диологовое окно с и созранить значение в переменную
// 3) Вывести соотвесвующую букву из массива на экран использовать getElementById и innerText селектор для элемента main
// 4) Добавить addEventListener "keypress" и проверить совпадает ли нажатая клавиша выбраной букве

let characters = ['a','b','c','d','e','f','g','h','i','j','k,','l','m','n','o','p','q','r','s','t','u','v','w','x,','y','z'];

let arrayId = prompt("Введите число 0 до 26", );

let output = document.getElementById('main');
output.innerText = characters[arrayId];

document.addEventListener("keypress", (eventObject) => {
    if (eventObject.key === characters[arrayId]) {
        alert('yes');
    } else {
        alert('no');
    }
})




