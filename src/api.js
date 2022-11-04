document.querySelector(".header_user").addEventListener("click", (e) => {
  const DOMData = e.target.dataset;
  const next = e.target.nextElementSibling;
  if (DOMData.add && /^[a-zA-Z]+$/.test(next.value)) {
    if (box.data[DOMData.add].some((l) => l === next.value)) {
      alert(`Tal método ya existe 🙄:\n**${next.value}** 😱`);
    } else {
      box.data[DOMData.add].push(next.value);
      box.charts[DOMData.add].update();
    }
  }
  if (next) next.value = ""; // Si existe un hermano se le borra su "value"
});
