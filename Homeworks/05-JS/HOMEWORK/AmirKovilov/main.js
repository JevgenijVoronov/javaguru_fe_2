let index = document.getElementById("main");

let letters = ['a', 'b', 'c', 'd', 'e'];

let input = prompt("Напишите число (только до 5)");

index.innerText = letters[input];

document.addEventListener("keypress", (eventObject) => {
    if (eventObject.key === letters[input]) {
        alert ('pareizi');
    } else {
        alert ('nepareizi');
    }
})