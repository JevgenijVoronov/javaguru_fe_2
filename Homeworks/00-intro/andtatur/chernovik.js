console.log("Hello world")
// inline comment
var number = 5;
/* this is 
a multi-line comment */
number = 9
var b = 5; // b becomes initialized
var a;
// a declared
a = 7;
//a assigned
b = a + 1;
b += 1 + " another plus 1";
// the contents of the A assigned to B

// POCHEMUU TAKIE BOLSHIE CHISLA??

console.log(b);

var sum = a + b;
console.log(sum);

var remainder = 11 % 3; // ostatok = remainer
console.log(remainder);

var myStr = "I am a \"double quoted string\" here";
console.log(myStr);

var myName = "Andrei";
var greeting = "Hello, " + myName + ", how are you?"
console.log(greeting);

Chislo = greeting.length;
console.log(Chislo);

secondLetterofName = myName[1];
console.log(secondLetterofName)

var lastLetter = myName[myName.length - 1]
console.log(lastLetter);

// function and return
function wordBlanks(myNoun, myAdj, myVerb) {
    var result = "";
    result += "The " + myAdj + " " + myNoun + " " + myVerb + " in Riga";
    return result;
}
console.log(wordBlanks("girl", "beautiful", "arrived"))
console.log(wordBlanks("boy", "handsome", "flew"))

// arrays - massivy
var nestArray = [["Peter", 23], ["Helga", 22]];

var myArray = [100, 200, 300];
var nomer = myArray[0]; //budet 100
console.log(nomer);
myArray[1] = 222;
console.log(myArray);

var arrayOfArray = [[1, 2, 3], [4, 5, 6]]
arrayOfArray[1][1] = 222; // замена второго элемента второго элемента на 222
arrayOfArray.push(["Peter", "Mary", [1, 2, 3]]) // added last element
arrayOfArray.push([10]) // added another element
arrayOfArray.pop(); // removed last element
arrayOfArray.shift(); // removed first element
arrayOfArray.unshift([1]) // added first element
console.log(arrayOfArray);

// functions
function myFunction() {
    console.log("Dobroho vechora")
}
myFunction();
myFunction();

function input(a, b) {
    console.log(a - b);
}
input(14, 4);

// Global vs local scope in function
var outerWear = "t-shirt"
function wear() {
    var outerWear = "sweater";
    return outerWear;
}
console.log(wear());
console.log(outerWear);

// functions
function minus(num) {
    return (10 - num)
}
console.log(minus(3));

//booleans
function booLean() {
    return false;
}
console.log(booLean());

function trueOrFalse(isThatTrue) {
    if (isThatTrue) {
        return "Yes it is"
    }
    return "No it is not"
}
console.log(trueOrFalse(false));

function testEqual(test) {
    if (test == 16) { //2 raza oboznachaet ravenstvo a ne konkretnoye chislo
        return ("equal 16");
    }
    return ("not equal 16")
}
console.log(testEqual(18))

// znaki ravensta raznitsa. dobav = i posmotri
function compare(a, b) {
    if (a == b) {
        return ("equal")
    }
    return ("not equal")
}
console.log(compare(10, "10"));

//inequality operator !=
// SPROSIT PRO ZNAKI RAVENSTVAAA
function notEqual(a) {
    if (a != 10) {
        return ("not equal 10")
    }
    return ("equal 10")
}
console.log(notEqual("10"));

// and operator
function testik(x) {
    if (x <= 50 && x >= 20) {
        return "Yes"
    }
    return "No"
}
console.log(testik(20));

// or operator
function or(x) {
    if (x < 10 || x > 100) {
        return "correct"
    }
    return "incorrect"
}
console.log(or(50));

// else statement
function unexpectedElse(x) {
    if (x < 5) {
        return "smaller than 5"
    }
    else {
        return "bigger or equal 5"
    }
}
console.log(unexpectedElse(5));

// 1.21.37 v chem prikol else if? v chem raznica if i else if? kazhetsa ponal.. dlya togo chtoby neskolko usloviy solblyudalos
function ponal(x) {
    if (x < 10) {
        return "menshe 10"
    }
    else if (x < 100) {
        return "menshe 100"
    }
    else return "bolshe ili ravno 100"
}
console.log(ponal(50));

// switch statement. Switch is something like IF
function switchCase(val) {
    var answer = "";
    switch (val) { // tut mozhno i lookup sdelat
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Greek alphabet";
            break;

        default:
            answer = "no answer"; // elsi nichego iz visheperechislennogo net
            break;
    }
    return answer
}
console.log(switchCase(7));

//boolean return
function booo(a, b) {
    return a < b;
}
console.log(booo(12, 15)); // budet true

//objects!!
var myDog = {
    "name": "Piesek",
    "legs": 4,
    "tails": 2,
    "friends": [] // empty array meaning no friends
};

myDog.name = "Sebek"; // changed the name, Piesek no more
myDog.sound = "гаў гаў"; // kak sdelat cyrillic letters?
delete myDog.tails;
console.log(myDog);

// dot notation
var dogValue = myDog.value;
//bracket notation
var doggieValue = myDog["a dog"];

var testObj = {
    12: "Minsk",
    16: "Riga",
    18: "Tallinn",
};
var myAge = 16;
var andy = testObj[myAge];
console.log(andy);

//objects for lookups instead of writing case - result
function lookups(val) {
    var result = "";
    switch (val) {
        case "alpha":
            result = "Adam";
            break;
    };
    var lookup = {
        "bravo": "Bertil",
        "delta": "David",
        "echo": "Erik"
    };
    result = lookup[val];
    return result;
}
console.log(lookups("echo"));

//nested objects
var storage = {
    "car": {
        "inside": {
            "box": "maps",
            "seat": "crisps"
        },
    },
};

// record collection
var stuff = {
    "i123abc": {
        "Name": "Namejs", // imya pomenyatsya na Karlis
        "Location": "Riga",
        "Position": "CEO",
        "Car": ["Audi", "Skoda", "Volvo"]
    },
    "i999xyz": {
        "Name": "Janis",
        "Location": "Stockholm", // Stockholm pomenyalsya na Vilnius. Stroka 294
        "Position": "Developer",
        "Car": ["Saab", "Volvo", "Tesla"]
    }
};

var stuffCopy = JSON.parse(JSON.stringify(stuff));
function updateStuff(id, prop, value) {
    if (value === "") {
        delete stuff[id][prop];
    }
    else if (prop === "Car") {
        stuff[id][prop] = stuff[id][prop] || [];
        stuff[id][prop].push(value);
    } else {
        stuff[id][prop] = value;
    }
    return stuff
}
updateStuff("i123abc", "Name", "Karlīs"); // kak pisat latviski?
console.log(updateStuff("i999xyz", "Location", "Vilnius"));

//while loop
var myArray = [];
var i = 0;
while (i < 5) { // utochnit poryadok deystviya funkcii
    myArray.push(i);
    i++;
}
console.log(myArray);

//for loop
var ourArray = [];
for (var i = 0; i < 5; i += 2) { // tozhe proytis
    ourArray.push(i);
}
console.log(ourArray)

var ourR = [9, 10, 11, 24]; // obyasnit chto eto drugu
var ourTotal = 0;

for (var i = 0; i < ourR.length; i++) { // length nachinayetsya s nulya !! 000 ?
    ourTotal += ourR[i];
}
console.log(ourTotal);

//nesting for loops
function multyplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product
}
var product = multyplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(product);
// ne ponyal chto eto vverhu

/* do... while loop
while loop first checks the condition before runs any code within the loop
do while loop will run at least one time and then it will check the condition */
var myArray = [];
var i = 10;
do {
    myArray.push(i);
    i++;
} while (i < 5)
console.log(i, myArray);// obyasnit vslukh chto eto

/* CHALLENGE Profile lookup
Array of objects in a context list*/
var contacts = [
    {
        "fname": "Andrei",
        "surname": "Tatur",
        "age": 23,
        "hobbies": ["Coding", "Hockey", "Latvian"]
    },
    {
        "fname": "Pope",
        "surname": "of Rome",
        "age": 63,
        "hobbies": ["Praying", "Walking", "Traveling"]
    },
    {
        "fname": "Shakira",
        "surname": "Malinski",
        "age": 41,
        "hobbies": ["Music", "Dancing", "Cooking"]
    }
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.lenght; i++) { // ??
        if (contacts[i].fname === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}
var data = lookUpProfile("Andrei", "hobbies")
console.log(data); // ne poluchilos. 2:27:00

//random fraction
function randomFraction() {

    return Math.random(); // Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive). Math.random() always returns a number lower than 1.
}

console.log(randomFraction());

//random whole number
var randomNr = Math.floor(Math.random() * 20) // random nr between 0 and 19
function randomWholeNr() {
    return Math.floor(Math.random() * 10);//between 0 and 9
}
console.log(randomWholeNr());

//generate ramdom whole number within a range
function randomRange(myMin, myMax) {
    return Math.floor((Math.random() * (myMax - myMin + 1)) + myMin)

}
console.log(randomRange(8, 15))



//string converts to integer
function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("567"));

//? so what, 2:33:00
function convertTooInt(str) {
    return parseInt(str, 2)
}
convertToInteger("10011");


//if - true, else - false. simplified
function checkEqual(a, b) {
    return a === b ? true : false;

    return a === b; //same
}
console.log(checkEqual(1, 1))


function checkNum(num) {
    return num > 0 ? "bigger than 0" : num < -10 ? "less than 10" : "between -10 and 0 inclusively";
}
console.log(checkNum(0));


function CheckManyTimes(str) {
    "use strict";

    const SENTENCE = str + "is cool"; // will never be reassigned

    for (var i = 0; i < str.lenght; i += 2) {
        console.log(SENTENCE)
    }
}
CheckManyTimes("Positivus")

const s = [5, 7, 2];
function editInPace() {
    "use strict";
    s[0] = 1;
    s[2] = 3;
}// assigned separately

// shortened function
const magic = () => new Date(); // instead of = function () {return new Date()};

function makeUser(name, age) {
    return {
        name,
        age
    }
}


// OBJECTS' TASKS
//1
// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);

// //2
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj) {
    for (let key in obj) {
        return
    }
}
// hz

//3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
console.log(salaries.John + salaries.Ann + salaries.Pete);

//4 hz


//   //2.23.54 increment thing
//   const increment = (function(){
//       return function increment (number, value = 1){
//           return number + value;
//       }
//   })();

//spread operator
const arr1 = ['janis', 'peteris', 'markus'];
let arr2;
(function () {
    arr2 = [...arr1];
    arr1[0] = 'vjaceslavs'
})();
console.log(arr2); // budet takim zhe kak i bylo a ne novym s vjaceslavom

// 3.00.00 chto eto i zachem
//2:57:20 Use Desrtucturing Assignment to Assign Variables from Objects
var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;
// 

const { x:a, y:b, z:c} = voxel;
// pochemu A stanovitsya ravnym X?


const AVG_TEMP = {
    today: 77.5,
    tomorrow: 79
};
function getTempTmrw(avgTemperature) {
    "use strict";

    const {tomorrow : tempOfTmr} = avgTemperature;
return tempOfTmr;
}
console.log(getTempTmrw(AVG_TEMP));

//desctructuring assignment

const LOCAL_FORECAST = {
    today: { min: 72, max: 83},
    tomorrow: { min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const {tomorrow: {max: maxOfTomorrow }}=  forecast;

    return maxOfTomorrow;
}

//How to assign variables from Arrays
const [z,x] = [1,2,3,4,5,6];
console.log(z, x);

let a = 8, b = 6;
(() => {
    //pochemu tak mnogo skobok?? chto znachit "use strict"
    "use strict";
    [a,b] = [b,a]
})();
console.log(a);
console.log(b);
//pochemu ne vizhu etix console.logov?



//Destructuring Assignment with the Rest Operator
const sourse = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

    const [, , ...arr]= list;
    //first and second elements are skipped

    return arr
    //zachem vezde return?
    //what is return?
}
const arr = removeFirstTwo(source);
console.log (arr);
console.log(source);
//pochemu nichego ne rabotayet? pochemu SOURCE podcherknut?
//3:05:00
// kas ir gan gan?



//use destructuring assignment to pass an object as a function's parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 38.85
};
const half = (function(){

    return function half({ max, min}){
        return (max + min) / 2.0
        //to zhe samoe chto i stats.max + stats.min. Pochemu?
    };
})();
console.log(stats);
console.log(half(stats));
// ne ponyal



//Create string using Template Literals
const person = {
    name: "Hanna Montana",
    channel: "Disney Channel"
    //mozhno number, ok
} ;

const greeting = `Hello, I am ${person.name}!
And you are watching ${person.channel}.`;
console.log(greeting);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr){
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++){
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }

    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray)



//Concise Object Literal Declarations Using Simple Fields
const createPerson = (name, age, gender) => ({name, age, gender});
//vmesto => moglo byt dlinnee
// return {
//     name:name
//     age:age,
//     gender:gender
// }
console.log(createPerson("Zodiac Hasbro", 56, "male"));


//concise declarative functions
const bicycle = {
    gear:2,
    setGear(newGear){
    // mozhno bylo dlinnee>> setGear: function(newGear){
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);


//class syntax to define a constructor function
//class syntax replace the constructor function creation
class SpaceShuttle {
    constructor(targetPlanet){
        //replaced>> var SpaceShuttle = function(targetPlanet)
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)
//
function makeClass(){
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);


//getters and setters to control access to an object
function makeCLass(){
    class Thermostat {
        constructor (temp){
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature (updatedTemp){
            this._temp= updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
// why 76 goest into constructor(temp)?
let temp = thermos.temperature;



//differences between import and require
import {capitalizeString } from "./export"
const cap = capitalizeString ("hello!");

console.log(cap);

//use export to reuse a code block
const capitalizeString = (string) => {
    return string.charAt(0).tuUpperCase() + string.slice(1);
}
export {capitalizeString};
export const foo = "bar";
export const bar = "foo";
//?


//use * to Import everything from a file
import * as export from "export_strings";
//export is a file name u see near to chernovik



//export fallback with export default
export default function subtrack (x,y) {return x-y;}
//?


//import a default export
import subtract from "math_function"

subtract (7,4);
//we pretend we have a file called math_function that has a default export name SUBTRACK
