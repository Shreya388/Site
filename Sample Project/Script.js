

var fruits = ["apple", "mango", "orange", "volvo", "farari"];
var text = "";
var i;


for (i = 0; i < fruits.length; i++) {
    text += fruits[i] + "<br>";
  
}

document.getElementById("demo").innerHTML = text;
console.log();
