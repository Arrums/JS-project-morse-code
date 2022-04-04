# Javascript Project : Morse Code Translator

Create a website of morse code translator using HTML, SCSS, and Javascript.

[Morse Code Translator](https://user-images.githubusercontent.com/100544967/161428235-90e1c85a-ddbe-4c85-875b-05dbbd0fd7ee.PNG)

[Live Project](https://arrums.github.io/JS-project-morse-code)

## Goals

Implementing the Javascript topics that I have learned through out the training
such as Arrays, Iterators, Document Object Model (DOM), Object and Modules.

## Requirements

### MVP

1. Create a user interface that allows the user to either input some English
   text or some Morse Code
2. Create JS functions that would allow the user to translate their English text
   into Morse Code or Morse Code into English text
3. Make sure to handle spaces properly (ie. there is 1 space between English
   words, but one space between Morse Code characters)

## Implementation Details

1. Create 2 text boxes for input, 2 buttons for translating, 2 buttons to clear
   the text boxes
2. Style the page using SCSS. Ensuring the design to be responsive to different
   screen sizes
3. Create a separate file for the Morse Code dictionary
4. Grabbing the elements from HTML using DOM
5. Create addEventListener and functions for each of the buttons
6. Ensuring that only certain characters can be accepted in the text boxes
7. Create reference sheet for the user at the bottom of the page

## Design choice

I chose use button and click() instead of input() for the translation so the
user would have more control on what they want to type prior the text being
translated.
