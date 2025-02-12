const myString = "hsw";

const body = document.querySelector("body");

const p = document.createElement("p");

p.innerText = myString;

p.style.color = "blue";
p.className = "header";

body.append(p);
