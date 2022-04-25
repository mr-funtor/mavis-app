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
		generatedLetters.push(allLetters[randomIndex]);
		//display generated letter on screen;
		randomLetters.innerHTML+=`<h1>${allLetters[randomIndex]}</h1>`;
	}
    
    
    presentLetter=generatedLetters[presentIndex];//makes the first letter of the array the first letter the player is to type
	console.log(presentLetter,generatedLetters);
	
}

generateRandomLetters();

function typingWord(e){
	if(presentIndex>=5)return;
};