const Text = document.querySelector("#cel");
const Btn = document.querySelector("button");
const tText = document.querySelector("#far");
Btn.addEventListener("click", () => {
  let text = Text.value.trim();
  let ans = text * (9 / 5) + 32;
  console.log(ans);
  tText.value = ans;
});
