# Don Chicko — Landing Page

Restaurant landing page for Don Chicko (Baghdad), built on Don Chicko's real
brand identity: colors, logo, fonts, photography, and menu structure are all
sourced from the brand assets rather than placeholders.

## Files

```
index.html      Home page — hero, The Don's Picks, brand story, visit
menu.html       The full menu, on its own page
style.css       All styling, organized by section, using CSS custom properties
script.js       Real menu data, category-color-coded card rendering, jump nav, scroll reveal
assets/
  logos/        Flame mark (color + white) and EN/AR wordmarks
  fonts/        Daddy Cartoon (display) + Montserrat family (body)
  images/       Selected food photography matching Don Chicko's own IG look & feel
```

Both pages share `style.css` and `script.js`; each render step no-ops if its
container isn't on the current page, so one script serves both.

## The menu page

`menu.html` lists every category stacked in full — nothing is hidden behind a
filter. The sticky bar under the header is a set of jump links: clicking one
scrolls to that category, and the chip for whichever category is in view
highlights itself as you scroll.

## Brand source

Colors, fonts, logo, and menu content came from the `brand identity/` folder
(color palette PDF, packaging line art, IG moodboard, and menu-board mockups).
Category colors on menu cards match Don Chicko's own packaging system:
broasted = red, roasted/sandwiches = maroon, hot starters/burgers = orange,
cold items/kids = blue.

The band across the top of every menu card is a row of the real logo flame,
tiled via CSS mask from `assets/logos/flame-white.png` — every flame on the
site is the brand's actual mark, never a generic icon.

## Known gaps — not invented, intentionally left open

- **Prices**: no real price list exists yet in the brand materials (the
  source menu boards use an obvious placeholder pattern — `123 / 456 / 89`
  repeated identically across every item). Prices in `script.js` are
  realistic estimates for layout purposes only — replace `MENU_ITEMS[].price`
  with real IQD figures before launch.
- **Contact details**: address/phone/email in the brand deck are also
  placeholders (`+964 12 123456`, `POBox 12345`). The Visit/footer sections
  intentionally stay generic ("Baghdad, Iraq" + Instagram) rather than
  fabricate a fake address or phone number.
- **Hours**: not present anywhere in the brand materials, so omitted rather
  than invented.

## Updating the menu

Menu items live in `MENU_ITEMS` in `script.js`; categories in `CATEGORIES`.
Each item:

```js
{
  name: "Dish Name",
  description: "Short description.",
  price: 9000,              // IQD, numeric — formatted by formatPrice()
  category: "broasted",      // must match an id in CATEGORIES
  tags: ["Popular"],          // zero or one tag shown as a badge
  featured: false,             // true = eligible for "The Don's Picks"
}
```

Both pages re-render everything from that data — no HTML editing required. A
category with no items is skipped automatically, on the page and in the jump
bar. Category order in `CATEGORIES` is the order they appear on the menu page.
