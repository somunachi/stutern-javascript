// Num 1
// Mutating methods are methods that change the object after it has been used. Examples include: remove, insert, append, sort, reverse. 
// WHILE
// Non-mutating methods do not change the object after the method has been used. Examples include: count, index, filter, find, map.


//Num 2
const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
languages.push('Kotlin');
languages.splice(3, 0, 'Java');
languages.shift(0);
languages.unshift('Scala', 'Swift');
languages.splice(3, 1, 'Go', 'Rust');


// Num 3
['apple', 'mango', 'orange'];

// Num 4
let array = [10, 20, 50, 5];
function largestNum(array){
   return Math.max.apply(null, array);
}
console.log(largestNum(array));


// Num 5
let num = [2, 4, 6, 8, 10];
function valTimesIndex(num) {
    return num.map((val, index) => val * index);
}

let multipliedResult = valTimesIndex(num);

console.log(multipliedResult);