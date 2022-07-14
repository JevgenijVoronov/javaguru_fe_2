let characters = ['', 'a', 'b', 'c', 'd', 'i', 'f', 'g'];
let question_mumber = prompt('Enter numder from 1 to 7');

if (promt = isNaN(question_mumber)) {
    alert('enter only number');
}

if (question_mumber > (characters.length - 1)) {
    alert('the number must not be greater than 7');
}

let mainElement = document.getElementById('main');

mainElement.innerText = characters[question_mumber];

document.addEventListener('keypress', (keyEvent) => {
    if (keyEvent.key === characters[question_mumber]) {
        alert('correct');
    } else {
        alert('not correct');
    }
})




