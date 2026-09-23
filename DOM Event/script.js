const p3 = document.querySelector(".p3");

function ubahWarnaP2() {
  p2.style.backgroundColor = "lightblue";
}

// oncliknya disimpan di HTML (tidak disarankan)
function ubahWarnaP3() {
  p3.style.backgroundColor = "orange";
}

// onclicknya di simpan di script
const p2 = document.querySelector(".p2");
p2.onclick = ubahWarnaP2;

// event Listener
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const teksLiBaru = document.createTextNode("Item baru");
  liBaru.appendChild(teksLiBaru);
  ul.appendChild(liBaru);
});
