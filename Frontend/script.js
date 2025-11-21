document.addEventListener("DOMContentLoaded", () => {
  const filterInput = document.getElementById("filter-input");
  const cards = document.querySelectorAll(".card");

  filterInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();

    cards.forEach((card) => {
      const name = card.getAttribute("data-name").toLowerCase();
      if (name.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });


});
