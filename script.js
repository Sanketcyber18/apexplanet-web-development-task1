
const welcomeButton = document.getElementById("welcomeBtn");

welcomeButton.addEventListener("click", function () {
  const message = document.createElement("p");
  message.textContent = "Welcome! Thanks for visiting my first web development project.";
  message.style.marginTop = "15px";
  message.style.color = "#7dd3fc";
  message.style.fontWeight = "bold";

  welcomeButton.insertAdjacentElement("afterend", message);
  welcomeButton.disabled = true;
});

