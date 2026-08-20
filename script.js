/* ==========================================================================
   MENU DATA — Don Chicko
   Every item below is backed by an actual product photo the client provided
   (see assets/images/menu/, sourced from the client's own menu photo set —
   each source filename is the real Arabic item name). Nothing here is
   invented the way an earlier pass on this file was — if there's no photo
   evidence for a dish, it isn't listed. Two facts were confirmed directly
   by the client rather than guessed: broasted comes in 3/5/10-piece sizes
   (matching the "3 KENTUCKY CRISPY CHICKEN" / "5 KENTUCKY CRISPY CHICKEN"
   packaging art), and the Rizo rice bowls are a current product.
   Prices: no real price list exists anywhere in the provided files. Client
   confirmed placeholder prices are fine for now — every price below is a
   rough estimate for layout purposes only and MUST be replaced with real
   pricing before launch.
   ========================================================================== */
const MENU_ITEMS = [
  // ---- Cold Starters & Salads ----
  { name: "Garden Salad", nameAr: "سلطة الكاردن", description: "A colorful mix of crisp vegetables, tossed fresh.", descAr: "خضار طازجة ملوّنة ومقرمشة، تُحضَّر فور الطلب.", price: 5000, category: "cold-starters", tags: [], featured: false, image: "assets/images/menu/salad-garden.jpg" },
  { name: "Baba Ghanoush", nameAr: "بابا غنوج", description: "Smoky roasted eggplant dip, finished with pomegranate.", descAr: "غموس الباذنجان المشوي بنكهته المدخنة، مزيّن بحبات الرمان.", price: 4000, category: "cold-starters", tags: [], featured: false, image: "assets/images/menu/baba-ghanoush.jpg" },
  { name: "Hommos with Tahini", nameAr: "حمص بطحينة", description: "Silky house-made hummus, served cold.", descAr: "حمص بيتي ناعم كالحرير، يُقدَّم باردًا.", price: 4000, category: "cold-starters", tags: [], featured: false, image: "assets/images/menu/hommos.jpg" },
  { name: "Coleslaw", nameAr: "كوسلو", description: "Classic creamy coleslaw, crisp and cool.", descAr: "كوسلو كريمي كلاسيكي، طازج ومنعش.", price: 2000, category: "cold-starters", tags: [], featured: false, image: "assets/images/menu/coleslaw.jpg" },

  // ---- Hot Starters ----
  { name: "Fries", nameAr: "بطاطا مقلية", description: "Classic golden fries, hot from the fryer.", descAr: "بطاطا ذهبية مقرمشة، تصلك ساخنة طازجة من المقلاة.", price: 3000, category: "hot-starters", tags: [], featured: false, image: "assets/images/menu/fries.jpg" },
  { name: "Family Fries", nameAr: "بطاطا مقلية عائلي", description: "A big tray of fries, sized for the table.", descAr: "طبق بطاطا كبير، بحجم يكفي الطاولة كاملة.", price: 5000, category: "hot-starters", tags: [], featured: false, image: "assets/images/menu/fries-family.jpg" },
  { name: "Potato Balls", nameAr: "كرات البطاطا", description: "Golden roasted potato bites with herbs and lemon.", descAr: "كرات بطاطا مشوية ذهبية، معطّرة بالأعشاب والليمون.", price: 4000, category: "hot-starters", tags: [], featured: false, image: "assets/images/menu/potato-balls.jpg" },
  { name: "Chicken Strips", nameAr: "ستربس دجاج", description: "Hand-breaded chicken strips, fried to order.", descAr: "ستربس دجاج مبطّنة يدويًا، تُقلى فور الطلب لتصل مقرمشة.", price: 5500, category: "hot-starters", tags: ["Popular"], featured: false, image: "assets/images/menu/chicken-strips.jpg" },
  { name: "Finger Fries", nameAr: "فنكر", description: "Thick-cut skin-on fries, extra crispy.", descAr: "بطاطا مقطّعة سميكة بقشرتها، مقرمشة بشكل إضافي.", price: 3500, category: "hot-starters", tags: [], featured: false, image: "assets/images/menu/finger-fries.jpg" },
  { name: "Finger Fries with Bang Bang Sauce", nameAr: "فنكر مع صلصة بانك بانك", description: "Finger fries loaded with our Bang Bang sauce.", descAr: "فنكر مغموس بصلصة البانك بانك الخاصة بنا.", price: 4500, category: "hot-starters", tags: ["New"], featured: false, image: "assets/images/menu/finger-fries-bangbang.jpg" },

  // ---- Broasted Chicken (fried, signature) ----
  { name: "Broasted — 3 Pieces with Fries", nameAr: "بروستد – 3 قطع مع بطاطا", description: "Don Chicko's signature broasted chicken, with fries on the side.", descAr: "بروستد دون تشيكو المميز، مع بطاطا مقلية بجانبه.", price: 6000, category: "broasted", tags: [], featured: true, image: "assets/images/menu/broasted-3pc.jpg" },
  { name: "Broasted — 5 Pieces", nameAr: "بروستد – 5 قطع", description: "Don Chicko's signature broasted chicken, marinated to the center.", descAr: "بروستد دون تشيكو المميز، بتتبيلة تصل حتى العظم.", price: 9000, category: "broasted", tags: ["Popular"], featured: false, image: "assets/images/menu/broasted-5pc.jpg" },
  { name: "Broasted — 10 Pieces (Family, with Rice)", nameAr: "بروستد – 10 قطع مع رز (عائلي)", description: "The full flame — broasted chicken over rice, family-size.", descAr: "كل النار في طبق واحد — بروستد على الرز، بحجم يليق بالعائلة.", price: 18000, category: "broasted", tags: ["Signature"], featured: false, image: "assets/images/menu/broasted-10pc-family.jpg" },

  // ---- Grilled Chicken ----
  { name: "Whole Grilled Chicken", nameAr: "دجاجة كاملة مشوية", description: "A whole chicken over the flame, grilled the Don Chicko way.", descAr: "دجاجة كاملة فوق الجمر، مشوية على طريقة دون تشيكو الخاصة.", price: 14000, category: "roasted", tags: ["Signature"], featured: false, image: "assets/images/menu/grilled-whole.jpg" },
  { name: "Half Grilled Chicken", nameAr: "نصف دجاجة مشوية", description: "Grilled, not fried — cooked to the center every time.", descAr: "مشوي وليس مقليًا — نضج يصل حتى العظم في كل مرة.", price: 8000, category: "roasted", tags: [], featured: false, image: "assets/images/menu/grilled-half.jpg" },
  { name: "Grilled Chicken with Rice", nameAr: "دجاجة مشوية على الرز", description: "A whole grilled chicken, served over rice.", descAr: "دجاجة كاملة مشوية، تُقدَّم فوق طبق من الرز.", price: 16000, category: "roasted", tags: [], featured: true, image: "assets/images/menu/grilled-with-rice.jpg" },
  { name: "Half Grilled Chicken with Rice", nameAr: "نصف دجاجة مشوية على الرز", description: "Half a grilled chicken, served over rice.", descAr: "نصف دجاجة مشوية، تُقدَّم فوق طبق من الرز.", price: 10000, category: "roasted", tags: [], featured: false, image: "assets/images/menu/grilled-half-with-rice.jpg" },

  // ---- Rice ----
  { name: "White Rice", nameAr: "رز أبيض", description: "Simple, fluffy steamed rice.", descAr: "رز أبيض مطهو على البخار، طري وبسيط.", price: 2000, category: "rice", tags: [], featured: false, image: "assets/images/menu/rice-white.jpg" },
  { name: "Kabsa Rice", nameAr: "رز كبسة", description: "Fragrant, spiced kabsa-style rice.", descAr: "رز على طريقة الكبسة، عطري ومتبّل بخلطة بهارات غنية.", price: 3500, category: "rice", tags: ["Popular"], featured: false, image: "assets/images/menu/rice-kabsa.jpg" },
  { name: "Smoked Rice", nameAr: "رز مدخن", description: "Rice finished with a smoked edge.", descAr: "رز بنكهة مدخنة تضيف عمقًا لكل لقمة.", price: 3000, category: "rice", tags: [], featured: false, image: "assets/images/menu/rice-smoked.jpg" },

  // ---- Rizo Bowls ----
  { name: "Rizo Classic", nameAr: "ريزو كلاسيك", description: "Rice topped with chicken and our classic sauce.", descAr: "رز مغطى بالدجاج وصلصتنا الكلاسيكية.", price: 5000, category: "rice-bowls", tags: [], featured: false, image: "assets/images/menu/rizo-classic.jpg" },
  { name: "Rizo Bang Bang", nameAr: "ريزو بانك بانك", description: "Rice topped with chicken and our Bang Bang sauce.", descAr: "رز مغطى بالدجاج وصلصة البانك بانك.", price: 5500, category: "rice-bowls", tags: ["New"], featured: false, image: "assets/images/menu/rizo-bangbang.jpg" },

  // ---- Sandwiches & Wraps ----
  { name: "Chicken Kebab Sandwich", nameAr: "ساندويش كباب دجاج", description: "Grilled chicken kebab, wrapped up with all the fixings.", descAr: "كباب دجاج مشوي، ملفوف مع كل الإضافات.", price: 4500, category: "sandwiches", tags: ["Popular"], featured: true, image: "assets/images/menu/kebab-sandwich.jpg" },
  { name: "Twister", nameAr: "تويستر", description: "Our signature loaded chicken wrap.", descAr: "لفافة الدجاج المميزة عندنا، محمّلة بالكامل.", price: 4000, category: "sandwiches", tags: [], featured: false, image: "assets/images/menu/twister.jpg" },
  { name: "Twister Meal", nameAr: "وجبة تويستر", description: "The Twister wrap, with fries and a drink.", descAr: "لفافة التويستر، مع بطاطا مقلية ومشروب.", price: 6000, category: "sandwiches", tags: [], featured: false, image: "assets/images/menu/twister-meal.jpg" },

  // ---- Burgers ----
  { name: "Beef Burger", nameAr: "برغر لحم بقري", description: "A classic Don Chicko beef burger.", descAr: "برغر لحم بقري كلاسيكي، بتوقيع دون تشيكو.", price: 6000, category: "burgers", tags: ["Chef's Pick"], featured: false, image: "assets/images/menu/beef-burger.jpg" },
  { name: "Double Beef Burger", nameAr: "دبل برغر لحم", description: "Two beef patties stacked high, with fries and a drink.", descAr: "قرصان من اللحم البقري فوق بعضهما، مع بطاطا ومشروب.", price: 8500, category: "burgers", tags: [], featured: false, image: "assets/images/menu/beef-burger-double.jpg" },

  // ---- Sauces & Dips ----
  { name: "BBQ Sauce", nameAr: "صلصة باربكيو", description: "Classic house BBQ.", descAr: "صلصة باربكيو البيت، على الوصفة الكلاسيكية.", price: 1000, category: "sauces", tags: [], featured: false, image: "assets/images/menu/sauce-bbq.jpg" },
  { name: "Bang Bang Sauce", nameAr: "صلصة بانك بانك", description: "Our signature Bang Bang sauce.", descAr: "صلصة البانك بانك المميزة عندنا.", price: 1000, category: "sauces", tags: ["Signature"], featured: false, image: "assets/images/menu/sauce-bangbang.jpg" },
  { name: "Spicy Sauce", nameAr: "صلصة حارة", description: "Straightforward heat.", descAr: "حرارة صريحة، بلا مجاملات.", price: 1000, category: "sauces", tags: [], featured: false, image: "assets/images/menu/sauce-spicy.jpg" },
  { name: "Kaib Sauce", nameAr: "صلصة كيب", description: "Don Chicko's own kaib sauce.", descAr: "صلصة الكيب الخاصة بدون تشيكو.", price: 1000, category: "sauces", tags: [], featured: false, image: "assets/images/menu/sauce-kaib.jpg" },

  // ---- Desserts ----
  { name: "Double Chocolate Cookies", nameAr: "دبل تشوكلت كوكيز", description: "Warm, gooey double chocolate cookies.", descAr: "كوكيز بالشوكولاتة المزدوجة، دافئة وطرية من الداخل.", price: 3000, category: "desserts", tags: [], featured: false, image: "assets/images/menu/cookies-chocolate.jpg" },
  { name: "Red Velvet Cookies", nameAr: "ريد فيلفت كوكيز", description: "Soft red velvet cookies with white chocolate.", descAr: "كوكيز الريد فيلفت الطرية، مع قطع الشوكولاتة البيضاء.", price: 3000, category: "desserts", tags: ["Popular"], featured: false, image: "assets/images/menu/cookies-red-velvet.jpg" },
  { name: "Merry Cream", nameAr: "ميري كريم", description: "A sweet, creamy Don Chicko soft-serve dessert.", descAr: "حلوى آيسكريم كريمية حلوة، من توقيع دون تشيكو الخاص.", price: 3000, category: "desserts", tags: [], featured: false, image: "assets/images/menu/merry-cream.jpg" },

  // ---- Drinks ----
  { name: "Water", nameAr: "ماء", description: "Bottled water.", descAr: "زجاجة ماء.", price: 500, category: "drinks", tags: [], featured: false, image: "assets/images/menu/water.jpg" },
  { name: "Soft Drink", nameAr: "مشروب غازي", description: "Your choice of soft drink.", descAr: "مشروب غازي بحسب اختيارك.", price: 1500, category: "drinks", tags: [], featured: false, image: "assets/images/menu/soft-drink.jpg" },
  { name: "Juice", nameAr: "عصير", description: "Chilled fruit juice.", descAr: "عصير فواكه بارد.", price: 1000, category: "drinks", tags: [], featured: false, image: "assets/images/menu/juice.jpg" },

  // ---- Kids Meal ----
  { name: "Kids Meal", nameAr: "وجبة الأطفال", description: "A kid-sized broasted chicken meal with fries — made by the Don, loved by all.", descAr: "وجبة بروستد بحجم يناسب الأطفال مع بطاطا مقلية — من صنع الدون، ويحبها الجميع.", price: 5000, category: "kids", tags: [], featured: false, image: "assets/images/menu/kids-meal.jpg" },
];

const CATEGORIES = [
  { id: "cold-starters", label: "Cold Starters & Salads", labelAr: "مقبلات باردة وسلطات" },
  { id: "hot-starters", label: "Hot Starters", labelAr: "مقبلات ساخنة" },
  { id: "broasted", label: "Broasted Chicken", labelAr: "دجاج بروستد" },
  { id: "roasted", label: "Grilled Chicken", labelAr: "دجاج مشوي" },
  { id: "rice", label: "Rice", labelAr: "أرز" },
  { id: "rice-bowls", label: "Rizo Bowls", labelAr: "ريزو" },
  { id: "sandwiches", label: "Sandwiches & Wraps", labelAr: "سندويشات ولفائف" },
  { id: "burgers", label: "Burgers", labelAr: "برغر" },
  { id: "sauces", label: "Sauces & Dips", labelAr: "صلصات وغماسات" },
  { id: "desserts", label: "Desserts", labelAr: "حلويات" },
  { id: "drinks", label: "Drinks", labelAr: "مشروبات" },
  { id: "kids", label: "Kids Meal", labelAr: "وجبة الأطفال" },
];

const TAG_LABELS = {
  Popular: { en: "Popular", ar: "شائع" },
  New: { en: "New", ar: "جديد" },
  Signature: { en: "Signature", ar: "المميز" },
  "Chef's Pick": { en: "Chef's Pick", ar: "اختيار الشيف" },
};

/** Current UI language, read from the shared i18n engine (translations.js). */
function currentLang() {
  return window.DonChickoI18n ? window.DonChickoI18n.getCurrentLang() : "en";
}

/** Format a price in Iraqi Dinar, e.g. 9000 -> "9,000 IQD" / "9,000 د.ع". */
function formatPrice(price, lang) {
  const unit = lang === "ar" ? "د.ع" : "IQD";
  return `${price.toLocaleString("en-US")} ${unit}`;
}

/* ==========================================================================
   CARD RENDERING
   ========================================================================== */

/** Build a single menu card element from an item object. */
function createMenuCard(item, { featured = false } = {}) {
  const card = document.createElement("article");
  card.className = "ticket-card reveal";
  card.dataset.category = item.category;
  card.dataset.itemName = item.name;

  card.innerHTML = `
    ${item.image ? `<div class="card-media"><picture><source srcset="${item.image.replace(/\.jpg$/, ".webp")}" type="image/webp"><img src="${item.image}" alt="" loading="lazy" width="600" height="450"></picture></div>` : ""}
    <div class="card-body">
      <div class="card-top-row">
        <h3 class="card-name"></h3>
        <span class="card-price"></span>
      </div>
      <p class="card-desc"></p>
      <span class="card-category"></span>
    </div>
  `;

  applyCardLanguage(card, item, currentLang());
  return card;
}

/** Fill a card's language-dependent text in place, without rebuilding its DOM. */
function applyCardLanguage(card, item, lang) {
  const body = card.querySelector(".card-body");
  const media = card.querySelector(".card-media");
  const name = lang === "ar" ? item.nameAr : item.name;
  const tag = item.tags[0];

  // The badge lives on the photo when there is one (sticker-on-photo look),
  // otherwise it falls back to the top of the card body.
  const badgeHost = media || body;
  let badge = card.querySelector(".card-badge");
  if (tag) {
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "card-badge";
    }
    if (badge.parentElement !== badgeHost) badgeHost.insertBefore(badge, badgeHost.firstChild);
    badge.dataset.badge = tag;
    badge.textContent = (TAG_LABELS[tag] && TAG_LABELS[tag][lang]) || tag;
  } else if (badge) {
    badge.remove();
  }

  if (media) media.querySelector("img").alt = name;
  card.querySelector(".card-name").textContent = name;
  card.querySelector(".card-price").textContent = formatPrice(item.price, lang);
  card.querySelector(".card-desc").textContent = lang === "ar" ? item.descAr : item.description;

  const cat = CATEGORIES.find((c) => c.id === item.category);
  card.querySelector(".card-category").textContent = cat ? (lang === "ar" ? cat.labelAr : cat.label) : item.category;
}

/** Re-apply the current language to every already-rendered menu card, category
 *  heading, and jump-bar tab, without touching DOM structure (keeps scroll
 *  position, IntersectionObserver targets, and the category-spy intact). */
function refreshMenuLanguage() {
  const lang = currentLang();

  document.querySelectorAll(".ticket-card[data-item-name]").forEach((card) => {
    const item = MENU_ITEMS.find((i) => i.name === card.dataset.itemName);
    if (item) applyCardLanguage(card, item, lang);
  });

  document.querySelectorAll(".menu-category").forEach((section) => {
    const cat = CATEGORIES.find((c) => c.id === section.dataset.category);
    if (!cat) return;
    const items = MENU_ITEMS.filter((i) => i.category === cat.id);
    const title = section.querySelector(".menu-category-title");
    if (title) title.textContent = lang === "ar" ? cat.labelAr : cat.label;
    const count = section.querySelector(".menu-category-count");
    if (count) count.textContent = formatItemCount(items.length, lang);
  });

  document.querySelectorAll(".filter-tab").forEach((link) => {
    const cat = CATEGORIES.find((c) => c.id === link.dataset.category);
    if (cat) link.textContent = lang === "ar" ? cat.labelAr : cat.label;
  });
}

/** "3 items" / "1 item" — or the Arabic equivalent (zero/one/two/few/many all differ). */
function formatItemCount(count, lang) {
  if (lang === "ar") {
    if (count === 0) return "لا توجد أصناف";
    if (count === 1) return "صنف واحد";
    if (count === 2) return "صنفان";
    if (count >= 3 && count <= 10) return `${count} أصناف`;
    return `${count} صنفًا`;
  }
  return `${count} ${count === 1 ? "item" : "items"}`;
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

    const lang = currentLang();
    const heading = document.createElement("div");
    heading.className = "menu-category-heading";
    heading.innerHTML = `
      <h2 class="menu-category-title" id="${categorySectionId(cat.id)}-title">${lang === "ar" ? cat.labelAr : cat.label}</h2>
      <span class="menu-category-count">${formatItemCount(items.length, lang)}</span>
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
    link.textContent = currentLang() === "ar" ? cat.labelAr : cat.label;
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
   HERO SLIDESHOW PAUSE CONTROL
   Auto-advancing content that runs longer than 5s needs a user-operable
   pause control (WCAG 2.2.2) — this is that control.
   ========================================================================== */
function initHeroSlideToggle() {
  const toggle = document.getElementById("heroSlideToggle");
  const track = document.getElementById("heroSlideTrack");
  if (!toggle || !track) return;

  function t(key, fallback) {
    return window.DonChickoI18n ? window.DonChickoI18n.t(key) : fallback;
  }

  function setPaused(paused) {
    track.classList.toggle("is-paused", paused);
    toggle.setAttribute("aria-pressed", String(paused));
    toggle.setAttribute("aria-label", t(paused ? "a11y.playSlideshow" : "a11y.pauseSlideshow", paused ? "Play background slideshow" : "Pause background slideshow"));
  }

  toggle.addEventListener("click", () => {
    setPaused(toggle.getAttribute("aria-pressed") !== "true");
  });

  if (window.DonChickoI18n) {
    window.DonChickoI18n.onChange(() => {
      setPaused(toggle.getAttribute("aria-pressed") === "true");
    });
  }
}

/* ==========================================================================
   MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("primaryMenu");
  if (!toggle || !menu) return;

  function t(key, fallback) {
    return window.DonChickoI18n ? window.DonChickoI18n.t(key) : fallback;
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", t("a11y.openMenu", "Open menu"));
  }

  function openMenu() {
    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", t("a11y.closeMenu", "Close menu"));
  }

  if (window.DonChickoI18n) {
    window.DonChickoI18n.onChange(() => {
      const isOpen = menu.classList.contains("is-open");
      toggle.setAttribute("aria-label", t(isOpen ? "a11y.closeMenu" : "a11y.openMenu", isOpen ? "Close menu" : "Open menu"));
    });
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
  initHeroSlideToggle();

  // Reveal all non-menu sections marked with .reveal, plus featured cards.
  document.querySelectorAll(".featured-grid .ticket-card, .about-section, .visit-section")
    .forEach((el) => el.classList.add("reveal"));
  observeRevealTargets(document.querySelectorAll(".reveal"));

  const yearEl = document.getElementById("footerYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu content is rendered by this script, so it's outside the reach of
  // translations.js's generic data-i18n scan — refresh it ourselves whenever
  // the language changes (e.g. via the header switcher, after first load).
  if (window.DonChickoI18n) {
    window.DonChickoI18n.onChange(refreshMenuLanguage);
  }
});
