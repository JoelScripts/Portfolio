/* ============================================================
   Joel G — Portfolio · interactions
   ------------------------------------------------------------
   Year · header state · mobile nav · scroll spy · reveal
   ============================================================ */

(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ── Current year ───────────────────────────────────── */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Header scroll state ────────────────────────────── */
  const header = document.getElementById("header");
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ── Mobile navigation ──────────────────────────────── */
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");

  const closeNav = () => {
    if (!nav || !navToggle) return;
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  };

  if (nav && navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close when a link is chosen or when clicking outside
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) closeNav();
    });

    document.addEventListener("click", (e) => {
      if (
        nav.classList.contains("is-open") &&
        !e.target.closest("#nav") &&
        !e.target.closest("#navToggle")
      ) {
        closeNav();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });

    // Reset state if we grow out of mobile width
    window
      .matchMedia("(min-width: 761px)")
      .addEventListener("change", (e) => {
        if (e.matches) closeNav();
      });
  }

  /* ── Scroll spy ─────────────────────────────────────── */
  const navLinks = [...document.querySelectorAll(".nav__link")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = "#" + entry.target.id;
          navLinks.forEach((link) =>
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === id
            )
          );
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => spy.observe(section));
  }

  /* ── Reveal on scroll ───────────────────────────────── */
  const revealEls = [...document.querySelectorAll("[data-reveal]")];

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* ── Smooth anchor scroll fallback (older browsers) ─── */
  if (!("scrollBehavior" in document.documentElement.style)) {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const target = document.querySelector(anchor.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY);
      });
    });
  }
})();
