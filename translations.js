/* ==========================================================================
   TRANSLATIONS — Don Chicko bilingual system (English / Arabic).
   Every user-facing static string lives here, keyed by dot-path. HTML
   elements opt in via data-i18n (textContent), data-i18n-html (innerHTML —
   for strings that carry a nested <span>/<br>), or data-i18n-attr-<attr>
   (sets that attribute, e.g. data-i18n-attr-content on a <meta> tag).
   Menu item / category text lives in script.js next to MENU_ITEMS, since it
   travels with that data; this file drives everything else, plus exposes
   the shared language engine both scripts read from (window.DonChickoI18n).
   ========================================================================== */
const translations = {
  en: {
    meta: {
      titleHome: "Don Chicko — Grilled or Fried, Always Unforgettable",
      descriptionHome: "Don Chicko: Baghdad's chicken experience that stays with you. Grilled or fried, marinated to the center, built on four flames — Passion, Precision, Togetherness, Character.",
      titleMenu: "The Menu — Don Chicko",
      descriptionMenu: "Don Chicko's full menu: broasted and roasted chicken, sandwiches, burgers, starters, rice, house sauces and desserts. Grilled or fried, always cooked to the center.",
    },
    a11y: {
      skipLink: "Skip to main content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchLanguage: "Switch language",
      homeLabel: "Don Chicko — home",
    },
    brand: { name: "DON CHICKO" },
    nav: { home: "Home", menu: "Menu", story: "Our Story", visit: "Visit", findUs: "Find Us" },
    hero: {
      eyebrow: "Grilled or Fried",
      headlineHtml: 'The Chicken You <span class="hl-orange">Never Knew</span> You Needed',
      headlineSub: "Always unforgettable. Always cooked to the center.",
      copy: "Built on trust. Made with depth. Served with pride. Don Chicko is the chicken experience that stays with you — born in Baghdad, made for everywhere.",
      ctaMenu: "See the Menu",
      ctaStory: "Our Story",
      photoAlt: "Crispy chicken tenders and fries with ketchup and mayo, on a dark scorched-orange surface",
    },
    featured: {
      eyebrow: "Straight From the Flame",
      title: "The Don's Picks",
      subtitle: "Three from the fire, chosen by the Don himself.",
      cta: "See the Full Menu",
    },
    about: {
      eyebrow: "Our Story",
      title: "Baghdad, Let's Rise",
      lede: "Nobody knows exactly who he is. Some say he ran a spice route between Beirut and Basra. Others say he's an old soul chasing the perfect bite. One thing is certain: Don Chicko is Baghdadi — and he lives for chicken.",
      body: "Not the ordinary kind. The kind you bite once and never forget. Crispy or grilled, skin or center — he wanted it all to hit right. So he did what every good chef does: he built a fire. Not just any fire — he lit it with four flames.",
      statLabelHtml: "Friends.<br>One flame.",
      visualAlt: "Grilled Don Chicko chicken with herbs, tomatoes and fresh bread, plated on a sizzling skillet",
      visualBadge: "Made by the Don",
      flamesEyebrow: "The Flames",
      flamesTitle: "Everything we do comes from one of these four",
      flame1Title: "Flame of Passion",
      flame1Desc: "Chicken done right — juicy, crispy, unforgettable. Marinated to the center, not just the skin.",
      flame2Title: "Flame of Precision",
      flame2Desc: "Care. Timing. Temperature. Sequence. Good chicken can't save bad execution.",
      flame3Title: "Flame of Togetherness",
      flame3Desc: "No vision comes to life alone. Dishes made to be shared, at a table that feels like home.",
      flame4Title: "Flame of Character",
      flame4Desc: "The Baghdadi spirit — bold, rooted, unmistakable. When you have your own flavor, you don't need to shout.",
    },
    visit: {
      eyebrow: "Come Through",
      title: "Find Us",
      locationTitle: "Location",
      locationBodyHtml: "Baghdad, Iraq<br>Exact address dropping soon.",
      followTitle: "Follow",
      instagramLabel: "Instagram — @donchicko",
      cookingTitle: "What's Cooking",
      cookingBody: "We're firing up the kitchen. Follow along for opening updates and the first taste of Don Chicko.",
      visualLabelHtml: "Opening Soon<br>in Baghdad",
    },
    footer: {
      social: "Instagram",
      location: "Baghdad, Iraq",
      copyright: "Don Chicko. Built on four flames.",
    },
    menuPage: {
      eyebrow: "Built on Four Flames",
      title: "The Menu",
      copy: "Every category, straight from Don Chicko's own recipe board. Grilled or fried — always marinated to the center.",
      noteHtml: 'Prices shown in Iraqi Dinar. Menu subject to change — follow <a href="https://instagram.com/donchicko" target="_blank" rel="noopener">@donchicko</a> for new arrivals.',
    },
    langSelect: {
      heading: "Choose Your Language",
      sub: "Select your preferred language to continue",
      en: "English",
      ar: "عربي",
    },
  },

  ar: {
    meta: {
      titleHome: "دون تشيكو — مشوي أو مقلي، طعم لا يُنسى",
      descriptionHome: "دون تشيكو: تجربة الدجاج التي تبقى معك في بغداد. مشوي أو مقلي، متبّل حتى المنتصف، مبني على أربعة ألسنة لهب — الشغف، الدقة، الترابط، الشخصية.",
      titleMenu: "قائمة الطعام — دون تشيكو",
      descriptionMenu: "قائمة دون تشيكو الكاملة: دجاج بروستد ومشوي، سندويشات، برغر، مقبلات، أرز، صلصات البيت والحلويات. مشوي أو مقلي، ودائمًا مطهو حتى المنتصف.",
    },
    a11y: {
      skipLink: "تخطَّ إلى المحتوى الرئيسي",
      openMenu: "افتح القائمة",
      closeMenu: "أغلق القائمة",
      switchLanguage: "تغيير اللغة",
      homeLabel: "دون تشيكو — الرئيسية",
    },
    brand: { name: "دون تشيكو" },
    nav: { home: "الرئيسية", menu: "قائمة الطعام", story: "قصتنا", visit: "زورونا", findUs: "موقعنا" },
    hero: {
      eyebrow: "مشوي أو مقلي",
      headlineHtml: 'الدجاج الذي <span class="hl-orange">لم تكن تعرف</span> أنك بحاجة إليه',
      headlineSub: "طعم لا يُنسى دائمًا. مطهو حتى المنتصف دائمًا.",
      copy: "مبني على الثقة. مصنوع بعمق. يُقدَّم بفخر. دون تشيكو هو تجربة الدجاج التي تبقى معك — وُلدت في بغداد، وصُنعت لكل مكان.",
      ctaMenu: "شاهد قائمة الطعام",
      ctaStory: "قصتنا",
      photoAlt: "أصابع دجاج مقرمشة وبطاطا مقلية مع الكاتشب والمايونيز، على سطح داكن بلون البرتقالي المحروق",
    },
    featured: {
      eyebrow: "مباشرة من النار",
      title: "اختيارات الدون",
      subtitle: "ثلاثة أطباق من النار، اختارها الدون بنفسه.",
      cta: "شاهد القائمة الكاملة",
    },
    about: {
      eyebrow: "قصتنا",
      title: "بغداد، لنرتقِ",
      lede: "لا أحد يعرف بالضبط من هو. البعض يقول إنه كان يدير طريق توابل بين بيروت والبصرة. آخرون يقولون إنه روح عتيقة تطارد اللقمة المثالية. شيء واحد مؤكد: دون تشيكو بغدادي — ويعيش من أجل الدجاج.",
      body: "ليس الدجاج العادي. بل النوع الذي تعضه مرة واحدة ولا تنساه أبدًا. مقرمش أو مشوي، القشرة أو المنتصف — أراد أن يكون كل شيء صحيحًا. فعل ما يفعله كل طاهٍ بارع: أشعل نارًا. ليست نارًا عادية — أشعلها بأربعة ألسنة لهب.",
      statLabelHtml: "أصدقاء.<br>نار واحدة.",
      visualAlt: "دجاج دون تشيكو المشوي مع الأعشاب والطماطم والخبز الطازج، مقدَّم على مقلاة ساخنة",
      visualBadge: "من صنع الدون",
      flamesEyebrow: "ألسنة اللهب",
      flamesTitle: "كل ما نفعله ينبع من واحدة من هذه الأربع",
      flame1Title: "لهب الشغف",
      flame1Desc: "دجاج مُحضَّر بإتقان — طري، مقرمش، لا يُنسى. متبّل حتى المنتصف، وليس القشرة فقط.",
      flame2Title: "لهب الدقة",
      flame2Desc: "عناية. توقيت. حرارة. تسلسل. الدجاج الجيد وحده لا ينقذ التنفيذ السيئ.",
      flame3Title: "لهب الترابط",
      flame3Desc: "لا رؤية تتحقق بمفردها. أطباق صُنعت لتُشارَك، على طاولة تشعرك بالبيت.",
      flame4Title: "لهب الشخصية",
      flame4Desc: "الروح البغدادية — جريئة، متجذرة، لا تُخطئها العين. عندما يكون لديك نكهتك الخاصة، لست بحاجة للصراخ.",
    },
    visit: {
      eyebrow: "تعال وجرّب",
      title: "موقعنا",
      locationTitle: "الموقع",
      locationBodyHtml: "بغداد، العراق<br>العنوان الدقيق يُعلن قريبًا.",
      followTitle: "تابعونا",
      instagramLabel: "إنستغرام — ⁦@donchicko⁩",
      cookingTitle: "ماذا نطهو",
      cookingBody: "نجهّز المطبخ الآن. تابعونا لمعرفة آخر مستجدات الافتتاح وأول طعم من دون تشيكو.",
      visualLabelHtml: "الافتتاح قريبًا<br>في بغداد",
    },
    footer: {
      social: "إنستغرام",
      location: "بغداد، العراق",
      copyright: "دون تشيكو. مبني على أربعة ألسنة لهب.",
    },
    menuPage: {
      eyebrow: "مبني على أربعة ألسنة لهب",
      title: "قائمة الطعام",
      copy: "كل صنف، مباشرة من لوحة وصفات دون تشيكو. مشوي أو مقلي — دائمًا متبّل حتى المنتصف.",
      noteHtml: 'الأسعار معروضة بالدينار العراقي. القائمة قابلة للتغيير — تابعوا <a href="https://instagram.com/donchicko" target="_blank" rel="noopener">⁦@donchicko⁩</a> لمعرفة الأصناف الجديدة.',
    },
    langSelect: {
      heading: "اختر لغتك",
      sub: "اختر لغتك المفضلة للمتابعة",
      en: "English",
      ar: "عربي",
    },
  },
};

/* ==========================================================================
   ENGINE
   ========================================================================== */
(function () {
  const STORAGE_KEY = "donchicko_lang";
  let currentLang = "en";

  function getSavedLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable (private mode, etc) — language just won't persist */
    }
  }

  function lookup(dict, path) {
    return path.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), dict);
  }

  function t(path, lang) {
    const lookupLang = lang || currentLang;
    const val = lookup(translations[lookupLang], path);
    if (val !== undefined) return val;
    return lookup(translations.en, path);
  }

  function applyStaticTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const val = t(el.getAttribute("data-i18n"));
      if (val != null) el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const val = t(el.getAttribute("data-i18n-html"));
      if (val != null) el.innerHTML = val;
    });

    document.querySelectorAll("*").forEach((el) => {
      for (const attr of Array.from(el.attributes)) {
        if (attr.name.startsWith("data-i18n-attr-")) {
          const targetAttr = attr.name.slice("data-i18n-attr-".length);
          const val = t(attr.value);
          if (val != null) el.setAttribute(targetAttr, val);
        }
      }
    });

    document.querySelectorAll(".lang-switch-btn").forEach((btn) => {
      const isActive = btn.dataset.lang === currentLang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
  }

  function applyLanguage(lang) {
    currentLang = translations[lang] ? lang : "en";
    document.documentElement.setAttribute("lang", currentLang);
    document.documentElement.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");

    applyStaticTranslations();

    document.dispatchEvent(new CustomEvent("donchicko:langchange", { detail: { lang: currentLang } }));
  }

  function setLanguage(lang) {
    saveLang(lang);
    applyLanguage(lang);
  }

  function wireLangSwitchButtons() {
    document.querySelectorAll(".lang-switch-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });
  }

  function initLanguageOverlay() {
    const overlay = document.getElementById("langOverlay");
    const saved = getSavedLang();

    if (saved && translations[saved]) {
      applyLanguage(saved);
      if (overlay) overlay.remove();
    } else {
      applyLanguage("en");
      if (overlay) {
        document.body.classList.add("lang-locked");
        overlay.querySelectorAll("[data-lang-choice]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang-choice");
            setLanguage(lang);
            overlay.classList.add("is-hidden");
            document.body.classList.remove("lang-locked");
            overlay.addEventListener(
              "transitionend",
              () => overlay.remove(),
              { once: true }
            );
            // Safety net in case transitionend doesn't fire (e.g. reduced motion).
            setTimeout(() => overlay.remove(), 500);
          });
        });
      }
    }

    wireLangSwitchButtons();
  }

  document.addEventListener("DOMContentLoaded", initLanguageOverlay);

  window.DonChickoI18n = {
    t,
    getCurrentLang: () => currentLang,
    onChange: (cb) => document.addEventListener("donchicko:langchange", cb),
  };
})();
