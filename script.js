// initialize variables for calculator logic
let num1
let operator
let num2
//variable to determine if an operator has been pressed to handle display clearing and operation chaining
let opPressed = false;
//variable to store num2 for repeated presses of "="
let lastNum


//store display and buttons in variables
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

//create function to handle any button input
function handleInput(value){
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
        if(opPressed){
            display.value = ""
            opPressed = false;
        }
        if(display.value === ""){
            display.value += "-0";
        }
        else if(display.value.includes("-")){
            display.value = display.value.slice(1);
        }
        else{
            display.value = "-" + display.value;
        }
        break;
    case "%":
        if(operator){
            num2 = toNum(display.value);
            display.value = formatDecimals(operate(num1, "%", num2));
        }
        else{
            display.value = toNum(display.value) / 100;
        }
        break;
    case "backspace":
        display.value = display.value.slice(0, -1);
        break;
    case "+":
    case "-":
    case "x":
    case "÷":
        if(operator && !opPressed){
            num2 = toNum(display.value);
            let result = operate(num1, operator, num2);
                if(typeof result === "number"){
                    display.value = formatDecimals(result);
                    num1 = result;        
                } 
                else {
                    display.value = result;
                    num1 = "";
                }
        } else{
            num1 = toNum(display.value);
        }
        operator = value;
        opPressed = true;
        break;
    case "equal":
        if(operator){
            if(opPressed === false){
                num2 = toNum(display.value);
                lastNum = num2;
            } 
            else{
                num2 = lastNum;
            }
        } 
        else{
            return display.value;
        }
        let result = operate(num1, operator, num2);
        if(typeof result === "number"){
            display.value = formatDecimals(result);
            num1 = toNum(display.value);        
        } 
        else {
            display.value = result;
            num1 = "";
        }
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
        else if(display.value === "-0"){
            display.value = "-" + value;
        }
        else{
            display.value += value;
        }
        display.scrollLeft = display.scrollWidth;
    } 
}


//create event listener to process onclick of button
buttons.forEach(button => {
    button.addEventListener("click", () =>{
        handleInput(button.value);
    })
})

//create event listener to allow keyboard accessibility as well
buttons.forEach(button => {
    button.addEventListener("keydown", (e) =>{
        let key = e.key;
        if(!isNaN(key)){
            handleInput(key);
        }
        else if(key === "+"){
            handleInput("+");
        }
        else if(key === "-"){
            handleInput("-");
        }
        else if(key === "*" || key.toLowerCase() === "x"){
            handleInput("x");
        }
        else if(key === "/"){
            handleInput("÷");
        }
        else if(key === "Enter" || key === "="){
            e.preventDefault();
            handleInput("equal");
        }
        else if(key === "."){
            handleInput(".");
        }
        else if(key === "%"){
            handleInput("%");
        }
        else if(key === "Backspace"){
            handleInput("backspace");
        }
        else if(key.toLowerCase() === "c"){
            handleInput("clear");
        }
    })
})


//function to limit results to 5 decimals
function formatDecimals(value){
    return parseFloat(value.toFixed(5));
}


//function to handle instances of NaN
function toNum(val){
    let num = parseFloat(val);
    return isNaN(num) ? 0 : num;
}


//function that handles basic calculator operation logic
function operate(num1, operator, num2){
    num1 = toNum(num1);
    num2 = toNum(num2);
    switch(operator){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "x":
            return num1 * num2;
        case "÷":
            return num2 === 0 ? "No." : num1 / num2;
        case "%":
            return num1 * num2 / 100;
    }
}




// ===========I G N O R E CODE BELOW===============

//initial rough solution without keyboard usage. raw code for reference

// buttons.forEach(button => {
//     button.addEventListener('click', () =>{
//         const value = button.value;
//         switch(value){
//         case "clear":
//             display.value = "";
//             num1 = "";
//             num2 = "";
//             operator = "";
//             lastNum = "";
//             opPressed = false;
//             break;
//         case "posNeg":
//             if(opPressed){
//                 display.value = ""
//                 opPressed = false;
//             }
//             if(display.value === ""){
//                 display.value += "-0";
//             }
//             else if(display.value.includes("-")){
//                 display.value = display.value.slice(1);
//             }
//             else{
//                 display.value = "-" + display.value;
//             }
//             break;
//         case "%":
//             if(operator){
//                 num2 = toNum(display.value);
//                 display.value = formatDecimals(operate(num1, "%", num2));
//             }
//             else{
//                 display.value = toNum(display.value) / 100;
//             }
//             break;
//         case "backspace":
//             display.value = display.value.slice(0, -1);
//             break;
//         case "+":
//         case "-":
//         case "x":
//         case "÷":
//             if(operator && !opPressed){
//                 num2 = toNum(display.value);
//                 display.value = formatDecimals(operate(num1, operator, num2));
//                 num1 = toNum(display.value);
//             } else{
//                 num1 = toNum(display.value);
//             }
//             operator = value;
//             opPressed = true;
//             break;
//         case "equal":
//             if(operator){
//                 if(opPressed === false){
//                     num2 = toNum(display.value);
//                     lastNum = num2;
//                 } 
//                 else{
//                     num2 = lastNum;
//                 }
//             } 
//             else{
//                 return display.value;
//             }
//             num1 = toNum(num1);
//             num2 = toNum(num2);
//             display.value = formatDecimals(operate(num1, operator, num2));
//             num1 = toNum(display.value);
//             opPressed = true;
//             break;
//         case ".":
//             if(opPressed){
//                 display.value = "";
//                 opPressed = false;
//             }
//             if(display.value === ""){
//                 display.value += "0.";
//             } 
//             else if(!display.value.includes(".")){
//                 display.value += value;
//             }
//             break;
//         default:
//             if(opPressed){
//                 display.value = "";
//                 opPressed = false;
//             }
//             if (display.value === "0" && value !== ".") {
//                 display.value = value;
//             }
//             else if(display.value === "-0"){
//                 display.value = "-" + value;
//             }
//             else{
//                 display.value += value;
//             }
//             display.scrollLeft = display.scrollWidth;
//         } 
//     })
// });




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
//% logic needs to be revaluted. ex: 50 + 10 % = 55. Mine equals 50.1 because it divides 10 by 100. (COMPLETE)
//fix the fact that you cant chain operations together. (COMPLETE)
//when a second operator is clicked, we need to execute the operate function or "equal" case so that it works 
//like a regular calculator and updates the display value. otherwise 3x3x3 = 9 instead of 27.
//Fix logic of turning numbers positive and negative by simply appending a "-" to the front of the display (COMPLETE)
//round answers with long decimal points to only 5 values after the decimal (maybe use math.(method))? (COMPLETE)
//try using toFixed() method to force decimal number (COMPLETE)
//WHY does "2.3" + .3 = 2.59999999996? (COMPLETE)
//add keyboard capabilities by including keydown values into the display! (COMPLETE)