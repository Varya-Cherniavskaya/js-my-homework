// 1. За допомогою prompt дізнайтесь число, введене користувачем. 
// За допомогою if перевірте, чи число коректно перетворено з рядка. 
// У разі помилки виведіть повідомлення. Виведіть парне число чи ні, використовуючи if.

// let customerNumber = prompt ("Введіть число")
// if (isNaN(customerNumber)){
//     alert ("Введіть будь-яке число цифрами")
// }else if (customerNumber % 2 == 0){
//     alert ("Число парне")
// }else {
//     alert ("Число не парне")
// }



// 2. Запитайте у користувача текст і перевірте його на наявність некоректного слова 
// або кількох некоректних слів. Використовуйте метод indexOf (або includes) рядки:
// "123".indexOf("23") //повертає 1 - позицію підрядка "23" до "123"
// "abcdef".indexOf("ef") // 4
// "12345".indexOf("some bad word") // -1 - не знайдено

// let customText = prompt ("Введіть якийсь текст тут: ")
// alert (customText.indexOf("fack"))



// 3. Напишіть код, який запитує ті чи інші питання з відповіддю "так"/"ні" 
// за допомогою confirm, і зберігає відповіді в змінних.

// let message = confirm ("Підеш на вихідних у бар?") ? "На ранок буде боліти голова" : "Не будь таким нудним"
// alert (message)



// 4. Розширте попереднє завдання умовами за отриманими змінними умовами (if-else). Наприклад, якщо ви питаєте 
// стать користувача з допомогою confirm, то за умовою зробіть alert("Ви жінка") та alert("Ви чоловік")
// let choice = confirm ("Ваша стать? \"Ок\"-жіноча; \"Відміна\"-чоловіча")
// if (choice){
//     alert ("Ви жінка")
// }else {
//     alert ("Ви чоловік")
// }



// 5.Зробіть переклад переклад з нашої системи розмірів до американської чи будь-якої на вибір. 
// Використовуйте prompt, умови порівняння та alert.

// let waist = prompt ("Ваш обсяг талії (у см)")
// if (waist >= 66 && waist <= 69){
//     alert ("Ваш розмір у міжнарожній системі виміру XS");
// }else if (waist >= 70 && waist <= 74){
//     alert ("Ваш розмір у міжнарожній системі виміру S");
// }else if (waist >= 75 && waist <= 78){
//     alert ("Ваш розмір у міжнарожній системі виміру M");
// }else if (waist >= 79 && waist <= 83){
//     alert ("Ваш розмір у міжнарожній системі виміру L");
// }else if (waist >= 84 && waist <= 89){
//     alert ("Ваш розмір у міжнарожній системі виміру XL");
// }else if (waist >= 90 && waist <= 94){
//     alert ("Ваш розмір у міжнарожній системі виміру XXL");
// }else if (waist >= 95 && waist <= 97){
//     alert ("Ваш розмір у міжнарожній системі виміру XXXL");
// }



// 6. Запитайте у користувача стать (confirm). 
// Виведіть за допомогою alert "Ви чоловік" або "Ви жінка". 
// Використовуйте тернарний оператор.

// let sex = confirm("Ваша стать: ok-чоловік, відміна-жінка") ? alert("Ви чоловік") : alert("Ви жінка")



// 7. Для завдання Number: age використовуючи АБО || вивести повідомлення 
// про помилку (alert) якщо користувач не введе вік або натисне скасування 
// (тобто prompt видасть порожній рядок або null, що інтерпретується 
// як false).

// let age = prompt('Скільки вам років?') || alert ("Помилка!")



// 8. За допомогою цього ж трюку (використання АБО для запуску альтернативи) 
// зробіть примхливого робота, який у confirm запитує "шопінг?", 
// а у разі відмови - виводити alert "ти - бяка".

// let question = confirm ("шопінг?") || alert ("ти - бяка")



// 9.Зробити те саме за допомогою if.

// let question = confirm ("шопінг?")
// if (!question){
//     alert ("ти - бяка")
// }



// 10. Попросіть користувача ввести ПІБ в три різні змінні. 
// Використовуючи АБО || додайте рядки за промовчанням, 
// які будуть зберігатися у внутрішніх змінних якщо користувач 
// ввів порожній рядок або натиснув "Скасувати". Наприклад, 
// якщо ви на кроці введення прізвища натиснете Escape, 
// прізвище буде "Іванов"

// let firstName = prompt('Твоє ім\'я? чи будеш Іван') || 'Іван'
// let secondName = prompt('Твоє по батькові? чи будеш Іванович') || 'Іванович'
// let thirdName = prompt('Твоє прізвище? чи будеш Іванов') || 'Іванов'
// alert(firstName + " " + secondName + " " + thirdName)



// 11. Зробіть те саме за допомогою if та else
// let firstName = prompt('Твоє ім\'я? чи будеш Іван')
// if (!firstName){
//     firstName = 'Іван'
// }
// let secondName = prompt('Твоє по батькові? чи будеш Іванович')
// if (!secondName){
//     secondName = 'Іванович'
// }
// let thirdName = prompt('Твоє прізвище? чи будеш Іванов')
// if (!thirdName){
//     thirdName = 'Іванов'
// }
// alert(firstName + " " + secondName + " " + thirdName)



// 12. Напишіть код, який запитує логін, перевіряє його на вірність, 
// якщо логін вірний, просить ввести пароль і перевіряє його. 
// В разі розбіжності логіну чи пароля виводити alert з текстом помилки. 
// У разі успішного логіну – alert з привітанням. 
// Правильні логін: admin та пароль: qwerty. Використовуйте 
// вкладені if та else.

// const login = "admin"
// const password = "qwerty"
// let userlogin = prompt ("Введіть логін")
// if (login === userlogin){
//     let userpassword = prompt ("Введіть пароль")
//     if (password === userpassword){
//         alert("Вітаю")
//     }else {
//         alert ("Введіть вірне значення паролю")
//     }
// }else if(login !== userlogin){
//     alert ("Введіть вірне значення логіну")
// }



// 13. -Попросіть користувача ввести валюту (наприклад, usd, eur, інші 
// валюти додати до смаку) за допомогою prompt.
// - Також поцікавтеся купити чи продати він бажає (використовуйте confirm).
// - За допомогою декількох if та тернарного оператора всередині кожного 
// з if задайте змінну rate, визначальну курс конкретної валюти на купівлю 
// чи продаж. Зверніть увагу на місце оголошення змінної rate - вона 
// має бути доступна в коді після всіх цих if.
// - Попросіть користувача ввести суму на обмін
// - Порахуйте та виведіть результат шляхом множення або поділу на rate
// - Дайте можливість користувачеві вводити назви валют у будь-якому 
// регістрі (UsD, eUR). Для цього в if використовуйте toUpperCase (або toLowerCase)

// let usdToBuy = 35
// let eurToBuy = 40
// let usdToSale = 37
// let eurToSale = 42
// let summary
// let currency = prompt ('Введіть валюту (usd / eur)').toLowerCase()
// if (currency === "usd" || currency === "eur"){
// let buyOrSale = confirm ('Купити або продати?')
// let rate = prompt ('Введіть суму на обмін:')
// if (buyOrSale){
//     summary = (currency === "usd" ? (usdToSale * rate) : (eurToSale * rate))
// }
// else{
//     summary = (currency === "usd" ? (rate * usdToBuy) : (rate * eurToBuy))
// }
// alert ("Результат: " + summary)
// }
// else {
//     alert ('Невірна валюта')
// }



// 14. Зробіть гру "камінь-ножиці-папір". Користувач вводить свій 
// варіант через prompt, програма генерує свій варіант через 
// Math.random() і виводить через alert. Наступний alert виводить 
// ім'я переможця чи "нічия"
// let customResult = prompt ("Введіть 'к', 'н' чи 'б'")
// let computerResult = Math.random ()
// alert (computerResult)
// if (customResult === "к" || customResult === "н" || customResult === "б"){
// if (computerResult >= 0 && computerResult <= 0.33){
//     alert ("Комп\'ютер згенерував: камінь")
//     if (customResult === 'к') alert ('нічия')
//     else if (customResult === "н") alert ('ви програли')
//     else if (customResult === "б") alert ("ви перемогли")
// }
// if (computerResult > 0.33 && computerResult <= 0.66){
//     alert ("Комп\'ютер згенерував: ножиці")
//     if (customResult === 'н') alert ('нічия')
//     else if (customResult === "б") alert ('ви програли')
//     else if (customResult === "к") alert ("ви перемогли")
// }
// if (computerResult > 0.66 && computerResult <= 1){
//     alert ("Комп\'ютер згенерував: бумагу")
//     if (customResult === 'б') alert ('нічия')
//     else if (customResult === "к") alert ('ви програли')
//     else if (customResult === "н") alert ("ви перемогли")
// }
// }else{
//     alert('ввели невірне значення')
// }



// 15. Зробіть гру "камінь-ножиці-папір", як описано вище, 
// користуючись логічними операціями (&&, ||, !), не використовуючи 
// if. Завдання має бути вирішене одним виразом (окрiм декларування 
// змiнних - let та const не є виразами)
// let customResult = prompt ("Введіть 'к', 'н' чи 'б'")
// let computerResult = Math.random()
// let result
// ((customResult === 'к' && (computerResult > 0.33 && computerResult <= 0.66)) || (customResult === 'н' && computerResult > 0.66) || (customResult === 'б' && computerResult <= 0.33)) ? result = 1 : ((customResult === 'б' && (computerResult > 0.33 && computerResult <= 0.66)) || (customResult === 'к' && computerResult > 0.66) || (customResult === 'н' && computerResult <= 0.33)) ? result = 0 : result = 2
// alert("Комп'ютер викинув: " + computerResult)
// result == 0 ? alert('Ви програли') : (result == 1 ? alert("Ви перемогли") : alert("Нічия"))
