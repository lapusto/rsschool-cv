let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operator");
let clearBtns = document.querySelectorAll(".clear-btn");
let decimalBtn = document.getElementById("decimal");
let result = document.getElementById("result");
let display = document.getElementById("display");
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = "";

for(let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener("click", function(e) {
        numberPress(e.target.textContent);
    });
};

for(let i = 0; i < operations.length; i++) {
    let operator = operations[i];
        operator.addEventListener("click", function(e){
            operationPress(e.target.textContent);
        });
    };

for(let i = 0; i < clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
        clearBtn.addEventListener("click", function(e){
        clear(e.target.textContent);
        });
    };

decimalBtn.addEventListener("click", decimal);

    function numberPress(number) {
        if(MemoryNewNumber) {
            display.value = number;
            MemoryNewNumber = false;
        } else {
            if(display.value === "0") {
                display.value = number;
            } else {
                display.value += number;
            };
        };
    };

function operationPress(op) {
        localOperationMemory = display.value;
        
        if(MemoryNewNumber && MemoryPendingOperation !== "=") {
            display.value = MemoryCurrentNumber;
        } else {
            MemoryNewNumber = true;
            if (MemoryPendingOperation === "+") {
                MemoryCurrentNumber += +localOperationMemory;  
            } else if (MemoryPendingOperation === "-") {
                MemoryCurrentNumber -= +localOperationMemory;  
            } else if (MemoryPendingOperation === "*") {
                MemoryCurrentNumber *= +localOperationMemory;  
            } else if (MemoryPendingOperation === "/") {
                MemoryCurrentNumber /= +localOperationMemory;  
            } else {
                MemoryCurrentNumber = +localOperationMemory;  
            }
            display.value = MemoryCurrentNumber;
            MemoryPendingOperation = op;
        };
      };

    function decimal(argument) {
        let localDecimalMemory = display.value;
        
        if(MemoryNewNumber) {
            localDecimalMemory = "0.";
            MemoryNewNumber = false;
        } else {
            if(localDecimalMemory.indexOf(".") === -1) {
                localDecimalMemory += ".";
            };
        };
        display.value = localDecimalMemory;
    };

    function clear(id) {
        if(id === "ce") {
            display.value = "0" 
            MemoryNewNumber = true;
        } else if(id === "c") {
            display.value = "0" 
            MemoryNewNumber = true;
            MemoryCurrentNumber = 0,
            MemoryPendingOperation = "";
        }
    };

