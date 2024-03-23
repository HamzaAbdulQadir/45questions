"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_Magicians(magicians) {
    // Prints the name of each magician in the array
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_Great(magicians) {
    // Creates a new array with 'the Great' added to each magician's name
    const great_Magicians = [];
    for (const magician of magicians) {
        great_Magicians.push("the Great " + magician);
    }
    return great_Magicians;
}
// Array of magician names
const magician_Names = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Calling makeGreat() with a copy of the magician names array
const great_Magicians = make_Great([...magician_Names]); // Using spread operator to create a copy
// Calling the function to display original magician names
console.log("Original Magician Names:");
show_Magicians(magician_Names);
// Calling the function to display modified magician names
console.log("\nGreat Magician Names:");
show_Magicians(great_Magicians);
