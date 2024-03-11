/*
1. blocks
Дайте відповідь на запитання в коментарях і звіртеся з відладчиком
*/

// let a = 10
// {
//     let b = 20
//     {
//         let c = 30
//         //які тут будуть значення змінних a, b, c, d
//         //a = 10, b = 20, c = 30, d = undefined
        
//         b++
//         a *= 10
//     }
//     {
//         let c = 50
//         //які тут будуть значення змінних a, b, c, d
//         //a = 100, b = 21, c = 50, d = undefined
//         b += 500
//     }
//     {
//         const a = 100500
//         const d = "value"
//         //які тут будуть значення змінних a, b, c, d
//         //a = 10500, b = 521, c = undefined, d = 'value'
//         {
//             let a = -50
//             b     = 1000
//             //які тут будуть значення змінних a, b, c, d
//             //a = -50, b = 1000, c = undefined, d = 'value'
//         }
//         //які тут будуть значення змінних a, b, c, d
//         //a = 100500, b = 1000, c = undefined, d = 'value'
//     }
//     //які тут будуть значення змінних a, b, c, d
//     //a = 100, b = 1000, c = undefined, d = undefined
// }
// //які тут будуть значення змінних a, b, c, d
// //a = 100, b,c,d = undefined

//***************************************************************

/*
2. comparison if
Розберіть приклад
Додайте умову негативного віку на приклад вище. Розставте недостатні (але синтаксично необов'язкові) фігурні дужки. Викиньте зайве з поточного коду
*/

// var age = + prompt ("Скільки вам років?");
// if (age < 0) {
//     alert("Від'ємний вік");
// }
// else {
//     if (age > 0 && age < 18) {
//         alert("школяр");
// }
//     else {
//         if (age > 18 && age < 30){
//             alert("молодь");
// }
//         else {
//             if (age > 30 && age < 45){
//                 alert("зрілість");
// }
//             else {
//                 if (age > 45 && age < 60){
//                     alert("захід сонця");
// }
//                 else {
//                     if (age > 60) {
//                         alert("як пенсія?");
// }
//                     else {
//                         alert("чи кіборг, чи KERNESS");
//                     }
//                 }
//             }
//         }
//     }
// }

//***************************************************************

/*
3. switch: sizes
Зробіть завдання Comparison: sizes використовуючи switch
*/

// var size = + prompt ("Enter your size in UA system (from 40 to 54) with 2-point step)");
// switch(size) {
//     case 40:
//         alert("Your size is 6 in US system")
//         break;
//     case 42:
//         alert("Your size is 8 in US system")
//         break;
//     case 44:
//         alert("Your size is 10 in US system")
//         break;
//     case 46:
//         alert("Your size is 12 in US system")
//         break;
//     case 48:
//         alert("Your size is 14 in US system")
//         break;
//     case 50:
//         alert("Your size is 16 in US system")
//         break;
//     case 52:
//         alert("Your size is 18 in US system")
//         break;
//     case 54:
//         alert("Your size is 20 in US system")
//         break;
//     default:
//         alert("Empty value");
// }

//***************************************************************

/*
4. switch: if
Перепишіть приклад нижче, використовуючи if.
*/

// let color = prompt("Введіть колір","");

// if (color == "red") {
//     document.write("<div style='background-color: red;'>червоний</div>");
// }
// if (color == "black") {
//     document.write("<div style='background-color: black; color: white;'>чорний</div>");
// }
// if (color == "blue") {
//     document.write("<div style='background-color: blue;'>синій</div>");
// }
// if (color == "green") {
//     document.write("<div style='background-color: green;'>зелений</div>");
// }
// if (color != "red" && color != "black" && color != "blue" && color != "green") {
//     document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
// }

//***************************************************************

/*
5. Напишіть функцію noSwitch, яка приймає об'єкт зі значеннями-функціями, 
ключ для об'єкта та запускає одну з функцій з об'єкта якщо ключ знайдений, інакше - запускає default:
*/

// const noSwitch = (key, cases, defaultKey='default') => {
//     //перевірка наявності key в cases
//     //якщо є - дістати значення по ключу. це буде функція. Запустити її
//     //якщо немає - витягти з об'єкта cases значення по ключу, ім'я якого лежить у змінній defaultKey. Запустити
//     //Нехай функція noSwitch повертає те, що повертає одна з функцій з об'єкта про всяк випадок

//     if(key in cases) {
//         return cases[drink]();
//     }
//     else {
//         return console.log(defaultKey);
//     }
// }

// const drink = prompt("Що ви любите пити")
// noSwitch(drink, {
//     воду: () => console.log('Найздоровіший вибір!'),
//     чай(){
//         console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
//     },
//     "пиво": () => console.log('Добре влітку, та в міру'),
//     віскі: function(){
//         console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
//     },
//     default(){
//         console.log('шото я не зрозумів')
//     }
// })

// const f = noSwitch[drink];

//***************************************************************

/*
6. closure calc
Напишіть всередині анонімної функції, переданої в then (data =>):
цикл, що перебирає курси;
на кожній ітерації створюється кнопка (document.createElement)
текст кнопки - назва валюти (innerHTML або innerText)
Призначте обробник події на цій кнопці (onclick = () => {.....}). Функція-обробник має бути написана прямо в тілі циклу
Обробник повинен запитувати суму використовуючи prompt і конвертувати цю суму з валюти, написаної на кнопці в USD
Знайдіть замикання. Для доступу до валют з data.rates використовуйте [], . тут не допоможе. 
Кнопки додавайте в спеціальний контейнер (div наприклад), створений в HTML, або, на крайній край, в body
*/

// fetch('https://open.er-api.com/v6/latest/USD')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);

//     const buttonsContainer = document.createElement('div');
//     document.body.appendChild(buttonsContainer);

//     for (const currency in data.rates) {
//       if (data.rates.hasOwnProperty(currency)) {
//         const button = document.createElement('button');

//         button.innerText = currency;

//         button.onclick = (currency => () => {
//           const amount = prompt(`Введіть суму в ${currency}:`);

//           if (!isNaN(amount)) {
//             const convertedAmount = amount * data.rates[currency];
//             alert(`${amount} ${currency} дорівнює ${convertedAmount.toFixed(2)} USD`);
//           } else {
//             alert('Будь ласка, введіть коректне число.');
//           }
//         })(currency); 

//         buttonsContainer.appendChild(button);
//       }
//     }
//   })

//***************************************************************
