document.addEventListener("DOMContentLoaded", () => {
  initializeProjectModal();
});

function initializeProjectModal() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  if (!modal || !modalImg || !captionText) {
    console.error("Modal elements not found.");
    return;
  }

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      modal.classList.add("show"); // Add class to display modal
      modalImg.src = item.src;
      captionText.textContent = item.alt;
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    });
  });

  if (closeBtn) {
    // Close modal when X is clicked
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show"); // Remove class to hide modal
      document.body.style.overflow = "auto"; // Restore background scrolling
    });
  } else {
    console.error("Close button not found.");
  }

  // Close modal when clicking outside the image
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show"); // Remove class to hide modal
      document.body.style.overflow = "auto"; // Restore background scrolling
    }
  });
}

// Export the function if using modules, or attach to window
window.initializeProjectModal = initializeProjectModal;
