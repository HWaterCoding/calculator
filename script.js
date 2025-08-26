
//store calc display in display variable
//add event listener to every button on page, when clicked store value of button in display
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', () =>{
        const value = button.value;
        switch(button.value){
        case "clear":
            display.value = "";
            break;
        case "posNeg":
            break;
        case "percent":
            display.value = parseFloat(display.value) / 100;
            break;
        case "divide":
            break;
        case "multiply":
            break;
        case "subtract":
            break;
        case "add":
            break;
        case "equal":
            break;
        case "backspace":
            break;
        default: 
            display.value += value;
        } 
    })
});






// const operators = [];







//working
const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

//the parameter will be the current display.value
function posNeg(){
//for the +/- button, create a conditional that states if the current number is positive, change it to negative
//and if the current value is negative, change it to positive.
}





let num1
let operator
let num2

function operate(operator, num1, num2){

}








//add event listeners to each integer that APPEND that value to the display
//store the current value of the display in a seperate variable for later use






