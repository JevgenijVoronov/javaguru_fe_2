function checkZIP() {
    // добавить ещё 3 страны
    var constraints = {
      lv : [ '^(LV-)?\\d{4}$', "Latvias ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
    };
  
    var country = document.getElementById("Country").value;
    var ZIPField = document.getElementById("ZIP");
  
    var constraint = new RegExp(constraints[country][0], "");
      console.log(constraint);
  
    // проверка 
    if (constraint.test(ZIPField.value)) {
      ZIPField.setCustomValidity("");
    }
    else {
      // сообщение об ошибке
      ZIPField.setCustomValidity(constraints[country][1]);
    }
  }

function printValues() {
    // создать пустой массив

    // используя getElementsByTagName('input') получить все данные
   
    // используя цикл пройтись по всем полям и получть занчения
    
    // inputs[key].value
    
    // сделать проверку на наличие данные
    
    // добавить данные в масив .push(value);

    // вывести данные всех полей alert();
}

window.onload = function () {
    document.getElementById("Country").onchange = checkZIP;
    document.getElementById("ZIP").oninput = checkZIP;

    // добавить addEventListener для кнопки и вызвать printValues()
}