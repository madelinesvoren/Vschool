var myHeader = document.getElementById("header");

myHeader.innerHTML += "<h1> JavaScript Made This! </h1>";

myHeader.innerHTML +=
  "<span id ='myName'>Madeline Svoren</span><span> </span><span>wrote the JavaScript</span>";

document.getElementById("header").style.textAlign = "center";

document.getElementById("myName").style.color = "magenta";

const message = document.getElementsByClassName("message");
message[0].textContent = "OMG I'm so excited about this weekend!";

message[1].textContent = "Why are you excited?";

message[2].textContent = "I have a knitting class";

message[3].textContent = "Wow, you're a thrill seeker";

const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", () => {
  console.log("clicked");
  const messages = document.querySelector(".messages").remove();
});

const themeDropDown = document.querySelector("#theme-drop-down");

themeDropDown.addEventListener("click", () => {
  console.log(themeDropDown.value);
  if (themeDropDown.value === "theme-two") {
    const messageLeft = document.getElementsByClassName("message left");
    Array.from(messageLeft).map((element) => {
      element.style.backgroundColor = "red";
    });
    const messageRight = document.getElementsByClassName("message right");
    Array.from(messageRight).map((element) => {
      element.style.backgroundColor = "black";
      element.style.color = "white";
    });
  }
});

themeDropDown.addEventListener("click", () => {
  console.log(themeDropDown.value);
  if (themeDropDown.value === "theme-one") {
    const messageLeft = document.getElementsByClassName("message left");
    Array.from(messageLeft).map((element) => {
      element.style.backgroundColor = "blue";
    });
    const messageRight = document.getElementsByClassName("message right");
    Array.from(messageRight).map((element) => {
      element.style.backgroundColor = "brown";
    });
  }
});