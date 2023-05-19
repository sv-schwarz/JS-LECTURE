// 1

function food(hamburgers, fries) {
  if(hamburgers >= 4 && fries >= 1){
    console.log('Ми поїли')
  } else {
    console.log('Ми йдемо в інше кафе')
  }
} 
food(5, 2)

// 2

function value(price)  {  
  if (price >= 1000 && price <= 1900){
    console.log (true)
  } else {
    console.log(false)
  }
}
value(1900)

 // 3

function value1(price1)  { 
if (price1 < 1000 || price1 > 1900){
    console.log ('positive result')
 } else console.log('the price is incorrect')
}
value1(100)

function value2(price2)  { 
if (!(price2 >= 1000 && price2 <= 1900)){
    console.log ('positive result')
 } else console.log('the price is incorrect')
}
value2(1900)

 // 4

 function getSeasonName(season){
    if (season === 1){
      return 'Зима';
    } else if (season === 2){
      return 'Весна';
    } else if (season === 3){
      return 'Літо';
    } else if (season === 4){
      return 'Осінь';
    } else {
      return 'Такої пори року не існує'; 
  }
}
console.log(getSeasonName(20));

 // 5 

 function defineAverageValue(a, b, c){
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
} 
defineAverageValue(10, 20, 30)

 // 6

 function dayOfWeek(day) {
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
 }
 dayOfWeek(4)


// 7

function calculateExpression (action, a1, b1){
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
}
calculateExpression('+',1,2)

// 8

function removeVowels(string) {
  return string.replace(/[aeiouy]/gi, '')
}
console.log(removeVowels('Regular Expression'));

// 9

function convertToKilometers(meters) {
  let kilometers = meters / 1000;
  let ending = "";

  if (meters %10 === 1 && meters % 100 !== 11) {
    ending = "метр"; //перевіряє чи число закінчується на 1, але не на 11
  } else if (meters % 10 >= 2 && meters % 10 <= 4 && (meters % 100 < 10 || meters % 100 > 20) && Number.isInteger(meters)) {
    ending = "метри"; //
  } else if (Number.isInteger(meters) === false) {
    ending = "метра";
  } else {
    ending = "метрів"
  }

  if (kilometers %10 === 1) {
    return meters + " " + ending + " це " + kilometers + " кілометр";
  } else if (kilometers % 10 >= 2 && kilometers % 10 <= 4 && (kilometers % 100 < 10 || kilometers % 100 > 20) && Number.isInteger(kilometers)) {
    return meters + " " + ending + " це " + kilometers + " кілометри";
  } else if (Number.isInteger(kilometers) === false) {
    return meters + " " + ending + " це " + kilometers + " кілометра";
  } else {
    return meters + " " + ending + " це " + kilometers + " кілометрів";
  }
}

console.log(convertToKilometers(2343));