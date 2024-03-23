// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow additional properties
}

function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
    const car: Car = {
        manufacturer,
        model
    };

    // Add additional properties if provided
    for (const [key, value] of options) {
        car[key] = value;
    }

    return car;
}

// Calling the function with required and optional information
const myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

// Printing the returned object
console.log(myCar);