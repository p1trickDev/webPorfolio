// ...existing code...

// Ensure dark mode is the default mode
document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark");
  }
  const theme = localStorage.getItem("theme");
  const themeToggle = document.getElementById("theme-toggle");

  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.checked = true;
  } else {
    document.body.classList.add("light-mode");
    themeToggle.checked = false;
  }

  // Wrap your DOM-dependent code in an event listener:
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      // Theme Toggle (Dark/Light Mode)
      if (themeToggle.checked) {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }
    });
  }
});

// ...existing code...
