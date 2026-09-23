document.addEventListener("DOMContentLoaded", () => {
  // Select all the close buttons
  const closeButtons = document.querySelectorAll(".close");

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Find the parent card element and remove it
      const card = button.closest(".card");
      card.style.display = "none";
    });
  });
});
//
