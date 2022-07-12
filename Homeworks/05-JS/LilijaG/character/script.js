// 1) создать массив из букв []
// 2) используя prompt вывести диологовое окно и сохранить значение в переменную
// 3) Вывести соотвесвующую букву из массива на экран использовать getElementById и innerText селектор для элемента main
// 4) Добавить addEventListener "keypress" и проверить совпадает ли нажатая клавиша выбраной букве

const array_Char = ['', 'a', 'b', 'c', 'd', 'e', 'i', 'f', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const output = document.getElementById('main');
let arrayId = '';

let mySolution = () => {
    arrayId = prompt(`Ievadiet skaitli no 1 līdz ${array_Char.length-1}:`);
    output.innerHTML = array_Char[arrayId];
    if ((arrayId > 0 && arrayId < array_Char.length) && arrayId !== undefined) {
        output.innerHTML = array_Char[arrayId]; 
    } else {
        prompt(`Skaitlis ${arrayId} neatbilst intervālam no 1 līdz ${array_Char.length-1}`);
        mySolution();
    }
}

document.addEventListener('keypress', (event) => {
    if (event.key === array_Char[arrayId]) {
        alert(`PAREIZI (ievadīts:"${event.key}")`);
    } else {
        alert(`NEPAREIZI (ievadīts:"${event.key}")`); 
        mySolution(); 
    }
});

mySolution();
