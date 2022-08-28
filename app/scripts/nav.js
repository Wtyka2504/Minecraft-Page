(() => {
  const menuBtn = document.querySelector(".btn-menu");
  const menu = document.querySelector(".nav__tile--center");

  menuBtn.addEventListener("click", () => menu.classList.toggle("active"));
})();
