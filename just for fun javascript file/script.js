var num = prompt('');
var randomNum = Math.random();
let a = 5;

var totalNum = num + randomNum;



var text = "";
var i = 0;
while (i < 20) {
  
  text += "<br>The number is " + totalNum;
  i+=1;
  
}
document.getElementById("demo").innerHTML = text;