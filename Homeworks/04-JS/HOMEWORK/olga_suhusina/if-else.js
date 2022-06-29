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


const darbaDiena = "Monday";

switch (darbaDiena) {
    case "Monday": 
        console.log("1");
        break; 
    case "Tuesday": 
        console.log("2");
        break;
    case "Wednestay": 
        console.log("3")
        break;
    case "Thursday": 
        console.log("4")
        break;
    case "Friday": 
        console.log("5")
        break;
    case "Saturday": 
        console.log("6")
        break;
    case "Sunday": 
        console.log("7")
        break;
    default:
        console.log("Error");
        break;
}  