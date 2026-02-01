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
//If therefore you know you will reassign a variable, use let if not use const

//PRIMITIVE TYPES
//In javascript there are two types of values you can assign to a variable
//Primitive types/ Value types & Reference types

//Primitive types
//Includes; (Strings, Numbers, Boolean, Undefined, Null)

let babyName = 'Odelia'; //String Literal
let age = 46;
let isApproved = true;
let myCountry = undefined;
let myCar = null;


//Null is used in cases where you want to clear the value of a variable

typeof babyName

//JavaScript is  a dynamic Language not a Static one. 
// In Javascript typeof number just remains a number whether floating or whole number

//REFERENCE TYPE CATEGORY
//It includes; Objects, Array and functions

//Objects
//When we deal with a multiple related variables, we can put
//the variables in an object

let person = {
    personName: 'Moha',
    age: 30,
    town: 'Nairobi'

}
console.log(person.personName);

person.personName = 'Abdirizak'

console.log(person.personName);

//person[age] = 45;

console.log(person);

person['personName'] = 'Njenga';

console.log(person.personName);

person['age'] = '45';
console.log(person.age);

console.log(person);

//Arrays
//An array is designated by square brackets, and indicates an empty array.

let selectedColors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
];
console.log(selectedColors);
selectedColors[7] = 'tangarine';

console.log(selectedColors);

console.log(selectedColors[2]);

//In javascript you can store different datatypes in an array, not only strings

selectedColors[8] = 8;
console.log(selectedColors);

//The objects of an array as well as the size of an array are dynamic unlike in 
//in other programming language.

//In javascript, an array is an object

console.log(selectedColors.length);

//An array is a datastructure that is used to store a list of items.

