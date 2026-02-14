const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionContainer = document.getElementById("questionContainer");

noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * 250);
  const newY = Math.floor(Math.random() * 150);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

yesBtn.addEventListener("click", () => {
  window.location.href = "love.html";
});
