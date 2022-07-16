const buttons = document.getElementsByClassName('btn');
const output = document.getElementById('output');

let equation = '';
let id = '';
let type = '';

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {

        id = buttons[i].getAttribute('data-id');
        type = buttons[i].getAttribute('data-type');

        switch (type) {

            case 'operator':
                operatorBtn();
                break;

            case 'number':
                numberBtn();
                break;

            case 'equal':
                equalBtn();
                break;

            case "clear":
                clearBtn();
                break;

            default:
                DefaultBtn();
                break;
        }
    }, false);
}

let operatorBtn = () => {
    equation += id;
    output.innerHTML = equation;
}

let numberBtn = () => {
    equation += id;
    output.innerHTML = equation;
}

let equalBtn = () => {
    equation = eval(equation);
    output.innerHTML = eval(equation);
}

let clearBtn = () => {
    equation = '';
    output.innerHTML = '0';
}

let DefaultBtn = () => {
    equation += id;
    output.innerHTML = equation;
}

document.addEventListener('keyup', (event) => {
    if (event.keyCode !== 13) {
        for (let i = 0; i < buttons.length; i++) {
            let id = buttons[i].getAttribute('data-id');

            if (id === event.key) {
                buttons[i].click();
            }
        }
    } else {
        document.getElementById('equal').click();
    }

})