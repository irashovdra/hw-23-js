const images = document.querySelectorAll(".image");
const fullImageContainer = document.querySelector(".full-image-container");
const fullImage = document.querySelector(".full-image");
let currentImageIndex = 0;

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    fullImage.src = image.src;
    fullImageContainer.style.display = "block";
    currentImageIndex = index;
  });
});

fullImageContainer.addEventListener("click", () => {
  fullImageContainer.style.display = "none";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    fullImage.src = images[currentImageIndex].src;
  } else if (event.key === "ArrowRight") {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    fullImage.src = images[currentImageIndex].src;
  }
});
