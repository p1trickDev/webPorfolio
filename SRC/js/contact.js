document.addEventListener("DOMContentLoaded", () => {
  const rippleLinks = document.querySelectorAll('.ripple-link');

  rippleLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Remove any existing ripples
      const existingRipple = this.querySelector('.ripple');
      if (existingRipple) {
        existingRipple.remove();
      }

      // Get the click coordinates relative to the link
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create the ripple element
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      // Append the ripple to the link
      this.appendChild(ripple);

      // Remove the ripple after animation
      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    });
  });
});
