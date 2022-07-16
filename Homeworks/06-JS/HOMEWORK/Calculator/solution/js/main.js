// variables
const output    = document.getElementsByClassName('output')[0];
const historyElement = document.getElementById('history');
let   equation  = ''; // вырожение 
let   number    = '';
let   value     = '';
let   type      = '';
let   mathCount = localStorage.length || 0;

//button click
let buttons = document.getElementsByClassName('btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click" , function() {
        value = buttons[i].getAttribute('data-value');
        type = buttons[i].getAttribute('data-type');
    
        switch (type) {
            case "clear":
                clear();
                break;

            case "operator":
                operator();
                break;

            case "number":
                btnNumber();
                break;

            case "equal":
                equal();
                break;

            case "symbol":
                symbol()
                break;
            
            default:
                //function
                break;
        }
    }, false)
}

function saveToLocalStorage(data) {
    let history = JSON.parse(localStorage.getItem('CalculatorHistory')) || [] ;

    history.push({ evaluetion: `${data} = ${eval(data)} `});
    localStorage.setItem(`CalculatorHistory`, JSON.stringify(history));
}

function loadFromLocalStorage() {
    historyElement.innerHTML = '';

    let history = JSON.parse(localStorage.getItem('CalculatorHistory'));

    history.forEach(item => {
        historyElement.innerHTML += `<li>${item.evaluetion}</li>`;
    });
}

function clear() {
    output.innerHTML = '0';
}

function btnNumber() {
    number += value;
    equation += value;
    output.innerHTML += number;
}

function operator() {
    equation += value;
    output.innerHTML = `${number}${value}`
    number = "";
}

function equal() {
    // mathCount = mathCount +1;

    saveToLocalStorage(equation);

    number = eval(equation);
    equation = number;
    output.innerHTML = number;

    loadFromLocalStorage();
}

function symbol() {
    number += value;
    equation += value;
    output.innerHTML = number;
}

document.addEventListener("keyup", function(event){
    if (event.key === "Enter") {
        document.getElementById('equal').click();
    } else {
        for(let i = 0; i < buttons.length; i++) {
            let value = buttons[i].getAttribute('data-value');
    
            if (value == event.key) {
                buttons[i].click();
            } 
        }
    }

}, false)

loadFromLocalStorage();