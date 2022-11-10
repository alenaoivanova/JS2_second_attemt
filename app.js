let age = "";
const gender = ("Муж");

age = +age;

if (!isNaN(age)) {
    if (age > 18) {
        console.log("Вам больше 18");
    } else if (age < 18) {
        console.log("Вам меньше 18");
    } else if (age === 18) {
            console.log("Happy B-day!");
    } else {
        console.log("Укажите ваш возраст");
    }
} else {
    console.log("Введите корректные данные"); 

}



if (gender.toLocaleLowerCase() === "муж") {
    console.log ("Вам налево");
} 


if (gender === "female") {
    console.log ("Вам направо");
}