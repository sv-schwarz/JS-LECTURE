// 1

let hamburgers = 4; 
let fries = 1; 

if(hamburgers >= 4 && fries >= 1){
    console.log('Ми поїли')
} else {
    console.log('Ми йдемо в інше кафе')
};

// 2

let price = 1000;

if (price >= 1000 && price <= 1900){
    console.log ('true')
 };

 // 3

let price1 = 800;

if (price1 < 1000 || price1 > 1900){
    console.log ('true')
 };

 let price2 = 1000;

if (!(price2 >= 1000 && price2 <= 1900)){
    console.log ('true')
 };

 // 4

 let season = 1;

 if (season === 1){
    console.log ('Зима')
 } else if (season === 2){
    console.log ('Весна')
 } else if (season === 3){
    console.log ('Літо')
 } else if (season === 4){
    console.log ('Осінь')
 };

 // 5 

 let a = 50;
 let b = 20;
 let c = 30;
 
 if (a < b || a > c) {
   if ((a > b && a < c) || (a < b && a > c)) {
     console.log(a);
   }
   if ((b > a && b < c) || (b < a && b > c)) {
     console.log(b);
   }
   if ((c > a && c < b) || (c < a && c > b)) {
     console.log(c);
   }
 }

 // 6

 let day = 0;

switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
         console.log('Friday');
         break;
    case 6:
         console.log('Saturday');
         break; 
    case 7:
         console.log('Sunday');
         break;          
    default:
        console.log('Not your day');
        break;
}

// 7

const action = "+";
const a1 = 10;
const b1 = 5;

switch(action){
    case "+":
        console.log(a1+b1);
        break;
    case "-":
        console.log(a1-b1);
        break;
    case "*":
        console.log(a1*b1);
        break;    
    case "/":
        console.log(a1/b1);
        break;
    default:
        console.log('Цей вираз мені незнайомий')
        break;
}

// 8

const someString = 'Regular Expression';
const noVowels = someString.replace(/[aeiou]/gi, '');

console.log(noVowels);

// 9

const m = 6000;

if (m >= 1000) {
   console.log(m, "метрів це", m/1000, "кілометрів")
} else {
   console.log(m, "метрів це", m/1000, "кілометри")
}

const distanceInMeters = 120000;
const distanceInKilometers = distanceInMeters / 1000;
const kilometersDistanceToString = distanceInKilometers.toString();
const lastDigitOfKilometers = Number(kilometersDistanceToString.slice(-1));
const kilometersValueWithDelimiters = kilometersDistanceToString.includes('.') || kilometersDistanceToString.includes(',');

let kilometersString;

if (lastDigitOfKilometers === 1 && !kilometersValueWithDelimiters) {
  kilometersString = 'кілометр';
} else if ([2, 3, 4].includes(lastDigitOfKilometers) && !kilometersValueWithDelimiters) {
  kilometersString = 'кілометри';
} else if ([5, 6, 7, 8, 9].includes(lastDigitOfKilometers) && !kilometersValueWithDelimiters) {
  kilometersString = 'кілометрів';
} else {
  kilometersString = 'кілометра';
}

console.log(`${distanceInMeters} метрів це: ${distanceInKilometers} ${kilometersString}`);
