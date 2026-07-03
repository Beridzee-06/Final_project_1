const obj = {
  html_img: document.getElementById("img"),
  html_name: document.getElementById("name"),
  html_desc: document.getElementById("desc"),
  html_number: document.querySelectorAll(".number"),
};

const getInfo = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/bekkalomsadze/API-space-tourism/refs/heads/main/data.json",
  );

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const { technology } = await response.json();

  function defaultFunc(i) {
    obj.html_name.textContent = technology[i].name;
    obj.html_img.src = "." + technology[i].images.portrait;
    obj.html_desc.textContent = technology[i].description;
  }
  defaultFunc(0);

  obj.html_number[0].classList.add("active");

  obj.html_number.forEach((button, index) => {
    button.addEventListener("click", () => {
      obj.html_number.forEach((btn) => btn.classList.remove("active"));

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
