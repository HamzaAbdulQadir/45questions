// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.



 let guestArr1:string[] = ["azeem","ahsan","bilal","sufyan"]

 guestArr1.map((name)=>console.log(`${name} i found a bigger table at dinner`))

 let bigningguest:string = "sumair"
 guestArr1.unshift(bigningguest)
 let middleguest:string = "usama"
 let middleindex = guestArr1.length/2
 guestArr1.splice(middleindex,0,middleguest)
 guestArr1.push("noman")
 guestArr1.map((name)=> console.log(`dear ${name} you are invited to a dinner.`))
