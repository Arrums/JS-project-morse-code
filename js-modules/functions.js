import { morseEng, engMorse } from "./morsecode.js";

//function to check if the eng input will have a translation
export const validChar = (text) => {
	const checkArr = text
		.toLowerCase()
		.split("")
		.map((ch) => engMorse[ch]);

	return checkArr.includes(undefined);
};

//function for translation eng to morse
export const beMorse = (text) => {
	if (validChar(text)) {
		throw new Error(
			"Error: Text include characters that doesn't exist in Morse code (such as ~,`, <, >, {, }, |, *, ^, %). Kindly remove it.",
		);
	}
	const morseArr = text
		.toLowerCase()
		.split("")
		.map((char) => engMorse[char])
		.join(" ");
	return morseArr;
};

// function to check if the morse code is valid
export const validMors = (text) => {
	const arrCheck = text.split(" ").map((c) => morseEng[c]);

	return arrCheck.includes(undefined);
};

//function for translation morse to eng
export const turnEng = (text) => {
	if (validMors(text)) {
		throw new Error(
			"Error: Please ensure that the code only consists of ., -, space and always put space after each letter.",
		);
	}

	const engArr = text
		.split(" ")
		.map((char) => morseEng[char])
		.join("");
	return engArr;
};
