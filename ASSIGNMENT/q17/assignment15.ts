// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program



let shrinkguest:string[] = ["hamza" , "asif" , "saleem" , "kashif"]
 console.log("sorry i can invite only two guests")
 while(shrinkguest.length>2){
    let removeguest = shrinkguest.pop()
    console.log(`dear ${removeguest} you are not invited for dinner`)
 }

 shrinkguest.map((name)=>console.log(`${name} you are still invited for a dinner`))
 shrinkguest.pop()
 shrinkguest.pop()
 console.log(shrinkguest)

