# All JS code is written here

### First assignment

```javascript
// Task1 Output
let ul = document.querySelectorAll("ul");
ul = Array.from(ul);
let li = document.createElement("li");
li.innerText = "Hire me";
ul.append(li);
```

```javascript
// Task2 output
let input = document.querySelector("input");
input.placeholder = "Search my Project";
```

```javascript
// Task3 output
let div = document.querySelectorAll(".hero-left-section");
div = Array.from(div);
div[0].querySelectorAll("span");
div = div[0];
span = div.querySelectorAll("span");
span = Array.from(span);
span[3].innerText = "Ineuron intelligence Pvt Ltd";
```

```javascript
// Task5 output
button = document.createElement("button");​
let div = document.querySelector(".hero-right-section-btns");
button.innerText = 'Support Me';
div.append(button);
```

### 2nd Assignment

```javascript
// Task1 output
let li = document.querySelector("li:nth-child(3)");
li.innerText = "Projects";
```

```javascript
// Task2 output
let div = document.querySelector(".accrodian-wrapper");
div = document.querySelector(".accordian-wrapper");
let div1 = document.createElement("div");
div1.innerHTML = "<h3>Skills</h3>";
div.append(div1);
div1.className = "accordian";
let p = document.createElement("p");
p.innerText =
  "I possess a very good command over the Full Stack development technologies like MERN which can be seen in my work at Github";
div1.append(p);
p.style.display = "inline";

div.forEach((purplediv) => {
  purplediv.style.backgroundColor = "lavender";
});
```
