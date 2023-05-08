// створення змінної/константи

// let number = 5; 
const userScore = 1000; //сховище інформації, яку не можна змінювати, константа

let number1; //назва змінної не може починатись на цифру чи спец символи (крім $), 
//напр let 1number чи let #number але може містити номер чи спец символи всередині чии кінці, напр num1ber

// camelCase
// snake_case 
// UPPER_SNAKE_CASE
// kebab-case
// PascalCase

let nUmber = 123; // реєстр сенсітів, назва змінної відрізняється, якщо реєстр відмінний

// зміна змінної

let number = 5; 
console.log(number)
// не може бути двох змінних з однаковою назвою

number = 12;
console.log(number)

const userScore1 = 1000;
console.log(userScore1)

userScore1 = 12;
console.log(userScore1)

const obj = {
    age: 20
}
console.log(obj)

//obj = 40;
//console.log(obj)

obj.age = 30
console.log(obj)

var firstName = 'Dima' //працює як let, але працює в межах файлу, а не коду
console.log(firstName)
//використовувати змінну можна тільки після того як вона була обявлена, але не var, var will be undefined 

{
    let result = 50;
}
console.log(result);
// різна область видимості в змінних (var/let)
{
    var result1 = 50;
}
console.log(result1);

 //ставити ; в кінці блоку
 // this is ok
a = 10
console.log(a)
//but this is not
alert();
[].push('a')

// код має бути лаконічним і зрозумілим
// bad example
let a = 3000;
let b = 2000;

// 100 lines of code

console.log("Ширина авто: " + a + ", довжина: " + b)

//good exmaple
let vehicleBodyWidth = 3000;
let vehicleBodyLength = 2000;

// 100 lines of code

console.log("Ширина авто: " + vehicleBodyWidth + ", довжина: " + vehicleBodyLength);

//good exmaple 2 
let carBodyWidth = 3000;
let machineBodyLength = 2000;

/// 100 lines of code

console.log("Ширина авто: " + carBodyWidth + ", довжина: " + machineBodyLength);





