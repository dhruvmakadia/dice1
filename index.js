var Player1= prompt("Enter name of Player1");
var Player2= prompt("Enter name of Player2");

document.querySelectorAll("p")[0].innerHTML=Player1;
document.querySelectorAll("p")[1].innerHTML=Player2;

var num=Math.floor(Math.random()*6)+1;
var image="images/dice"+num+".png";
var dice=document.querySelectorAll("img")[0];
dice.setAttribute("src",image);

var num1=Math.floor(Math.random()*6)+1;
var image1="images/dice"+num1+".png";
var dice1=document.querySelectorAll("img")[1];
dice1.setAttribute("src",image1);

if(num>num1){
  document.querySelector("h1").innerHTML=Player1+" Wins !"
}
else if(num1>num){
  document.querySelector("h1").innerHTML=Player2+" Wins !"
}
else{
  document.querySelector("h1").innerHTML="draw !"
}
