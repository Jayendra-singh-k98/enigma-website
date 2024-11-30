document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const navbarWrapper = document.querySelector(".navbar-wrapper");
    const menu = document.querySelector(".menu");
  
    const changeBackground = () => {
      if (window.scrollY >= 10) {
        navbar.classList.add("active");
      } else {
        navbar.classList.remove("active");
      }
    };
  
    const toggleMenu = () => {
      navbarWrapper.classList.toggle("active");
    };
  
    const closeNavbar = () => {
      navbarWrapper.classList.remove("active");
    };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    // Event Listeners
    window.addEventListener("scroll", changeBackground);
    menu.addEventListener("click", toggleMenu);
  
    // Close menu on clicking any link
    document.querySelectorAll(".nav-items ul li a").forEach((link) => {
      link.addEventListener("click", closeNavbar);
    });
  });
  