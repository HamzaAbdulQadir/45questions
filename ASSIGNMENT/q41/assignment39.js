"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Array of magician's names
const magicianName = ["allen", "David willey", "Penn Jillette", "Teller"];
// Calling show_magicians() function to print each magician's name
show_magicians(magicianName);
