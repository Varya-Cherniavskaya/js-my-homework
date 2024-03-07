// task 1. Temperature
// const convertTemperature = (temperature, sourceUnit) => {
//     if (sourceUnit.toLowerCase() === 'c') {
//         return (temperature * 9/5) + 32;
//     } else if (sourceUnit.toLowerCase() === 'f') {
//         return (temperature - 32) * 5/9;
//     } else {
//         return "Невірно вказана одиниця вимірювання. Введіть 'C' або 'F'.";
//     }
// }
// console.log(convertTemperature(20, 'C'));
// console.log(convertTemperature(68, 'F'));



// task 2. RGB
// const convertToHex = color => {
//     const hex = color.toString(16);
//     return hex.length === 1 ? '0' + hex : hex;
// }
// const NumberToRGB = (r, g, b) => {
//     const red = convertToHex(r);
//     const green = convertToHex(g);
//     const blue = convertToHex(b);
//     return `#${red}${green}${blue}`;
// };
// const red = parseInt(prompt("Введіть значення червоного кольору (від 0 до 255):"));
// const green = parseInt(prompt("Введіть значення зеленого кольору (від 0 до 255):"));
// const blue = parseInt(prompt("Введіть значення синього кольору (від 0 до 255):"));

// const cssColor = NumberToRGB(red, green, blue);
// console.log("CSS-колір:", cssColor);



// task 3. Flats
// const calculateEntranceAndFloor = (floors, flatsPerFloor, targetFlat) => {
//     const flatsPerEntrance = floors * flatsPerFloor;
//     const entrance = Math.ceil(targetFlat / flatsPerEntrance);
//     const flatIndexInEntrance = (targetFlat - 1) % flatsPerEntrance;
//     const floor = Math.ceil((flatIndexInEntrance + 1) / flatsPerFloor);
    
//     return { entrance, floor };
// };
// const flats = () => {
//     const floors = parseInt(prompt("Введіть кількість поверхів у будинку:"));
//     const flatsPerFloor = parseInt(prompt("Введіть кількість квартир на поверсі:"));
//     const targetFlat = parseInt(prompt("Введіть номер квартири:"));

//     const { entrance, floor } = calculateEntranceAndFloor(floors, flatsPerFloor, targetFlat);

//     console.log(`Квартира №${targetFlat} знаходиться на ${entrance}-му під'їзді та ${floor}-му поверсі.`);
// };
// flats();



// task 4. Credentials
// const capitalize = word => {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// };
// const credentials = () => {
//     const name = prompt("Введіть ваше ім'я:").trim();
//     const surname = prompt("Введіть ваше прізвище:").trim();
//     const fatherName = prompt("Введіть ваше по батькові:").trim();

//     const fullName = `${capitalize(name)} ${capitalize(surname)} ${capitalize(fatherName)}`;
//     console.log("ПІБ:", fullName);

//     return { name, surname, fatherName, fullName };
// };
// credentials();



// task 5. New line
// const newLine = (inputString) => {
//     const multiLineString = inputString.split('\\n').join('\n');
//     return multiLineString;
// };

// // Приклад використання:
// const userInput = prompt("Введіть рядок з маркерами нового рядка (\\n):");
// const result = newLine(userInput);
// console.log(result);



// task 6. Prompt OR
// const PromptOR = (promptString, defaultValue) => prompt(promptString) || defaultValue;

// // Приклад використання:
// const age = PromptOR("Введіть ваш вік:", "Невідомий");

// if (!age) {
//     alert("Помилка! Введіть ваш вік.");
// } else {
//     alert(`Ваш вік: ${age}`);
// }



// task 7. Login And Password
// const LoginAndPassword = (correctLogin, correctPassword) => {
//     const enteredLogin = prompt("Введіть логін:");  
//     if (enteredLogin === correctLogin) {
//         const enteredPassword = prompt("Введіть пароль:");   
//         if (enteredPassword === correctPassword) {
//             alert("Ласкаво просимо!");
//             return true;
//         } else {
//             alert("Помилка! Невірний пароль.");
//         }
//     } else {
//         alert("Помилка! Невірний логін.");
//     }
//     return false;
// };
// const correctLogin = "admin";
// const correctPassword = "qwerty";
// const loggedIn = LoginAndPassword(correctLogin, correctPassword);
// if (!loggedIn) {
//     alert("Не вдалося увійти.");
// }



// task 8. For Table
// const ForMultiplyTable = (arr) => {
//     let tableHTML = '<table border="1">';
    
//     for (const row of arr) {
//         tableHTML += '<tr>';
        
//         for (const cell of row) {
//             tableHTML += `<td>${cell}</td>`;
//         }
        
//         tableHTML += '</tr>';
//     }
    
//     tableHTML += '</table>';
    
//     return tableHTML;
// };
// const multiplyTable = [];
// for (let i = 0; i < 5; i++) {
//     const row = [];
//     for (let j = 0; j < 5; j++) {
//         row.push((i + 1) * (j + 1));
//     }
//     multiplyTable.push(row);
// }

// document.write(ForMultiplyTable(multiplyTable));



// task 9. Filter Lexics
// const FilterLexics = (inputString, invalidWords) => {
//     const words = inputString.split(' ');
//     const filteredWords = words.filter(word => !invalidWords.includes(word));
//     const resultString = filteredWords.join(' ');
//     return resultString;
// };

// const inputString = prompt("Введіть рядок:");
// const invalidWords = ['бляха', 'муха', 'пляшка', 'шабля'];

// const filteredString = FilterLexics(inputString, invalidWords);
// console.log(filteredString);



// task 10. Array of objects sort
// const sort = (array, field, ascending = true) => {
//     return array.sort((a, b) => {
//         if (a[field] < b[field]) return ascending ? -1 : 1;
//         if (a[field] > b[field]) return ascending ? 1 : -1;
//         return 0;
//     });
// };
// const persons = [
//     {name: "Іван", age: 17},
//     {name: "Марія", age: 35},
//     {name: "Олексій", age: 73},
//     {name: "Яків", age: 12},
// ];
// console.log(sort(persons, "age")); 
// console.log(sort(persons, "name", false)); 
