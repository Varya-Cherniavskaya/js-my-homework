let taskNumber = prompt("Введіть номер завдання (1-15): ");

if (taskNumber === "1") {
    let customerNumber = prompt("Введіть число");
    if (isNaN(customerNumber)) {
        alert("Введіть будь-яке число цифрами");
    } else if (customerNumber % 2 == 0) {
        alert("Число парне");
    } else {
        alert("Число не парне");
    }
}

else if (taskNumber === "2") {
    let customText = prompt("Введіть якийсь текст тут: ");
    alert(customText.indexOf("fack"));
}

else if (taskNumber === "3") {
    let message = confirm("Підеш на вихідних у бар?");
    alert(message ? "На ранок буде боліти голова" : "Не будь таким нудним");
}

else if (taskNumber === "4") {
    let choice = confirm("Ваша стать? \"Ок\" - жіноча; \"Відміна\" - чоловіча");
    if (choice) {
        alert("Ви жінка");
    } else {
        alert("Ви чоловік");
    }
}

else if (taskNumber === "5") {
    let waist = prompt("Ваш обсяг талії (у см)");
    if (waist >= 66 && waist <= 69) {
        alert("Ваш розмір у міжнарожній системі виміру XS");
    } else if (waist >= 70 && waist <= 74) {
        alert("Ваш розмір у міжнарожній системі виміру S");
    } else if (waist >= 75 && waist <= 78) {
        alert("Ваш розмір у міжнарожній системі виміру M");
    } else if (waist >= 79 && waist <= 83) {
        alert("Ваш розмір у міжнарожній системі виміру L");
    } else if (waist >= 84 && waist <= 89) {
        alert("Ваш розмір у міжнарожній системі виміру XL");
    } else if (waist >= 90 && waist <= 94) {
        alert("Ваш розмір у міжнарожній системі виміру XXL");
    } else if (waist >= 95 && waist <= 97) {
        alert("Ваш розмір у міжнарожній системі виміру XXXL");
    }
}

else if (taskNumber === "6") {
    let sex = confirm("Ваша стать: ok - чоловік, відміна - жінка") ? alert("Ви чоловік") : alert("Ви жінка");
}

else if (taskNumber === "7") {
    let age = prompt('Скільки вам років?') || alert("Помилка!");
}

else if (taskNumber === "8") {
    let question = confirm("шопінг?") || alert("ти - бяка");
}

else if (taskNumber === "9") {
    let question = confirm("шопінг?")
    if (!question) {
        alert("ти - бяка");
    }
}

else if (taskNumber === "10") {
    let firstName = prompt('Твоє ім\'я? чи будеш Іван') || 'Іван';
    let secondName = prompt('Твоє по батькові? чи будеш Іванович') || 'Іванович';
    let thirdName = prompt('Твоє прізвище? чи будеш Іванов') || 'Іванов';
    alert(firstName + " " + secondName + " " + thirdName);
}

else if (taskNumber === "11") {
    let firstName = prompt('Твоє ім\'я? чи будеш Іван');
    if (!firstName) {
        firstName = 'Іван';
    }
    let secondName = prompt('Твоє по батькові? чи будеш Іванович');
    if (!secondName) {
        secondName = 'Іванович';
    }
    let thirdName = prompt('Твоє прізвище? чи будеш Іванов');
    if (!thirdName) {
        thirdName = 'Іванов';
    }
    alert(firstName + " " + secondName + " " + thirdName);
}

else if (taskNumber === "12") {
    let login = "admin";
    let password = "qwerty";
    let userlogin = prompt("Введіть логін");
    if (login === userlogin) {
        let userpassword = prompt("Введіть пароль");
        if (password === userpassword) {
            alert("Вітаю");
        } else {
            alert("Введіть вірне значення паролю");
        }
    } else if (login !== userlogin) {
        alert("Введіть вірне значення логіну");
    }
}

else if (taskNumber === "13") {
    let usdToBuy = 35;
    let eurToBuy = 40;
    let usdToSale = 37;
    let eurToSale = 42;
    let summary;
    let currency = prompt('Введіть валюту (usd / eur)').toLowerCase();
    if (currency === "usd" || currency === "eur") {
        let buyOrSale = confirm('Купити або продати?');
        let rate = prompt('Введіть суму на обмін:');
        if (buyOrSale) {
            summary = (currency === "usd" ? (usdToSale * rate) : (eurToSale * rate));
        } else {
            summary = (currency === "usd" ? (rate * usdToBuy) : (rate * eurToBuy));
        }
        alert("Результат: " + summary);
    } else {
        alert('Невірна валюта');
    }
}

else if (taskNumber === "14") {
    let customResult = prompt("Введіть 'к', 'н' чи 'б'");
    let computerResult = Math.random();
    let result;
    ((customResult === 'к' && (computerResult > 0.33 && computerResult <= 0.66)) || (customResult === 'н' && computerResult > 0.66) || (customResult === 'б' && computerResult <= 0.33)) ? result = 1 : ((customResult === 'б' && (computerResult > 0.33 && computerResult <= 0.66)) || (customResult === 'к' && computerResult > 0.66) || (customResult === 'н' && computerResult <= 0.33)) ? result = 0 : result = 2;
    alert("Комп'ютер викинув: " + computerResult);
    result == 0 ? alert('Ви програли') : (result == 1 ? alert("Ви перемогли") : alert("Нічия"));
}

else if (taskNumber === "15") {
    let customResult = prompt("Введіть 'к', 'н' чи 'б'");
    let computerResult = Math.random();
    let result;
    ((customResult === 'к' && (computerResult > 0.33 && computerResult <= 0.66)) || (customResult === 'н' && computerResult > 0.66) || (customResult === 'б' && computerResult <= 0.33)) ? result = 1 : ((customResult === 'б' && (computerResult > 0.33 && computerResult <= 0.66)) || (customResult === 'к' && computerResult > 0.66) || (customResult === 'н' && computerResult <= 0.33)) ? result = 0 : result = 2;
    alert("Комп'ютер викинув: " + computerResult);
    result == 0 ? alert('Ви програли') : (result == 1 ? alert("Ви перемогли") : alert("Нічия"));
}
