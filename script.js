const accountList = [
    { login: "Akhmedov_A",    password: "iuca123",  name: "Аброр" },
    { login: "Salamov_Sa",    password: "acui321",  name: "Самир" },
    { login: "Akbaraliev_I",  password: "caiu213",  name: "Ибрахим" },
    { login: "Polosin_B",     password: "uaci231",  name: "Богдан" },
    { login: "Seledka_P",     password: "123iuca",  name: "Форель" },
];

const authForm = document.getElementById("authForm");


    const enteredLogin = document.getElementById("username").value.trim();
    const enteredPass  = document.getElementById("pass").value;

    const foundUser = accountList.find(function (item) {
        return item.login === enteredLogin && item.password === enteredPass;
    });

    if (foundUser) {
        statusMsg.className = "status-msg ok";
        alert("Добро пожаловать, " + foundUser.name + "! Авторизация прошла успешно");
    } else {
        statusMsg.className = "status-msg fail";
        alert("Ошибка, неверный логин или пароль. Попробуйте ещё раз");
    }
});
function sumAll(...values) {
    return values.reduce(function (total, current) {
        return total + current;
    }, 0);
}
console.log("sumAll(2, 5, 6, 7) =", sumAll(2, 5, 6, 7));       
console.log("sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) =", sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); 
