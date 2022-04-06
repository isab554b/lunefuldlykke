function showFilters() {
  var fSection = document.getElementById("filterSection");
  if (fSection.classList.contains("hidden")) {
    fSection.classList.remove("hidden");
    fSection.classList.add("block");
  } else {
    fSection.classList.add("hidden");
  }
}

function applyFilters() {
  document
    .querySelectorAll("input[type=checkbox]")
    .forEach((el) => (el.checked = false));
}

function closeFilterSection() {
  var fSection = document.getElementById("filterSection");
  fSection.classList.add("hidden");
}
