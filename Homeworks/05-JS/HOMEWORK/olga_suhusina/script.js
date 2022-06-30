let characters = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let arrayId = prompt ("Введите число от 1 до 23");
let output = document.getElementById('main');
output.innerText = characters[arrayId];
document.addEventListener("keypress", (eventObject) => {
    if (eventObject.key === characters[arrayId]) {
        alert ('yes');
    } else {
        alert ('no');
    }
})