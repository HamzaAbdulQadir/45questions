"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let fruit = "apple";
console.log(fruit == "apple");
console.log(fruit != "apple");
let fathername = "ABDUL QADIR";
console.log(fathername.toLocaleLowerCase() == "abdul qadir");
console.log(fathername.toLocaleLowerCase() != 'abdul qadir');
let nine = 9;
console.log(nine == 9);
console.log(nine != 9);
console.log(nine > 7);
console.log(nine < 7);
console.log(nine >= 4);
console.log(nine <= 4);
let six = 6;
console.log(six == 6 && six > 7);
console.log(six == 6 && six > 4);
console.log(six == 6 || six > 7);
console.log(six == 5 || six > 7);
let fruitname = ["banana", "orange", "pineapple"];
console.log(fruitname.includes("apple"));
console.log(fruitname.includes("orange"));
