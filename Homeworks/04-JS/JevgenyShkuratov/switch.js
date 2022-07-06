// Перeделать данную конструкцию на swich/case решение

// if (darbaDiena === 'Monday') {
//     console.log('1');
// } else if (darbaDiena === 'Tuesday') {
//     console.log('2');
// } else if (darbaDiena === 'Wednestay') {
//     console.log('3');
// } else if (darbaDiena === 'Thursday') {
//     console.log('4');
// } else if (darbaDiena === 'Friday') {
//     console.log('5');
// } else if (darbaDiena === 'Saturday') {
//     console.log('6');
// } else if (darbaDiena === 'Sunday') {
//     console.log('7');
// } else {
//     console.log('Error');
// }


let darbaDiena = "Friday";

switch (darbaDiena) {
    case "Mondey":
        console.log("Mondey");
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;
    case "Wednestay":
        console.log("Wednestay");
        break;
    case "Thursday":
        console.log("Thursday");
        break;
    case "Friday":
        console.log("Friday");
        break;
    case "Mondey":
        console.log("Saturday");
        break;
    case "Sunday":
        console.log("Sunday");
        break;
    default:
        console.log("Error");
        break;
}