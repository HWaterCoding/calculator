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
            display.value = display.value * -1;
            break;
        case "percent":
            if(display.value === "" || display.value === 0){
                display.value += 0;
            }
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
                    num2 = lastNum;
                }
            } 
            else{
                return display.value;
            }
            //If no 2nd number entered, assume it's the same as num1.
            if(num2 === "" || isNaN(num2)){
                num2 = num1;
            }
            display.value = operate(num1, operator, num2);
            num1 = parseFloat(display.value);
            opPressed = true;
            break;
        case ".":
            if(display.value.includes(".")){
                display.value = display.value;
            } 
            else{
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
    }
}


//THINGS TO FIX NOW:

//round answers with long decimal points to only 5 values after the decimal (maybe use math.floor?)
//after a calculation, pressing a new digit needs to clear the display and replace it, not append it. 
// ^^ EX: 2+4=6 (pressing 3 should not be 63, it should replace the 6 with a 3)


//Currently, there is no default num1 value, so if I just press + and then 3, it returns NaN, because by default, the display is empty, is num1 = "".
// ^^ fix this maybe by removing the placeholder and instead having a default value of 0 in the display that gets erased on click of anything except 0 or . ^^




//fix the fact that you cant chain operations together. SEE BELOW
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