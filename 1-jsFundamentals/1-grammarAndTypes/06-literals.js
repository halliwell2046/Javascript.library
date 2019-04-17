/*
LITERALS

1-grammarAndTypes
06-literals.js
*/

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekDays.toString());
console.log(weekDays[3]);

let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley',
}
console.log(soup.c);

// array and object literals can hold primative and complex types, (arrays, objects, functions)
let complexArrLiteral =[1, true, 'Academy', [1,2,3], {key: 'test'}, function(){return 'yes'}];
console.log(compleArrLiteral[5]);

let complexObjLiteral = {num: 1, boolean: true, string: 'Academy', arr: [1,2,3,], obj: {key: 'test'}, funct: function(){return 'yes'}};
console.log(complexObjLiteral.func);