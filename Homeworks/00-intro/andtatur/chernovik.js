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


function checkNum(num){
    return num > 0 ? "bigger than 0" : num < -10 ? "less than 10" : "between -10 and 0 inclusively";
}
console.log(checkNum(0));


function CheckManyTimes(str){
    "use strict";
    
    const SENTENCE = str + "is cool"; // will never be reassigned

    for (var i = 0; i < str.lenght; i += 2){
        console.log (SENTENCE)
    }
    }
CheckManyTimes ("Positivus")

const s = [5, 7, 2];
function editInPace (){
    "use strict";
    s[0]=1;
    s[2]=3;
}// assigned separately

// shortened function
const magic = () => new Date(); // instead of = function () {return new Date()};