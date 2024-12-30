document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    // Navbar scroll behavior
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-visible");
        } else {
            if (!navMenu.classList.contains("active")) {
                navbar.classList.remove("navbar-visible");
            }
        }
    });

    // Hamburger menu functionality
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        document.body.classList.toggle("menu-open");

        if (hamburger.classList.contains("active")) {
            hamburger.innerHTML = '<i class="fas fa-times text-white text-3xl"></i>';
            navbar.classList.add("navbar-visible");
        } else {
            hamburger.innerHTML = '<i class="fas fa-bars text-white text-3xl"></i>';
            if (window.scrollY <= 50) {
                navbar.classList.remove("navbar-visible");
            }
        }
    });

    // Close menu when clicking menu items
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((item) => {
        item.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.classList.remove("menu-open");
            hamburger.innerHTML = '<i class="fas fa-bars text-white text-3xl"></i>';

            if (window.scrollY <= 50) {
                navbar.classList.remove("navbar-visible");
            }
        });
    });
});