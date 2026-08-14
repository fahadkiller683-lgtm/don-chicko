/* ==========================================================================
   MENU DATA — Don Chicko
   Every category, item name, and description below comes verbatim from Don
   Chicko's own brand assets (menu-board mockups + packaging line art), not
   invented. The ONE exception is price: no real price list exists yet in
   the brand materials (the source menu boards use an obvious placeholder
   pattern — 123 / 456 / 89 — repeated identically across every item), so
   the prices here are realistic ESTIMATES for layout purposes only and
   must be replaced with real pricing before launch.
   ========================================================================== */
const MENU_ITEMS = [
  // ---- Fresh Salads ----
  { name: "Fattoush", description: "Crisp mixed greens tossed with toasted bread and a bright, tangy dressing.", price: 5000, category: "salads", tags: [], featured: false },
  { name: "Arugula Salad", description: "Peppery arugula, kept light and fresh.", price: 6000, category: "salads", tags: [], featured: false },
  { name: "Caesar Salad", description: "The classic — crisp romaine, parmesan, and Caesar dressing.", price: 6500, category: "salads", tags: ["Popular"], featured: false },

  // ---- Cold Starters ----
  { name: "Hommos Purée", description: "Silky house-made hummus, served cold.", price: 4000, category: "cold-starters", tags: [], featured: false },
  { name: "Tomato Purée & Toast", description: "Fresh tomato purée served with warm toast for dipping.", price: 4000, category: "cold-starters", tags: [], featured: false },
  { name: "Bread Basket", description: "Fresh bread, straight to the table.", price: 2000, category: "cold-starters", tags: [], featured: false },
  { name: "Garlic Dip", description: "Cool, punchy, garlic-forward — built for sharing.", price: 2000, category: "cold-starters", tags: [], featured: false },

  // ---- Hot Starters ----
  { name: "Fries", description: "Classic golden fries, hot from the fryer.", price: 3000, category: "hot-starters", tags: ["Popular"], featured: false },
  { name: "Wedges or Curly Fries", description: "Your call — thick-cut wedges or curly fries.", price: 3500, category: "hot-starters", tags: [], featured: false },
  { name: "Herbed Potato Wheels", description: "Roasted potato wheels tossed in herbs.", price: 4000, category: "hot-starters", tags: [], featured: false },
  { name: "Breaded Onion Rings", description: "Crunchy, golden, and made for dipping.", price: 4000, category: "hot-starters", tags: [], featured: false },
  { name: "Breaded Mozzarella Sticks", description: "Crisp shell, molten center.", price: 5000, category: "hot-starters", tags: ["Popular"], featured: false },
  { name: "Chicken Fingers", description: "Hand-breaded chicken fingers, fried to order.", price: 5500, category: "hot-starters", tags: [], featured: false },
  { name: "Chicken Dumplings", description: "Pan-fried chicken dumplings, served hot.", price: 5000, category: "hot-starters", tags: [], featured: false },
  { name: "Chicken Chimichinga", description: "Rolled, fried, and packed with seasoned chicken.", price: 5500, category: "hot-starters", tags: ["New"], featured: false },
  { name: "Spicy Chicken Flautas", description: "Crisp rolled tortillas with spicy chicken filling.", price: 5500, category: "hot-starters", tags: ["New"], featured: false },
  { name: "Chicken Arepas", description: "Griddled corn cakes stuffed with seasoned chicken.", price: 5000, category: "hot-starters", tags: [], featured: false },

  // ---- Broasted Chicken (fried, signature) ----
  { name: "Broasted — 4 Pieces", description: "Don Chicko's signature broasted chicken. Marinated to the center, always.", price: 9000, category: "broasted", tags: [], featured: false },
  { name: "Broasted — 8 Pieces", description: "Don Chicko's signature broasted chicken, for the table.", price: 16000, category: "broasted", tags: ["Popular"], featured: false },
  { name: "Broasted — 12 Pieces", description: "The full flame — Don Chicko's signature broasted chicken, family-size.", price: 22000, category: "broasted", tags: [], featured: false },
  { name: "Whole Broasted Chicken", description: "A whole chicken, broasted the Don Chicko way.", price: 14000, category: "broasted", tags: ["Signature"], featured: true },
  { name: "Broasted Formulas", description: "Ask your server about our combo formulas — chicken, sides, and a drink, bundled together.", price: 18000, category: "broasted", tags: [], featured: false },

  // ---- Roasted / Grilled Chicken ----
  { name: "Roasted — 8 Pieces", description: "Grilled, not fried — always unforgettable, always cooked to the center.", price: 16000, category: "roasted", tags: [], featured: false },
  { name: "Whole Roasted Chicken", description: "A whole chicken over the flame, grilled the Don Chicko way.", price: 14000, category: "roasted", tags: ["Signature"], featured: false },

  // ---- Sandwiches ----
  { name: "Chicken Beiruti", description: "A Beiruti-style chicken sandwich, Don Chicko's way.", price: 6000, category: "sandwiches", tags: ["Popular"], featured: true },
  { name: "Tawook – Spiedes", description: "Skewered, marinated chicken tawook.", price: 6500, category: "sandwiches", tags: [], featured: false },
  { name: "Chicken Parmesan Subs", description: "Breaded chicken, melted cheese, classic sub roll.", price: 7000, category: "sandwiches", tags: [], featured: false },
  { name: "Souvlaki", description: "Grilled chicken souvlaki, wrapped up.", price: 6500, category: "sandwiches", tags: [], featured: false },
  { name: "Chicken Burritos Mojados", description: "A \"wet\" chicken burrito, sauced and loaded.", price: 7500, category: "sandwiches", tags: ["New"], featured: false },
  { name: "Pulled Chicken BBQ", description: "Slow-pulled chicken in Don Chicko's BBQ sauce.", price: 7000, category: "sandwiches", tags: [], featured: false },
  { name: "Texas-Size BBQ Chicken & Cheddar", description: "Big BBQ chicken sandwich, loaded with cheddar.", price: 8000, category: "sandwiches", tags: ["New"], featured: false },
  { name: "Chicken Kebabs BBQ", description: "Chicken kebabs finished in BBQ sauce.", price: 7000, category: "sandwiches", tags: [], featured: false },

  // ---- Burgers ----
  { name: "Chicken Fillet Burger", description: "Grilled chicken fillet, dressed and stacked.", price: 6000, category: "burgers", tags: [], featured: false },
  { name: "Chicken Crispy Burger", description: "Crispy fried chicken, dressed and stacked.", price: 6500, category: "burgers", tags: ["Popular"], featured: false },
  { name: "Beef Burger", description: "A classic Don Chicko beef burger.", price: 7500, category: "burgers", tags: ["Chef's Pick"], featured: true },
  { name: "Veggie Burger", description: "A plant-based patty, dressed the Don Chicko way.", price: 5500, category: "burgers", tags: [], featured: false },

  // ---- Rice ----
  { name: "Smoked Rice", description: "Rice finished with a smoked edge.", price: 3000, category: "rice", tags: [], featured: false },
  { name: "Kabsa Rice", description: "Fragrant, spiced kabsa-style rice.", price: 3500, category: "rice", tags: ["Popular"], featured: false },
  { name: "Herbed Rice", description: "Rice tossed through with fresh herbs.", price: 3000, category: "rice", tags: [], featured: false },
  { name: "Plain Rice", description: "Simple, fluffy steamed rice.", price: 2000, category: "rice", tags: [], featured: false },

  // ---- Sauces & Dips ----
  { name: "Red Dip Plain", description: "A simple, classic red dip.", price: 1000, category: "sauces", tags: [], featured: false },
  { name: "Gravy", description: "Rich, savory gravy.", price: 1000, category: "sauces", tags: [], featured: false },
  { name: "Chimichurri", description: "Bright, herby, and a little sharp.", price: 1500, category: "sauces", tags: [], featured: false },
  { name: "Mushroom Sauce", description: "Earthy mushroom sauce.", price: 1500, category: "sauces", tags: [], featured: false },
  { name: "Spicy Honey Dipping Sauce", description: "Sweet heat, built for dipping.", price: 1500, category: "sauces", tags: ["Popular"], featured: false },
  { name: "Don Chicko Sauce", description: "The house signature — the Don's own recipe.", price: 2000, category: "sauces", tags: ["Signature"], featured: false },
  { name: "Honey Mustard", description: "Sweet and sharp, classic pairing.", price: 1500, category: "sauces", tags: [], featured: false },
  { name: "Ranch", description: "Cool, creamy, classic ranch.", price: 1500, category: "sauces", tags: [], featured: false },
  { name: "Curry Sauce", description: "Warm curry spice, smooth finish.", price: 1500, category: "sauces", tags: [], featured: false },
  { name: "Pepper Mayo", description: "Creamy mayo with a peppery kick.", price: 1500, category: "sauces", tags: [], featured: false },
  { name: "Sweet & Spicy Buffalo Sauce", description: "Buffalo heat, balanced with sweetness.", price: 1500, category: "sauces", tags: ["New"], featured: false },
  { name: "Spicy Sauce", description: "Straightforward heat.", price: 1000, category: "sauces", tags: [], featured: false },
  { name: "Smokey Sauce", description: "Deep, smoky, savory.", price: 1500, category: "sauces", tags: [], featured: false },
  { name: "BBQ Sauce", description: "Classic house BBQ.", price: 1500, category: "sauces", tags: [], featured: false },
  { name: "Avocado Cream", description: "Cool, rich avocado cream.", price: 2000, category: "sauces", tags: [], featured: false },

  // ---- Desserts ----
  { name: "Cobbler Cookies", description: "Warm, gooey cobbler-style cookies.", price: 4000, category: "desserts", tags: [], featured: false },
  { name: "Brownies", description: "Rich, fudgy brownies.", price: 4500, category: "desserts", tags: ["Popular"], featured: false },
  { name: "Merry Cream", description: "A sweet, creamy Don Chicko dessert.", price: 4000, category: "desserts", tags: [], featured: false },
  { name: "Banana Cake", description: "Moist banana cake, simple and classic.", price: 3500, category: "desserts", tags: [], featured: false },

  // ---- Kids Meal ----
  { name: "Kids Meal", description: "A kid-sized broasted chicken meal with fries — made by the Don, loved by all.", price: 7000, category: "kids", tags: [], featured: false },
];

const CATEGORIES = [
  { id: "salads", label: "Fresh Salads" },
  { id: "cold-starters", label: "Cold Starters" },
  { id: "hot-starters", label: "Hot Starters" },
  { id: "broasted", label: "Broasted Chicken" },
  { id: "roasted", label: "Roasted Chicken" },
  { id: "sandwiches", label: "Sandwiches" },
  { id: "burgers", label: "Burgers" },
  { id: "rice", label: "Rice" },
  { id: "sauces", label: "Sauces & Dips" },
  { id: "desserts", label: "Desserts" },
  { id: "kids", label: "Kids Meal" },
];

/** Format a price in Iraqi Dinar, e.g. 9000 -> "9,000 IQD". */
function formatPrice(price) {
  return `${price.toLocaleString("en-US")} IQD`;
}

/* ==========================================================================
   CARD RENDERING
   ========================================================================== */

/** Build a single menu card element from an item object. */
function createMenuCard(item, { featured = false } = {}) {
  const card = document.createElement("article");
  card.className = "ticket-card reveal";
  card.dataset.category = item.category;

  const badge = item.tags[0]
    ? `<span class="card-badge" data-badge="${item.tags[0]}">${item.tags[0]}</span>`
    : "";

  card.innerHTML = `
    <div class="card-band" aria-hidden="true"></div>
    <div class="card-body">
      ${badge}
      <div class="card-top-row">
        <h3 class="card-name">${item.name}</h3>
        <span class="card-price">${formatPrice(item.price)}</span>
      </div>
      <p class="card-desc">${item.description}</p>
      <span class="card-category">${CATEGORIES.find((c) => c.id === item.category)?.label ?? item.category}</span>
    </div>
  `;

  return card;
}

/** Render the three featured items into #featuredGrid (home page only). */
function renderFeatured() {
  const grid = document.getElementById("featuredGrid");
  if (!grid) return;

  const featuredItems = MENU_ITEMS.filter((item) => item.featured).slice(0, 3);
  featuredItems.forEach((item) => {
    grid.appendChild(createMenuCard(item, { featured: true }));
  });
}

/** DOM id for a category's section on the menu page. */
function categorySectionId(categoryId) {
  return `cat-${categoryId}`;
}

/**
 * Render every category as its own stacked section (menu page only).
 * Nothing is hidden — the jump bar scrolls to a category rather than
 * filtering the others away.
 */
function renderMenuCategories() {
  const container = document.getElementById("menuCategories");
  if (!container) return;

  CATEGORIES.forEach((cat) => {
    const items = MENU_ITEMS.filter((item) => item.category === cat.id);
    if (items.length === 0) return;

    const section = document.createElement("section");
    section.className = "menu-category";
    section.id = categorySectionId(cat.id);
    section.dataset.category = cat.id;
    section.setAttribute("aria-labelledby", `${categorySectionId(cat.id)}-title`);

    const heading = document.createElement("div");
    heading.className = "menu-category-heading";
    heading.innerHTML = `
      <h2 class="menu-category-title" id="${categorySectionId(cat.id)}-title">${cat.label}</h2>
      <span class="menu-category-count">${items.length} ${items.length === 1 ? "item" : "items"}</span>
    `;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "menu-grid";
    items.forEach((item) => grid.appendChild(createMenuCard(item)));
    section.appendChild(grid);

    container.appendChild(section);
  });

  observeRevealTargets(container.querySelectorAll(".reveal"));
}

/** Render the category jump links into #menuFilters (menu page only). */
function renderCategoryJumpLinks() {
  const bar = document.getElementById("menuFilters");
  if (!bar) return;

  CATEGORIES.forEach((cat) => {
    if (!document.getElementById(categorySectionId(cat.id))) return;

    const link = document.createElement("a");
    link.className = "filter-tab";
    link.textContent = cat.label;
    link.href = `#${categorySectionId(cat.id)}`;
    link.dataset.category = cat.id;
    bar.appendChild(link);
  });
}

/**
 * Highlight the jump link for whichever category is currently in view, and
 * keep that link scrolled into sight inside the horizontal jump bar.
 */
function initCategorySpy() {
  const bar = document.getElementById("menuFilters");
  const sections = document.querySelectorAll(".menu-category");
  if (!bar || sections.length === 0) return;

  let activeId = null;

  function setActive(categoryId) {
    if (categoryId === activeId) return;
    activeId = categoryId;

    bar.querySelectorAll(".filter-tab").forEach((link) => {
      const isActive = link.dataset.category === categoryId;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
        // Keep the active chip visible when the bar scrolls sideways.
        const barBox = bar.getBoundingClientRect();
        const linkBox = link.getBoundingClientRect();
        if (linkBox.left < barBox.left || linkBox.right > barBox.right) {
          bar.scrollTo({
            left: link.offsetLeft - bar.clientWidth / 2 + link.offsetWidth / 2,
            behavior: "smooth",
          });
        }
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  // The active category is the last one whose top has passed under the jump bar.
  function updateActive() {
    const line = bar.getBoundingClientRect().bottom + 8;
    let current = sections[0];
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= line) current = section;
    });
    setActive(current.dataset.category);
  }

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
    },
    { passive: true }
  );
  window.addEventListener("resize", updateActive);
  updateActive();
}

/* ==========================================================================
   MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("primaryMenu");
  if (!toggle || !menu) return;

  function closeMenu() {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }

  function openMenu() {
    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
  }

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });

  // Close mobile menu after choosing a link, and on Escape.
  menu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

/* ==========================================================================
   SCROLL REVEAL
   ========================================================================== */
let revealObserver;

function getRevealObserver() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
  }
  return revealObserver;
}

function observeRevealTargets(elements) {
  const observer = getRevealObserver();
  elements.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   INIT
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Home page: three featured cards. Menu page: every category, stacked.
  renderFeatured();
  renderMenuCategories();
  renderCategoryJumpLinks();
  initCategorySpy();
  initMobileNav();

  // Reveal all non-menu sections marked with .reveal, plus featured cards.
  document.querySelectorAll(".featured-grid .ticket-card, .about-section, .visit-section")
    .forEach((el) => el.classList.add("reveal"));
  observeRevealTargets(document.querySelectorAll(".reveal"));

  const yearEl = document.getElementById("footerYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
