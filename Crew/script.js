const obj = {
  html_img: document.getElementById("img"),
  html_name: document.getElementById("name"),
  html_bio: document.getElementById("bio"),
  html_role: document.getElementById("role"),
  html_travel: document.getElementById("travel"),
  html_point: document.querySelectorAll(".point"),
};

const getInfo = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/bekkalomsadze/API-space-tourism/refs/heads/main/data.json",
  );

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const { crew } = await response.json();

  function defaultFunc(i) {
    obj.html_name.textContent = crew[i].name;
    obj.html_img.src = "." + crew[i].images.png;
    obj.html_bio.textContent = crew[i].bio;
    obj.html_role.textContent = crew[i].role;
  }

  defaultFunc(0);
  obj.html_point[0].classList.add("active");
  obj.html_point.forEach((button, index) => {
    button.addEventListener("click", () => {
      obj.html_point.forEach((btn) => btn.classList.remove("active"));
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
