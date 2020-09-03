let numSquares=6;
let colors= generateRandomColors(numSquares);
let squares=document.querySelectorAll(".square");
let pickedColor=pickColor();
let colorDisplay=document.getElementById("colorDisplay");
let message=document.getElementById("message");
let h1=document.querySelector("h1");
let reset=document.getElementById("reset");
let easyBtn=document.getElementById("easyBtn");
let hardBtn=document.getElementById("hardBtn");
let numberOfSquares
easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else
			squares[i].style.display="none";
	}
})
hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}
})
reset.addEventListener("click",function(){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (let i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor= "SteelBlue";
	message.textContent="";
	this.textContent="New Colors";
	//reset.textContent
})
colorDisplay.textContent=pickedColor;
for (let i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		let clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			message.textContent="Correct!";
			changeColors(pickedColor);
			h1.style.backgroundColor=pickedColor;
			reset.textContent="Play Again?"
		}
		else{
			this.style.backgroundColor="#232323";
			message.textContent="Try Again";
		}
	})
}
function changeColors(color){
	for (let i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor=color;
	}
}
function pickColor(){
	//Math.floor(Math.random()*6+1);
	let random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(num){
	let arr=[];
	for (let i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	let r=Math.floor(Math.random()*256);
	let g=Math.floor(Math.random()*256);
	let b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}