// let a = 5;  
// let b, c;
// b = (a * 5);  
// b = c = (b/2)
// console.log(b, c)





// let a = prompt('Скільки вам років?')
// if (isNaN(a)==true){
//     alert("Введіть цифри")
// }
// else{
//     alert("Рік народження = " + (2023 - a))
// }




// let a = prompt("Введіть значення температури по Цельсію")
// a = a * (9/5) + 32
// alert (a)





// let a = prompt ("Enter Num 1")
// let b = prompt ("Enter Num 2")
// alert("Num1 / Num 2 = " + Math.floor(a / b))





// const a = prompt ("Ведіть скільки долларів хочете поміняти на гривні")
// const rate = 37.41281
// b = rate*a
// alert ("Всього у гривнях " + b.toFixed(2))





// За допомогою prompt організуйте введення трьох констант red, green, blue у десятковій системі. 
// Створіть із них CSS-колір у форматі #RRGGBB використовуючи шістнадцяткову систему числення. 
// Значення менше 16ти поки що можна не враховувати.
//         */

        // const RED = parseInt(prompt("Enter RED color in decimal system (0 - 255)"));
        // const GREEN = parseInt(prompt("Enter GREEN color in decimal system (0 - 255)"));
        // const BLUE = parseInt(prompt("Enter BLUE color in decimal system (0 - 255)"));
        
        // function decToHexString(d) {
        //     return HexString = Number(d).toString(16);
        // }

        // let HexColor;

        // if (RED == 0 && GREEN == 0 && BLUE == 0) HexColor = "#000000";

        // if (RED == 0 || GREEN == 0 || BLUE == 0) {
        //     if (RED == 0 && GREEN != 0 && BLUE != 0) HexColor = "#" + "00" + decToHexString(GREEN) + decToHexString(BLUE);
        //     if (RED == 0 && GREEN != 0 && BLUE == 0) HexColor = "#" + "00" + decToHexString(GREEN) + "00";
        //     if (RED == 0 && GREEN == 0 && BLUE != 0) HexColor = "#" + "00" + "00" + decToHexString(BLUE);
        //     if (RED != 0 && GREEN == 0 && BLUE != 0) HexColor = "#" + decToHexString(RED) + "00" + decToHexString(BLUE);
        //     if (RED != 0 && GREEN == 0 && BLUE == 0) HexColor = "#" + decToHexString(RED) + "00" + "00";
        //     if (RED == 0 && GREEN == 0 && BLUE != 0) HexColor = "#" + "00" + "00" + decToHexString(BLUE);
        //     if (RED != 0 && GREEN != 0 && BLUE == 0) HexColor = "#" + decToHexString(RED) + decToHexString(GREEN) + "00";
        //     if (RED != 0 && GREEN == 0 && BLUE == 0) HexColor = "#" + decToHexString(RED) + "00" + "00";
        //     if (RED == 0 && GREEN != 0 && BLUE == 0) HexColor = "#" + "00" + decToHexString(GREEN) + "00";
        // }

        // else HexColor = "#" + decToHexString(RED) + decToHexString(GREEN) + decToHexString(BLUE);

        // alert("Your color in HEX:" + HexColor);

        // function myFunction() {
        //      document.getElementById("myDIV").style.backgroundColor = HexColor;
        // }
        







    //Зробіть калькулятор, який дозволить вам виходячи з інформації про кількість поверхів у будинку 
    //та кількість квартир на поверсі знаходити під'їзд та поверх певної квартири за її номером. 
    //Наприклад для 9поверхового будинку по 4 квартири на поверх 81 квартира знаходиться на 3-му поверсі третього під'їзду. 
    //Користувач повинен вводити за допомогою prompt кiлькiсть поверхiв, кiлькiсть квартир на поверсi та номер квартири. 
    //Код повинен видавати пiд'їзд та поверх по номеру квартири.

    // let FloorNum = prompt("Введыть кількість поверхів");
    // let FlatsPerFloor = prompt("Введіть кількість квартир на одному етажі");
    // let FlatNum = prompt("Ввеіть номер квартири");

    // FloorNum = parseInt(FloorNum); // кількість поверхів
    // FlatsPerFloor = parseInt(FlatsPerFloor); // кількість квартир на одному етажі
    // FlatNum = parseInt(FlatNum); //номер квартири

    // let FlatsPerEntrance = parseInt(FloorNum * FlatsPerFloor); // кількість квартир в одному під'їзді
    // let FlatsInHouse = parseInt(FlatsPerEntrance * 3); // всього квартир у домі

    // let entrance = Math.floor(FlatNum / FlatsPerEntrance); // начальне значення номера під'їзда
    // let floor = 0; // номер поверха. Зразу ініціалізуємо и присвоюємо начальне значення

    // if ((FlatNum % FlatsPerEntrance) != 0) {
    //     entrance++; //інкрементуєм, т.я. квартира знаходится в наступному під'їзді
    // }

    // if ((FlatNum % FlatsPerEntrance) == 0) {
    //     floor = FloorNum; //квартира знаходиься на останньому поверсі
    // }
    // else {
    //     floor = Math.floor((FlatNum % FlatsPerEntrance) / FlatsPerFloor); //вычисляем номер этажа

    //     if ((FlatNum % FlatsPerFloor) != 0) {
    //         floor++;
    //     }
    // }
    // alert("Квартира знаходиться в " + entrance + " під'їзді, на " + floor + " поверсі");
