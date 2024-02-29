// 1. Знайдіть кілька навколишніх об'єктів реального світу та створіть відповідні об'єкти Javascript. Наприклад:
// const cat = {
//     breed: "sphynx",
//     fur: undefined,
//     age: 3,
//     children: [Uliy, Tor, Simba],
//     characteristics: "calm",
//     sibling: null,
//     isStoleMealsFromTheTable: true,
// }
// const home = {
//     city: "Kharkiv",
//     room: 2,
//     balcony: true,
//     carpet: null,
// }

//_____________________________________________________________________________________________

// 2. Дайте можливість користувачеві додати будь-які дві властивості до цих об'єктів 
// з будь-якими значеннями. Забезпечте введення назви ключа і значення через prompt прямо в літералі об'єкта {}

// const nameCat       = prompt("Введіть ім'я")
// const sex = prompt("Введіть пол")

// const cat = {
//     breed: "sphynx",
//     fur: undefined,
//     age: 3,
//     children: ["Uliy", "Tor", "Simba"],
//     characteristics: "calm",
//     sibling: null,
//     isStoleMealsFromTheTable: true,
//     nameCat,
//     sex,
// }
// console.log(cat.nameCat)
// console.log(cat.sex)


// const floor = prompt ("Введіть поверх")
// const whatIsTheArea = prompt ("Введіть метраж")

// const home = {
//     city: "Kharkiv",
//     room: 2,
//     balcony: true,
//     carpet: null,
//     floor,
//     whatIsTheArea,
// }
// console.log(home.floor)
// console.log(home.whatIsTheArea) 

//_____________________________________________________________________________________________

// 3. Нехай користувач введе ще одну властивість змінну. Вставте цю змінну в новий об'єкт. 
// Скопіюйте об'єкт із попереднього завдання на новий об'єкт.

// const floor = prompt ("Введіть поверх")
// const whatIsTheArea = prompt ("Введіть метраж")

// const home = {
//     city: "Kharkiv",
//     room: 2,
//     balcony: true,
//     carpet: null,
//     floor,
//     whatIsTheArea,
// }
// console.log(home.floor)
// console.log(home.whatIsTheArea) 

// const home2 = {...home}
// home2.jacuzzi = confirm ("Чи є у вас джакузі?")
// console.log(home, home2)

//_____________________________________________________________________________________________

// 4. HTML tree
/* <body>
<div>
    <span>Enter a data please:</span><br/>
    <input type='text' id='name'>
    <input type='text' id='surname'>
</div>
<div>
    <button id='ok'>OK</button>
    <button id='cancel'>Cancel</button>
</div>
</body> */

// let body = {
//     tagName: "body",
//     children: [
//         {
//             tagName: "div",
//             children: [
//                 {
//                     tagName: "span",
//                     children: ["Enter a data please:"],
//                 },
//                 {
//                     tagName: "br",
//                 },
//                 {
//                     tagName: "input",
//                     attrs: {
//                         type: "text",
//                         id: "name",
//                     }
//                 },
//                 {
//                     tagName: "input",
//                     attrs: {
//                         type: "text",
//                         id: "surname",
//                     }
//                 }
//             ]
//         },
//         {
//             tagName: "div",
//             children: [
//                 {
//                     tagName: "button",
//                     attrs: {
//                         id: "ok",
//                     },
//                     children: ["OK"],
//                 },
//                 {
//                     tagName: "button",
//                     attrs: {
//                         id: "cancel",
//                     },
//                     children:["Cancel"],
//                 }
//             ]
//         }
//     ]
// };

// let secondButton = body.children[1].children[1].children[0];
// console.log(secondButton);

// let secondInput = body.children[0].children[3].attrs.id;
// console.log(secondInput);

//_____________________________________________________________________________________________

// 5. Parent
// Додайте кожному об'єкту тега з попереднього завдання зв'язок з батьком, використовуючи властивість parent та присвоєння
// let body = {
//     tagName: "body",
//     children: [
//         div1 = {
//             tagName: "div",
//             children: [
//                 {
//                     tagName: "span",
//                     children: ["Enter a data please:"],
//                 },
//                 {
//                     tagName: "br",
//                 },
//                 {
//                     tagName:"input",
//                     attrs: {
//                         type: "text",
//                         id: "name",
//                     }
//                 },
//                 {
//                     tagName:"input",
//                     attrs: {
//                         type: "text",
//                         id: "surname",
//                     }
//                 }
//             ]
//         },
//         div2 = {
//             tagName: "div",
//             children: [
//                 {
//                     tagName: "button",
//                     attrs: {
//                         id: "ok",
//                     },
//                     children: ["OK"],
//                 },
//                 {
//                     tagName: "button",
//                     attrs: {
//                         id: "cancel",
//                     },
//                     children:["Cancel"],
//                 }
//             ]
//         }
//     ]
// };

// body.children[0].parent = body;
// body.children[1].parent = body;
// body.children[0].children[0].parent = body.children[0];
// body.children[0].children[2].parent = body.children[0];
// body.children[0].children[3].parent = body.children[0];
// body.children[1].children[0].parent = body.children[1];
// body.children[1].children[1].parent = body.children[1];

// console.log(body);

//_____________________________________________________________________________________________

// 6. Change OK
// Додайте (або змініть) будь-який введений користувачем атрибут тега <button id='ok'> із завдання HTML Tree. 
// Також користувач вводить значення цього атрибута.

// let body = {
//     tagName: "body",
//     children: [
//         {
//             tagName: "div",
//             children: [
//                 {
//                     tagName: "span",
//                     children: ["Enter a data please:"],
//                 },
//                 {
//                     tagName: "br",
//                 },
//                 {
//                     tagName: "input",
//                     attrs: {
//                         type: "text",
//                         id: "name",
//                     }
//                 },
//                 {
//                     tagName: "input",
//                     attrs: {
//                         type: "text",
//                         id: "surname",
//                     }
//                 }
//             ]
//         },
//         {
//             tagName: "div",
//             children: [
//                 {
//                     tagName: "button",
//                     attrs: {
//                         id : "ok",
//                     },
//                     children: ["OK"],
//                 },
//                 {
//                     tagName: "button",
//                     attrs: {
//                         id: "cancel",
//                     },
//                     children:["Cancel"],
//                 }
//             ]
//         }
//     ]
// };

// let newIdName = prompt("Введіть нове ІМ'Я для атрибута id тега <button>:");
// const newIdValue = prompt("Введіть нове ЗНАЧЕННЯ для атрибута id тега <button>:");

// body.children[1].children[0].attrs.id = newIdValue;
// body.children[1].children[0].attrs[newIdName] = body.children[1].children[0].attrs.id;
// delete body.children[1].children[0].attrs.id;

// console.log(body.children[1].children[0]);

//_____________________________________________________________________________________________

// 7. Destructure
// Використовуючи деструктуризацію структури із завдання HTML Tree:
// Виведіть значення тексту у тезі span,
// Виведіть значення тексту в другій кнопці та
// Виведіть значення атрибуту id у другому input.
// let body = {
//     tagName: "body",
//     children: [
//         {
//             tagName: "div",
//             children: [
//                 {
//                     tagName: "span",
//                     children: ["Enter a data please:"],
//                 },
//                 {
//                     tagName: "br",
//                 },
//                 {
//                     tagName: "input",
//                     attrs: {
//                         type: "text",
//                         id: "name",
//                     }
//                 },
//                 {
//                     tagName: "input",
//                     attrs: {
//                         type: "text",
//                         id: "surname",
//                     }
//                 }
//             ]
//         },
//         {
//             tagName: "div",
//             children: [
//                 {
//                     tagName: "button",
//                     attrs: {
//                         id: "ok",
//                     },
//                     children: ["OK"],
//                 },
//                 {
//                     tagName: "button",
//                     attrs: {
//                         id: "cancel",
//                     },
//                     children:["Cancel"],
//                 }
//             ]
//         }
//     ]
// };

// let {
//     children: [
//         {
//             children: spanChildren
//         }
//     ]
// } = body.children[0];
// console.log("Діти у тезі span:", spanChildren);

// let {
//     children: [
//         ,
//         {
//             children: cancelButtonChildren
//         }
//     ]
// } = body.children[1];
// console.log("Дочірні елементи другого button (з id 'cancel'):", cancelButtonChildren);

// let {
//     attrs: {
//         id: secondInputId
//     }
// } = body.children[0].children[3];
// console.log("Значення атрибуту id у другому input:", secondInputId);



// ???// let { children: [{ children: spanChildren }] } = body.children[0];
// console.log("Діти у тезі span:", spanChildren);
// let { children: cancelButtonChildren } = body.children[1].children[1];
// console.log("Дочірні елементи другого button (з id 'cancel'):", cancelButtonChildren);

// let { attrs: { id: secondInputId } } = body.children[0].children[3];
// console.log("Значення атрибуту id у другому input:", secondInputId);
//_____________________________________________________________________________________________


// 8. Destruct array
// let arr = [1,2,3,4,5, "a", "b", "c"]
// напишіть код, який використовуючи деструктуризацію покладе:
// парні числа в змінні even1, even2,
// непарні в odd1, odd2, odd3,
// Літери в окремий масив
// let arr = [1, 2, 3, 4, 5, "a", "b", "c"];
// let evenNumbers = arr.filter(item => typeof item === 'number' && item % 2 === 0);
// let oddNumbers = arr.filter(item => typeof item === 'number' && item % 2 !== 0);
// let letters = arr.filter(item => typeof item === 'string');
// console.log("Парні числа:", ...evenNumbers);
// console.log("Непарні числа:", ...oddNumbers);
// console.log("Літери:", letters);

//_____________________________________________________________________________________________

// 9.Destruct string
// let arr = [1, "abc"]
// напишіть код, який використовуючи деструктуризацію покладе:
// Число в змінну number
// літеру a в змінну s1
// літеру b у змінну s2
// літеру c у змінну s3

// let arr = [1, "abc"]
// let [, str] = arr;
// let arr2 = str.split('');
// let result = [arr[0], arr2[0], arr2[1], arr2[2]];
// let[number, s1, s2, s3] = result;

// console.log(number);
// console.log(s1);
// console.log(s2);
// console.log(s3);


//_____________________________________________________________________________________________

// 10. Destruct 2
// let obj = {name: 'Ivan',
//            surname: 'Petrov',
//            children: [{name: 'Maria'}, {name: 'Nikolay'}]}
// вийміть використовуючи деструктуризацію імена дітей у змінні name1 та name2

// let obj = {name: 'Ivan',
//            surname: 'Petrov',
//            children: [{name: 'Maria'}, 
//                       {name: 'Nikolay'}
//                      ]
//                     }
// let [name1, name2] = obj.children;
// console.log(name1);
// console.log(name2);

//_____________________________________________________________________________________________

//11. Destruct 3
// let arr = [1,2,3,4, 5,6,7,10]
// вийміть використовуючи деструктуризацію об'єктів два перші елементи та довжину масиву в змінні a, b та length

// let arr = [1,2,3,4,5,6,7,10]
// const{0: a, 1: b, lenght = arr.length} = arr;
// console.log(a);
// console.log(b);
// console.log(lenght);

//_____________________________________________________________________________________________

// 12. Copy delete
// Зробіть копію одного з об'єктів із завдання Literals без ключа, який введе користувач, з використанням деструктурiзацiї та rest, без використання оператору delete.

//  const home = {
//      city: "Kharkiv",
//      room: 2,
//      balcony: true,
//      carpet: null,
//  }

// propToDelete = prompt('Write name of the property that will be deleted from object:')

//  const{[propToDelete] : deletedProperty, ...rest} = home
//  console.log(rest);
//_____________________________________________________________________________________________

// 13. Currency real rate
// Нижче наведено код, який завантажує актуальну інформацію про курси валют. Скопіюйте посилання з нього вставте в браузер заради інтересу. 
//Реалізуйте калькулятор обміну валют таким чином:
// Користувач вводить вхідну валюту
// Користувач вводить валюту, в яку відбувається конвертація
// Користувач вводить суму у вхідній валюті
// Користувач бачить результат конвертації
//     fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//      .then(data => {
//             //ця функція запускається коли дані завантажуються.
//             //Інший код працює РАНIШЕ.
//             //тільки тут є змінна data з завантаженими даними
//             console.log(data) // Вивчіть структуру, що отримується з сервера в консолі
//          })
// Врахуйте, що користувач може ввести якусь дичину або назву валют у неправильному регістрі



//_____________________________________________________________________________________________

// 14. Currency drop down
// Зробіть список, що випадає, з назвами всіх валют, використовуючи код з минулого завдання і накопичення HTML-тегів у рядковій змінній. 
// Для списків, що випадають, в HTML передбачені теги <select> і <option>

//_____________________________________________________________________________________________

// 15. Currency table
// Зробіть двовимірну таблицю з курсами між усіма можливими парами валют на кшталт таблиці Піфагора, використовуючи код із завдання Currency real rate:
// Використовуйте тільки один запит на сервер. Використовуйте розрахунок кроскурсу для обчислення курсу між будь-якою парою валют

//_____________________________________________________________________________________________

// 16. Form
// Напишіть код, який будь-якого об'єкта створює форму HTML. Наприклад для такого об'єкту
// const car = {
//       "Name":"chevrolet chevelle malibu",
//       "Cylinders":8,
//       "Displacement":307,
//       "Horsepower":130,
//       "Weight_in_lbs":3504,
//       "Origin":"USA",
//       "in_production": false
// }
// На екрані має з'явитись форма з 7 рядків, з назвами полів, взятими з ключів та полями введення відповідних типів. 
//Значеннями полів введення мають бути значення об'єкта.
// <form>
//     <label>Name: <input type="text" value="chevrolet chevelle malibu"/></label>
//     <label>Cylinders: <input type="number" value="8"/></label>
//     <label>Displacement: <input type="number" value="307"/></label>
//     <label>Horsepower: <input type="number" value="130"/></label>
//     <label>Weight_in_lbs: <input type="number" value="3504"/></label>
//     <label>Origin: <input type="text" value="USA"/></label>
//     <label>in_production: <input type="checkbox" /></label>
// </form>
// Для створення правильного типу тега input використовуйте оператор typeof Javascript:
// console.log(typeof 5)//number
// console.log(typeof "5") //string
// console.log(typeof (5 > 2)) //boolean
// Відповідність типів
// JS
// HTML
// number
// number
// string
// text
// boolean
// checkbox
// Врахуйте, що для checkbox початкове значення задається через властивість checked, а не value.





// const car = {
//     "Name":"chevrolet chevelle malibu",
//     "Cylinders":8,
//     "Displacement":307,
//     "Horsepower":130,
//     "Weight_in_lbs":3504,
//     "Origin":"USA",
//     "in_production": false
// };

//     const form = document.createElement("form");

//     for (const key in car) {
//       const label = document.createElement("label");
//       label.textContent = key.charAt(0).toUpperCase() + key.slice(1); // make first letter as capital

//       const input = document.createElement("input");
//       input.type = typeof car[key] === "boolean" ? "checkbox" : "text"; // define input-type

//       if (typeof car[key] === "boolean") {
//         input.checked = car[key];
//       } else {
//         input.value = car[key];
//       }

//       // create new string in the form
//       const lineBreak = document.createElement("br");

//       // add elements in the form
//       form.appendChild(label);
//       form.appendChild(input);
//       form.appendChild(lineBreak);
//     }

//     // add form to body
//     document.body.appendChild(form);

//_____________________________________________________________________________________________

// 17. Table
// Дано будь-який масив з об'єктами
// const persons = [
//         {
//             name: 'Марія',
//             fatherName: 'Іванівна',
//             surname: 'Іванова',
//             sex: 'female'
//         },
//         {
//             name: 'Миколай',
//             fatherName: 'Іванович',
//             surname: 'Іванов',
//             age: 15
//         },
//         {
//             name: 'Петро',
//             fatherName: 'Іванович',
//             surname: 'Іванов',
//             married: true
//         },
// ]
// Сформувати таблицю (використовуючи накопичення тегів HTML у рядку):

// Алгоритм рішення
// Перед безпосередньо формуванням рядків таблиці треба знати всі колонки. 
// Для цього потрібно попередньо перебрати всі об'єкти та витягти з них усі ключі, щоб сформувати загальну множину ключів.
// Перший прохід - пошук колонок
// Перебираємо масив об'єктів, перебираємо ключі кожного об'єкта і додаємо в масив колонок, якщо цього ключа ще немає. Наприклад вище масив вийде у шість елементів. 
// На цьому етапі рядок HTML створювати ще рано.
// Заголовок
// Починаємо створення таблиці. Використовуючи масив колонок формуємо один рядок таблиці із заголовками
// Другий прохід - відображення таблиці
// Перебираємо масив об'єктів, перебираємо масив колонок для кожного об'єкта, і використовуємо назву колонки як ключ
// Тестові дані
// Перевірте ваше рішення, наприклад, на цьому масиві об'єктів:
// [
//    {
//       "Name":"chevrolet chevelle malibu",
//       "Cylinders":8,
//       "Displacement":307,
//       "Horsepower":130,
//       "Weight_in_lbs":3504,
//       "Origin":"USA"
//    },
//    {
//       "Name":"buick skylark 320",
//       "Miles_per_Gallon":15,
//       "Cylinders":8,
//       "Displacement":350,
//       "Horsepower":165,
//       "Weight_in_lbs":3693,
//       "Acceleration":11.5,
//       "Year":"1970-01-01",
//    },
//    {
//       "Miles_per_Gallon":18,
//       "Cylinders":8,
//       "Displacement":318,
//       "Horsepower":150,
//       "Weight_in_lbs":3436,
//       "Year":"1970-01-01",
//       "Origin":"USA"
//    },
//    {
//       "Name":"amc rebel sst",
//       "Miles_per_Gallon":16,
//       "Cylinders":8,
//       "Displacement":304,
//       "Horsepower":150,
//       "Year":"1970-01-01",
//       "Origin":"USA"
//    },
// ]
//________________________________________________________

    // const objArr = [
    //     {
    //         "Name":"chevrolet chevelle malibu",
    //         "Cylinders":8,
    //         "Displacement":307,
    //         "Horsepower":130,
    //         "Weight_in_lbs":3504,
    //         "Origin":"USA"
    //      },
    //      {
    //         "Name":"buick skylark 320",
    //         "Miles_per_Gallon":15,
    //         "Cylinders":8,
    //         "Displacement":350,
    //         "Horsepower":165,
    //         "Weight_in_lbs":3693,
    //         "Acceleration":11.5,
    //         "Year":"1970-01-01",
    //      },
    //      {
    //         "Miles_per_Gallon":18,
    //         "Cylinders":8,
    //         "Displacement":318,
    //         "Horsepower":150,
    //         "Weight_in_lbs":3436,
    //         "Year":"1970-01-01",
    //         "Origin":"USA"
    //      },
    //      {
    //         "Name":"amc rebel sst",
    //         "Miles_per_Gallon":16,
    //         "Cylinders":8,
    //         "Displacement":304,
    //         "Horsepower":150,
    //         "Year":"1970-01-01",
    //         "Origin":"USA"
    //      },
    //   ];
  
    //     const columns = [];
  
    //     // First iteration to finding columns
    //     objArr.forEach(obj => {
    //       for (const key in obj) {
    //         if (!columns.includes(key)) {
    //           columns.push(key);
    //         }
    //       }
    //     });
  
    //     // Create table header
    //     const table = document.createElement("table");
    //     const thead = document.createElement("thead");
    //     const trHeader = document.createElement("tr");
  
    //     columns.forEach(column => {
    //       const th = document.createElement("th");
    //       th.textContent = column;
    //       trHeader.appendChild(th);
    //     });
  
    //     thead.appendChild(trHeader);
    //     table.appendChild(thead);
  
    //     // Second iteration to show data
    //     const tbody = document.createElement("tbody");
  
    //     objArr.forEach(obj => {
    //       const tr = document.createElement("tr");
  
    //       columns.forEach(column => {
    //         const td = document.createElement("td");
    //         td.textContent = obj[column] || ''; //Empty string if there is no attribute
    //         tr.appendChild(td);
    //       });
  
    //       tbody.appendChild(tr);
    //     });
  
    //     table.appendChild(tbody);
  
    //     // Add table to the body
    //     document.body.appendChild(table);
