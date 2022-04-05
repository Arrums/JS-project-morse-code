import { morseEng, engMorse } from "./morsecode.js";

//function for translation eng to morse
export const beMorse = (text) => {
	const morseArr = text
		.toLowerCase()
		.split("")
		.map((char) => engMorse[char])
		.join(" ");
	return morseArr;
};

//function to check if the eng input will have a translation
export const validChar = (text) => {
	const checkArr = text
		.toLowerCase()
		.split("")
		.map((ch) => engMorse[ch]);

	return checkArr.includes(undefined);
};

//function for translation morse to eng
export const turnEng = (text) => {
	const engArr = text
		.split(" ")
		.map((char) => morseEng[char])
		.join("");
	return engArr;
};

// function to check if the morse code is valid
export const validMors = (text) => {
	const arrCheck = text.split(" ").map((c) => morseEng[c]);

	return arrCheck.includes(undefined);
};
