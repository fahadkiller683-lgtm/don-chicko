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
      titleStory: "Our Story — Don Chicko",
      descriptionStory: "The story of Don Chicko: born in Baghdad, built on four flames — Passion, Precision, Togetherness, Character.",
    },
    a11y: {
      skipLink: "Skip to main content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchLanguage: "Switch language",
      homeLabel: "Don Chicko — home",
      primaryNav: "Primary",
      featuredItems: "Featured menu items",
      categoryJump: "Jump to a menu category",
      pauseSlideshow: "Pause background slideshow",
      playSlideshow: "Play background slideshow",
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
      photoAlt: "Crispy chicken tenders on a wire rack surrounded by house dipping sauces",
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
  },

  ar: {
    meta: {
      titleHome: "دون تشيكو — مشوي أو مقلي، طعم لا يُنسى",
      descriptionHome: "دون تشيكو تجربة دجاج بغدادية تبقى في ذاكرتك، مشويًا كان أم مقليًا ومتبّلًا حتى النخاع، وقائمة على أربع شُعل: الشغف، والدقة، والترابط، والشخصية.",
      titleMenu: "قائمة الطعام — دون تشيكو",
      descriptionMenu: "القائمة الكاملة لدون تشيكو: دجاج بروستد ومشوي، سندويشات، برغر، مقبلات، أرز، صلصات بيتية وحلويات — مشويًا أو مقليًا، ودائمًا مطهو حتى النخاع.",
      titleStory: "قصتنا — دون تشيكو",
      descriptionStory: "قصة دون تشيكو: وُلدت في بغداد، وقامت على أربع شُعل: الشغف، والدقة، والترابط، والشخصية.",
    },
    a11y: {
      skipLink: "تخطَّ إلى المحتوى الرئيسي",
      openMenu: "افتح القائمة",
      closeMenu: "أغلق القائمة",
      switchLanguage: "تغيير اللغة",
      homeLabel: "دون تشيكو — الرئيسية",
      primaryNav: "التنقل الرئيسي",
      featuredItems: "أطباق مختارة من القائمة",
      categoryJump: "الانتقال إلى قسم من قائمة الطعام",
      pauseSlideshow: "إيقاف عرض الصور المتحرك",
      playSlideshow: "تشغيل عرض الصور المتحرك",
    },
    brand: { name: "دون تشيكو" },
    nav: { home: "الرئيسية", menu: "قائمة الطعام", story: "قصتنا", visit: "زورونا", findUs: "موقعنا" },
    hero: {
      eyebrow: "مشوي أو مقلي",
      headlineHtml: 'الدجاج الذي <span class="hl-orange">ما كنت تتخيّل</span> أنك بحاجة إليه',
      headlineSub: "نكهة تلازم الذاكرة، ونضج يصل حتى العظم في كل مرة.",
      copy: "دون تشيكو ليست مجرد أكلة، بل تجربة دجاج تبقى في ذاكرتك من أول قضمة. نكهة بغدادية أصيلة، وُلدت بثقة وشغف، وها هي اليوم تصل إلى كل مكان.",
      ctaMenu: "تصفح قائمة الطعام",
      ctaStory: "قصتنا",
      photoAlt: "أصابع دجاج مقرمشة على شبكة معدنية، محاطة بصلصات البيت",
    },
    featured: {
      eyebrow: "مباشرة من النار",
      title: "اختيارات الدون",
      subtitle: "ثلاثة أطباق من النار، اختارها الدون بنفسه.",
      cta: "تصفح القائمة الكاملة",
    },
    about: {
      eyebrow: "قصتنا",
      title: "بغداد، وقت الارتقاء",
      lede: "لا أحد يعرف على وجه اليقين من يكون. يقول البعض إنه كان يقود قافلة توابل بين بيروت والبصرة، ويرى فيه آخرون روحًا عتيقة ما زالت تبحث عن اللقمة المثالية. لكن أمرًا واحدًا لا خلاف عليه: دون تشيكو بغدادي الهوى، وعاشقٌ للدجاج حتى النخاع.",
      body: "ليس دجاجًا كأي دجاج، بل ذلك الطبق الذي تتذوقه مرة فيبقى في ذاكرتك إلى الأبد. مقرمشًا كان أم مشويًا، من القشرة حتى العظم — أراد أن يخرج كل تفصيل على أكمل وجه. ولهذا فعل ما يفعله كل طاهٍ حقيقي: أشعل نارًا. لا نارًا عابرة، بل نارًا أوقدها بأربعة ألسنة لهب.",
      statLabelHtml: "أصدقاء.<br>نار واحدة.",
      visualAlt: "دجاج دون تشيكو المشوي مع الأعشاب والطماطم والخبز الطازج، مقدَّم على مقلاة ساخنة",
      visualBadge: "من صنع الدون",
      flamesEyebrow: "ألسنة اللهب",
      flamesTitle: "كل شيء نقدّمه ينبثق من إحدى هذه الشُعل الأربع",
      flame1Title: "لهب الشغف",
      flame1Desc: "دجاج مُعَدّ بإتقان لا يُضاهى — طري من الداخل، مقرمش من الخارج، ونكهته تبقى في ذاكرتك. تتبيلة تتغلغل حتى العظم، لا تكتفي بالقشرة.",
      flame2Title: "لهب الدقة",
      flame2Desc: "عناية بالتفاصيل، توقيت محسوب، حرارة مضبوطة، وخطوات لا تتغير أبدًا — لأن أجود الدجاج لا يشفع لتنفيذ مهمل.",
      flame3Title: "لهب الترابط",
      flame3Desc: "لا حلم يكبر وحده. لهذا نصنع أطباقًا تُشارَك، على طاولة تشعرك وكأنك في بيتك.",
      flame4Title: "لهب الشخصية",
      flame4Desc: "روح بغدادية جريئة، أصيلة، تُعرف من أول نظرة. فحين تملك نكهتك الخاصة، لا حاجة لرفع الصوت.",
    },
    visit: {
      eyebrow: "تعال وجرّب",
      title: "موقعنا",
      locationTitle: "الموقع",
      locationBodyHtml: "بغداد، العراق<br>العنوان الدقيق يُعلن قريبًا.",
      followTitle: "تابعونا",
      instagramLabel: "إنستغرام — ⁦@donchicko⁩",
      cookingTitle: "على نار هادئة",
      cookingBody: "نُجهّز مطبخنا هذه الأيام بكل شغف. تابعونا لتكونوا أول من يعرف موعد الافتتاح، وأول من يتذوق دون تشيكو.",
      visualLabelHtml: "الافتتاح قريبًا<br>في بغداد",
    },
    footer: {
      social: "إنستغرام",
      location: "بغداد، العراق",
      copyright: "دون تشيكو. مبني على أربع شُعل لهب.",
    },
    menuPage: {
      eyebrow: "مبني على أربع شُعل لهب",
      title: "قائمة الطعام",
      copy: "كل صنف عندنا يخرج مباشرة من دفتر وصفات دون تشيكو الخاص. مشوي أو مقلي، النكهة نفسها: تتبيلة تصل حتى العظم.",
      noteHtml: 'الأسعار بالدينار العراقي، وقابلة للتغيير دون إشعار مسبق. تابعوا <a href="https://instagram.com/donchicko" target="_blank" rel="noopener">⁦@donchicko⁩</a> لمعرفة أحدث الإضافات.',
    },
  },
};

/* ==========================================================================
   ENGINE
   ========================================================================== */
(function () {
  let currentLang = "en";

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

  const SESSION_KEY = "donchicko_lang";

  function getSessionLang() {
    try {
      return sessionStorage.getItem(SESSION_KEY);
    } catch (e) {
      return null;
    }
  }

  function saveSessionLang(lang) {
    try {
      sessionStorage.setItem(SESSION_KEY, lang);
    } catch (e) {
      /* sessionStorage unavailable (private mode, etc) — just won't persist across pages */
    }
  }

  function setLanguage(lang) {
    saveSessionLang(lang);
    applyLanguage(lang);
  }

  function wireLangSwitchButtons() {
    document.querySelectorAll(".lang-switch-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });
  }

  /* The language choice is remembered for the current browsing session only
     (sessionStorage) — clicking between pages (Home <-> Menu) keeps it, but
     a genuinely new visit (new tab/window, or the browser fully closed and
     reopened) asks again. Never permanently remembered across visits. */
  // aria-modal="true" on the overlay promises that content behind it is
  // unreachable — `inert` is what actually delivers that: it removes every
  // other top-level section from both the tab order and screen-reader
  // navigation while the overlay is up, without needing a manual keydown
  // focus-trap loop.
  function setBackgroundInert(overlay, isInert) {
    Array.from(document.body.children).forEach((el) => {
      if (el === overlay) return;
      if (isInert) el.setAttribute("inert", "");
      else el.removeAttribute("inert");
    });
  }

  function initLanguageOverlay() {
    const overlay = document.getElementById("langOverlay");
    const sessionLang = getSessionLang();

    if (sessionLang && translations[sessionLang]) {
      applyLanguage(sessionLang);
      if (overlay) overlay.remove();
      wireLangSwitchButtons();
      return;
    }

    applyLanguage("en");

    if (overlay) {
      document.body.classList.add("lang-locked");
      setBackgroundInert(overlay, true);
      overlay.querySelectorAll("[data-lang-choice]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const lang = btn.getAttribute("data-lang-choice");
          setLanguage(lang);
          overlay.classList.add("is-hidden");
          document.body.classList.remove("lang-locked");
          setBackgroundInert(overlay, false);
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

    wireLangSwitchButtons();
  }

  /* Called directly, not on DOMContentLoaded: this script tag sits at the
     end of <body>, after every element it touches, so the DOM it needs
     already exists the moment this line runs. Waiting for the
     DOMContentLoaded *event* instead of just running inline hands the
     browser a chance to paint the untranslated, English/LTR markup for a
     frame first — exactly the flash this is here to prevent. */
  initLanguageOverlay();

  window.DonChickoI18n = {
    t,
    getCurrentLang: () => currentLang,
    onChange: (cb) => document.addEventListener("donchicko:langchange", cb),
  };
})();
