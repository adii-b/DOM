// Pro subscription button
let nav = document.querySelector(".nav-center > div:nth-child(3)");
let button = document.createElement("a");
button.className = "btn";
button.innerText = "Pro Subscription";
nav.append(button);

// Chinese(7)
let div = document.querySelector(".tags-container div:nth-child(2)");
let a = document.createElement("a");
a.innerText = "Chinese(7)";
div.append(a);

// Add 6th card
let div1 = document.querySelector(".recipe-gallery");
let newDiv = document.createElement("div");
newDiv.className = "card";
newDiv.innerHTML = "<h2>add 6th card here</h2>";
div1.append(newDiv);

// My name
let p = document.querySelector("p a");
p.textContent = "Aditya Bharadwaj";
