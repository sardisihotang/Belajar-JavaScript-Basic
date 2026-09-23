const TUbahWarna = document.getElementById("tUbahWarna");
TUbahWarna.onclick = function () {
  //   document.body.style.backgroundColor = "lightblue";
  //   document.body.setAttribute("class", "biru-muda");
  document.body.classList.toggle("biru-muda");
};

const tAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute("type", "button");
TUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
  document.body.classList.remove("biru-muda");
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

function updateBackgroundColor() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

sMerah.addEventListener("input", updateBackgroundColor);
sHijau.addEventListener("input", updateBackgroundColor);
sBiru.addEventListener("input", updateBackgroundColor);

document.body.addEventListener("mousemove", function (event) {
  // Posisi mouse
  const xPost = Math.round((event.clientX / window.innerWidth) * 255);
  const yPost = Math.round((event.clientY / window.innerHeight) * 255);

  // Mengatur warna latar belakang berdasarkan posisi mouse
  document.body.style.backgroundColor = `rgb(${xPost}, ${yPost}, 100)`;
});
