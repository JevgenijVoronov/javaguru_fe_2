
function sumBeforeES6(x, y) {
    let sum = x + y;
    console.log(`${x} and ${y} sum =`, sum);
}
sumBeforeES6(4,5);


// ------------------------------------------
// ES6
let sumAfterES6 = (x, y) => {
    let sum = x + y;
    console.log(`${x} and ${y} sum =`, sum);
    console.log("");
}

sumAfterES6(4,5);

// ------------------------------------------
let sumReturnValue = (x, y) => {
    let sum = x + y;

    return sum
}
let numberSum = sumReturnValue(6,3);


let formatEmail = (email) => {
    console.log("Unformatted email address:", email);
    let trimmedEmail = email.trim();
    let formattedEmail = trimmedEmail.toLowerCase();

    return formattedEmail
}

let email = formatEmail("   jevgenijs.VorOnovs@Gmail.Com ");
console.log("Formatted email:", email)

// ------------------------------------------
let person = {
    firstName: "Jevgenijs",
    lastName: "Voronovs",
    email: formatEmail("   Dita.Zemene@Gmail.Com ")
}
console.log("Person object with formatted email:", person);

let personFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}
person.fullName = personFullName(person.firstName, person.lastName);
console.log("Person object with full name:", person);
console.log("");
// ------------------------------------------


let emailList = ["  Egija.mellene@Gmail.Com ", "   Dita.Zemene@Gmail.Com ", undefined, "Laura.Upene@Inbox.LV", null];
console.log("Unformatted email list:", emailList);

let formatList = (list) => {
    list.forEach((item, index) => {
        try {
            list[index] = item.trim();
            list[index] = list[index].toLowerCase();
            console.log(`Formatted list itme index ${index}`, list[index]);
        }
        catch(err) {
            console.log(`Not able to format array item - ${item}:`, err);
        }      
    })
    console.log("");
}

formatList(emailList);
console.log("Formatted email list:", emailList);
// ------------------------------------------




let formatEmailList = (list) => {
    let formattedEmailList = [];
    
    list.forEach((item) => {
        try {
            let formattedItem = item.trim().toLowerCase();
            formattedEmailList.push(formattedItem);
        }
        catch(err) {
            console.log(`Not able to format array item - ${item}:`, err);
        }      
    })    

    return formattedEmailList
}

let formattedEmailList = formatEmailList(emailList);
console.log("Formatted email list:", formattedEmailList);
// ------------------------------------------