// Ambil elemen gambar besar
const besar = document.querySelector(".besar");

// Ambil semua elemen gambar thumbnail
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", function () {
    // Ganti src gambar besar
    besar.src = this.src;

    // Tambahkan kelas fade untuk animasi
    besar.classList.add("fade");
    setTimeout(() => {
      besar.classList.remove("fade");
    }, 500);

    // Hapus kelas aktif dari semua thumbnail
    thumbs.forEach((thumb) => {
      thumb.classList.remove("active");
    });

    // Tambahkan kelas aktif ke thumbnail yang diklik
    this.classList.add("active");
  });
});
