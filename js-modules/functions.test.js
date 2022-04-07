import { describe } from "@jest/globals";
import { beMorse, turnEng, validChar, validMors } from "./functions.js";

describe("Testing beMorse() that translate English text to Morse ", () => {
	const errEng = new Error(
		"Error: Text include characters that doesn't exist in Morse code (such as ~,`, <, >, {, }, |, *, ^, %). Kindly remove it.",
	);
	it("should translate a single English character", () => {
		expect(beMorse("r")).toBe(".-.");
		expect(beMorse("s")).toBe("...");
		expect(beMorse("1")).toBe(".----");
	});

	it("should convert a space between words to /", () => {
		expect(beMorse("hello world")).toBe(
			".... . .-.. .-.. --- / .-- --- .-. .-.. -..",
		);
		expect(beMorse("this is a text")).toBe(
			"- .... .. ... / .. ... / .- / - . -..- -",
		);
	});

	it("will throw an error for untranslateable character", () => {
		expect(() => beMorse("hello~")).toThrow(errEng);
		expect(() => beMorse("<text>")).toThrow(errEng);
	});
});

describe("Testing turnEng() that translate Morse code to English text", () => {
	const errMors = new Error(
		"Error: Please ensure that the code only consists of ., -, space and always put space after each letter.",
	);

	it("should remove space between English characters", () => {
		expect(turnEng(".... . .-.. .-.. ---")).toBe("hello");
		expect(turnEng("--. --- --- -.. -... -.-- .")).toBe("goodbye");
	});

	it("should convert a space between words to /", () => {
		expect(turnEng("/")).toBe(" ");
	});

	it("will throw an error for untranslateable character", () => {
		expect(() => turnEng("abcde")).toThrow(errMors);
	});
});

describe("Testing validChar() that checks whether characters have a translation", () => {
	it("should return false for English words with space", () => {
		expect(validChar("hello world")).toBe(false);
		expect(validChar("here we go")).toBe(false);
	});

	it("should return true for a word that includes character that doesn't exist in Morse code", () => {
		expect(validChar("hello~")).toBe(true);
		expect(validChar("2^2")).toBe(true);
	});
});

describe("Testing validMors() that checks whether characters have a translation", () => {
	it("should return false for English words with space", () => {
		expect(validMors(".- .-")).toBe(false);
	});

	it("should return true for a code that includes character that doesn't have a translation", () => {
		expect(validMors("......")).toBe(true);
		expect(validMors("------")).toBe(true);
	});
});
