// script.js

let winCount = 0;
let lossCount = 0;
let drawCount = 0;

const winCountElement = document.getElementById("win-count");
const lossCountElement = document.getElementById("loss-count");
const drawCountElement = document.getElementById("draw-count");

const pilihan = document.querySelectorAll(".gajah, .orang, .semut");
pilihan.forEach((pilihan) => {
  pilihan.addEventListener("click", () => {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pilihan.className;

    const hasil = getHasil(pilihanPlayer, pilihanKomputer);

    putar();

    setTimeout(() => {
      document
        .querySelector(".img-computer")
        .setAttribute("src", "image/" + pilihanKomputer + ".png");

      if (hasil === "MENANG") {
        winCount++;
        winCountElement.textContent = winCount;
      } else if (hasil === "KALAH") {
        lossCount++;
        lossCountElement.textContent = lossCount;
      } else if (hasil === "SERI") {
        drawCount++;
        drawCountElement.textContent = drawCount;
      }

      document.querySelector(".info").innerHTML = hasil;
    }, 1000);
  });
});

function getPilihanKomputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(player, computer) {
  if (player == computer) return "SERI";
  if (player == "gajah") return computer == "orang" ? "KALAH" : "MENANG";
  if (player == "orang") return computer == "gajah" ? "MENANG" : "KALAH";
  if (player == "semut") return computer == "orang" ? "MENANG" : "KALAH";
}

function putar() {
  const imgComputer = document.querySelector(".img-computer");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "image/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "image/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "image/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "image/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
