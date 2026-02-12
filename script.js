const form = document.getElementById("newsletter-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailInput = form.querySelector('input[type="email"]');

  if (emailInput.checkValidity()) {
    form.classList.add("hide");

    setTimeout(() => {
      form.style.display = "none";
      successMessage.classList.add("active");
    }, 400);
  }
});
