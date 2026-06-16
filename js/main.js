// =====================================
// Vaneiatrix Analytics System
// Global Interaction Engine
// =====================================

// Smooth scroll enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// =========================
// FAQ Accordion System
// =========================

document.addEventListener("click", function(e) {
  const faq = e.target.closest(".faq-item");

  if (faq) {
    faq.classList.toggle("active");
  }
});

// =========================
// Blog Toggle System (Insights)
// =========================

function toggleBlog(el) {
  el.classList.toggle("active");
}

// =========================
// Scroll Animation Trigger
// =========================

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".card, .blog-card, .faq-item").forEach(el => {
  observer.observe(el);
});

// =========================
// Navbar blur effect on scroll
// =========================

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 20) {
    nav.style.background = "rgba(255,255,255,0.95)";
  } else {
    nav.style.background = "rgba(255,255,255,0.8)";
  }
});
