// --------------- Adding a Scroll-Bar inside aside tag ----------------
let aside = document.querySelector("aside");
aside.style.overflowY = "scroll";

// horizontal-line
let hr = document.createElement("hr");
hr.className = "hr-line";
aside.append(hr);

// h2
let h2 = document.createElement("h2");
h2.innerText = "My name is Aditya";
h2.className = "new-head";
aside.append(h2);

// p
let p = document.createElement("p");
p.className = "new-p";
p.textContent = "I'm doing my B.E in JSSATEB";
aside.append(p);
//  ---------------     ----------------

// Assignment 8.3
let btn = document.querySelector(".navbar-toggler");
btn.addEventListener("click", () => {
  let div = document.querySelector(".collapse");
  div.style.display = "block";
});
