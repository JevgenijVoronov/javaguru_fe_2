// 1) создать массив из букв []
// 2) используя prompt вывести диологовое окно и сохранить значение в переменную
// 3) Вывести соотвесвующую букву из массива на экран использовать getElementById и innerText селектор для элемента main
// 4) Добавить addEventListener "keypress" и проверить совпадает ли нажатая клавиша выбраной букве

const characters = ['a','b','c','d','e','f','g'];
const output = document.getElementById('main');
let arrayId;

let getValue = () => {
    arrayId = prompt(`Введите цисло от 0 до ${characters.length}`);
    if (arrayId <= characters.length && arrayId !== undefined) {
       printValue();
    } else {
        alert('Not Ok');
        getValue();
    }
}

let printValue = () => {
    output.innerHTML = characters[arrayId];
}

document.addEventListener('keypress', (event) => {
    if (event.key === characters[arrayId]) {
        alert('OK');
    } else {
        alert('NOT OK');
        getValue();
    }
})

getValue();