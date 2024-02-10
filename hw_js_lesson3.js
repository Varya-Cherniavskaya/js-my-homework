// 1. Запитайте у користувача ім'я та привітайте його за допомогою alert.

// let userName = prompt ("What's your name?")
// alert ("Hi " + userName)


// 2. Попросіть користувача ввести рядок через 'prompt'. 
// Використовуючи split та join зробіть що б після будь-якої коми слід було слово блін, .

// let usersSentences = prompt ("Please write down some sentences below with comma")
// let checkPoint = usersSentences.split(", ")
// alert (checkPoint.join(" блін, "))


// 3. Перетворіть рядок, введений користувачем, таким чином, щоб перша літера ставала великою, 
// а решта - маленькими:

// let usersLine = prompt ("Please write some line with random big and small letter");
// let lineLow = usersLine.toLowerCase();
// let firstLetter = lineLow[0];
// let firstLetterUpper = firstLetter.toUpperCase();
// let restOfLetter = lineLow.slice(1);
// console.log(firstLetterUpper + restOfLetter);

// Чи ось так:
// let userLine = prompt ("Please write some line with random big and small letter");
// console.log (userLine[0].toUpperCase() + userLine.slice(1).toLowerCase());



// 4. Порахуйте кількість слів у рядку. Використовуйте розбиття за пробілами. 
// Довжина масиву називається так само, як і довжина рядка. 

// let usersSentences = prompt ("Write your sentence")
// let countWords = usersSentences.split(' ')
// alert ("Length of your sentence equeiwal number of words: " + countWords.length)



// 5. 1 - Запитайте у користувача ПІБ, використовуючи prompt тричі. Викиньте зайві пробiли, 
// використовуючи .trim
//    2 - Використовуючи String: capitalize зробіть так, щоб кожне слово у ПІБ було 
// з великої літери, а решта - маленькі
//    3 - Об'єднайте ці три рядки в один змінний fullName 
// і виведіть кудись (alert, console.log). Не забудьте пробiли між словами.

// let firstName = prompt("Ваше ім'я")
// let secondName = prompt("Ваше по батькові")
// let lastName = prompt ("Ваше прізвище")
// firstName = firstName.trim()
// secondName = secondName.trim()
// lastName = lastName.trim()
// let fullName = (lastName[0].toUpperCase() + lastName.slice(1).toLowerCase() + " " + firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + " " + secondName[0].toUpperCase() + secondName.slice(1).toLowerCase())
// alert (fullName)



// 6. Не використовуючи .replace замініть слово пиво у рядку на слово чай
// let str = "Було жарко. Василь пив пиво вприкуску з креветками"
// let partBeforePivo = "Було жарко. Василь пив пиво вприкуску з креветками".slice(0,23)
// let partAfterPivo = "Було жарко. Василь пив пиво вприкуску з креветками".slice(27)
// console.log(partBeforePivo + "чай" + partAfterPivo)



// 7. Знайдіть у рядку HTML тег. Видаліть, тобто виріжте його - створіть інший рядок, 
// в якому будуть всі символи до тега і після нього Тег може бути будь-яким. split і join 
// не використовуйте, натомість використовуйте indexOf і slice. .replace не використовуйте
// let baseSentence = "якийсь текст, в якому є один тег <br /> і всяке інше"
// console.log (baseSentence.indexOf ("<br />"))
// console.log("якийсь текст, в якому є один тег <br /> і всяке інше".slice(0,33) + "<hr> " + "якийсь текст, в якому є один тег <br /> і всяке інше".slice(39))



// // 8. На основі попереднього завдання зробіть тег великими літерами. replace, split і join 
// не використовуйте, натомість використовуйте indexOf і slice,
// let str = "якийсь текст, в якому є один тег <br /> і всяке інше"
// console.log (str.indexOf ("<br />"))
// alert ("якийсь текст, в якому є один тег <br /> і всяке інше".slice(0,34) + str[34].toUpperCase() + str[35].toUpperCase() + "якийсь текст, в якому є один тег <br /> і всяке інше".slice(36))



// 9. Попросіть користувача ввести рядок через prompt. prompt не дозволяє вводити рядкові рядки. Дамо користувачеві таку можливість - Користувач може вводити \n як маркер нового рядка.
// Використовуючи split та join зробіть цей рядок воістину багаторядковим і виведіть в консоль або через alert.
// let multilineString = prompt ("Введіть речення, використовуючи \\n для переносу рядка")
// let lines = multilineString.split('\\n')
// let mark = lines.join('\n')
// alert (mark)


/*10. Нехай користувач введе будь-який текст із посиланням на youtube. 
Використовуючи регулярний вираз вийміть із посилання ідентифікатор видосу 
і створіть рядок із вбудованим блоком HTML. 
Додайте блок на сторінку.

1. оголосіть константу з регулярним виразом
2. використовуйте метод match, який поверне вам масив
3. вийміть із масиву елемент із ідентифікатором відео
4. вивчіть HTML код вбудовування відео на сторінку на youtube.
5. використовуючи інтерполяцію рядків, вклейте ідентифікатор відео в HTML код вбудовування відео
6. використовуючи document.write відправте отриманий рядок на сторінку.
*/

// const regular = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
// const userLinks = prompt("Введіть Link з YouTube:");
// const matchLink = userLinks.match(regular);
// if (matchLink) {
//     const videoLink = matchLink[1];
//     const videoEmbered = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoLink}" frameborder="0" allowfullscreen></iframe>`;
//     document.write(videoEmbered);
// } else {
//     document.write("Цей Link не є дійсним, введіть форматом 'https://www.youtube...'");
// }
