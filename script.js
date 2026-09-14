(function () {
  "use strict";

  var config = window.HAZY_DAISY_CONFIG || {};

  function isReady(value) {
    return typeof value === "string" &&
      value.trim() !== "" &&
      value.indexOf("YOUR_") !== 0 &&
      value.indexOf("example.com") === -1;
  }

  function setExternalLinks(selector, value) {
    document.querySelectorAll(selector).forEach(function (link) {
      if (!isReady(value)) {
        link.hidden = true;
        return;
      }

      link.href = value;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
  }

  setExternalLinks("[data-shop-link]", config.etsyUrl);
  setExternalLinks("[data-instagram-link]", config.instagramUrl);
  setExternalLinks("[data-tiktok-link]", config.tiktokUrl);

  document.querySelectorAll("[data-location]").forEach(function (element) {
    if (isReady(config.location)) {
      element.textContent = config.location;
    }
  });

  var emailLinks = document.querySelectorAll("[data-email-link]");
  var emailFallbacks = document.querySelectorAll("[data-email-fallback]");

  emailLinks.forEach(function (link) {
    if (!isReady(config.email)) {
      link.hidden = true;
      return;
    }

    var subject = link.getAttribute("data-email-subject") || "Hello, Hazy Daisy Jewelry";
    link.href = "mailto:" + config.email + "?subject=" + encodeURIComponent(subject);
  });

  if (isReady(config.email)) {
    emailFallbacks.forEach(function (link) {
      link.hidden = true;
    });
  }

  var menuButton = document.querySelector("[data-menu-button]");
  var navigation = document.querySelector("[data-navigation]");

  function closeMenu() {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute("aria-expanded", "false");
    navigation.removeAttribute("data-open");
    document.body.classList.remove("menu-open");
  }

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      var isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      navigation.toggleAttribute("data-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
        menuButton.focus();
      }
    });

    window.matchMedia("(min-width: 861px)").addEventListener("change", function (event) {
      if (event.matches) closeMenu();
    });
  }

  var header = document.querySelector("[data-header]");

  function updateHeader() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    }
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  document.querySelectorAll("[data-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".site-nav a[href^='#']"));
  var sections = navLinks.map(function (link) {
    return document.querySelector(link.getAttribute("href"));
  }).filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        navLinks.forEach(function (link) {
          var selected = link.getAttribute("href") === "#" + entry.target.id;
          if (selected) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }
}());
