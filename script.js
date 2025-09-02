// initialize variables for calculator logic
let num1
let operator
let num2


//add onclick listener to every button on calc to append value in display
//use switch statement to create exceptions for buttons to not be appended to display
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', () =>{
        const value = button.value;
        switch(button.value){
        case "clear":
            display.value = "";
            num1 = "";
            num2 = "";
            operator = "";
            break;
        case "posNeg":
            display.value = display.value * -1;
            break;
        case "percent":
            display.value = parseFloat(display.value) / 100;
            break;
        case "backspace":
            display.value = display.value.slice(0, -1);
            break;
        case "+":
        case "-":
        case "x":
        case "÷":
            num1 = parseFloat(display.value);
            operator = button.value;
            display.value = "";
            //the above works, but let's come back and fix it so that the display is cleared when 
            //a new number is entered, NOT when the operator is pressed.
            break;
        case "equal":
            num2 = display.value;
            display.value = operate(num1, operator, num2);
            break;
        default: 
            display.value += value;
            display.scrollLeft = display.scrollWidth;
        } 
    })
});

//calculator works but needs to be improved. Things to improve:
//when a second operator is clicked, we need to execute the operate function or "equal" case so that it works 
//like a regular calculator and updates the display value. otherwise 3x3x3 = 9 instead of 27.




//basic functions for calculator logic to operate on numbers
function operate(num1, operator, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch(operator){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "x":
            return num1 * num2;
        case "÷":
            return num1 / num2;
    }
}


const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;








