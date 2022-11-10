const age = 1;
const gender = ("Муж");

if (age > 18) {
    console.log ("Вам больше 18");
} else {
    console.log("Вам меньше 18 лет");

if (gender.toLocaleLowerCase() === "муж") {
    console.log ("Вам налево");
} 
}

if (gender === "female") {
    console.log ("Вам направо");
}