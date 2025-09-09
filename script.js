// initialize variables for calculator logic
let num1
let operator
let num2
//variable to handle display not clearing when operatorBtn clicked, and instead, wait for num2 to be entered
let opPressed = false;
//variable to store num2 for repeated presses of "="
let lastNum


//add onclick listener to every button on calc to append value in display
//use switch statement to create exceptions for buttons to not be appended to display
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', () =>{
        const value = button.value;
        switch(value){
        case "clear":
            display.value = "";
            num1 = "";
            num2 = "";
            operator = "";
            lastNum = "";
            opPressed = false;
            break;
        case "posNeg":
            //FIX THIS BY JUST APPENDING A - TO THE FRONT OF DISPLAY.
            display.value = display.value * -1;
            break;
        case "%":
            // if(display.value === "" || display.value === 0){
            //     display.value += 0;
            // }  
            if(operator){
                num2 = parseFloat(display.value);
                display.value = operate(num1, "%", num2);
            }
            else{
                display.value = parseFloat(display.value) / 100;
            }
            break;
        case "backspace":
            display.value = display.value.slice(0, -1);
            break;
        case "+":
        case "-":
        case "x":
        case "÷":
            //add our chaining logic here
            if(operator){
                num2 = parseFloat(display.value);
                display.value = operate(num1, operator, num2);
            }
            num1 = parseFloat(display.value);
            operator = value;
            opPressed = true;
            break;
        case "equal":
            if(operator){
                if(opPressed === false){
                    num2 = parseFloat(display.value);
                    lastNum = num2;
                } 
                else{
                    if(num2 !== ""){
                        num2 = num2;
                    } else {
                        num2 = lastNum;
                    }
                }
            } 
            else{
                return display.value;
            }
            if(num1 === "" || isNaN(num1)){
                num1 = 0;
            }
            if(num2 === "" || isNaN(num2)){
                num2 = num1;
            }
            display.value = operate(num1, operator, num2);
            num1 = parseFloat(display.value);
            opPressed = true;
            break;
        case ".":
            if(opPressed){
                display.value = "";
                opPressed = false;
            }
            if(display.value === ""){
                display.value += "0.";
            } 
            else if(!display.value.includes(".")){
                display.value += value;
            }
            break;
        default:
            if(opPressed){
                display.value = "";
                opPressed = false;
            }
            if (display.value === "0" && value !== ".") {
                display.value = value;
            }
            else{
                display.value += value;
            }
            display.scrollLeft = display.scrollWidth;
        } 
    })
});


//function that handles basic calculator operation logic
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
            if(num2 === 0){
                return "NO.";
            }   
            return num1 / num2;
        case "%":
            return num1 * num2 / 100;
    }
}


//THINGS TO FIX NOW:

//round answers with long decimal points to only 5 values after the decimal (maybe use math.floor?)
//% logic needs to be revaluted. ex: 50 + 10 % = 55. Mine equals 50.1 because it divides 10 by 100.

//WHY does "2.3" + .3 = 2.5999999999?



//fix the fact that you cant chain operations together. (COMPLETE)
//when a second operator is clicked, we need to execute the operate function or "equal" case so that it works 
//like a regular calculator and updates the display value. otherwise 3x3x3 = 9 instead of 27.





//TEMP FIXED, RETEST AFTER ALL COMPLETE!
//onclick % no number = NaN (return an error msg instead) (COMPLETE)
//only allow ONE "0" to be appended to the beginning of display (COMPLETE)
//if another number is entered, remove the "0" before it (COMPLETE)
//display an error message if trying to divide by 0 (COMPLETE)
//MASSIVE ISSUE WITH MULTIPLE PRESSES OF "=" BUTTON. Currently, 5-4=1, but pressing = again consecutively (COMPLETE)
//switches the display between "4" and "1" for some reason. Need to fix this logic issue ASAP.... (COMPLETE)
//don't allow user to append multiple decimal points to display(COMPLETE)
//when entering a number, then hitting =, it returns undefined. Fix this. (COMPLETE)
//7+= needs to return 14, not NaN. It returns NaN because num2 is undefined. Have num2 = num1 if num2 not specified.(COMPLETE)
//after a calculation, pressing a new digit needs to clear the display and replace it, not append it. (COMPLETE)
// ^^ EX: 2+4=6 (pressing 3 should not be 63, it should replace the 6 with a 3) (COMPLETE)
//Currently, there is no default num1 value, so if I just press + and then 3, it returns NaN, because by default, the display is empty, is num1 = "". (COMPLETE)
//on press of a decimal, it just shows "." but it should be "0." (COMPLETE)
//when pressing a "." after an operator, display wont clear because I cant append 2 decimals. EX: 3.5+.2=5.5. (the . in .2 doesnt appear)(COMPLETE)