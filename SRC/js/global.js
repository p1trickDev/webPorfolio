// ...existing code...

// Theme Toggle (Dark/Light Mode)
themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});

// ...existing code...
