// console.log("Hello world")
/* var a = 5
var b = 7
var c = a + b
console.log(c)
console.log("hello world " + c) //string concatenation
console.log("hello world " * c) //Nan = not a number
console.log(4 + c) //good calculation
console.log(4 - c) //good calculation
console.log(4 * c) //good calculation
console.log(4 / c) //good calculation
console.log("Modulo", 12 % 9) //modulo
console.log(3 === 3) //comparition / if condition
console.log(c >= 3) //comparition */


/* let a = 5
const b = 4
//a--
//a = a + 1
console.log(--a) // pre and post calculate for return
console.log(a) */


/* const name = "othman"
console.log("mein name ist " + name + "!@")
console.log(`mein name ist ${name}!`) // template literal */


/* // USE LET AND CONST - DONT USE VAR
console.log(a) // dont complain about variable declaration order - throws no error =  bad
var a = 5

console.log(b) // shows correctly incoming error
let b = 4 */

/* const name = "Othman is the coolest!"
console.log(name.toUpperCase()) // string methods
console.log(name.toLowerCase()) // string methods

console.log(name.includes("lazyiest"))
console.log(name.substring(2, 4)); //cut sub part of string */

/* let a = 3.5
let b = 7.1
console.log(Math.floor(Math.random() * 10)) // generate random round number betweenn 1 & 10 */

//console.log("a" / 1)// not a number


//locical conditional statements
/* const a = 9
if (a > 10) {
    console.log(11111111)
} else if (a === 10) {
    console.log(22222222)
} else {
    console.log(3333333333)
}
 */

/* const user = [23, 63, 21, 8, 5, 4] // define simple number list (array (listen))
console.log("User 4 is old: ",user[4] ) // log specific index of array
for (let index = 0; index < user.length; index++) { // dynamically loop over all the items in user-array
    console.log("############")
    console.log("The index is: ", index); // will increase each iteration / repetition.
    console.log("The userage is: ", user[index]); // access user age which is at position of index
} */


/* 
let i = 0 // art von globaler variable /  gilt im aueseren namespace

// 1 define function
function sqm(x, y) { //passs two parameters to function 
    let i = 1 // diesee variable hat ihren eigenen geldtungsbereich inner halb der funktion
    console.log("nach redeclartion", i);
    return x * y  // scope / namespace / geltungs bereich von variablen
}
// 2 call function
console.log(sqm(3, 15))
console.log(i); */


// calculate squaremeter from room list
/* const rooms = [ // multidimensional array - mehrdimensionale liste - verschachtelte list - nested array
    [23, 63],  // index 0  -  subindex  [0,1]
    [21, 8, 43333],   // index 1  -  subindex  [0,1,2]
    [5, 4],  // index 2  -  subindex  [0,1]
    [7, 9],   // index 3  -  subindex  [0,1]
    [10, 12]  //index 4  -   subindex  [0,1]
]
console.log(rooms[4])
console.log(rooms[4][1])
function sqm(x, y) { //passs two parameters to function 
    return x * y  // scope / namespace / geltungs bereich von variablen
}
//console.log(sqm(3, 15))
for (let index = 0; index < rooms.length; index++) { // dynamically loop over all the items in user-array
    console.log("############")
    console.log("The index is: ", index); // will increase each iteration / repetition.
    console.log("The room is: ", rooms[index]); // access user age which is at position of index
    console.log("the sqms are", sqm(rooms[index][0], rooms[index][1]), "qm") // access sub-index of rooms list - hole specifishe seite aus liste von raumen welche jeweils 2 seiten haben
}  */

/* const names = ["Othman", "tOMMY", "omar"] // defines list of three names
names[3] = "claudi" // manual assign new name at end of list (0 based list)
names[3] = "Claudia"
names[4] = "Denny" // manually addding somebody at position5
names.pop() // kicks the last name out of the list
names.push("Anton") // add anton to the list
names.push("Elaisss")


names.reverse().pop() //rotates the list and kick othman out
names.shift() // removes name from the fron of the list
names.unshift("charly") // adds person at the fron of the list
console.log(names)
console.log(names.indexOf("Anton")) // reverse search from value  to index */



// Objects TATATATATATATATA
const user = {
    name: "Lenny",
    age: 15,
    job: "programer",
    skills: ["html", "css"],
    session: {
        id: "3829463278942",
        lastloggedin: 32132312
    }
}
const user2 = {
    name: "Maria",
    age: 18,
    job: "backend-developer",
    skills: ["nodejs", "mongodb"],
    session: {
        id: "3829463278942",
        lastloggedin: 32132312
    }
}
const user3 = {
    name: "John",
    age: 75,
    job: "backend-developer",
    skills: ["nodejs", "mongodb"],
    session: {
        id: "3829463278942",
        lastloggedin: 32132312
    }
}

const names = [user, user2, user3]
console.log(names[1]['skills'][1])
//console.log(user["skills"][1])

console.log(user2.name)
console.log(user2.session.lastloggedin)
console.log(user.age + user2.age)
console.log((user.age + user2.age + user3.age) / names.length)
console.log(user2.name)
console.log(user.age + user2.age)
console.log(user2.job)
console.log(user3.name)
console.log(user3.session.lastloggedin)
