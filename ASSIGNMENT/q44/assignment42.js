"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich(...items) {
    // Prints a summary of the sandwich being ordered
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (const item of items) {
        console.log(item);
    }
    console.log("Bread\n");
}
// Calling the function with different number of arguments
makeSandwich("Cheese", "Lettuce", "Tomato", "Mayonnaise");
makeSandwich("Ham", "Swiss Cheese", "Mustard");
makeSandwich("Turkey", "Avocado");
