const range = document.querySelector('.order__progress');
const output = document.querySelector('.order__output');
output.textContent = range.value + '%';

range.addEventListener('input', () => {
    output.textContent = range.value + '%';
});

document.querySelectorAll(".custom-select").forEach(select => {
  const trigger = select.querySelector(".custom-select__trigger");
  trigger.addEventListener("click", () => {
    select.classList.toggle("open");
  });

  select.querySelectorAll(".custom-option").forEach(option => {
    option.addEventListener("click", () => {
      trigger.querySelector("span").textContent = option.textContent;
      select.classList.remove("open");
    });
  });
});

window.addEventListener("click", e => {
  document.querySelectorAll(".custom-select").forEach(select => {
    if (!select.contains(e.target)) {
      select.classList.remove("open");
    }
  });
});
