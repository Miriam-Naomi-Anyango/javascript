console.log('Hi');
console.log('My name is Miriam');
let firstName = 'Miriam';
console.log(firstName);
firstName = 'Naomi';
console.log(firstName);

//When declaring variables consider the following rules
//A variable cannot be a reserved keyword
//It should be meaningful
//Cannot begin with a number
//A variable cannot contain a space or a hyphen.
//Variables are case sensitive
//if you want to initialize variable with more than two names you can use comas

//For example
let secondName = 'Naomi', thirdName = 'Anyango';
console.log(thirdName);
//In order therefore to have a variable if it has many names
//  use a camel case while combining the names

//If you never want the value of a variable to change, declare
//it using the const keyword (referring to aconstant) and not the let
//keyword, otherwise it will change

//for example if you write

let dogName = 'Bosco';
dogName = 'Skipy';

console.log(dogName);

//This will give you Skipy and not Bosco.
//Therefore if you don't want it to change, you can consider doing

const catName = 'Chilly';
//catName = 'Kibely';

console.log(catName);
//This will throw an error

//The value of a variable can change whereas the value of a constant can never change
