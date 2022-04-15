const randomLetters= document.querySelector('.random-letters');
const typedLetters= document.querySelector('.typed-letters');

document.addEventListener('keydown',typingWord);

const allLetters="abcdefghijklmnopqrstuvwxyz".split("");

let generatedLetters=[];
let presentLetter="y";
let presentIndex=0;

function generateRandomLetters(){
	for(let i=0;i<5;i++){
		let randomIndex=Math.floor(Math.random()*allLetters.length);
		
	}
	
}