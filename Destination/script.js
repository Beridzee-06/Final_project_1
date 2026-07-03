const obj = {
  html_img: document.getElementById("img"),
  html_name: document.getElementById("name"),
  html_desc: document.getElementById("desc"),
  html_dist: document.getElementById("dist"),
  html_travel: document.getElementById("travel"),
  html_planet: document.querySelectorAll(".planets"),
};

const getInfo = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/bekkalomsadze/API-space-tourism/refs/heads/main/data.json",
  );
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const { destinations } = await response.json();
  function defaultFunc(i) {
    obj.html_name.textContent = destinations[i].name;
    obj.html_img.src = "." + destinations[i].images.png;
    obj.html_desc.textContent = destinations[i].description;
    obj.html_dist.textContent = destinations[i].distance;
    obj.html_travel.textContent = destinations[i].travel;
  }

  obj.html_planet[0].classList.add("active");
  defaultFunc(0);
  obj.html_planet.forEach((button, index) => {
    button.addEventListener("click", () => {
      obj.html_planet.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      defaultFunc(index);
    });
  });
};

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

getInfo();
