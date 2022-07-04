const myName = document.getElementById("myName")

const text = document.createTextNode("Jekaterina's BIO")

myName.append(text)

const kateCV = {
    name: "Jekaterina",
    age: 31,
    phone: 29100299,
    eMail: "jekaterina.kopilevica@gmail.com",
    languages: {
        first: "russian",
        second: "latvian",
        third: "english",
    }
}
