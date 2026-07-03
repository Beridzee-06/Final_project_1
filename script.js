(() => {
  const btn = document.getElementById("explore");
  const burger_menu = document.getElementById("burger_menu");
  const exit_btn = document.getElementById("exit");
  const nav = document.getElementById("nav");

  exit_btn.addEventListener("click", () => {
    nav.classList.add("hidden");
  });
  burger_menu.addEventListener("click", () => {
    nav.classList.remove("hidden");
  });
})();
