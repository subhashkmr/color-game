var colors=getRandomColors(6);
var square=document.querySelectorAll(".square");
var p=document.querySelector("#check");
var easbtn =document.querySelector("#easy");
var harbtn =document.querySelector("#hard");
var selected=document.querySelector(".selected");
pickedColor=randomNumber();
var display=document.querySelector("#sx");
var h1=document.querySelector("h1");
var reset=document.querySelector("#new")
display.textContent=pickedColor;
easbtn.addEventListener("click",function(){
	harbtn.classList.remove("selected");
	easbtn.classList.add("selected");
	colors=getRandomColors(3);
	pickedColor=randomNumber();
    display.textContent=pickedColor;
    p.textContent="";
    for (var i =0; i <square.length; i++) { 
    	if(colors[i]){
   square[i].style.backgroundColor=colors[i];}
   else{square[i].style.display="none";
    
   }

}});
harbtn.addEventListener("click",function(){
	easbtn.classList.remove("selected");
	harbtn.classList.add("selected");
	colors=getRandomColors(6);
	pickedColor=randomNumber();
    display.textContent=pickedColor;
    for (var i =0; i <square.length; i++) {
    	 p.textContent="";
   square[i].style.backgroundColor=colors[i];
   square[i].style.display="block";
	
}});
reset.addEventListener("click",function(){
   colors=getRandomColors(6);
   pickedColor=randomNumber();
   display.textContent=pickedColor;
   for (var i=0;i<square.length;i++) {
   	 p.textContent="";
   	square[i].style.backgroundColor=colors[i];
   }
   h1.style.backgroundColor=steelblue;
});
for (var i =0; i <square.length; i++) {
   square[i].style.backgroundColor=colors[i];
square[i].addEventListener("click",function(){
	var clickedColor=this.style.backgroundColor;
	if(clickedColor===pickedColor){
		p.textContent="correct!";
		changeColor(clickedColor);
		h1.style.backgroundColor=pickedColor;
	}
	else{
		this.style.backgroundColor="#232323";
		p.textContent="try again!";
	}
});}
function changeColor(Color){
	for(i=0;i<square.length;i++){
	square[i].style.backgroundColor=Color;
}}



function randomNumber(){
	var numr=Math.floor(Math.random() * colors.length);
	return colors[numr];
}

function getRandomColors(num){
arr=[];
for(var i=0;i<num;i++){
 arr.unshift(RandomColors())
}
return arr;
}
function RandomColors(){
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
 return  "rgb(" + r + ", " + g + ", " + b + ")";
}
