/*
FOR OF LOOPS
*/

//of requires that your 'thing' you're looping through be interable-- that means it needs to be numbered

let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1};

for (item of student){
    console.log(item);
}

let carArray = ['tabby', 'british shorhair', 'burmese', 'maine coon', 'rag doll'];

for (cat of carArray){
    console.log(cat, 'says meow');
}