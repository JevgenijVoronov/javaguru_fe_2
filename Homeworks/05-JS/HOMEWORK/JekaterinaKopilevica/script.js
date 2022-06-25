const main = document.getElementById("root")

const letters = ['a', 'b', 'c', 'd', 'e']

const userLetter = prompt ("Write the letter down") // мы запрашиваем число  1-2-3-4-5-6.......

console.log(letters)
console.log(userLetter)

console.log(letters.innerText)
// main.append(promptLetter)


main.innerText = letters[userLetter]; // выводим элемент из массива с порядковым номером

// дальше нам надо добавить addEventListener
document.addEventListener("keypress", (e) => {
    // и проверить if else что что клавиша совпадает с выбраным элементом массива
    console.log(e.key)
    console.log(letters[userLetter])
})