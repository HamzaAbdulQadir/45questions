// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


function showMagicians(magicians: string[]): void {
    // Prints the name of each magician in the array
    for (const magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): void {
    // Adds 'the Great' to each magician's name
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

// Array of magician names
let magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Calling makeGreat() to modify the magician names
makeGreat(magicianNames);

// Calling the function to display modified magician names
showMagicians(magicianNames);