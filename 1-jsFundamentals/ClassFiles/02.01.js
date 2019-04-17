for (let i = 0; i < 10; i++){
console.log(i);
}

//for-in example 1
let parentThing = [1, 'Tracy', false, {key: 'playing'}];
for (let thing in parentThing){ //enumerable collections
console.log(thing); //this output shows the position numbers of the elements of the array
}

//for-in example 2
let parentThing = [1, 'Tracy', false, {key: 'playing'}];
for (let thing in parentThing){ //enumerable collections
console.log(parentThing[thing]); //this output shows the elements in the array
}

//for-in example 3
let obj = {keyA: true, keyB: 'Alan', keyC: [1,2,3]};
for (let placeholder in obj){
    console.log(obj[placeholder]);
    console.log(obj['keyA']);
}

let obj2 = {first: '1150 Academy', second: 1150, third: false}
for (let placeholder in obj2){
    console.log(obj2[placeholder]);
}

/*Challenge 1:
Write a for loop that loops 10 times.  Every time the loop is run, it calls a function.  The function should
console.log a random number between 5 and 7.  Once you've completed the challenge with a for-loop, see if
you can make this work with a for-of loop.  If you can solve that problem, see if you can solve this with
a for-each loop.  Note that for-of and for-each loops require slightly different conditions to work than
a for loop requires.
*/

let superNatural = ['Dean', 'Sam', 'Bobby', 'Mary', 'Castiel', 'Jack', 'John', 'Ruby', 'Chuck', 'Gabriel'];
for (let item in superNatural){
    console.log(superNatural[item]);
}

for (let i = 0; i < 10; i++){
    randNumber();
}

function randNumber(){
    console.log(Math.random());
}

console.log(randNumber());

//mini-Challenge
//make a function that takes 2 parameters: favFood & favDessert.  your function should return a sentence with those two params

function foodSentence(favFood, favDessert){
    return `I would love to be eating ${favFood} with a ${favDessert} dessert.`;
}

console.log(foodSentence('Mac and Cheese', 'Tiramisu'));

//demonstrate
function first(inputFunction){
    inputFunction();
}

function second(){
    console.log('functions are amazing, but also hard!');
}

first(second);

/*Challenge 2:
Let's compose functions!  Your first function should take a function as input and return that function
with a function call.  Your second function should take a string as input and return that string with 
extra stuff added to that string.  Console.log the results of your function calls.  Additional information
is below to help clarify what you're doing (the below is just an example):
first function: input-secondFunc output-secondFunc('coding is great!')
second function: input-'coding is great!' output-'coding is great!  pie is, too!'
*/

function first(inputSuper){
    return inputSuper('Supernatural is awesome! ');
}


function secondFunc(inputNatural){
    return inputNatural + 'But, coming to an end.';
}

console.log(first(secondFunc));

//Challenge 3:
//make 2 functions. the first function takes a function as input, and calls that input function with a number value.  the second function takes a number as input, and concatenates
//that number with a string. the second function should return the concatenation. the first function should retrun the call.

function func1(input) {  //'input' refers to 'func2' from line 100
    return input(Math.floor(Math.random()*10)); //input(....) is the same as 'return num + ': i am a number
}
function func2(num){  //'func2' only runs because of 'func1'
    return num + ': i am a number';
}

console.log(func1(func2));