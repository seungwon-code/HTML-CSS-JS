const form = document.querySelector("body>form");

form.style.border = "1px solid";

form.addEventListener("submit", () => {
  const ID = document.querySelector("#id");
  if ("#id" < 4) {
  }
  console.log(ID.value);

  const WD = document.querySelector("#wd");
  console.log(WD.value);

  const CheckWD = document.querySelector("#checkwd");
  console.log(CheckWD.value);

  const Birth = document.querySelector("#birth");
  console.log(Birth.value);
});

const message = `저희 회원가입을 이용해주셔서 감사합니다. `;
if (confirm(submit)) {
  alert("회원가입을 축하합니다.");
}
