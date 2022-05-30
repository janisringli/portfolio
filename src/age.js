let currentDate = new Date();
let birthDate = new Date("2004/07/03");
let difference = currentDate - birthDate;
let age = Math.floor(difference / 31557600000);
console.log(age);
document.getElementById("age").innerHTML = age;
