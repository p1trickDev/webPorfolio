document.addEventListener("DOMContentLoaded", () => {
  initializeProjectModal();
});

function initializeProjectModal() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = item.src;
      captionText.textContent = item.alt;
    });
  });

  // Close modal when X is clicked
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Export the function if using modules, or attach to window
window.initializeProjectModal = initializeProjectModal;
