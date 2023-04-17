const count = document.querySelector(".count");
const incBtn = document.querySelector(".btnInc");
const resetBtn = document.querySelector(".btnReset");
const decBtn = document.querySelector(".btnDec");
// const btn = document.querySelector(".btn");

let countNum = 0;

incBtn.onclick = function () {
  countNum += 1;
  count.innerHTML = countNum;
};
resetBtn.onclick = function () {
  countNum = 0;
  count.innerHTML = countNum;
};
decBtn.onclick = function () {
  countNum -= 1;
  count.innerHTML = countNum;
};
