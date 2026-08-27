/* ==========================================================================
   MENU DATA — Don Chicko
   Source of truth is the client's real printed menu flyer (menu/Menu Flyer.pdf).
   Every item, price, and combo inclusion below is transcribed directly from
   that flyer — nothing here is invented or estimated. Photos come from the
   client's own dish photo set (assets/images/menu/) where a matching shot
   exists; a handful of flyer items have no client photo yet (sauces like
   Honey Mustard/Crevy/Garlic, Donz sandwich, Caesar Salad, Peanut Butter
   Cookies, Laban Ghazi) and are listed without an image rather than guessed.
   Small per-piece/add-on upcharges printed on the flyer (extra broasted
   piece +3,000, extra strip +2,500, sandwich-to-meal upgrade +2,500, add
   grilled chicken to a salad +3,000) aren't standalone dishes, so they're
   not shown as their own cards.
   Prices are in Iraqi Dinar (IQD / د.ع), exactly as printed on the flyer.
   ========================================================================== */
const MENU_ITEMS = [
  // ---- Broasted Chicken ----
  { name: "Broasted - 2 Pieces with Rice", nameAr: "بروستد - وجبة 2 قطع مع رز", description: "Served with white rice and house BBQ or Kaib sauce, plus a 330ml soft drink.", descAr: "يُقدَّم مع الرز الأبيض وصلصة الباربكيو المحلي أو صلصة الكيب، مع مشروب غازي 330 مل.", price: 8500, category: "broasted", tags: [], featured: false, image: "assets/images/menu/broasted-2pc-rice.jpg" },
  { name: "Broasted - 10 Pieces with Rice (Family)", nameAr: "بروستد - وجبة 10 قطع مع رز (عائلي)", description: "Family-size broasted over white rice with house BBQ or Kaib sauce, plus a 1.75L soft drink.", descAr: "بروستد عائلي فوق الرز الأبيض مع صلصة الباربكيو المحلي أو صلصة الكيب، ومشروب غازي 1.75 لتر.", price: 28500, category: "broasted", tags: ["Signature"], featured: false, image: "assets/images/menu/broasted-10pc-family.jpg" },
  { name: "Broasted - 2 Pieces with Fries", nameAr: "بروستد - وجبة 2 قطع مع بطاطا", description: "Served with fries, coleslaw, lemon, bread, and a 330ml soft drink.", descAr: "يُقدَّم مع البطاطا المقلية والكولسلو والليمون والصمون، مع مشروب غازي 330 مل.", price: 7500, category: "broasted", tags: [], featured: false, image: "assets/images/menu/broasted-3pc.jpg" },
  { name: "Broasted - 3 Pieces with Fries", nameAr: "بروستد - وجبة 3 قطع مع بطاطا", description: "Don Chicko's signature broasted chicken, with fries, lemon, bread, and a 330ml soft drink.", descAr: "بروستد دون تشيكو المميز، مع البطاطا المقلية والليمون والصمون، ومشروب غازي 330 مل.", price: 9500, category: "broasted", tags: ["Popular"], featured: true, image: "assets/images/menu/broasted-3pc.jpg" },
  { name: "Broasted - 10 Pieces with Fries", nameAr: "بروستد - وجبة 10 قطع مع بطاطا", description: "Family-size fries, large coleslaw, 3 lemon wedges, 7 pieces of bread, and a 1.75L soft drink.", descAr: "بطاطا مقلية عائلية وكولسلو كبير و3 قطع ليمون و7 أرغفة صمون، مع مشروب غازي 1.75 لتر.", price: 26500, category: "broasted", tags: [], featured: false, image: "assets/images/menu/broasted-10pc-fries.jpg" },
  { name: "Don Chicko Family Combo", nameAr: "وجبة تشيكو عائلية", description: "4 broasted pieces + 5 chicken strips, with family fries, large coleslaw, lemon, bread, and a 1.75L soft drink.", descAr: "4 قطع بروستد + 5 قطع ستربس دجاج، مع بطاطا مقلية عائلية وكولسلو كبير وليمون وصمون، ومشروب غازي 1.75 لتر.", price: 33000, category: "broasted", tags: ["Signature"], featured: false, image: "assets/images/menu/broasted-bucket.jpg" },

  // ---- Grilled Chicken ----
  { name: "Whole Grilled Chicken with Rice", nameAr: "دجاجة كاملة مشوية مع رز", description: "A whole chicken over the flame, served over your choice of rice with grilled potato balls, creamy sauce, and pickles.", descAr: "دجاجة كاملة مشوية فوق الجمر، تُقدَّم مع اختيارك من الرز وكرات البطاطا المشوية وصلصة كريمية ومخلل.", price: 26000, category: "roasted", tags: ["Signature"], featured: true, image: "assets/images/menu/grilled-with-rice.jpg" },
  { name: "Half Grilled Chicken with Rice", nameAr: "نصف دجاجة مشوية مع رز", description: "Grilled, not fried — served over your choice of rice with grilled potato balls, creamy sauce, and pickles.", descAr: "مشوية وليست مقلية — تُقدَّم مع اختيارك من الرز وكرات البطاطا المشوية وصلصة كريمية ومخلل.", price: 15000, category: "roasted", tags: [], featured: false, image: "assets/images/menu/grilled-half-with-rice.jpg" },
  { name: "Whole Grilled Chicken with Fries", nameAr: "دجاجة كاملة مشوية مع بطاطا", description: "A whole chicken over the flame, served with fries, lemon, grilled potato balls, creamy sauce, and pickles.", descAr: "دجاجة كاملة مشوية فوق الجمر، تُقدَّم مع البطاطا المقلية والليمون وكرات البطاطا المشوية وصلصة كريمية ومخلل.", price: 24000, category: "roasted", tags: [], featured: false, image: "assets/images/menu/grilled-whole.jpg" },
  { name: "Half Grilled Chicken with Fries", nameAr: "نصف دجاجة مشوية مع بطاطا", description: "Grilled, not fried — served with fries, lemon, grilled potato balls, creamy sauce, and pickles.", descAr: "مشوية وليست مقلية — تُقدَّم مع البطاطا المقلية والليمون وكرات البطاطا المشوية وصلصة كريمية ومخلل.", price: 14000, category: "roasted", tags: [], featured: false, image: "assets/images/menu/grilled-half.jpg" },

  // ---- Chicken Strips ----
  { name: "Chicken Strips Meal - 5 Pieces", nameAr: "ستربس الدجاج - وجبة 5 قطع", description: "5 hand-breaded chicken strips with fries, coleslaw, lemon, 3 pieces of bread, and a 330ml soft drink.", descAr: "5 قطع ستربس دجاج مقرمشة مع البطاطا المقلية والكولسلو والليمون و3 أرغفة صمون، ومشروب غازي 330 مل.", price: 10000, category: "chicken-strips", tags: ["Popular"], featured: false, image: "assets/images/menu/chicken-strips.jpg" },
  { name: "Chicken Strips Meal - 15 Pieces", nameAr: "ستربس الدجاج - وجبة 15 قطعة", description: "15 hand-breaded chicken strips with large fries, large coleslaw, 3 lemon wedges, 7 pieces of bread, and a 1.75L soft drink.", descAr: "15 قطعة ستربس دجاج مقرمشة مع بطاطا مقلية كبيرة وكولسلو كبير و3 قطع ليمون و7 أرغفة صمون، ومشروب غازي 1.75 لتر.", price: 26000, category: "chicken-strips", tags: [], featured: false, image: "assets/images/menu/chicken-strips.jpg" },

  // ---- Rizo Bowls ----
  { name: "Rizo Classic", nameAr: "ريزو كلاسيك", description: "White rice topped with chopped crispy chicken strips and our classic house sauce.", descAr: "رز أبيض مع قطع ستربس الدجاج المقرمشة وصلصتنا الكلاسيكية.", price: 6500, category: "rice-bowls", tags: [], featured: false, image: "assets/images/menu/rizo-classic.jpg" },
  { name: "Rizo Kaib", nameAr: "ريزو كيب", description: "White rice topped with chopped crispy chicken strips and Kaib sauce.", descAr: "رز أبيض مع قطع ستربس الدجاج المقرمشة وصلصة الكيب.", price: 6500, category: "rice-bowls", tags: [], featured: false, image: "assets/images/menu/rizo-kaib.jpg" },
  { name: "Rizo Bang Bang", nameAr: "ريزو بانك بانك", description: "White rice topped with chopped crispy chicken strips and our Bang Bang sauce.", descAr: "رز أبيض مع قطع ستربس الدجاج المقرمشة وصلصة البانك بانك.", price: 7000, category: "rice-bowls", tags: ["New"], featured: false, image: "assets/images/menu/rizo-bangbang.jpg" },
  { name: "Rizo Smoky", nameAr: "ريزو سموكي", description: "Smoked rice topped with chopped crispy chicken strips and smoky sauce.", descAr: "رز مدخن مع قطع ستربس الدجاج المقرمشة وصلصة سموكي.", price: 7000, category: "rice-bowls", tags: [], featured: false, image: "assets/images/menu/rizo-smoky.jpg" },

  // ---- Sandwiches & Wraps ----
  { name: "Twister", nameAr: "تويستر", description: "Crispy chicken strips with lettuce, tomato, and cheddar, wrapped in toasted tortilla bread.", descAr: "سترسبس دجاج مقرمشة مع الخس والطماطم وجبنة التشيدر، ملفوفة في خبز التورتيلا المحمّص.", price: 6500, category: "sandwiches", tags: [], featured: false, image: "assets/images/menu/twister.jpg" },
  { name: "Donz", nameAr: "دونز", description: "Chopped broasted chicken with lemon, coleslaw, and fries, wrapped in pita bread.", descAr: "بروستد مقطّع مع الليمون والكولسلو والبطاطا المقلية، ملفوف في خبز البيتا.", price: 6500, category: "sandwiches", tags: ["New"], featured: false, image: "assets/images/menu/sandwich-donz.jpg" },
  { name: "Chicken Kebab Sandwich", nameAr: "ساندويش كباب دجاج", description: "Grilled chicken kebab with herb-roasted peppers, baba ghanoush, and red pepper sauce.", descAr: "كباب دجاج مشوي مع الفلفل المشوي بالأعشاب وبابا غنوج وصلصة الفلفل الأحمر.", price: 6500, category: "sandwiches", tags: ["Popular"], featured: true, image: "assets/images/menu/kebab-sandwich.jpg" },

  // ---- Burgers ----
  { name: "Beef Burger", nameAr: "برغر لحم بقري", description: "A beef patty with Thousand Island sauce, cheddar cheese, caramelized onion, lettuce, and tomato.", descAr: "برغر لحم بقري مع صلصة ثاوزند آيلاند وجبنة تشيدر وبصل مكرمّل مع خس وطماطم.", price: 8500, category: "burgers", tags: ["Chef's Pick"], featured: false, image: "assets/images/menu/beef-burger.jpg" },

  // ---- Kids Meal ----
  { name: "Kids Meal", nameAr: "وجبة الكتاكيت", description: "3 pieces of crispy chicken strips, with fries and a juice.", descAr: "3 قطع من شرائح الدجاج المقرمشة، مع بطاطا مقلية وعصير.", price: 6000, category: "kids", tags: [], featured: false, image: "assets/images/menu/kids-meal.jpg" },

  // ---- Hot Starters ----
  { name: "Fries", nameAr: "بطاطا مقلية", description: "Golden fries, hot from the fryer.", descAr: "بطاطا ذهبية مقرمشة، ساخنة من المقلاة.", price: 2500, category: "hot-starters", tags: [], featured: false, image: "assets/images/menu/fries.jpg" },
  { name: "Family Fries", nameAr: "بطاطا مقلية عائلي", description: "A family-size tray of golden fries.", descAr: "طبق بطاطا مقلية بحجم عائلي.", price: 4000, category: "hot-starters", tags: [], featured: false, image: "assets/images/menu/fries-family.jpg" },
  { name: "Potato Balls", nameAr: "كرات البطاطا", description: "Roasted potato balls, seasoned with chicken broth and herbs.", descAr: "كرات بطاطا مشوية، متبّلة بمرقة الدجاج والأعشاب.", price: 3500, category: "hot-starters", tags: [], featured: false, image: "assets/images/menu/potato-balls.jpg" },

  // ---- Cold Starters ----
  { name: "Baba Ghanoush", nameAr: "بابا غنوج", description: "Smoky roasted eggplant with fresh chopped vegetables.", descAr: "باذنجان مشوي بنكهته المدخنة مع الخضار الطازجة المقطّعة.", price: 3000, category: "cold-starters", tags: [], featured: false, image: "assets/images/menu/baba-ghanoush.jpg" },
  { name: "Hommos with Tahini", nameAr: "حمص بطحينة", description: "Silky house-made hummus with tahini.", descAr: "حمص بيتي ناعم بالطحينة.", price: 3000, category: "cold-starters", tags: [], featured: false, image: "assets/images/menu/hommos.jpg" },

  // ---- Salads ----
  { name: "Garden Salad", nameAr: "سلطة الكاردن", description: "Fresh mixed vegetables, served with lemon-mustard or balsamic vinaigrette.", descAr: "سلطة من الخضار الطازجة، تُقدَّم مع صوص الليمون والخردل أو خل البلسميك.", price: 4500, category: "salads", tags: [], featured: false, image: "assets/images/menu/salad-garden.jpg" },
  { name: "Caesar Salad", nameAr: "سلطة سيزر", description: "Crisp romaine lettuce with Caesar dressing, toasted croutons, and parmesan.", descAr: "خس روماني طازج مع صلصة السيزر والتوست المحمّص وجبنة البارميزان.", price: 4500, category: "salads", tags: ["New"], featured: false, image: "assets/images/menu/salad-caesar.jpg" },
  { name: "Coleslaw", nameAr: "كولسلو", description: "Classic creamy coleslaw.", descAr: "كولسلو كريمي كلاسيكي.", price: 500, category: "salads", tags: [], featured: false, image: "assets/images/menu/coleslaw.jpg" },

  // ---- Rice ----
  { name: "White Rice", nameAr: "رز أبيض", description: "Simple, fluffy steamed rice.", descAr: "رز أبيض مطهو على البخار، طري وبسيط.", price: 3000, category: "rice", tags: [], featured: false, image: "assets/images/menu/rice-white.jpg" },
  { name: "Smoked Rice", nameAr: "رز مدخن", description: "Rice finished with a smoked edge.", descAr: "رز بنكهة مدخنة تضيف عمقًا لكل لقمة.", price: 3500, category: "rice", tags: [], featured: false, image: "assets/images/menu/rice-smoked.jpg" },
  { name: "Kabsa Rice", nameAr: "رز كبسة", description: "Fragrant, spiced kabsa-style rice.", descAr: "رز على طريقة الكبسة، عطري ومتبّل بخلطة بهارات غنية.", price: 3000, category: "rice", tags: ["Popular"], featured: false, image: "assets/images/menu/rice-kabsa.jpg" },

  // ---- Sauces & Dips ----
  { name: "Honey Mustard Sauce", nameAr: "صلصة هاني ماسترد", description: "Sweet and tangy honey mustard.", descAr: "صلصة هاني ماسترد بمزيج حلو وحامض.", price: 1000, category: "sauces", tags: [], featured: false, image: "assets/images/menu/sauce-honey-mustard.jpg" },
  { name: "Bang Bang Sauce", nameAr: "صلصة بانك بانك", description: "Our signature Bang Bang sauce.", descAr: "صلصة البانك بانك المميزة عندنا.", price: 1500, category: "sauces", tags: ["Signature"], featured: false, image: "assets/images/menu/sauce-bangbang.jpg" },
  { name: "Kaib Sauce", nameAr: "صلصة كيب", description: "Don Chicko's own Kaib sauce.", descAr: "صلصة الكيب الخاصة بدون تشيكو.", price: 1500, category: "sauces", tags: [], featured: false, image: "assets/images/menu/sauce-kaib.jpg" },
  { name: "Local BBQ Sauce", nameAr: "صلصة باربيكيو محلي", description: "Classic house BBQ.", descAr: "صلصة باربكيو البيت، على الوصفة الكلاسيكية.", price: 1000, category: "sauces", tags: [], featured: false, image: "assets/images/menu/sauce-bbq.jpg" },
  { name: "Crevy Sauce", nameAr: "صلصة كريفي", description: "Don Chicko's creamy house Crevy sauce.", descAr: "صلصة كريفي الكريمية الخاصة بدون تشيكو.", price: 1500, category: "sauces", tags: [], featured: false, image: "assets/images/menu/sauce-crevy.jpg" },
  { name: "Spicy Sauce", nameAr: "صلصة سبايسي", description: "Straightforward heat.", descAr: "حرارة صريحة، بلا مجاملات.", price: 1000, category: "sauces", tags: [], featured: false, image: "assets/images/menu/sauce-spicy.jpg" },
  { name: "Garlic Sauce", nameAr: "صلصة ثومية", description: "Bold, creamy house garlic sauce.", descAr: "صلصة ثومية كريمية بنكهة قوية.", price: 1000, category: "sauces", tags: [], featured: false, image: "assets/images/menu/sauce-garlic.jpg" },

  // ---- Desserts ----
  { name: "Double Chocolate Cookies", nameAr: "دبل تشوكلت كوكيز", description: "Warm, gooey double chocolate cookies.", descAr: "كوكيز بالشوكولاتة المزدوجة، دافئة وطرية من الداخل.", price: 3500, category: "desserts", tags: [], featured: false, image: "assets/images/menu/cookies-chocolate.jpg" },
  { name: "Red Velvet Cookies", nameAr: "ريد فيلفت كوكيز", description: "Soft red velvet cookies with white chocolate.", descAr: "كوكيز الريد فيلفت الطرية، مع قطع الشوكولاتة البيضاء.", price: 3500, category: "desserts", tags: ["Popular"], featured: false, image: "assets/images/menu/cookies-red-velvet.jpg" },
  { name: "Merry Cream", nameAr: "ميري كريم", description: "A sweet, creamy Don Chicko soft-serve dessert.", descAr: "حلوى آيسكريم كريمية حلوة، من توقيع دون تشيكو الخاص.", price: 2500, category: "desserts", tags: [], featured: false, image: "assets/images/menu/merry-cream.jpg" },
  { name: "Peanut Butter Cookies", nameAr: "بينت بتر كوكيز", description: "Soft peanut butter cookies.", descAr: "كوكيز بزبدة الفول السوداني الطرية.", price: 3500, category: "desserts", tags: ["New"], featured: false, image: "assets/images/menu/cookies-peanut-butter.jpg" },

  // ---- Drinks ----
  { name: "Water", nameAr: "ماء", description: "Bottled water.", descAr: "زجاجة ماء.", price: 500, category: "drinks", tags: [], featured: false, image: "assets/images/menu/water.jpg" },
  { name: "Soft Drink", nameAr: "مشروب غازي", description: "Your choice of soft drink.", descAr: "مشروب غازي بحسب اختيارك.", price: 750, category: "drinks", tags: [], featured: false, image: "assets/images/menu/soft-drink.jpg" },
  { name: "Malt (Laban Ghazi)", nameAr: "لبن غازي", description: "Sparkling malt drink.", descAr: "مشروب اللبن الغازي المنعش.", price: 1000, category: "drinks", tags: [], featured: false, image: "assets/images/menu/laban.jpg" },
  { name: "Juice", nameAr: "عصير", description: "Chilled fruit juice.", descAr: "عصير فواكه بارد.", price: 500, category: "drinks", tags: [], featured: false, image: "assets/images/menu/juice.jpg" },
];

const CATEGORIES = [
  { id: "broasted", label: "Broasted Chicken", labelAr: "دجاج بروستد" },
  { id: "roasted", label: "Grilled Chicken", labelAr: "دجاج مشوي" },
  { id: "chicken-strips", label: "Chicken Strips", labelAr: "ستربس الدجاج" },
  { id: "rice-bowls", label: "Rizo Bowls", labelAr: "ريزو" },
  { id: "sandwiches", label: "Sandwiches & Wraps", labelAr: "سندويشات ولفائف" },
  { id: "burgers", label: "Burgers", labelAr: "برغر" },
  { id: "kids", label: "Kids Meal", labelAr: "وجبة الأطفال" },
  { id: "hot-starters", label: "Hot Starters", labelAr: "مقبلات ساخنة" },
  { id: "cold-starters", label: "Cold Starters", labelAr: "مقبلات باردة" },
  { id: "salads", label: "Salads", labelAr: "سلطات" },
  { id: "rice", label: "Rice", labelAr: "أرز" },
  { id: "sauces", label: "Sauces & Dips", labelAr: "صلصات وغماسات" },
  { id: "desserts", label: "Desserts", labelAr: "حلويات" },
  { id: "drinks", label: "Drinks", labelAr: "مشروبات" },
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
