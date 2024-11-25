// mini database of all characters relevant to this app:
//Lowercase, Uppercase, Numbers, Symbols.
//PS: I wanted to use ASCII as a way of not needing to create mini databases
//however, the symbols sequence isn't in sequence, so it would be terribly
//annoying to make them work with 3 separate for:loops just for the symbols.
//src:https://www.w3schools.com/charsets/ref_html_ascii.asp
const uppercaseMiniDb = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const lowercaseMiniDb = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbersMiniDb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbolsMiniDb = [
  "~",
  "`",
  "!",
  "/",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "@",
];

//
// get input range slider elements
const slideValue = document.querySelector("#slideShow");
const inputSlider = document.querySelector("#rangeInpute");
// get checkbox toggles elements
const lowercaseCbx = document.querySelector("#lowercase-cbx");
const uppercaseCbx = document.querySelector("#uppercase-cbx");
const numbersCbx = document.querySelector("#numbers-cbx");
const symbolsCbx = document.querySelector("#symbols-cbx");
// get more elements
const lengthDescription = document.querySelector("#length-description");
const newPasswordBtn = document.querySelector("#new-password-btn");
const passwordOutput = document.querySelector("#password-output");
const lowercaseCheckboxDescription = document.querySelector(
  "#lowercase-checkbox-description"
);
const uppercaseCheckboxDescription = document.querySelector(
  "#uppercase-checkbox-description"
);
const numbersCheckboxDescription = document.querySelector(
  "#numbers-checkbox-description"
);
const symbolsCheckboxDescription = document.querySelector(
  "#symbols-checkbox-description"
);

lowercaseCheckboxDescription.addEventListener("click", lowercaseCheckOrUncheck);
uppercaseCheckboxDescription.addEventListener("click", uppercaseCheckOrUncheck);
numbersCheckboxDescription.addEventListener("click", numbersCheckOrUncheck);
symbolsCheckboxDescription.addEventListener("click", symbolsCheckOrUncheck);
newPasswordBtn.addEventListener("click", generateNewPassword);

lengthDescription.textContent = "Length:";

// temp
//
passwordOutput.textContent = "1234qwer1234qwer1234";
//

let passwordLength = inputSlider.value;;
// the Mini Databases will be concated into this variable according to what the user toggles.
let passwordMiniDb = [];
let generatedPassword = [];

// having input range slider do input range slider things
// it also grabs the value.
inputSlider.oninput = () => {
  passwordLength = inputSlider.value;
  slideValue.textContent = passwordLength;
  slideValue.style.left = passwordLength * 5.7 + "%";
  slideValue.classList.add("show");
  passwordLength = slideValue.textContent;
};
inputSlider.onblur = () => {
  slideValue.classList.remove("show");
};
// functions to for the event listener that when clicked,
// checks whether the checkboxes are checked or not
//and checks them or unchecks them accordingly
function lowercaseCheckOrUncheck() {
  if (lowercaseCbx.checked == true) {
    lowercaseCbx.checked = false;
  } else {
    lowercaseCbx.checked = true;
  }
}

function uppercaseCheckOrUncheck() {
  if (uppercaseCbx.checked == true) {
    uppercaseCbx.checked = false;
  } else {
    uppercaseCbx.checked = true;
  }
}

function numbersCheckOrUncheck() {
  if (numbersCbx.checked == true) {
    numbersCbx.checked = false;
  } else {
    numbersCbx.checked = true;
  }
}
function symbolsCheckOrUncheck() {
  if (symbolsCbx.checked == true) {
    symbolsCbx.checked = false;
  } else {
    symbolsCbx.checked = true;
  }
}



function generateNewPassword() {
  clearPasswordOutput();
  formPoolOfCharacters();
  // console.log(passwordMiniDb);
  randomizePassword();
  
}

function clearPasswordOutput() {
  // passwordOutput.textContent = "Please select a group of characters";
  passwordOutput.textContent = "";
  passwordMiniDb = [];
  generatedPassword = [];
}
//creates a new mini database with every character category
//the user checked
function formPoolOfCharacters() {
  if (lowercaseCbx.checked == true) {
    for (let i = 0; i < lowercaseMiniDb.length; i++) {
      passwordMiniDb.push(lowercaseMiniDb[i]);
    }
  }
  if (uppercaseCbx.checked == true) {
    for (let i = 0; i < uppercaseMiniDb.length; i++) {
      passwordMiniDb.push(uppercaseMiniDb[i]);
    }
  }
  if (numbersCbx.checked == true) {
    for (let i = 0; i < numbersMiniDb.length; i++) {
      passwordMiniDb.push(numbersMiniDb[i]);
    }
  }
  if (symbolsCbx.checked == true) {
    for (let i = 0; i < symbolsMiniDb.length; i++) {
      passwordMiniDb.push(symbolsMiniDb[i]);
    }
  }
 
}

function randomizePassword() {

  for(let i = 0; i<passwordLength;i++){
    generatedPassword.push(
      passwordMiniDb[
        Math.floor(Math.random()*passwordMiniDb.length)
      ]
    )
  }
  passwordOutput.textContent = generatedPassword.join("");

}

