const button = document.querySelector("#messageButton");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "The static JavaScript file is connected!";
});
