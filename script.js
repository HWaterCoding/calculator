
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
            display.value = display.value * -1;
            break;
        case "percent":
            display.value = parseFloat(display.value) / 100;
            break;
        case "equal":
            //run operate function on display
            break;
        case "backspace":
            display.value = display.value.slice(0, -1);
            break;
        default: 
            display.value += value;
            display.scrollLeft = display.scrollWidth;
        } 
    })
});


// let num1 = ;
// let operator = ;
// let num2 = ;


const operators = ["+", "-", "÷", "x"];

function operate(num1, operator, num2){
    
}

//add every operator to an array
//iterate through that array to see if there's an operator in the display
//if there is, split the display at the operator
//left side = num1, right side = num2, operator = operator
//create conidtional statement... ex... if(operator = "+"){addition()}
//update the display.value with the result of the operation


// const operators = [];


//EQUALS LOGIC?
//break every character in the display down into an array
//use the includes() method to test which operator is included in the display
//use an if() statement to determine which of the below operations to perform on the number



//working functions for basic operation
const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;





