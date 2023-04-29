let btn = document.querySelector(".main__form-btn");
btn.type = "reset";
btn.disabled = false;
let input = document.querySelector(".main__form-input");
input.disabled = false;

// Removing elements

function click() {
  input.value = "Hello"; // Sets text inside input
  btn.addEventListener("click", () => {
    for (const iterator of aTag) {
      iterator.style.display = "inline";
    }
    btn.disabled = true;
    input.disabled = true;
    input.value = "";
  });
}

click();

let aTag = document.querySelectorAll(".main__languages a:nth-child(2n)");
aTag = Array.from(aTag);
for (const iterator of aTag) {
  iterator.style.display = "none";
}
