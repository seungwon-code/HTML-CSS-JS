const button = document.querySelector("button");

let showing = false;

let id = null;
button.onclick = () => {
  const h1 = document.querySelector("h1");
  const time = new Date().toLocaleTimeString();
  h1.innerText = !showing ? time : " 지금 몇시?";
  button.innerText = !showing ? "시간끄기" : "시간확인";

  if (!showing) {
    id = setInterval(() => {
      const h1 = document.querySelector("h1");
      const time = new Date().toLocaleTimeString();
      h1.innerText = time;
    }, 1000);
  } else {
    clearInterval(id);
  }
  showing = !showing;
};
