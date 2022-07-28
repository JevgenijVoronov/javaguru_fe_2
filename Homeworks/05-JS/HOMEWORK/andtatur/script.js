// 1) создать массив из букв []
// 2) используя prompt вывести диологовое окно с и созранить значение в переменную
// 3) Вывести соотвесвующую букву из массива на экран использовать getElementById и innerText селектор для элемента main
// 4) Добавить addEventListener "keypress" и проверить совпадает ли нажатая клавиша выбраной букве
let bukva = ['a', 'b', 'c', 'd', 'e', 'f']
let input
function myFunction() {
    let text;
    input = prompt("Увядзiце нумар лiтары ад 1 да 6:", "3");
    if (input > 0 && input <= 6) {
        document.getElementById("demo").innerText = bukva[input - 1];
    } else {
        document.getElementById("demo").innerText = "Адбыўся cancel промпта";
    }
}
myFunction();

document.addEventListener("keypress", (event) => {
    // alert(event.key)
    if (event.key === bukva[input - 1]) {
        alert('OK');
    } else {
        alert('NOT OK');
        getValue();
    }
})
