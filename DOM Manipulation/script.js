// DOM MANIPULATION Element
// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>SARDIANTO SIHOTANG</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "Hello world";

// const judul = document.querySelector("#judul");
// judul.style.color = "lightblue";
// judul.style.backgroundColor = "red";

// menambah atribute
// const judul = document.getElementsByTagName("h1")[0];
// const a = document.querySelector("section#a a");
// const p2 = document.querySelector(".p2");
// p2.setAttribute("class", "label");

// melihat isi atribute
// judul.getAttribute["id"];

// menghapus atribute
// a.removeAttribute["href"];

// DOM MANIPULATION Node
// Buat element baru
// Buat elemen paragraf baru
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf baru");
pBaru.appendChild(teksPBaru);

// Simpan elemen paragraf baru di akhir section dengan id "a"
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// Buat elemen list item baru
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("Item baru");
liBaru.appendChild(teksLiBaru);

// Dapatkan referensi ke elemen ul dan elemen li kedua
const ul = document.querySelector("#b ul");
const li2 = document.querySelector("#b ul li:nth-child(2)");

ul.insertBefore(liBaru, li2);

// Menghapus child
const link = document.getElementsByTagName("a")[0];

sectionA.removeChild(link);

// Mengganti
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul baru");
h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
