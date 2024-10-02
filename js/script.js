document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero-content h1");
    const ctaButton = document.querySelector(".cta-button");
  
    heroText.style.transform = "translateY(-20px)";
    heroText.style.opacity = "0";
    ctaButton.style.opacity = "0";
  
    setTimeout(() => {
      heroText.style.transition = "all 1s ease";
      heroText.style.transform = "translateY(0)";
      heroText.style.opacity = "1";
    }, 300);
  
    setTimeout(() => {
      ctaButton.style.transition = "all 1s ease";
      ctaButton.style.opacity = "1";
    }, 600);
  });
  