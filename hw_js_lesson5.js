// 1. Збережіть у масив відповіді на запитання, задані за допомогою confirm. 
// Використовуйте літеральний (декларативний) синтаксис масивів ([....,....,....])

// let question = confirm("Підеш гуляти?")
// let arrQuestion = ["так","ні"]
// if (question) {
//     console.log (arrQuestion[0]);
// }else{
//     console.log (arrQuestion[1])
// }



// 2. Збережіть у масив відповіді запитаннь, задані з допомогою prompts. 
// Використовуйте доступ до масиву за індексом та присвоєння (arr[....] = ....)

// let question = prompt ('How you doing?')
// let arrQuestion = [];
// arrQuestion[0] = question;
// console.log(arrQuestion[0]);

// чи так

// let question = prompt ('How you doing? good-0, fine-1, bad-2')
// let questionarr = [b,c,d] = ["good", "fine", "bad"]
// if (question == 0){
//     alert(questionarr[0])
// }else if (question == 1){
//     alert(questionarr[1])
// }else{
//     alert(questionarr[2])
// }



// 3. Попросіть користувача ввести (prompt) індекс у масиві. 
// Виведіть значення елемента за цим індексом. Спробуйте також ввести індекс "length".

// let index = prompt ("Enter your index 0-5")
// let arr = ['abcde','b','c','d','e','f']
// alert (arr [index])
// alert (arr [index].length)



// 4.Попросіть користувача ввести (prompt) індекс у масиві, а також значення для цього індексу. 
// Присвойте у введений індекс введене значення

// let index = prompt ('Enter index')
// let value = prompt ('Enter value')
// let arr = [,,,,,,,,,,]
// arr [index] = value;
// alert(arr[index]);
// console.log(arr)



// 5. Створіть таблицю множення 5x5, як масив в пам'ятi, використовуючи декларативний синтаксис 
// вкладених масивів const arr = [[....], [....], [....], .....]. Числа у вкладених масивах повинні 
// дорівнювати добутку індексу зовнішнього масиву на індекс внутрішнього масиву: arr[2][3] === 6

// let arrtable = [[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4],];
  
//   for(let i = 0; i < 5; i++) {
//       for (let h = 0; h < 5; h++ ) {
//           arrtable[i][h] = (i + 1) * (h + 1);
//       }
//   }
//   console.log(arrtable);
  


// 6. Використовуючи slice, створіть масив масивів (іншу таблицю/матрицю) з таблиці множення, 
// в якій не буде нулів

// let arrtable = [[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4],];
  
//   for(let i = 0; i < 5; i++) {
//       for (let h = 0; h < 5; h++ ) {
//           arrtable[i][h] = (i + 1) * (h + 1);
//       }
//   }
//   console.log(arrtable);

// let arrtable2 = [];

// for (let i = 1; i < arrtable.length; i++) {
//     arrtable2[i] = arrtable[i].slice(1);
// }
// console.log(arrtable2);



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



//9. Переверніть другий масив із попереднього завдання ще раз (послідовність буде як у першому масиві), 
// використовуючи shift та unshift.

// let randomstr = prompt("Введіть рядок із декількох елементів (через пробіли)");
// let arr1 = [];
// arr1 = randomstr.split(" ");
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

// let arrtable = [[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4],];
  
//   for(let i = 0; i < 5; i++) {
//       for (let h = 0; h < 5; h++ ) {
//           arrtable[i][h] = (i + 1) * (h + 1);
//       }
//   }
//   console.log(arrtable);

// let arr2 = [...arrtable];
// console.log(arr2);



// 11. Скопіюйте масив, створений у Multiply table, включаючи вкладені масиви (глибока копія). 
// Не треба шукати якесь складне готове рiшення, зробiть це максимально простим чином за умови, 
// що вам треба скопiювати 6 масивiв - загальний масив та п'ять масивiв у ньому;

// let arrtable = [[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4]];
// let arr2 = [];
// for(let i = 0; i < arrtable.length; i++) {
//     arr2[i] = arrtable[i].slice();
// }

// console.log(arr2);



// 12. Створіть код, в якому буде дві змінні з масивами (arr і arr2), які рівні один одному (arr1 === arr2)

// let str = prompt("Масив 1 - Введіть рядок із декількох елементів (через пробіли)");
// let arr1 = str.split(" ");

// str = prompt("Масив 2 - Введіть рядок із декількох елементів (через пробіли)");
// let arr2 = str.split(" ");

// if (arr1.length !== arr2.length) {
//     console.log("arr1 NOT equals arr2");
// } else {
//     let areEqual = true;
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             areEqual = false;
//             break;
//         }
//     }
//     if (areEqual) {
//         console.log("arr1 equals arr2");
//     } else {
//         console.log("arr1 NOT equals arr2");
//     }
// }

// АБО ТАК 

// let arr1 = [[11, 24], [5, 44]];
// let arr2 = [[11, 24], [5, 44]];

// let arrEqual = true;

// if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length && arrEqual; i++) {
//         if (arr1[i].length !== arr2[i].length) {
//             arrEqual = false;
//         } else {
//             for (let j = 0; j < arr1[i].length; j++) {
//                 if (arr1[i][j] !== arr2[i][j]) {
//                     arrEqual = false;
//                     arrEqual = false;
//                 }
//             }
//         }
//     }
// } else {
//     arrEqual = false;
// }

// console.log(arrEqual); 



// 13. Зберіть усі елементи всіх вкладених масивів із завдання Multiply table в один масив. 
// Його довжина повинна дорівнювати 25. Використовуйте spread-оператор

// let arrtable = [[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4],];
  
//   for(let i = 0; i < 5; i++) {
//       for (let h = 0; h < 5; h++ ) {
//           arrtable[i][h] = (i + 1) * (h + 1);
//       }
//   }

// let arr2 = [];

// for (let i = 1; i < arrtable.length; i++) {
//     arr2[i] = arrtable[i].slice(1);
// }
// console.log(arr2);

// let arr3 = [];
// arr3.length = arr2.length;

// for (let i = 0; i < arr2.length; i++) {
//     arr3 = arr3.concat(arr2[i]);
//     }

// console.log(arr3);


// 14. Вийміть першу, п'яту та дев'яту літеру з рядка, введеного користувачем, використовуючи деструктуризацію. Виведіть їх

// let randonStr = prompt("Введіть тут речення:");
// let [first, , , , fifth, , , , ninth] = randonStr;
// console.log(`Літера 1: ${first}`);
// console.log(`Літера 5: ${fifth}`);
// console.log(`Літера 9: ${ninth}`);



// 15.Вийміть другу, четверту та п'яту літеру з рядка, введеного користувачем, використовуючи деструктуризацію. 
// Якщо у рядку таких букв не виявиться задайте змінним значення за умовчанням ! (знак оклику). 
// Виведіть ці змінні

// let randonStr = prompt("Введіть будь-який рядок:");

// let [, second, , fourth, fifth] = randonStr;
// second = second ? second : '!';
// fourth = fourth ? fourth : '!';
// fifth = fifth ? fifth : '!';
// console.log(`Друга літера: `+ second);
// console.log(`Четверта літера: `+ fourth);
// console.log(`П'ята літера: `+ fifth);

