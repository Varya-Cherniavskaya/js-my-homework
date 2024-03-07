/*
1. Temperature
Оформіть Temperature як функцію, яку параметром передається температура в одній системі, а повертається до іншої. 
Жодних prompt та console.log у коді бути не повинно, якщо ви хочете надалі користуватися цією функцією будь-де в коді зручно. 
Чи потрібен блок коду функції для вирішення цього завдання?
*/

// let tCelsius = 30;
// let tKelvin = 0;
// let tFahrenheit = 0;

// const CelToKelv = (src) =>
// {
// return src + 273.15; 
// }

// const CelToFahr = (src) =>
// {
// return src + 32; 
// }

// tKelvin = CelToKelv(tCelsius);
// tFahrenheit = CelToFahr(tCelsius);

//*********************************************************************************

/*
2. RGB
Оформіть Number: RGB як функцію, яку параметрами передаються три числа (r, g, b) => . 
Функція повинна повертати рядок у нотації #RRGGBB. 
Використовуючи умови або тернарний оператор Досягніть що б у результаті завжди було 7 символів, навіть коли значення кольору менше 15ти. 
Чи потрібний блок коду цієї функції?
*/


// let red = 256;
// let green = 128;
// let blue = 64;

// const colorGen = (r, g, b) =>
// {
//     let redHex, greenHex, blueHex;

//     const DecToHex = (param) =>
//     {
//         return param.toString(16);
//     }

//     redHex = DecToHex(r);
//     greenHex = DecToHex(g);
//     blueHex = DecToHex(b);
    


//     return ("#" + redHex + greenHex + blueHex);
// }

// if((red > 255) || (green > 255) || (blue > 255)) {
//     console.log("Color values must be from 0 to 255")
// }
// else {
//     console.log(colorGen(red, green, blue));
// }

/*
Flats
Оформіть Number: flats як функцію. Продумайте достатню кількість параметрів для розв'язання задачі. 
Функція повинна повертати об'єкт виду {entrance, floor}, де entrance - номер падiка, floor - номер поверху, на якому знаходиться квартира.
*/

// let floor_num = prompt("Введите количество этажей");
// let flat_per_floor = prompt("Введите количество квартир на одном этаже");
// let flat_num = prompt("Введите номер квартиры");

// const EntrFloorCheck = (FloorNum, FlatsPerFloor, FlatNum) => 
// {

// FloorNum = parseInt(FloorNum); // количество этажей
// FlatsPerFloor = parseInt(FlatsPerFloor); // количество квартир на одном этаже
// FlatNum = parseInt(FlatNum); //номер квартиры

// let FlatsPerEntrance = parseInt(FloorNum * FlatsPerFloor); // количество квартир в одном подъезде
// let FlatsInHouse = parseInt(FlatsPerEntrance * 3); // общее количество квартир в доме

// let entr = Math.floor(FlatNum / FlatsPerEntrance); // начальное значение номера подъезда
// let flr = 0; // номер этажа. Сразу инициализируем и присваиваем начальное значение

// if ((FlatNum % FlatsPerEntrance) != 0) {
//     entr++; //инкрементируем, т.к. квартира находится в следующем подъезде
// }

// if ((FlatNum % FlatsPerEntrance) == 0) {
//     flr = FloorNum; //квартира находится на последнем этаже
// }
// else {
//     flr = Math.floor((FlatNum % FlatsPerEntrance) / FlatsPerFloor); //вычисляем номер этажа

//     if ((FlatNum % FlatsPerFloor) != 0) {
//         flr++;
//         }
//     }

//     const houseObj = {
//         entrance: entr,
//         floor: flr
//     }

//     return houseObj;
// }


// console.log(EntrFloorCheck(floor_num, flat_per_floor, flat_num));


/*
4. Credentials
Оформіть завдання String: credentials як функцію без параметрів. Використовуйте функцію capitalize із домашнього завдання з масивів. 
Функція повинна містити виклики prompt та повертати об'єкт виду {name, surname, fatherName, fullName}
*/

// const f = () => {
//     const capitalize = str => {
//         if (!str) {
//             return alert('Empty src string');
//         }
//         else {
//             let result = str.toLowerCase();
//             return result[0].toUpperCase() + result.slice(1);
//         }
//    }

// let firstName = prompt("Ваше ім'я")
// let secondName = prompt("Ваше по батькові")
// let lastName = prompt ("Ваше прізвище")
// firstName = firstName.trim()
// secondName = secondName.trim()
// lastName = lastName.trim()
// let fullName = capitalize(firstName) + " " + capitalize(secondName) + " " + capitalize(lastName);

// const personInfo = {
//     name: firstName,
//     surname: lastName,
//     fatherName: secondName,
//     fullName: fullName
// }

// return personInfo;
// }

// console.log(f());

/*
5. New line
Оформіть завдання String: new line як функцію з параметром-рядком. Функція повинна повертати рядок із справжніми переносами.
*/

// let multilineString = prompt ("Введіть речення, використовуючи \\n для переносу рядка")

// const ShiftFunc = (str) => {
//     let lines = multilineString.split('\\n')
//     let mark = lines.join('\n')
//     return mark;
// }

// console.log(ShiftFunc(multilineString));

/*
6. Prompt OR
Оформіть завдання Prompt: OR як функцію, яка приймає рядок для prompt та значення за замовчуванням. 
Функція повинна повертати введений текст або значення за замовчуванням у разі відмови користувача вводити щось. 
Використовуйте функцію без блоку коду (функція одного виразу)
*/

//  let ageVal = prompt ("Введіть ваш вік");
//  let defaultVal = "Значення за замовченням";

//  const func = (age, defaultVal) => age != "" ? age : defaultVal;

//  console.log(func(ageVal, defaultVal));

/*
7. Login And Password
Оформіть завдання Login And Password як функцію, яка приймає два параметри - 
правильний логін та пароль і повертає true якщо логін та пароль введені користувачами вірні, або false якщо користувач не зміг. 
Функція повинна містити в собі виклики prompt для введення логіну та пароля користувачем.
*/

// let login = "admin"
// let password = "qwerty"

// const credentialsCheck = (log, pass) => {

// let userlogin = prompt ("Введіть логін")
// let userpassword = prompt ("Введіть пароль")
// if (userlogin !== log){
//     return false;
// }else if (userpassword !== pass){ 
//     return false;
// }else {
//     if (userlogin === log && userpassword === pass){
//         return true;
//         }
//     }
// }

// console.log(credentialsCheck(login, password))

/*
8. For Table
Оформіть завдання For Multiply Table як функцію, яка приймає будь-який масив з масивами, а повертає рядок HTML з тегом <table> і всякими tr та td.
*/
// let rest = [0, 1, 2, 3, 4];
// const table = [[...rest], [...rest], [...rest], [...rest], [...rest]];

// const tableBuilder = (arr, nestedArr) => {
  
//   for(let i = 0; i < 5; i++) {
//       for (let h = 0; h < 5; h++ ) {
//           nestedArr[i][h] = (i + 1) * (h + 1);
//       }
//   }

// let str = "<table>"
// let i = 0; //counter for rows colour realize
// for (const row of nestedArr){
//     if (i % 2 == 0) { 
//      str += '<tr bgcolor="#5555ff">'
//     }
//     else {
//         str += '<tr bgcolor="#773322">'
//     }
//     for (const cell of row){ 
//          str += '<td>' + cell + '</td>'
//     }
//     str += '</tr>'
//     i++;
// }
// str+= "</table>"
// return str;
// }
// document.write(tableBuilder(rest, table)) //document.write відобразить ваш HTML на сторінці

/*
9. Оформіть завдання Filter Lexics як функцію, яка приймає будь-який рядок для перевірки та масив некоректних слів (['бляха', 'муха', "пляшка", "шабля"], наприклад). 
Функція повинна повертати рядок без цих некоректних слів.
*/

// let string = prompt();

// const filterFunc = (str) => { 

//     const lexCheck = (strRaw) => {
//         let forbiddenWords = ['word1', 'word2', 'word3'];
//         let src = strRaw.toLowerCase();
//         for (let i = 0; i < forbiddenWords.length; i++) {
//             if (src == forbiddenWords[i]) {
//                 return false;
//             }
//         }
//         return true;
//     }
// let arrOfStrings = str.split(' ');
// let resultArr = arrOfStrings.filter(lexCheck);
// let resultStr = resultArr.join(' ');
// return resultStr;
// }

// console.log(filterFunc(string));

/*
11. Form
Оформіть завдання Form як функцію, яка приймає будь-який об'єкт як параметр та створює форму на екрані.
*/

// const Obj = {
//     "Name":"chevrolet chevelle malibu",
//     "Cylinders":8,
//     "Displacement":307,
//     "Horsepower":130,
//     "Weight_in_lbs":3504,
//     "Origin":"USA",
//     "in_production": false
// };

// const createForm = (car) => {

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
// }

// createForm(Obj);
