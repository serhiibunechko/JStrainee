let FirstValue = 'SomethingValue';      // let == var
console.log(FirstValue);

const radioWave = 108.5;                // if you don't want change variable you must use CONST
console.log(radioWave);


// js have a dynamic data types as:

let name = 'serh';                      // str
let age = 50;                           // numbers
let Yes = true;                         // boolean
let lastName = undefined;               // undefined
let userColor = null;                   // null --- it's empty value

let person = {
    Name: 'Other',
    Age: '23',
}
console.log(person);
person.Age = 34;                        // we change the value of ages throw point '.'

console.log(person.Name);               // out value of the first elem of variable
person['Name'] = 'Another';             // change them
console.log(person['Name']);            // we change the value of ages throw []

let selectedColors = ['red', 'blue'];   // creating simple array
selectedColors[2] = 'green';            // added new elem by index

console.log(selectedColors.length);     // show how many elems in array


// creatin simple function

function soMe() {                       // body of function mark by {}
    console.log('hello');
}
soMe();                                 // call a function

function soYou(name) {                  // add a parameter to function
    console.log('Hello ' + name);       // concatenation
}
soYou('Man');                           // call with argument as value of this function

function square(number) {               // getting value of square
    return number * number;             // used 'return'
}
square(2);
