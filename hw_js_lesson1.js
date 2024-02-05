// task-1
// let stepsPerDay = 7000; //сутність змінної
// let stepsPerJenuary = 18000; //інший коментар, що пояснює змінну

// let stepsPerMounth = stepsPerDay*30; //сутність змінної і формули
// let stepsPerDayOfJenuary = stepsPerJenuary/30; //

// let stepsPerTwoMounth = stepsPerJenuary + stepsPerMounth; //сутність результату і змінної
// console.log (stepsPerTwoMounth)


// task-2
document.getElementById("credentials").onclick = function() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    if (login == "admin" && password == "qwerty")
        alert ("Welcome");
    else alert ("Wrong login / password");
}
