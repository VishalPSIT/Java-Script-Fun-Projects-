const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-length]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copybtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const upperCaseCheck = document.querySelector("#uppercase");
const lowerCaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector("[data-createPassword]");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = "!@#$%&~"
let password="";
let passwordLength = 10 ;
let checkCount = 1 ; 

function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}
handleSlider();

function setIndicator(color){
    indicator.style.backgroundColor = color;

}

function getRandomInteger(min , max){
    return Math.floor(Math.random() * (max - min))+min;
}
function generateRandomNumber(){
    return getRandomInteger(0,9);

}
function generateLowerCase(){
    return String.fromCharCode(getRandomInteger(97,123));
}
function getUpperCase(){
    return String.fromCharCode(getRandomInteger(65,91));
}
function generateSymbol(){
    const randNumb= getRandomInteger(0 , symbols.length);
    return symbols.charAt[randNumb];
}



