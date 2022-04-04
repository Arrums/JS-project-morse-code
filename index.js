import * as transFunc from "./js-modules/functions.js";

//Selecting DOM element
const engInput = document.querySelector("#eng");
const morseInput = document.querySelector("#morse");
const btnEng = document.querySelector("#btnEng");
const btnMorse = document.querySelector("#btnMorse");
const btnClrEng = document.querySelector("#clrEng");
const btnClrMor = document.querySelector("#clrMor");
const codeChart = document.querySelector(".reference__chart");

//Event listener for English Translate Btn
btnEng.addEventListener("click", () => {
	if (transFunc.validChar(engInput.value)) {
		return alert(
			"Error: Text include characters that doesn't exist in Morse code (such as ~,`, <, >, {, }, |, *). Kindly remove it. ",
		);
	}
	morseInput.value = transFunc.beMorse(engInput.value);
});

//Event listener for English input Clear Btn
btnClrEng.addEventListener("click", () => {
	engInput.value = "";
});

//Event listener for Morse Code Translate Btn
btnMorse.addEventListener("click", () => {
	if (transFunc.validMors(morseInput.value)) {
		return alert(
			"Error: This morse code is unrecognizable. Please ensure that it only consists of ., -, space and it is the right sequence.",
		);
	}

	engInput.value = transFunc.turnEng(morseInput.value);
});

//Event listener for Morse Code input Clear Btn
btnClrMor.addEventListener("click", () => {
	morseInput.value = "";
});
