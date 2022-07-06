// Перeделать данную конструкцию на swich/case решение

let CurrentDate = new Date();
let darbaDienaNum = 0;
darbaDienaNum=(CurrentDate.getDay(CurrentDate));
//let darbaDiena = '' ;

switch (darbaDienaNum) {
    case 0: 
//        darbaDiena == 'Sunday';
        console.log("7");
        break; 
    case 1: 
 //       darbaDiena == 'Monday';
        console.log("1");
        break;
    case 2: 
 //       darbaDiena == 'Tuesday';
        console.log("2");
        break;
    case 3:
 //       darbaDiena == 'Wednestay'; 
        console.log("3");
        break;
    case 4:
 //       darbaDiena == 'Thursday'; 
        console.log("4");
        break;
    case 5:
 //       darbaDiena == 'Friday'; 
        console.log("5");
        break;
    case 6:
 //       darbaDiena == 'Saturday'; 
        console.log("6");
        break;
    default:
        console.log("Error");
}  

/*                                                 switch (darbaDiena) {
if (darbaDiena === 'Monday') {                      case 'Monday': 
    console.log('1');                                   console.log('1');  
                                                        break;  
} else if (darbaDiena === 'Tuesday') {              case 'Tuesday':
    console.log('2');                                   console.log('2');  
                                                        break; 
} else if (darbaDiena === 'Wednestay') {            case 'Wednestay':
    console.log('3');                                   console.log('3');  
                                                        break;
} else if (darbaDiena === 'Thursday') {             case 'Thursday':
    console.log('4');                                   console.log('4');
                                                        break;
} else if (darbaDiena === 'Friday') {               case 'Friday':
    console.log('5');                                   console.log('5');
                                                        break;   
} else if (darbaDiena === 'Saturday') {             case 'Saturday':
    console.log('6');                                   console.log('6');
                                                        break;
} else if (darbaDiena === 'Sunday') {               case 'Saturday': 
    console.log('7');                                   console.log('7');
                                                        break;
} else {                                            default:    
    console.log('Error');                               console.log('Error');
}                                                   }
*/