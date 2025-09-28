// calculator program
const display = document.getElementById("display");

let lastAnswer = 0 ;

function appendToDisplay(input) {
display.value += input;
}

function clearDisplay() {
display.value="";
}

function calculate() {
try{
    display.value = eval(display.value);
}
catch(error){
    display.value = "Error";
 }
}

function backspace(){
    display.value = display.value.slice(0,-1)
// slicke(0,-1) means take everything into display expect the last digit
}



function ansPlus(){
    //append last answer  
    display.value = lastAnswer + "+";
}