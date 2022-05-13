var goombaInputElem = document.querySelector("#goomba");
var bobombInputElem = document.querySelector("#bobomb");
var cheepInputElem = document.querySelector("#cheep");

goombaInputElem.addEventListener("change", function() {
  var goombaInputValue = parseInt(goombaInputElem.value);
  var bobombInputValue = parseInt(bobombInputElem.value);
  var cheepInputValue = parseInt(cheepInputElem.value);
  if (isNaN(goombaInputValue) || isNaN(bobombInputValue) || isNaN(cheepInputValue)) {
    document.querySelector("#mytotal").innerHTML = 0;
  } else {
    document.querySelector("#mytotal").innerHTML = (goombaInputValue * 5) + (bobombInputValue * 7) + (cheepInputValue * 11);
    document.querySelector("#num1").innerHTML = (goombaInputValue * 5);

    document.querySelector("#total").style.color = "#45efef";
    document.querySelector("#total").style.fontSize = "60px";
    
  }

});

bobombInputElem.addEventListener("change", function george() {
  var goombaInputValue = parseInt(goombaInputElem.value);
  var bobombInputValue = parseInt(bobombInputElem.value);
  var cheepInputValue = parseInt(cheepInputElem.value);
  if (isNaN(goombaInputValue) || isNaN(bobombInputValue) || isNaN(cheepInputValue)) {
    document.querySelector("#mytotal").innerHTML = 0;
  } else {
    document.querySelector("#mytotal").innerHTML = (goombaInputValue * 5) + (bobombInputValue * 7) + (cheepInputValue * 11);
    document.querySelector("#num2").innerHTML = (bobombInputValue * 7);

    document.querySelector("#total").style.color = "#23ffef";
    document.querySelector("#total").style.fontSize = "50px";

    
  }

bobombInputElem.addEventListener.addEventListener("keyup" ,george)
});

cheepInputElem.addEventListener("change", function() {
  var goombaInputValue = parseInt(goombaInputElem.value);
  var bobombInputValue = parseInt(bobombInputElem.value);
  var cheepInputValue = parseInt(cheepInputElem.value);
  if (isNaN(goombaInputValue) || isNaN(bobombInputValue) || isNaN(cheepInputValue)) {
    document.querySelector("#mytotal").innerHTML = 0;
  } else {
    document.querySelector("#mytotal").innerHTML = (goombaInputValue * 5) + (bobombInputValue * 7) + (cheepInputValue * 11);
    document.querySelector("#num3").innerHTML = (cheepInputValue * 11);

    document.querySelector("#total").style.color = "#45efef";
    document.querySelector("#total").style.fontSize = "70px";
  }

});

var goombaInputValue = parseInt(goombaInputElem.value);
var bobombInputValue = parseInt(bobombInputElem.value);
var cheepInputValue = parseInt(cheepInputElem.value);
if (isNaN(goombaInputValue) || isNaN(bobombInputValue) || isNaN(cheepInputValue)) {
  document.querySelector("#mytotal").innerHTML = 0;
} else {
  document.querySelector("#mytotal").innerHTML = (goombaInputValue * 5) + (bobombInputValue * 7) + (cheepInputValue * 11);

}