let addition = document.getElementById("plus");
let subtraction = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let equalSign = document.getElementById("equal")
let backSpace = document.getElementById("backspace")
let buttons = Array.from(document.getElementsByClassName("btns"));

let outputContainer = document.getElementById("answerOutput")
let output = document.getElementById("output");

let clear = document.getElementById("clear")

 backSpace.addEventListener("click", function(){
     return output.innerHTML = output.innerHTML.slice(0, -1)
 })



let getInput = buttons.forEach(function(button){
    button.addEventListener("click", function(){
       
       output.innerHTML += button.innerHTML
    })
})


    clear.addEventListener("click", function(){
    output.innerHTML = ""
    console.log("working")
})


 
    equalSign.addEventListener("click", function(){
        output.innerHTML = ""; 
    })

  
      





function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b
}

function multiplication (a, b){
    return a * b
}

function division (a , b){
    return a / b;
}



// Create a new function operate that takes an operator and 2 numbers
// and then calls one of the above functions on the numbers.

function operator(a , b , operator) {
    switch(operator){
        case `+`:
            return a + b
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            "";
    }
}

console.log(operator(2,3,"*"))