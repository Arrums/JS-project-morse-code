# Javascript Project : Morse Code Translator

Create a website of morse code translator using HTML, SCSS, and Javascript.

![Morse Code Translator](https://user-images.githubusercontent.com/100544967/162129684-c2f2e22f-9b97-4551-ad96-87d1d8c777c9.PNG)

<a href="https://arrums.github.io/JS-project-morse-code" target="_blank">Live Project</a>

## Goals

Implementing the Javascript topics that I have learned through out the training
such as Arrays, Iterators, Document Object Model (DOM), Object, Modules, and Unit Testing.

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
4. Create translation function and test them
5. Grabbing the elements from HTML using DOM
6. Create addEventListener and functions for each of the buttons
7. Ensuring that only certain characters can be accepted in the text boxes
8. Create reference sheet for the user at the bottom of the page

## Design choice

I chose use button and click() instead of input() for the translation so the
user would have more control on what they want to type prior the text being
translated.

## Tech Stack:
- [x] HTML
- [x] CSS/SCSS
- [x] Javascript
- [x] Jest
