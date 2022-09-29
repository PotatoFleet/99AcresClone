const navBar = document.querySelector("nav");
const searchInput = document.querySelector(".search__input");
const searchDropdown = document.querySelector(".search__dropdown");

searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value;
  const dropdownLocations = [];
  for (const location of locations) {
    if (location.toLowerCase().startsWith(value.toLowerCase())) {
      dropdownLocations.push(location);
    }
  }
  searchDropdown.innerHTML = "";
  for (let i = 0; i < Math.min(dropdownLocations.length, 5); i++) {
    const locationEl = document.createElement("div");
    locationEl.classList.add("clickable");
    locationEl.textContent = dropdownLocations[i];
    locationEl.addEventListener("click", () => {
      searchInput.value = locationEl.textContent;
      searchDropdown.innerHTML = "";
    });
    searchDropdown.appendChild(locationEl);
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY != 0) {
    navBar.classList.add("show-background");
  } else {
    navBar.classList.remove("show-background");
  }
});
