// Example 1: Greeting

const greetingButton = document.getElementById("greetingButton");
const nameInput = document.getElementById("nameInput");
const greetingOutput = document.getElementById("greetingOutput");

greetingButton.addEventListener("click", function() {
    const name = nameInput.value;

    if (name === "") {
        greetingOutput.textContent = "Please enter your name.";
    } else {
        greetingOutput.textContent = "Hello, " + name + "!";
    }
});


// Example 2: Addition Calculator

const addButton = document.getElementById("addButton");
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const calculatorOutput = document.getElementById("calculatorOutput");

addButton.addEventListener("click", function() {
    const number1 = Number(firstNumber.value);
    const number2 = Number(secondNumber.value);
    const total = number1 + number2;

    calculatorOutput.textContent = "The total is " + total + ".";
});


// Example 3: Background Color Changer

const blueButton = document.getElementById("blueButton");
const grayButton = document.getElementById("grayButton");
const resetButton = document.getElementById("resetButton");

blueButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});

grayButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightgray";
});

resetButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "#f4f6f8";
});