// Select elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Add click event to each image
document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

// Close modal when clicking X
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close modal when clicking outside image
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});
// Close modal with Escape key