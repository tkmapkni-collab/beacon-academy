/**
 * ============================================================================
 * BEACON ACADEMY — SITE CONFIGURATION & INTERACTIVE LOGIC
 * ============================================================================
 * Easily edit your registration link, WhatsApp contact number, email, and
 * course fee below. Changes automatically apply across the entire website.
 */

const ACADEMY_CONFIG = {
  // 1. Registration Form or Payment Portal URL
  registrationUrl: "https://forms.gle/REPLACE_WITH_YOUR_REGISTRATION_LINK",

  // 2. WhatsApp Number (Country code + number, digits only — no '+' or spaces)
  whatsappNumber: "919876543210",

  // 3. Formatted Phone Number displayed visually on the page
  displayPhoneNumber: "+91 98765 43210",

  // 4. Pre-filled WhatsApp greeting message
  whatsappMessage:
    "Hello Beacon Academy, I would like to know more about the Research Orientation course.",

  // 5. Academic Contact Email
  contactEmail: "admissions@beaconacademy.edu",

  // 6. Course Fee Display String
  courseFee: "₹299",
};

document.addEventListener("DOMContentLoaded", () => {
  applySiteConfiguration();
  initNavigation();
  initScrollSpy();
  initRevealAnimations();
  updateCopyrightYear();
});

/**
 * Populates all registration links, WhatsApp buttons, contact details,
 * and pricing labels from ACADEMY_CONFIG.
 */
function applySiteConfiguration() {
  // Update all Registration CTA links
  const registerLinks = document.querySelectorAll(".js-register-link");
  registerLinks.forEach((link) => {
    link.setAttribute("href", ACADEMY_CONFIG.registrationUrl);
  });

  // Update WhatsApp CTA links
  const encodedMessage = encodeURIComponent(ACADEMY_CONFIG.whatsappMessage);
  const cleanNumber = ACADEMY_CONFIG.whatsappNumber.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

  const whatsappLinks = document.querySelectorAll(".js-whatsapp-link");
  whatsappLinks.forEach((link) => {
    link.setAttribute("href", whatsappUrl);
  });

  // Update displayed phone number
  const displayPhones = document.querySelectorAll(".js-display-phone");
  displayPhones.forEach((el) => {
    el.textContent = ACADEMY_CONFIG.displayPhoneNumber;
  });

  // Update displayed email
  const displayEmails = document.querySelectorAll(".js-display-email");
  displayEmails.forEach((el) => {
    el.textContent = ACADEMY_CONFIG.contactEmail;
    if (el.tagName === "A") {
      el.setAttribute("href", `mailto:${ACADEMY_CONFIG.contactEmail}`);
    }
  });

  // Update displayed course fee
  const feeElements = document.querySelectorAll(".js-course-fee");
  feeElements.forEach((el) => {
    el.textContent = ACADEMY_CONFIG.courseFee;
  });
}

/**
 * Handles mobile menu drawer toggle, outside clicks, Escape key closing,
 * and sticky header elevation on scroll.
 */
function initNavigation() {
  const header = document.getElementById("site-header");
  const navToggle = document.getElementById("nav-toggle");
  const primaryNav = document.getElementById("primary-navigation");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!navToggle || !primaryNav) return;

  const setMenuState = (isOpen) => {
    navToggle.setAttribute("aria-expanded", String(isOpen));
    primaryNav.classList.toggle("open", isOpen);
  };

  navToggle.addEventListener("click", () => {
    const currentlyOpen = navToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!currentlyOpen);
  });

  // Close mobile menu when a navigation link is selected
  navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  // Close mobile menu on Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && primaryNav.classList.contains("open")) {
      setMenuState(false);
      navToggle.focus();
    }
  });

  // Header scroll shadow
  const handleHeaderScroll = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 24);
  };

  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  handleHeaderScroll();
}

/**
 * Highlights the active navigation link based on scroll position.
 */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/**
 * Subtle entrance animations for sections and cards as they enter the viewport.
 */
function initRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}

/**
 * Sets the current year automatically in the footer.
 */
function updateCopyrightYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}