const buttons = document.getElementsByClassName('btn');
const output = document.getElementsByClassName('output')[0];
const history = document.getElementById('history');

history.innerHTML = localStorage.getItem('memory');


let equation = '';
let value = '';
let type = '';
let number = '';
// let memory = [];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        value = buttons[i].getAttribute('data-value');
        type = buttons[i].getAttribute('data-type');

        switch (type) {
            case 'operator':
                Operator();
                break;
            case 'equal':
                Equal();
                break;
            case 'symbol':
                Symbol();
                break;
            case 'clear':
                Clear();
                break;
            default:
                BtnNumber();
                break;
        }
    }, false)

}

let BtnNumber = () => {
    equation += value;
    output.innerHTML = equation;
}

let Operator = () => {
    equation += value;
    output.innerHTML = equation;
}
let Symbol = () => {
    equation += value;
    output.innerHTML = equation;
}

let Equal = () => {
    equation = eval(equation);
    output.innerHTML = equation;
    localStorage.setItem('memory', equation);
    history.innerHTML = localStorage.getItem('memory');
}

let Clear = () => {
    equation = '';
    output.innerHTML = '0';
}

document.addEventListener('keyup', (event) => {
    if (event.keykode !== 13) {


        for (let i = 0; i < buttons.length; i++) {
            let value = buttons[i].getAttribute('data-value');

            if (value === event.key) {
                buttons[i].click();
            }
            console.log('true');
        }
    } else {
        document.getElementById('equal').click();
        console.log('false');

    }
})
