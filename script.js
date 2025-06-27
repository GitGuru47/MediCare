document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const msg = document.getElementById("form-message");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      msg.textContent = "Thank you! We'll get back to you shortly.";
      form.reset();
    });
  }
});
