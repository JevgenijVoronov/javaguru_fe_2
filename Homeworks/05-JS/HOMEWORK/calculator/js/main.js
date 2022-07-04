const buttons   = document.getElementsByClassName('btn');
const output    = document.getElementById('output');

let equation    = '';
let id          = '';
let type        = '';

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        id = buttons[i].getAttribute('data-id');
        type = buttons[i].getAttribute('data-type');
        
        switch (type) {
            case 'equal':
                Equal();
                break;
            case 'equal':
                Equal();
                break;
            case 'operator':
                Operator();
                break;

            default:
                DefaultBtn();
                break;
        }
    }, false);
}

let Operator = () => {
    equation += id;
    output.innerHTML = equation;
}

let DefaultBtn = () => {
    equation += id;
    output.innerHTML = equation;    
}

let Equal = () => {
    equation = eval(equation);
    output.innerHTML = eval(equation);   
}

document.addEventListener('keyup', (event) => {
    if (event.keyCode !== 13) {
        for(let i = 0; i < buttons.length; i++) {
            let id = buttons[i].getAttribute('data-id');
    
            if (id === event.key) {
                buttons[i].click();
            }
        }
    } else {
        document.getElementById('equal').click();
    }



})