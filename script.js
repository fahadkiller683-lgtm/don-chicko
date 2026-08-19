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
  { name: "Fattoush", nameAr: "فتوش", description: "Crisp mixed greens tossed with toasted bread and a bright, tangy dressing.", descAr: "خضار طازجة مقرمشة مع خبز محمّص، وصلصة حامضة تفتح النفس.", price: 5000, category: "salads", tags: [], featured: false, image: "assets/images/menu/salad-fattoush.jpg" },
  { name: "Arugula Salad", nameAr: "سلطة جرجير", description: "Peppery arugula, kept light and fresh.", descAr: "جرجير طازج بنكهته الحادة المميزة، خفيف على المعدة ومنعش.", price: 6000, category: "salads", tags: [], featured: false, image: "assets/images/menu/salad-arugula.jpg" },
  { name: "Caesar Salad", nameAr: "سلطة سيزر", description: "The classic — crisp romaine, parmesan, and Caesar dressing.", descAr: "طبق كلاسيكي لا يخيب: خس روماني مقرمش، رقائق بارميزان، وصلصة سيزر الأصلية.", price: 6500, category: "salads", tags: ["Popular"], featured: false },

  // ---- Cold Starters ----
  { name: "Hommos Purée", nameAr: "حمص مهروس", description: "Silky house-made hummus, served cold.", descAr: "حمص بيتي ناعم كالحرير، يُقدَّم باردًا كما يحب أهل بغداد.", price: 4000, category: "cold-starters", tags: [], featured: false, image: "assets/images/menu/hommos.jpg" },
  { name: "Tomato Purée & Toast", nameAr: "هريس الطماطم مع التوست", description: "Fresh tomato purée served with warm toast for dipping.", descAr: "هريس طماطم طازج، يصل مع توست ساخن جاهز للتغميس.", price: 4000, category: "cold-starters", tags: [], featured: false },
  { name: "Bread Basket", nameAr: "سلة خبز", description: "Fresh bread, straight to the table.", descAr: "سلة خبز طازج، تصل ساخنة إلى طاولتك.", price: 2000, category: "cold-starters", tags: [], featured: false },
  { name: "Garlic Dip", nameAr: "غموس الثوم", description: "Cool, punchy, garlic-forward — built for sharing.", descAr: "غموس بارد بنكهة ثوم قوية تلفت الانتباه — صُنع ليُشارَك على الطاولة.", price: 2000, category: "cold-starters", tags: [], featured: false },

  // ---- Hot Starters ----
  { name: "Fries", nameAr: "بطاطا مقلية", description: "Classic golden fries, hot from the fryer.", descAr: "بطاطا ذهبية مقرمشة، تصلك ساخنة طازجة من المقلاة.", price: 3000, category: "hot-starters", tags: ["Popular"], featured: false, image: "assets/images/menu/fries.jpg" },
  { name: "Wedges or Curly Fries", nameAr: "ويدجز أو بطاطا حلزونية", description: "Your call — thick-cut wedges or curly fries.", descAr: "الخيار لك — قطع بطاطا سميكة أو بطاطا حلزونية مقرمشة.", price: 3500, category: "hot-starters", tags: [], featured: false, image: "assets/images/menu/fries-wedges.jpg" },
  { name: "Herbed Potato Wheels", nameAr: "أقراص بطاطا بالأعشاب", description: "Roasted potato wheels tossed in herbs.", descAr: "أقراص بطاطا مشوية، معطّرة بخلطة أعشاب بيتية.", price: 4000, category: "hot-starters", tags: [], featured: false, image: "assets/images/menu/potato-wheels.jpg" },
  { name: "Breaded Onion Rings", nameAr: "حلقات بصل مقرمشة", description: "Crunchy, golden, and made for dipping.", descAr: "حلقات ذهبية مقرمشة من الخارج، طرية من الداخل — تغميسها لازم.", price: 4000, category: "hot-starters", tags: [], featured: false },
  { name: "Breaded Mozzarella Sticks", nameAr: "أصابع موزاريلا مقرمشة", description: "Crisp shell, molten center.", descAr: "قشرة مقرمشة تُخفي بداخلها جبنة ذائبة تمتد مع كل قضمة.", price: 5000, category: "hot-starters", tags: ["Popular"], featured: false },
  { name: "Chicken Fingers", nameAr: "أصابع دجاج", description: "Hand-breaded chicken fingers, fried to order.", descAr: "أصابع دجاج مبطّنة يدويًا، تُقلى فور الطلب لتصل مقرمشة.", price: 5500, category: "hot-starters", tags: [], featured: false, image: "assets/images/menu/chicken-fingers.jpg" },
  { name: "Chicken Dumplings", nameAr: "دمبلنغز الدجاج", description: "Pan-fried chicken dumplings, served hot.", descAr: "دمبلنغز دجاج محمّرة على الصاج، تُقدَّم وهي ساخنة.", price: 5000, category: "hot-starters", tags: [], featured: false },
  { name: "Chicken Chimichinga", nameAr: "تشيميتشينغا دجاج", description: "Rolled, fried, and packed with seasoned chicken.", descAr: "ملفوفة ومقلية، ومحشوّة بدجاج متبّل بسخاء.", price: 5500, category: "hot-starters", tags: ["New"], featured: false },
  { name: "Spicy Chicken Flautas", nameAr: "فلوتاس دجاج حار", description: "Crisp rolled tortillas with spicy chicken filling.", descAr: "تورتيلا ملفوفة ومقرمشة، بحشوة دجاج حارة تشعل النفس.", price: 5500, category: "hot-starters", tags: ["New"], featured: false },
  { name: "Chicken Arepas", nameAr: "أريباس دجاج", description: "Griddled corn cakes stuffed with seasoned chicken.", descAr: "أقراص ذرة مشوية على الصاج، محشوّة بدجاج متبّل.", price: 5000, category: "hot-starters", tags: [], featured: false },

  // ---- Broasted Chicken (fried, signature) ----
  { name: "Broasted — 4 Pieces", nameAr: "بروستد – 4 قطع", description: "Don Chicko's signature broasted chicken. Marinated to the center, always.", descAr: "بروستد دون تشيكو المميز، بتتبيلة تصل حتى العظم في كل مرة.", price: 9000, category: "broasted", tags: [], featured: false, image: "assets/images/menu/broasted-4pc.jpg" },
  { name: "Broasted — 8 Pieces", nameAr: "بروستد – 8 قطع", description: "Don Chicko's signature broasted chicken, for the table.", descAr: "بروستد دون تشيكو المميز، بكمية تكفي الطاولة كاملة.", price: 16000, category: "broasted", tags: ["Popular"], featured: false, image: "assets/images/menu/broasted-8pc.jpg" },
  { name: "Broasted — 12 Pieces", nameAr: "بروستد – 12 قطعة", description: "The full flame — Don Chicko's signature broasted chicken, family-size.", descAr: "كل النار في طبق واحد — بروستد دون تشيكو بحجم يليق بالعائلة.", price: 22000, category: "broasted", tags: [], featured: false, image: "assets/images/menu/broasted-12pc.jpg" },
  { name: "Whole Broasted Chicken", nameAr: "دجاجة كاملة بروستد", description: "A whole chicken, broasted the Don Chicko way.", descAr: "دجاجة كاملة، بروستد على طريقة الدون من الرأس للذيل.", price: 14000, category: "broasted", tags: ["Signature"], featured: true, image: "assets/images/menu/broasted-whole.jpg" },
  { name: "Broasted Formulas", nameAr: "عروض البروستد", description: "Ask your server about our combo formulas — chicken, sides, and a drink, bundled together.", descAr: "اسأل النادل عن عروضنا المجمّعة — دجاج، أطباق جانبية، ومشروب في طلب واحد.", price: 18000, category: "broasted", tags: [], featured: false, image: "assets/images/menu/broasted-formulas.jpg" },

  // ---- Roasted / Grilled Chicken ----
  { name: "Roasted — 8 Pieces", nameAr: "مشوي – 8 قطع", description: "Grilled, not fried — always unforgettable, always cooked to the center.", descAr: "على الفحم لا في الزيت — نكهة تلازم الذاكرة، ونضج يصل حتى العظم في كل قطعة.", price: 16000, category: "roasted", tags: [], featured: false, image: "assets/images/menu/roasted-8pc.jpg" },
  { name: "Whole Roasted Chicken", nameAr: "دجاجة كاملة مشوية", description: "A whole chicken over the flame, grilled the Don Chicko way.", descAr: "دجاجة كاملة فوق الجمر، مشوية على طريقة دون تشيكو الخاصة.", price: 14000, category: "roasted", tags: ["Signature"], featured: false, image: "assets/images/menu/roasted-whole.jpg" },

  // ---- Sandwiches ----
  { name: "Chicken Beiruti", nameAr: "دجاج بيروتي", description: "A Beiruti-style chicken sandwich, Don Chicko's way.", descAr: "سندويش دجاج على الطريقة البيروتية، بلمسة دون تشيكو الخاصة.", price: 6000, category: "sandwiches", tags: ["Popular"], featured: true, image: "assets/images/menu/sandwich-beiruti.jpg" },
  { name: "Tawook – Spiedes", nameAr: "طاووق – أسياخ", description: "Skewered, marinated chicken tawook.", descAr: "طاووق دجاج متبّل، مشوي على السيخ حتى يصبح ذهبيًا.", price: 6500, category: "sandwiches", tags: [], featured: false, image: "assets/images/menu/tawook.jpg" },
  { name: "Chicken Parmesan Subs", nameAr: "سندويش دجاج بارميزان", description: "Breaded chicken, melted cheese, classic sub roll.", descAr: "دجاج مقرمش وجبنة ذائبة، في خبز ساندويش كلاسيكي.", price: 7000, category: "sandwiches", tags: [], featured: false, image: "assets/images/menu/chicken-parmesan-sub.jpg" },
  { name: "Souvlaki", nameAr: "سوفلاكي", description: "Grilled chicken souvlaki, wrapped up.", descAr: "سوفلاكي دجاج مشوي، ملفوف بإحكام بكل نكهته.", price: 6500, category: "sandwiches", tags: [], featured: false, image: "assets/images/menu/souvlaki.jpg" },
  { name: "Chicken Burritos Mojados", nameAr: "بوريتو دجاج رطب", description: "A \"wet\" chicken burrito, sauced and loaded.", descAr: "بوريتو دجاج \"رطب\"، مغمور بالصلصة ومحمّل بالحشوة حتى آخره.", price: 7500, category: "sandwiches", tags: ["New"], featured: false, image: "assets/images/menu/burrito-mojados.jpg" },
  { name: "Pulled Chicken BBQ", nameAr: "دجاج مسحوب بصلصة الباربكيو", description: "Slow-pulled chicken in Don Chicko's BBQ sauce.", descAr: "دجاج مطهو ببطء ومسحوب بالكامل، مغموس بصلصة الباربكيو الخاصة بالدون.", price: 7000, category: "sandwiches", tags: [], featured: false, image: "assets/images/menu/bbq.jpg" },
  { name: "Texas-Size BBQ Chicken & Cheddar", nameAr: "باربكيو دجاج وتشيدر بحجم تكساس", description: "Big BBQ chicken sandwich, loaded with cheddar.", descAr: "سندويش باربكيو كبير الحجم، محمّل بجبنة تشيدر لا تُقاوَم.", price: 8000, category: "sandwiches", tags: ["New"], featured: false, image: "assets/images/menu/texas-bbq-cheddar.jpg" },
  { name: "Chicken Kebabs BBQ", nameAr: "كباب دجاج بالباربكيو", description: "Chicken kebabs finished in BBQ sauce.", descAr: "كباب دجاج مشوي، منقوع بصلصة الباربكيو حتى آخر قطعة.", price: 7000, category: "sandwiches", tags: [], featured: false, image: "assets/images/menu/chicken-kebabs-bbq.jpg" },

  // ---- Burgers ----
  { name: "Chicken Fillet Burger", nameAr: "برغر فيليه دجاج", description: "Grilled chicken fillet, dressed and stacked.", descAr: "فيليه دجاج مشوي، مكدّس مع كل الإضافات المناسبة.", price: 6000, category: "burgers", tags: [], featured: false },
  { name: "Chicken Crispy Burger", nameAr: "برغر دجاج كرسبي", description: "Crispy fried chicken, dressed and stacked.", descAr: "دجاج مقرمش من الخارج، مكدّس مع الإضافات على طريقتنا.", price: 6500, category: "burgers", tags: ["Popular"], featured: false },
  { name: "Beef Burger", nameAr: "برغر لحم", description: "A classic Don Chicko beef burger.", descAr: "برغر لحم بقري كلاسيكي، بتوقيع دون تشيكو.", price: 7500, category: "burgers", tags: ["Chef's Pick"], featured: true, image: "assets/images/menu/beef-burger.jpg" },
  { name: "Veggie Burger", nameAr: "برغر نباتي", description: "A plant-based patty, dressed the Don Chicko way.", descAr: "قرص نباتي بالكامل، مُجهّز بلمسة دون تشيكو المعروفة.", price: 5500, category: "burgers", tags: [], featured: false },

  // ---- Rice ----
  { name: "Smoked Rice", nameAr: "أرز مدخن", description: "Rice finished with a smoked edge.", descAr: "أرز بنكهة مدخنة تضيف عمقًا لكل لقمة.", price: 3000, category: "rice", tags: [], featured: false, image: "assets/images/menu/smoked-rice.jpg" },
  { name: "Kabsa Rice", nameAr: "أرز كبسة", description: "Fragrant, spiced kabsa-style rice.", descAr: "أرز على طريقة الكبسة، عطري ومتبّل بخلطة بهارات غنية.", price: 3500, category: "rice", tags: ["Popular"], featured: false, image: "assets/images/menu/kabsa-rice.jpg" },
  { name: "Herbed Rice", nameAr: "أرز بالأعشاب", description: "Rice tossed through with fresh herbs.", descAr: "أرز مطهو مع خلطة أعشاب طازجة تعطيه رائحة مميزة.", price: 3000, category: "rice", tags: [], featured: false, image: "assets/images/menu/plain-rice.jpg" },
  { name: "Plain Rice", nameAr: "أرز أبيض", description: "Simple, fluffy steamed rice.", descAr: "أرز أبيض مطهو على البخار، طري وبسيط يناسب أي طبق.", price: 2000, category: "rice", tags: [], featured: false, image: "assets/images/menu/plain-rice.jpg" },

  // ---- Sauces & Dips ----
  { name: "Red Dip Plain", nameAr: "صلصة حمراء عادية", description: "A simple, classic red dip.", descAr: "صلصة حمراء بسيطة على الطريقة الكلاسيكية.", price: 1000, category: "sauces", tags: [], featured: false },
  { name: "Gravy", nameAr: "مرقة", description: "Rich, savory gravy.", descAr: "مرقة غنية بنكهتها، تضيف دسامة لأي طبق.", price: 1000, category: "sauces", tags: [], featured: false, image: "assets/images/menu/gravy.jpg" },
  { name: "Chimichurri", nameAr: "تشيميتشوري", description: "Bright, herby, and a little sharp.", descAr: "صلصة أعشاب زاهية بحدّة خفيفة تنعش الطبق.", price: 1500, category: "sauces", tags: [], featured: false },
  { name: "Mushroom Sauce", nameAr: "صلصة الفطر", description: "Earthy mushroom sauce.", descAr: "صلصة فطر بنكهة عميقة قريبة من الأرض.", price: 1500, category: "sauces", tags: [], featured: false },
  { name: "Spicy Honey Dipping Sauce", nameAr: "صلصة العسل الحارة", description: "Sweet heat, built for dipping.", descAr: "حلاوة العسل تلتقي بحرارة الفلفل — صُنعت خصيصًا للتغميس.", price: 1500, category: "sauces", tags: ["Popular"], featured: false },
  { name: "Don Chicko Sauce", nameAr: "صلصة دون تشيكو", description: "The house signature — the Don's own recipe.", descAr: "صلصة البيت المميزة، بوصفة الدون السرية التي لا تُشارَك.", price: 2000, category: "sauces", tags: ["Signature"], featured: false, image: "assets/images/menu/don-chicko-sauce.jpg" },
  { name: "Honey Mustard", nameAr: "خردل بالعسل", description: "Sweet and sharp, classic pairing.", descAr: "مزيج كلاسيكي بين حلاوة العسل وحدّة الخردل.", price: 1500, category: "sauces", tags: [], featured: false },
  { name: "Ranch", nameAr: "رانش", description: "Cool, creamy, classic ranch.", descAr: "صلصة رانش كريمية وباردة، على الطريقة الكلاسيكية.", price: 1500, category: "sauces", tags: [], featured: false },
  { name: "Curry Sauce", nameAr: "صلصة الكاري", description: "Warm curry spice, smooth finish.", descAr: "توابل الكاري الدافئة، بقوام ناعم يلتف حول كل قطعة.", price: 1500, category: "sauces", tags: [], featured: false },
  { name: "Pepper Mayo", nameAr: "مايونيز بالفلفل", description: "Creamy mayo with a peppery kick.", descAr: "مايونيز كريمي، مع لمسة فلفل تعطيه نكهة إضافية.", price: 1500, category: "sauces", tags: [], featured: false },
  { name: "Sweet & Spicy Buffalo Sauce", nameAr: "صلصة بافلو حلوة وحارة", description: "Buffalo heat, balanced with sweetness.", descAr: "حرارة صلصة البافلو، موزونة بلمسة من الحلاوة.", price: 1500, category: "sauces", tags: ["New"], featured: false },
  { name: "Spicy Sauce", nameAr: "صلصة حارة", description: "Straightforward heat.", descAr: "حرارة صريحة، بلا مجاملات.", price: 1000, category: "sauces", tags: [], featured: false, image: "assets/images/menu/spicy-sauce.jpg" },
  { name: "Smokey Sauce", nameAr: "صلصة مدخنة", description: "Deep, smoky, savory.", descAr: "نكهة مدخنة عميقة، تناسب من يحب الطعم القوي.", price: 1500, category: "sauces", tags: [], featured: false },
  { name: "BBQ Sauce", nameAr: "صلصة باربكيو", description: "Classic house BBQ.", descAr: "صلصة باربكيو البيت، على الوصفة الكلاسيكية.", price: 1500, category: "sauces", tags: [], featured: false, image: "assets/images/menu/bbq.jpg" },
  { name: "Avocado Cream", nameAr: "كريمة الأفوكادو", description: "Cool, rich avocado cream.", descAr: "كريمة أفوكادو باردة وغنية، بقوام ناعم.", price: 2000, category: "sauces", tags: [], featured: false },

  // ---- Desserts ----
  { name: "Cobbler Cookies", nameAr: "كوكيز كوبلر", description: "Warm, gooey cobbler-style cookies.", descAr: "كوكيز دافئة بحشوة طرية تذوب في الفم على طريقة الكوبلر.", price: 4000, category: "desserts", tags: [], featured: false, image: "assets/images/menu/cobbler-cookies.jpg" },
  { name: "Brownies", nameAr: "براوني", description: "Rich, fudgy brownies.", descAr: "براوني غني بالشوكولاتة، طري من الداخل.", price: 4500, category: "desserts", tags: ["Popular"], featured: false },
  { name: "Merry Cream", nameAr: "كريمة ميري", description: "A sweet, creamy Don Chicko dessert.", descAr: "حلوى كريمية حلوة، من توقيع دون تشيكو الخاص.", price: 4000, category: "desserts", tags: [], featured: false, image: "assets/images/menu/merry-cream.jpg" },
  { name: "Banana Cake", nameAr: "كيك الموز", description: "Moist banana cake, simple and classic.", descAr: "كيك موز طري وبسيط، على الطريقة الكلاسيكية.", price: 3500, category: "desserts", tags: [], featured: false },

  // ---- Kids Meal ----
  { name: "Kids Meal", nameAr: "وجبة الأطفال", description: "A kid-sized broasted chicken meal with fries — made by the Don, loved by all.", descAr: "وجبة بروستد بحجم يناسب الأطفال مع بطاطا مقلية — من صنع الدون، ويحبها الجميع.", price: 7000, category: "kids", tags: [], featured: false, image: "assets/images/menu/kids-meal.jpg" },
];

const CATEGORIES = [
  { id: "salads", label: "Fresh Salads", labelAr: "سلطات طازجة" },
  { id: "cold-starters", label: "Cold Starters", labelAr: "مقبلات باردة" },
  { id: "hot-starters", label: "Hot Starters", labelAr: "مقبلات ساخنة" },
  { id: "broasted", label: "Broasted Chicken", labelAr: "دجاج بروستد" },
  { id: "roasted", label: "Roasted Chicken", labelAr: "دجاج مشوي" },
  { id: "sandwiches", label: "Sandwiches", labelAr: "سندويشات" },
  { id: "burgers", label: "Burgers", labelAr: "برغر" },
  { id: "rice", label: "Rice", labelAr: "أرز" },
  { id: "sauces", label: "Sauces & Dips", labelAr: "صلصات وغماسات" },
  { id: "desserts", label: "Desserts", labelAr: "حلويات" },
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
    <div class="card-band" aria-hidden="true"></div>
    ${item.image ? `<div class="card-media"><img src="${item.image}" alt="" loading="lazy" width="600" height="450"></div>` : ""}
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
