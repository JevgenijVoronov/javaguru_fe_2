function checkZIP() {
  // добавить ещё 3 страны
  var constraints = {
    lv: ['^(LV-)?\\d{4}$', "ZIPs of Latvia must have 4 symbols and correspond to LV-: e.n.g. LV-3601 or 3601"],
    lt: ['^(LT-)?\\d{5}$', "ZIPs of Lithuania must have 5 symbols and correspond to LV-: e.n.g. LT-01000 or 01000"],
    est: ['^(EE-)?\\d{5}$', "ZIPs of Estonia must have 5 symbols and correspond to EE-: e.n.g. EE-20000 or 20000"],
  };

  var country = document.getElementById('country').value;
  var zipCode = document.getElementById('zip');

  var constraint = new RegExp(constraints[country][0], '');
  console.log(constraint);

  // проверка: 
  if (constraint.test(zipCode.value)) {
    zipCode.setCustomValidity('');
    zipCode.classList.remove('error');
    zipCode.classList.add('success');
  }
  else {
    // сообщение об ошибке:
    zipCode.setCustomValidity(constraints[country][1]);
    zipCode.classList.remove('success');
    zipCode.classList.add('error');
  }
}

function printValues() {

  // создать пустой массив:
  let values = [];

  // используя getElementsByTagName('input') получить все данные:
  let inputs = document.getElementsByTagName('input');

  // используя цикл пройтись по всем полям и получить значения, 
  for (let key = 0; key < inputs.length; key++) {

    // inputs[key].value
    // сделать проверку на наличие данные,   
    let value = inputs[key].value;

    // добавить данные в масив .push(value);
    if (key == 0) {
      values.push(`${inputs[key].name}: ${value}`)
    } else {
      values.push(`\n${inputs[key].name}: ${value}`)
    }
  }

  // вывести данные всех полей alert();
  alert(values);
}

window.onload = function () {
  document.getElementById('country').onchange = checkZIP;
  document.getElementById('zip').oninput = checkZIP;

  // добавить addEventListener для кнопки и вызвать printValues()
  document.getElementById('form').addEventListener('submit', printValues);
}