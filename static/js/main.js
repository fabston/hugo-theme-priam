function createToggle(accordion) {
  const accordianSection = accordion.querySelector("section")
  const button = accordion.querySelector(".accordion-button")
  button.addEventListener("click", () => toggleAccordion(accordianSection))
}

function toggleAccordion(accordianSection) {
  event.stopPropagation()
  accordianSection.classList.toggle("ac_hidden")
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".accordion").forEach((accordion) => createToggle(accordion))
  const categorySelect = document.getElementById("category-select")
  if (categorySelect != null) {
    categorySelect.addEventListener("focus", () => categorySelectorFocused())
    setSelectedCategory()
  }
})