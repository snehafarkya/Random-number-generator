const GBtn = document.querySelector(".generateBtn");

GBtn.addEventListener("click", gRandomNum);

function gRandomNum() {
  const fromNum = document.querySelector(".fromNum").value;
  const toNum = document.querySelector(".toNum").value;

  rNum = Math.floor(Math.random() * parseInt(toNum));

  if (rNum >= parseInt(fromNum)) {
    const randomNumEl = document.querySelector(".randomNum");
    randomNumEl.innerHTML = rNum;
  }
}