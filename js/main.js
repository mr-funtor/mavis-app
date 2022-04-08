const randomLetters= document.querySelector('.random-letters');
const typedLetters= document.querySelector('.typed-letters');

document.addEventListener('keydown',typingWord);

const allLetters="abcdefghijklmnopqrstuvwxyz".split("");

let generatedLetters=[];
let presentLetter="y";