// 1. Збережіть у масив відповіді на запитання, задані за допомогою confirm. 
// Використовуйте літеральний (декларативний) синтаксис масивів ([....,....,....])

// let a = confirm("Підеш гуляти?")
// let arr = ["так","ні"]
// if (a) {
//     console.log (arr[0]);
// }else{
//     console.log (arr[1])
// }




// 2. Збережіть у масив відповіді запитаннь, задані з допомогою prompts. 
// Використовуйте доступ до масиву за індексом та присвоєння (arr[....] = ....)

// let a = prompt ('How you doing?')
// let arr = [];
// arr[0] = a;
// console.log(arr[0]);

// чи так

// let a = prompt ('How you doing? good-0, fine-1, bad-2')
// let arr = [b,c,d] = ["good", "fine", "bad"]
// if (a == 0){
//     alert(arr[0])
// }else if (a == 1){
//     alert(arr[1])
// }else{
//     alert(arr[2])
// }




// 3. Попросіть користувача ввести (prompt) індекс у масиві. 
// Виведіть значення елемента за цим індексом. Спробуйте також ввести індекс "length".

// let index = prompt ("Enter your index 0-5")
// let arr = ['a','b','c','d','e','f']
// alert (arr [index])




// 4.Попросіть користувача ввести (prompt) індекс у масиві, а також значення для цього індексу. 
// Присвойте у введений індекс введене значення

// let a = prompt ('Enter index')
// let b = prompt ('Enter value')
// let arr = [,,,,,,,,,,]
// arr [a] = b;
// alert(arr[a]);
// console.log(arr)




// 5. Створіть таблицю множення 5x5, як масив в пам'ятi, використовуючи декларативний синтаксис 
// вкладених масивів const arr = [[....], [....], [....], .....]. Числа у вкладених масивах повинні 
// дорівнювати добутку індексу зовнішнього масиву на індекс внутрішнього масиву: arr[2][3] === 6

// let arr = [[,,,,],[,,,,],[,,,,],[,,,,],[,,,,],[,,,,]]

// for(let i = 0; i < 6; i++) {
//     for (let k = 0; k < 6; k++ ) {
//         arr[i][k] = i * k;
//     }
// }
// console.log(arr);



// 6. Використовуючи slice, створіть масив масивів (іншу таблицю/матрицю) з таблиці множення, 
// в якій не буде нулів

// let arr = [[,,,,],[,,,,],[,,,,],[,,,,],[,,,,],[,,,,]];


// for(let i = 0; i < arr.length; i++) {
//     for (let k = 0; k < arr.length; k++) {
//         arr[i][k] = i * k;
//     }
// }
// console.log(arr);

// let arr2 = [];

// for (let i = 1; i < arr.length; i++) {
//     arr2[i] = arr[i].slice(1);
// }
// console.log(arr2);



// 7. Запитайте у користувача рядок із кількох слів. Запитайте в нього потрібне слово. 
// Виведіть, яким за рахунком є це слово у рядку з кількох слів. 
// Якщо слово не знайдено, виведіть повідомлення про це (а не -1)

// let str = prompt("Введіть рядок із декількох слів (через пробіли)");
// let KeyWord = prompt("Введіть слово, яке потрібно знайти")
// let arr = str.split(" ");

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === KeyWord) console.log("Ваше слово \"" + KeyWord + "\" знаходиться у рядку за рахунком " + (i + 1));
// }

// 8. Додайте до масиву п'ять введених користувачем через prompt елементів (використовуйте push). 
// Створіть інший масив із цими ж елементами в зворотньому напрямку. 
// Для цього витягайте елементи з першого масиву використовуючи pop, додайте їх до другого використовуючи push.

// let str = prompt("Введіть рядок із декількох елементів (через пробіли)");
// let arr1 = [];
// arr1 = str.split(" ");
// console.log(arr1);

// let arr2 = [];

// for (let i = arr1.length - 1; i >= 0; i--) {
//     arr2.push(arr1[i]);
// }

// console.log(arr2);

//9. Переверніть другий масив із попереднього завдання ще раз (послідовність буде як у першому масиві), використовуючи shift та unshift.

// let str = prompt("Введіть рядок із декількох елементів (через пробіли)");
// let arr1 = [];
// arr1 = str.split(" ");
// const arrLenght = arr1.length;

// let arr2 = [];

// for (let i = arrLenght - 1; i >= 0; i--) {
//     arr2.push(arr1[i]);
// }
// console.log(arr2);

// let arr3 = [];

// for (let i = 0; i < arrLenght; i++) {
//     let tmp = arr2.shift();
//     arr3.unshift(tmp);
// }

// console.log(arr3);

//10. Скопіюйте масив створений у завданні Multiply table неглибоко

// let arr = [[,,,,],[,,,,],[,,,,],[,,,,],[,,,,],[,,,,]]

// for(let i = 0; i < 6; i++) {
//     for (let k = 0; k < 6; k++ ) {
//         arr[i][k] = i * k;
//     }
// }
// console.log(arr);

// let arr2 = [];
// arr2 = arr.slice();
// console.log(arr2);

// 11. Скопіюйте масив, створений у Multiply table, включаючи вкладені масиви (глибока копія). 
// Не треба шукати якесь складне готове рiшення, зробiть це максимально простим чином за умови, 
// що вам треба скопiювати 6 масивiв - загальний масив та п'ять масивiв у ньому;

// let arr = [[,,,,],[,,,,],[,,,,],[,,,,],[,,,,],[,,,,]]

// for(let i = 0; i < 6; i++) {
//     for (let k = 0; k < 6; k++ ) {
//         arr[i][k] = i * k;
//     }
// }
// console.log(arr);

// let arr2 = [];

// arr2 = JSON.parse(JSON.stringify(arr));
// console.log(arr2)

// 12. Створіть код, в якому буде дві змінні з масивами (arr і arr2), які рівні один одному (arr1 === arr2)

// let str = prompt("Масив 1 - Введіть рядок із декількох елементів (через пробіли)");
// let arr1 = arr2 = [];
// arr1 = str.split(" ");

// str = prompt("Масив 2 - Введіть рядок із декількох елементів (через пробіли)");
// arr2 = str.split(" ");

// if (arr1 == null || arr2 == null )  {
//     console.log("NULL");
// }
// else if (arr1.length !== arr2.length) {
//     console.log("arr1 NOT equals arr2");
// }
// else {
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             console.log("arr1 NOT equals arr2");
//             break;
//         }
//         else {
//             if (arr1 === arr2) { 
//                 console.log("arr1 equals arr2");
//                 break;
//             }
//         }
//     }
//}

// 13. Зберіть усі елементи всіх вкладених масивів із завдання Multiply table в один масив. 
// Його довжина повинна дорівнювати 25. Використовуйте spread-оператор

// let arr = [[,,,,],[,,,,],[,,,,],[,,,,],[,,,,],[,,,,]]

// for(let i = 0; i < 6; i++) {
//     for (let k = 0; k < 6; k++ ) {
//         arr[i][k] = i * k;
//     }
// }

// let arr2 = [];

// for (let i = 1; i < arr.length; i++) {
//     arr2[i] = arr[i].slice(1);
// }
// console.log(arr2);

// let arr3 = [];
// arr3.length = arr2.length;

// for (let i = 0; i < arr2.length; i++) {
//     arr3 = arr3.concat(arr2[i]);
//     }

// console.log(arr3);
