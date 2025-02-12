const body = document.querySelector("body");

const button = document.createElement("button");
button.innerText = "펼치기";

const headerText = "주어진 임무를 수행하는 집요한 개발자";

const header = document.querySelector("header");

const h1 = document.createElement("h1");

let showing = false;

header.append(h1);

button.onclick = () => {
  h1.innerText = !showing ? headerText : "";
  button.innerText = showing ? "펼치기" : "접기";

  showing = !showing;
};

body.append(button);

const footer = document.querySelector("footer");
const ul = document.createElement("ul");

const list = ["github", "email", "mobile"];

for (let i = 0; i < list.length; i++) {
  const li = document.createElement("li");
  li.innerText = list[i];

  if (list[i] === "github") {
    li.innerText = "${li.innerText}: https://github.com/seungwon-code";
  }
  ul.append(li);
}
footer.append(ul);
