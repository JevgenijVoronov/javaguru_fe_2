// Перeделать данную конструкцию на swich/case решение

if (darbaDiena === 'Monday') {
    console.log('1');
} else if (darbaDiena === 'Tuesday') {
    console.log('2');
} else if (darbaDiena === 'Wednestay') {
    console.log('3');
} else if (darbaDiena === 'Thursday') {
    console.log('4');
} else if (darbaDiena === 'Friday') {
    console.log('5');
} else if (darbaDiena === 'Saturday') {
    console.log('6');
} else if (darbaDiena === 'Sunday') {
    console.log('7');
} else {
    console.log('Error');
}

//переделываю

switch (new Date().getDate()) {
    case 1:
        darbaDiena = "Monday";
        break;
    case 2:
        darbaDiena = "Tuesday";
        break;
    case 3:
        darbaDiena = "Wednesday";
        break;
    case 4:
        darbaDiena = "Thursday";
        break;
    case 5:
        darbaDiena = "Friday";
        break;
    case 6:
        darbaDiena = "Saturday";
        break;
    case 7:
        darbaDiena = "Sunday";
        break;
}