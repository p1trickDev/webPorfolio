// Function to load HTML content into a placeholder
function loadHTML(url, placeholderId) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      const placeholder = document.getElementById(placeholderId);
      if (placeholder) {
        placeholder.insertAdjacentHTML("beforeend", data);
      } else {
        console.error(`Placeholder with ID '${placeholderId}' not found.`);
      }

      // Initialize specific functionalities based on the loaded file
      if (url === "./HTML/navbar.html") {
        initializeNavbar();
      }
      if (url === "./HTML/projects.html") {
        initializeProjects();
      }
      if (url === "./HTML/footer.html") {
        initializeFooter();
      }
    })
    .catch((error) => console.error(`Error loading ${url}:`, error));
}

// Function to initialize navbar event listeners
function initializeNavbar() {
  const toggleButton = document.getElementById("navbar-toggle");
  const navbarMenu = document.getElementById("navbar-menu");
  const themeToggle = document.getElementById("theme-toggle");
  const container = document.querySelector(".container");
  const navbarLinks = document.querySelectorAll(".navbar-link");

  if (
    !toggleButton ||
    !navbarMenu ||
    !themeToggle ||
    !container ||
    !navbarLinks
  ) {
    console.error("Navbar elements not found.");
    return;
  }

  // Toggle Navbar Menu (for mobile)
  toggleButton.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
  });

  // Initialize Theme
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark");
  }
  const theme = localStorage.getItem("theme");

  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.checked = true;
  } else {
    document.body.classList.add("light-mode");
    themeToggle.checked = false;
  }

  themeToggle.addEventListener("click", () => {
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

  // Smooth Scroll for Navbar Links
  navbarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");

      if (href.startsWith("#")) {
        // Smooth Scroll to Section
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjust for fixed navbar height
            behavior: "smooth",
          });

          // Optionally, update the URL hash without jumping
          history.pushState(null, null, href);
        }
      }

      // Close the navbar menu on mobile after clicking
      if (navbarMenu.classList.contains("active")) {
        navbarMenu.classList.remove("active");
      }
    });
  });
}

// Function to initialize Projects (ensure project.js functionalities are active)
function initializeProjects() {
  if (typeof initializeProjectModal === "function") {
    initializeProjectModal();
  } else {
    console.error("initializeProjectModal function not found.");
  }
}

// Function to initialize Footer functionalities
function initializeFooter() {
  const footer = document.getElementById("page-footer");

  if (!footer) {
    console.error("Footer element not found.");
    return;
  }
  console.log("Footer initialized.");

  // Function to show the footer
  function showFooter() {
    footer.classList.add("visible");
  }

  // Function to hide the footer
  function hideFooter() {
    footer.classList.remove("visible");
  }

  // Detect Scroll to Bottom
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    console.log(
      `ScrollTop: ${scrollTop}, WindowHeight: ${windowHeight}, DocHeight: ${docHeight}`
    );

    if (scrollTop + windowHeight >= docHeight - 5) {
      showFooter();
    } else {
      hideFooter();
    }
  });
}

// Asynchronous function to load all sections in the desired order
async function loadSections() {
  try {
    await loadHTML("./HTML/navbar.html", "navbar-placeholder");
    await loadHTML("./HTML/home.html", "main-content");
    await loadHTML("./HTML/projects.html", "main-content");
    await loadHTML("./HTML/contact.html", "main-content");
    await loadHTML("./HTML/footer.html", "footer-placeholder");
  } catch (error) {
    console.error("Error loading sections:", error);
  }
}

// Load Navbar, Footer, and All Sections on Page Load
document.addEventListener("DOMContentLoaded", () => {
  loadSections();
});
