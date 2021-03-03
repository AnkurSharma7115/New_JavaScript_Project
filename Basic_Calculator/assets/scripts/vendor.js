//pre-requisites fetching the element for operations
const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentCalculationOutput = document.getElementById('current-calculation');
const currentResultOutput = document.getElementById('current-result');

// output on page
function outputResult(text, result) {
  currentCalculationOutput.textContent = text;
  currentResultOutput.textContent = result;
}

//Main JavaScript Code.

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

    //Converting type of Input or User Values
function getUserInput(){  
  return parseInt(userInput.value);
}

    // generating Output Logs (Entered Stirng & Result)
function createAndWriteOutput( operator, resBeforeCalc, calcNum){
  calcDescription = `${resBeforeCalc} ${operator} ${calcNum}`;
  outputResult(calcDescription, currentResult);         // final Output on Screen
}

function writeLogInObject(operators, operationNum, prevResult, newResult){
  const logEntry = {
    number : operationNum,
    operation : operators,
    prevResult : prevResult,
    result : newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

    //defining inside IF ELSE IF block
function calculateResult(calculationType){
  const enteredNum = getUserInput();
  if(!isNaN(enteredNum))
  {
        const initialResult = currentResult;
        let mathOperator;
        if(calculationType=== "ADD"){
          currentResult = currentResult + enteredNum;
          mathOperator = "+";
        }
        else if(calculationType === "SUBTRACT"){
          currentResult = currentResult - enteredNum;
          mathOperator = "-";
        }
        else if(calculationType === "MULTIPLY"){
          currentResult = currentResult * enteredNum;
          mathOperator = "*";
        }
        else{
            if(enteredNum == 0){
              alert("Can't Divide By 0(ZERO).\n Calculation will be reset to starting.\n Ignore divide by ZERO in future");
              currentResult = 0;
              logEntries = [];
              createAndWriteOutput('+',0,0);
              let text_to_change = currentCalculationOutput.childNodes[0];
              text_to_change.nodeValue = '0';
              userInput.value = '';
              return;
            }
            else{
              currentResult = currentResult / enteredNum;
              
            }
            mathOperator = "/";
        }
        
        createAndWriteOutput(mathOperator, initialResult, enteredNum);
        writeLogInObject(calculationType, enteredNum, initialResult, currentResult);
        userInput.value = '';
  }
  else
  {
    return false;
  }
}

        // defining functions for Calculator Operations
    function add(){
      calculateResult("ADD");
    }

    function subtract(){
      calculateResult("SUBTRACT");
    }
    function multiply(){
      calculateResult("MULTIPLY");
    }
    function divide(){
      calculateResult("DIVIDE");
    }

    //adding EventListener to the Button with respective functions.
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
