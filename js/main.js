const root = document.documentElement;

// Navbar: hide on scroll down, show on scroll up.
const nav = document.getElementById("nav");
let lastY = window.scrollY;
window.addEventListener(
  "scroll",
  () => {
    const y = window.scrollY;
    nav.classList.toggle("is-scrolled", y > 10);
    nav.classList.toggle("is-hidden", y > lastY && y > 120 && !document.body.classList.contains("menu-open"));
    lastY = y;
  },
  { passive: true }
);

// Mobile menu.
const toggle = document.getElementById("nav-toggle");
const menu = document.getElementById("nav-menu");
const setMenu = (open) => {
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menu.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
};
toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
menu.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));
document.addEventListener("click", (e) => {
  if (menu.classList.contains("is-open") && !menu.contains(e.target) && !toggle.contains(e.target)) setMenu(false);
});
matchMedia("(min-width: 768px)").addEventListener("change", (e) => e.matches && setMenu(false));

// Cursor spotlight.
if (matchMedia("(hover: hover)").matches) {
  window.addEventListener(
    "pointermove",
    (e) => {
      root.style.setProperty("--x", `${e.clientX}px`);
      root.style.setProperty("--y", `${e.clientY}px`);
    },
    { passive: true }
  );
}

// Reveal on scroll.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    });
  },
  { rootMargin: "0px 0px -10% 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
document.querySelectorAll(".cards .card").forEach((el, i) => el.style.setProperty("--delay", `${(i % 3) * 80}ms`));

// Highlight the nav link of the section in view.
const links = [...document.querySelectorAll(".nav__link")];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.toggle("is-active", a.hash === `#${entry.target.id}`));
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
links.forEach((a) => {
  const section = document.querySelector(a.hash);
  if (section) sectionObserver.observe(section);
});

// Experience tabs (WAI-ARIA tabs pattern).
const tabs = [...document.querySelectorAll(".tabs__tab")];
const indicator = document.querySelector(".tabs__indicator");
const moveIndicator = (tab) => {
  indicator.style.setProperty("--h", `${tab.offsetHeight}px`);
  indicator.style.setProperty("--w", `${tab.offsetWidth}px`);
  const horizontal = getComputedStyle(tab.parentElement).flexDirection === "row";
  indicator.style.setProperty("--offset", `${horizontal ? tab.offsetLeft : tab.offsetTop}px`);
};
const selectTab = (tab, focus = false) => {
  tabs.forEach((t) => {
    const selected = t === tab;
    t.setAttribute("aria-selected", String(selected));
    t.tabIndex = selected ? 0 : -1;
    document.getElementById(t.getAttribute("aria-controls")).hidden = !selected;
  });
  moveIndicator(tab);
  if (focus) tab.focus();
  tab.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
};
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (e) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (e.key === "Home") selectTab(tabs[0], true);
    else if (e.key === "End") selectTab(tabs.at(-1), true);
    else if (step) selectTab(tabs[(i + step + tabs.length) % tabs.length], true);
    else return;
    e.preventDefault();
  });
});
if (tabs.length) {
  const current = () => tabs.find((t) => t.getAttribute("aria-selected") === "true");
  moveIndicator(current());
  window.addEventListener("resize", () => moveIndicator(current()));
  document.fonts?.ready.then(() => moveIndicator(current()));
}

// Other projects: show more / less.
const moreBtn = document.getElementById("cards-more");
moreBtn?.addEventListener("click", () => {
  const cards = document.getElementById("cards");
  const expanded = cards.classList.toggle("is-expanded");
  moreBtn.setAttribute("aria-expanded", String(expanded));
  moreBtn.textContent = expanded ? "Show less" : "Show more";
  cards.querySelectorAll(".card--extra").forEach((el) => el.classList.add("in-view"));
});
