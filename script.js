// Updates the display screen
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Clears the display screen
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Tries the calculation, if it doesnt work, then an error message is thrown
function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
