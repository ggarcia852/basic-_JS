console.log('My name is George')

// Basics of Java Script

// JS is not read line by line like Python
// JS can be written all in one line


/*

    Multiline Comment in JS
    --Variable Declaration 
    Primitvie Types: Strings, Numbers, Booleans, Undefined 
    Objects: Objects - special types of obejects: Arrays, Funcions  // object= unordered collection or data
    Control Flow

 */   


var myName = 'george';  // strinig variable    // var is a global variable  
var age;   // undefinded variable, you do not assign 'undefined'

var age = 32; // numbers include floats

// when you set a value to a variable its called 'initialize'


// console.log is like print in python
console.log(myName)
console.log(age)
console.log("My name is ${myName}")   // prints as is in console
console.log(`My name is ${myName}`)   //T his is like f string in python use ` (ticks)
console.log(age)

console.log(typeof(age))   // get data type
console.log(typeof(myName))


var someBool = true;  // Boolean use lowercase t and f
var someOtherBool = false;
console.log(someBool, someOtherBool)


var someNull = null;  //you can define null
console.log(someNull)
console.log(typeof(someNull))  // type is object but this was a mistake in the language

//Arrays in JS

var myArray = [1, 2, 3, 4, 5, 6, 'george']  //can mix data types in array
console.log(myArray)
console.log(typeof(myArray))   // type is object

console.log(myArray[2])   // index an array, starts at 0
console.log(myArray.length)  // can use length attribute




// Object - like dictionary in Python

var person = {           //// unordered object(like dictionary) of key , values 
    first: 'George',
    last: 'Garcia',
    languages: ['Python', 'JavaScript']}

console.log(person);
console.log(typeof(person)); //=object

console.log(`My last name is ${person['last']}`)  // how to access value 

// Dot notation
console.log(`My first name is ${person.first}`) 

console.log(`Today we are learning ${person.languages[1]}`)   // access list array value in object



//  Other variable declartiobn are 'let' and 'const'

let myCity = 'Denver';   // let is used for block scopiing
let myBirthday;

var adult = true      // global scope

if(adult) {         // use {}  like you would use ; and indentation in Python
    var mySchool = 'CodingTemple';
    let color = 'Blue';        // can only access this within the block
    console.log(color)     // no error because within scope
}

console.log(mySchool);  //  can see this
//  console.log(color);    // this causes error because let is block level


// const, cannot be reassigned , block scope like let 

const birthday = true
let myAge = 32
console.log(myAge)

if(birthday) {
    myAge = age += 1;    // this is acceptable
    const favColor = 'Green'
   // birthday = false;  // error because const 
   console.log(favColor);   // this works because const favColor is block scope
}

console.log(myAge)
// console.log(favColor)  // cannot access because block scope




const cities = ['Denver', 'Chicago', 'NY']
console.log(cities)

cities[2] = 'SF'    // can change a value inside list of const 

console.log(cities)

// const cities = ['Miami', 'Austin']  // cannot reassign whole list



// JS Hoisting 

console.log(hoist);
var hoist = 'example';
// console.log(hoist);

console.clear()  //clear outs log

//Basic Math Operations

let sum = 5 + 5;

console.log(sum)

sum += 5;  // sum + 5
console.log(sum) 
sum++;  // sum = sum + 1
console.log(sum);

let diff = 10 - 5;
console.log(diff)
diff -= 5;
diff --;   // dif-1
console.log(diff)

let x = 10 * 5;
console.log(x)
x *= 5;  
console.log(x)


let myString = 'My age is '
let myStringAge = 45
let addstring = myString + myStringAge  // can concatenate dif data types
console.log(addstring)


//JS Comparrisons 

console.log(5 == 5);
console.log(5 == 5.0); 
console.log(5 == '5');   // == means coercive comparison 'lose comparison'. data type can change


console.log(5 === '5')  // does not allow type conversion, checks value & type
console.log()
console.log()


//  not equal with conversion !=
// not equal without conversion !==


// Control Flow

let newNum = 25

console.log('Begin')
if (newNum > 65){
    console.log('Senior')
} else if (newNum > 30) {
    console.log('adult')
} else console.log('child')

console.log('End')

// Ternary Operator -  (condition) ? value if true : value if false
let ageGroup = (newNum > 18) ? 'Senior' : 'Adult'
console.log(ageGroup)

let ageGroup2 = (newNum > 65) ? 'Senior' : (newNum > 30) ? 'Adult' : 'Child';

console.log(ageGroup2)


// And/Or  Operators  and= &&  or= ||

if (newNum > 18 && newNum < 40){
    console.log('Young Adult')
}

if (newNum > 18 || newNum < 40){
    console.log('Young Adult')
}

// JS Loops-  For loops, for....in, for.....of, while, do while


// FOR LOOP
//for (counter; expression/condition; incrementation/decrementation){ code to execute each loop}
console.log('Loop has started')

for (let i = 0; i <= 20; i+=5){
    console.log(i)
}
console.log("Loop Ended")


//FOR IN LOOP  - used for Object
// 
let teams = {
    mlb: 'Rockies',
    nba: 'Nuggets',
    nfl: 'Broncos'
}

for (let team in teams){
    console.log(team)  
}

for (let team in teams){
    console.log(team)  
    console.log(teams[team])
}

// FOR OF - used for any iterable

let planets = ['Mars', 'Jupiter', 'Earth']
for (let p of planets){
    console.log(p)
}

// While LOOPS
//while (condition){}

let num1 = 1

while (num1 < 25){
    console.log(num1)
    num1 +=5
}

//DO WHILE ... do first part at least once, 
//if while condtion is still met continue while loop
let k = 0
do {
    console.log(k)
    k++
} while (k > 10)




// JavaScript Functions

//Regular Named

function addNums(){
    let num1 = 4;
    let num2 = 5;

return num1 + num2
}

console.log(addNums())

//Regular with Parameters

function addNums2(num1, num2){
    return num1 + num2
}

console.log(addNums2(3,10))

//Variable Named Function  (same as above just different syntax)

let addNums3 = function(){
    let num1 = 10;
    let num2 = 20;

    return num1 + num2
}

let addNums4 = function(num1, num2){
    return num1 + num2 
}

// Arrow Functions (uses => )  (dont use function keyword)
//  variableName = () => {}   **return and {} optional

 let multiplyNums = (num1, num2) =>  num1 * num2

console.log(multiplyNums(3, 8))  //24


person= 'George'

let greetPerson = person => `Hello ${person}`

console.log(greetPerson('george'))

let addNums10 = () => 5 + 10

console.log(addNums10()) // dont forget ()  when calling

let findMaxNum = (arr) => {
    let max = 0
    for(let num of arr){
        if (num > max){
            max = num
        }
    }
    return max
}


console.clear()