/**
* Template Name: Dewi
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
*/

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  console.log("DOM fully loaded and parsed");

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const header = document.querySelector("#header");
    if (!header) return;
    
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  
  // Apply background change when scrolling
  window.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);
  
  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", function () {
      document.querySelector("body").classList.toggle("mobile-nav-active");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        document.querySelector("body").classList.remove("mobile-nav-active");
      }
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    function toggleScrollTop() {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", toggleScrollTop);
  }

  /**
   * Init AOS (Animate On Scroll) library
   */
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }

  /**
   * Initiate GLightbox
   */
  if (typeof GLightbox !== "undefined") {
    const glightbox = GLightbox({
      selector: ".glightbox",
    });
  }

  /**
   * Init Swiper sliders
   */
  function initSwiper() {
    if (typeof Swiper !== "undefined") {
      document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );
        new Swiper(swiperElement, config);
      });
    }
  }
  window.addEventListener("load", initSwiper);

  /**
   * Init Isotope layout and filters
   */
  if (typeof Isotope !== "undefined") {
    document.querySelectorAll(".isotope-layout").forEach((isotopeItem) => {
      let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
      let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
      let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

      let initIsotope;
      imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
        initIsotope = new Isotope(isotopeItem.querySelector(".isotope-container"), {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        });
      });

      isotopeItem.querySelectorAll(".isotope-filters li").forEach((filters) => {
        filters.addEventListener("click", function () {
          isotopeItem
            .querySelector(".isotope-filters .filter-active")
            .classList.remove("filter-active");
          this.classList.add("filter-active");
          initIsotope.arrange({ filter: this.getAttribute("data-filter") });
          if (typeof AOS !== "undefined") {
            AOS.refresh();
          }
        });
      });
    });
  }

  /**
   * Scrollspy for navigation
   */
  let navmenulinks = document.querySelectorAll(".navmenu a");
  function navmenuScrollspy() {
    let scrollPosition = window.scrollY + 300; // Offset to detect section in viewport
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("#navmenu a");
  
    sections.forEach((section) => {
      let sectionTop = section.offsetTop;
      let sectionHeight = section.offsetHeight;
  
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((navLink) => navLink.classList.remove("active"));
        let activeLink = document.querySelector(`#navmenu a[href="#${section.id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  }
  
  // Trigger the function on scroll and on load
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);
  
  
});

