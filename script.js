document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      message.textContent = "Wiadomość została wysłana! (wersja demonstracyjna)";
      form.reset();
    });
  }
});
