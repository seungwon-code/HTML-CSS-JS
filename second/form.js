const form = document.querySelector("body>form");

form.style.border = "1px solid";

form.addEventListener("submit", (e) => {
  e.preventDafault();
  const name = document.querySelector("#r");
  console.log(name.value);

  const item = document.querySelector("#i");
  console.log(item.value);

  const address = document.querySelector("#a");
  console.log(address.value);

  const message = `${name}님, 저희 천혜농을 찾아주셔서 감사합니다. 선택하신 상품의 가격은 ${item}원 입니다.
    받으실 주소는 ${address}가 맞으신가요?`;

  if (confirm(message)) {
    alert("곧 배송이 시작됩니다");
  } else {
    alert("다시 한번 생각해보세요. 천혜향 개꿀맛");
  }
});
