const images = document.querySelectorAll("img");

const createTooltipAboveImage = (image, label) => {
  const tooltip = document.createElement("div");
  tooltip.className = "image-tooltip";
  tooltip.innerText = label;

  const rect = image.getBoundingClientRect();
  tooltip.style.position = "absolute";
  tooltip.style.top = rect.top + window.scrollY - 30 + "px";
  tooltip.style.left = rect.left + window.scrollX + "px";
  tooltip.style.background = "white";
  tooltip.style.color = "black";
  tooltip.style.padding = "5px";
  tooltip.style.borderRadius = "5px";
  tooltip.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";

  document.body.appendChild(tooltip);

  image.addEventListener("mouseenter", () => {
    tooltip.style.display = "block";
  });

  image.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
};

images.forEach((image) => {
  const label = "Real";
  createTooltipAboveImage(image, label);
});
