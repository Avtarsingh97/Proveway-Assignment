const radios = document.querySelectorAll('input[name="unit"]');
const total = document.getElementById("total");
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const radio = item.querySelector('input[type="radio"]');

  header.addEventListener("click", () => {
    accordionItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    radio.checked = true;

    total.innerText = `$${parseFloat(radio.dataset.price).toFixed(2)} USD`;
  });

  radio.addEventListener("change", () => {
    total.innerText = `$${parseFloat(radio.dataset.price).toFixed(2)} USD`;
  });
});
