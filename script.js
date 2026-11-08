/* =========================================================
   FASTINK STUDIO
   Interactive portfolio script
   ========================================================= */

const cursor = document.querySelector(".cursor");

/* =========================================================
   CUSTOM CURSOR
   ========================================================= */

window.addEventListener("mousemove", (e) => {
  if (!cursor) return;

  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

document
  .querySelectorAll(".reveal")
  .forEach((element) => observer.observe(element));


/* =========================================================
   SMOOTH ANCHOR SCROLLING
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const selector = link.getAttribute("href");
    const target = document.querySelector(selector);

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


/* =========================================================
   TYPING EFFECT
   ========================================================= */

const typingElement = document.querySelector("#typing-text");

const typingWords = [
  "ILLUSTRATOR",
  "VISUAL DESIGNER",
  "CREATIVE ARTIST",
  "PROBLEM SOLVER"
];

let typingWordIndex = 0;
let typingCharIndex = 0;
let isDeleting = false;

function runTypingEffect() {
  if (!typingElement) return;

  const currentWord = typingWords[typingWordIndex];

  if (!isDeleting) {
    typingElement.textContent =
      currentWord.substring(0, typingCharIndex + 1);

    typingCharIndex++;

    if (typingCharIndex === currentWord.length) {
      isDeleting = true;

      setTimeout(runTypingEffect, 1500);
      return;
    }
  } else {
    typingElement.textContent =
      currentWord.substring(0, typingCharIndex - 1);

    typingCharIndex--;

    if (typingCharIndex === 0) {
      isDeleting = false;

      typingWordIndex =
        (typingWordIndex + 1) % typingWords.length;
    }
  }

  setTimeout(
    runTypingEffect,
    isDeleting ? 55 : 95
  );
}

runTypingEffect();


/* =========================================================
   PORTFOLIO TABS
   ========================================================= */

const tabButtons =
  document.querySelectorAll(".portfolio-tab");

const tabPanels =
  document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const targetId =
      button.dataset.tab;

    /* Remove active from buttons */
    tabButtons.forEach((item) => {
      item.classList.remove("active");
    });

    /* Hide all panels */
    tabPanels.forEach((panel) => {
      panel.classList.remove("active");
    });

    /* Activate clicked button */
    button.classList.add("active");

    /* Activate target panel */
    const targetPanel =
      document.getElementById(targetId);

    if (targetPanel) {

      targetPanel.classList.add("active");

      /*
        Re-run reveal animation
        for elements inside the tab.
      */
      targetPanel
        .querySelectorAll(".reveal")
        .forEach((item, index) => {

          item.classList.remove("show");

          setTimeout(() => {
            item.classList.add("show");
          }, index * 80);

        });
    }

  });

});


/* =========================================================
   ACTIVE NAVIGATION / SCROLL SPY
   ========================================================= */

const sections =
  document.querySelectorAll("main section[id]");

const navLinks =
  document.querySelectorAll(".nav-link");

const sectionObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {

          link.classList.remove("active");

          if (
            link.getAttribute("href") ===
            `#${entry.target.id}`
          ) {
            link.classList.add("active");
          }

        });

      });

    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0
    }
  );

sections.forEach((section) => {
  sectionObserver.observe(section);
});


/* =========================================================
   HEADER SHADOW ON SCROLL
   ========================================================= */

const topbar =
  document.querySelector(".topbar");

window.addEventListener(
  "scroll",
  () => {

    if (!topbar) return;

    if (window.scrollY > 30) {
      topbar.classList.add("scrolled");
    } else {
      topbar.classList.remove("scrolled");
    }

  },
  {
    passive: true
  }
);


/* =========================================================
   INTERACTIVE HOVER EFFECT
   ========================================================= */

document
  .querySelectorAll(
    "a, button, .project, .info-card, .service-row"
  )
  .forEach((element) => {

    element.addEventListener("mouseenter", () => {
      document.body.classList.add(
        "interactive-hover"
      );
    });

    element.addEventListener("mouseleave", () => {
      document.body.classList.remove(
        "interactive-hover"
      );
    });

  });
