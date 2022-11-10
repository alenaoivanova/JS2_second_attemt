// let age = "1";
// const gender = ("Муж");

// age = +age;

// if (!isNaN(age)) {
//     if (age > 18) {
//         console.log("Вам больше 18");
//     } else if (age < 18) {
//         console.log("Вам меньше 18");
//     } else if (age === 18) {
//             console.log("Happy B-day!");
//     } else {
//         console.log("Укажите ваш возраст");
//     }
// } else {
//     console.log("Введите корректные данные"); 

// }



// if (gender.toLocaleLowerCase() === "муж") {
//     console.log ("Вам налево");
// } 


// if (gender === "female") {
//     console.log ("Вам направо");
// }


// const isAdmin = false;

// console.log (`Добро пожаловать: ${isAdmin ? "Администратор" : "Пользователь"}`);

const typeUser = "user"; // user, guest

switch (typeUser) {
    case "admin":
        console.log("Вы администратор");
        break;
    case "user":
        console.log("Вы пользователь");
        break;
    
    case "guest":
        console.log("Вы гость");
        break;

    default:
        console.log("Неизвестный тип пользователя");
         break;
}