const main = document.getElementById("root");

const letters = ['a', 'b', 'c', 'd', 'e','f'];

const userLetter = prompt ("Write the number down");

main.innerText = letters[userLetter];

document.addEventListener("keypress", (eventObject) => {
    if (eventObject.key === letters[userLetter]) {
        alert ('yes');
    } else {
        alert ('no');
    }
})