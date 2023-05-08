let a = 5;
let b = 3;
let c;

c= a+ b;

console.log(c)

// some code


a = 8;
b = 12;

c = a + b;
console.log(c);

function sum (a, b){ // тут вказані параметри
    let c= a + b;
    // return c; // console.log не буде працювати після return
    console.log(c) // тіло функції (все, що у фігурних дужках)
}

// let sumVar = sum(8, 12); // виклик функції, передані аргументи у функцію

console.log("sumVar = " + sumVar);

// функції можуть бути: іменовані, анонімні, присвоєні змінній, аргументом при виклику іншої функції, властивістю якогось об'єкту

//  function (a, b){ //  функцію не можна викликати, тому що немає імені
//     let c= a + b;
//     console.log(c) 
// }

const anonimFunc = function (a, b){ 
    let c= a + b;
    console.log(c) 
}

anonimFunc(1, 2);

const arrowFunc = (a, b) => { 
    let c = a + b;
    console.log(c);
}

arrowFunc(1,2);

// створення більш універсальної функції

const funcWithDefaultParam = (a, b = 2) => {
    return (a * b)
}

console.log(funcWithDefaultParam(3, 5))
console.log(funcWithDefaultParam(3))


const myRequestWithDate = (field1, timestamp = Date()) => {

    let requestBody = {
        someData: 1,
        someData2: 2,
        timestamp: ''
    }

    requestBody.someData = field1;
    requestBody.timestamp = timestamp;

    return requestBody;
}

console.log(myRequestWithDate('qweqwe', '83729473829467283'))
console.log(myRequestWithDate('qweqwe'))


const playWithReturnFunc = () => {
    for(let i = 0; i < 8; i++){
        console.log(i);
        if(i ===6){
            return 'qweqwe'
        }
    }
}

console.log(playWithReturnFunc());


function first(){
    setTimeout(function(){
        console.log('First')
    }, 5000)
}

function second(){
    console.log('Second')
}

first();
second();

function someFunctionWithCallback(param1, callbackFunction){
    console.log(`Here is my parameter: ${param1}`);
    callbackFunction();
}

someFunctionWithCallback('paranpaasd', function(){
    console.log('Text from callback')
})


function it (testDescription, testActions){
    console.log(`Here is my test description: ${testDescription}`);
    testActions();
}

it('Auth test', ()=> {
    console.log('Some test actions...')
})
