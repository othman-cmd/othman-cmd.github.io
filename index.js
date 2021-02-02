// console.log("hello")
// var age = prompt("how old are you?")
// var allowed = 18
// if (age > allowed) {
//     alert("Welcome")
// }
// document.getElementById("klickbutton").addEventListener("click", function () {
//     console.log("Button was clicked")
// })


//simple user authenticationm
/* const age = prompt("how old are you")
console.log(age)
if (age >= 18) {
    //1st element auswaehlen
    //2nd unsichbar klasse entferenen
    document.querySelector('body').classList.remove('unsichtbar')
} */



//Click listener
// 1 select element 
// 2 addEventlistener (type)
// 3 run function

document.querySelector('#trggier').addEventListener("click", function (event) { //button selected  and event listener attached CALLBACK FUNCTION
    console.log(event)
    if (event.target.classList.contains("btn-danger")) { // checks if clicked button already have the danger class
        event.target.classList.remove("btn-danger") // löschen von Klassen
    } else {
        event.target.classList.add("btn-danger") // hinzufuegen von Klassen
    }
})
/*
document.querySelector('#trggier').addEventListener("click", function (event) { //button selected  and event listener attached
    if (document.querySelector('#trggier').classList.contains("btn-danger")) { // checks if clicked button already have the danger class
        document.querySelector('#trggier').classList.remove("btn-danger") // löschen von Klassen
    } else {
        document.querySelector('#trggier').classList.add("btn-danger") // hinzufuegen von Klassen
    }
})

 */
