const buttons   = document.getElementsByClassName('btn');
const output    = document.getElementById('output');
const history   = document.getElementById('history');

let equation    = '';
let id          = '';
let type        = '';
let his_output  = '';
let cur_pos     = 0;    /*начальная позиция текущего числа в equation (после к-л знака) */
let total_history = [];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        id = buttons[i].getAttribute('data-id');
        type = buttons[i].getAttribute('data-type');
        
        switch (type) {
            case 'equal':
                Equal();
                break;
            case 'operator':
                Operator();
                break;
            case 'clear':
                Clear();
                break;
            case 'delete':
                Delete();
                break;

            default:
                DefaultBtn();
                break;
        }
    }, false);
}

let Operator = () => {
    equation += id;
    cur_pos = equation.length;
    output.innerHTML = equation;
}

let DefaultBtn = () => {
    if ((equation.indexOf('.',cur_pos) === -1 && id === '.') || id != '.' ) {
        equation += id;
        output.innerHTML = equation;
    }
}

let Equal = () => {
    his_output = equation + '=';
    cur_pos = equation.length;
    equation = eval(equation);
    his_output += equation;
    output.innerHTML = eval(equation);   
    history.innerHTML = his_output;
    localStorage.setItem("history", his_output);
}

let Clear = () => {
    cur_pos = 0;
    equation = '';
    output.innerHTML = '0';
}

let Delete = () => {
    if ( equation.length > cur_pos) {
        equation = equation.slice(0,equation.length - 1);
        output.innerHTML = equation;
    }
    
}

document.addEventListener('keyup', (event) => {
    if (event.keyCode !== 13) {
        if(event.key !== 'Delete' && event.key !== 'Backspace') {
            for(let i = 0; i < buttons.length; i++) {
                let id = buttons[i].getAttribute('data-id');
                if (id === event.key) {
                    buttons[i].click();
                }
            }
        } else {
            document.getElementById('delete').click();
        }
    } else {
        document.getElementById('equal').click();
    }



})