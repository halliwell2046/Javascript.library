//arrays
let newArr = ['Brie', 17, true, {ketchup: true, pickles: false, meat: true}];
//arrays have numbered elements, the numbers are index-es and the values are the elements
console.log(newArr[3]);
//console.log(newArr[3]);
//newArr[3].pickles = true;
//console.log(newArr[3]);
//newArr [3] = 'Zach is one bad dude with styling';
//console.log(newArr[3]);

//Conditionals
let isRainy = false;
let isWarm = true;

if (isRainy == true){
    console.log('bring your umbrella');

} else {
    console.log('leave the umbrella at home');
}

if (isWarm) {
    console.log('wear shorts');
} else {
    console.log('wear a parka');
}

let gpas = [1.9, 3.5, 4.0, 2.8];
let singleGpa = gpas[1];

if (singleGpa == 4.0){
    console.log('wow!  That is amazing');
} else if (singleGpa >= 3.0){
    console.log('that is a strong gpa');
} else {
    console.log('...eh, you might wanna hit the books');
}


/*
Challenge 1:
Write an array with at least 5 different numbers stored as values in the array.  Use if-elseif statements to
change one value of the array based upon the index number passed to the conditional.  Use the =, +=, /=, 
%=, and **= operators to make the change of the array value (only use one operator per conditional 
statement).
*/

/*let deals = [0, 8, 12, 16, 20];
let indDeals = deals[2];

let deals [3] = 18;*/

let Oreo = [1, 2, 3, 4, 5];
let indexNum = 3

if (indexNum == 0) {
    Oreo [0] **= 5;
} else if (indexNum == 1) {
    Oreo [1] **= 5;
} else if (indexNum == 02) {
    Oreo [2] **= 5;
} else if (indexNum ==3) {
    Oreo [3] **= 5;
} else if (indexNum ==4) {
    Oreo [4] **= 5;
}
console.log(Oreo);

/*
Challenge 2:
Write an object that stores information about your favorite movie.  nameOfMovie, runTime, characters, and
genre should be keys directly inside the object.  Inside of characters should be no more than 2 character 
objects, each of which stores name, age, and items.  Inside of items should be no more than 2 item
objects, each of which stores name and color.

Use console.log statements to show that you can print out the nameOfMovie, the characters, the age of a
character, and colors for the objects the characters have.
*/

let theWoz ={
    nameOfMovie: 'The Wizard of Oz', 
runTime: '1 hour 42 minutes',
characters: {
    charOne: {
        name: 'Dorothy',
        age: 12,
    },
    charTwo: {
        name: 'Scarecrow',
        age: 350,
    }
},
genre: 'fantasy'
}

console.log (theWoz.characters);


let lotrObj = {
    nameOfMovie: 'Lord of the Rings: The Fellowship of the Ring',
    runTime: 'long',
    characters: {
        charOne: {
            name: 'Legolas',
            age: 2931,
        },
        charTwo: {
            name: 'Gandalf',
            age: 2019,
        }
    },
    genre: 'Action & Adventure'
}
console.log (lotrObj.characters);


/*
Challenge 3:
Try to predict the behavior of each variable separatey (first, second, and third).
//1st example:
console.log(first); //undefined
console.log(second); //undefined
console.log(third); //undefined
var first = 1;
let second = 2;
const third = 3;
//actual: the 'first' variable is hoisted, prints undefined. the 'let' and  'const' variables break because they have no value.


//2nd example:
hoistTest();
var first = 5;
function hoistTest() {
  console.log(first);
} //undefined
/*actual:
function hoistTest(){
    console.log(first);
}
var first;
hoistTest();
first = 5;
*/

/*
//3rd example:
function hoistTest(){
  console.log(first, second, third);
  if (true){
    var first = 1;
    let second = 2;
    const third = 3;
  }
  console.log(first, second, third);
}
hoistTest();
*/