
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".upper").classList.toggle("tilted-down");
  document.querySelector(".middle").classList.toggle("hidden");
  document.querySelector(".lower").classList.toggle("tilted-up");
  document.querySelector(".navbar").classList.toggle("expanded");
});
