// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// creating a function

function makeShirt(size:string = "large", message:string = " i love typescript"): void{
    console.log(`i im making a ${size} size shirt and this message " ${message} " written on this tshirt `)
}

// calling a function in default
makeShirt()

// calling a function in medium size
makeShirt("medium")

// calling a function with small and different message
 makeShirt("small","i m learning typescript")