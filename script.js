/*
  BEACON ACADEMY — EDIT YOUR DETAILS HERE
  Replace the sample values below before publishing.
*/
const ACADEMY_CONFIG = {
  registrationUrl: "https://forms.gle/REPLACE_WITH_YOUR_REGISTRATION_FORM",
  whatsappNumber: "919876543210", // Country code + number, digits only
  displayPhoneNumber: "+91 98765 43210",
  whatsappMessage: "Hello Beacon Academy, I would like to know more about the Research Orientation course.",
  contactEmail: "admissions@example.com",
  courseFee: "₹299"
};

document.addEventListener("DOMContentLoaded", () => {
  // Update registration buttons. Until a real form URL is added, buttons go to Contact.
  document.querySelectorAll(".js-register").forEach((link) => {
    link.href = ACADEMY_CONFIG.registrationUrl.includes("REPLACE_WITH")
      ? "#contact"
      : ACADEMY_CONFIG.registrationUrl;
    if (!link.href.endsWith("#contact")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });

  // Update WhatsApp and contact details.
  const cleanNumber = ACADEMY_CONFIG.whatsappNumber.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(ACADEMY_CONFIG.whatsappMessage)}`;
  document.querySelectorAll(".js-whatsapp").forEach((link) => {
    link.href = whatsappUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
  document.querySelectorAll(".js-phone").forEach((link) => {
    link.textContent = ACADEMY_CONFIG.displayPhoneNumber;
    link.href = `tel:${cleanNumber}`;
  });
  document.querySelectorAll(".js-email").forEach((link) => {
    link.textContent = ACADEMY_CONFIG.contactEmail;
    link.href = `mailto:${ACADEMY_CONFIG.contactEmail}`;
  });
  document.querySelectorAll(".js-course-fee").forEach((item) => {
    item.textContent = ACADEMY_CONFIG.courseFee;
  });

  // Mobile navigation.
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-navigation");
  if (toggle && nav) {
    const closeMenu = () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    };
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  // Current year in footer.
  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();

  // Subtle active navigation state while scrolling.
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".nav-link")];
  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => observer.observe(section));
  }
});
