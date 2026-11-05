window.__ModuleLoader__.load({
  id: "dsh-luotianyi-skin",
  factory: () => {
    const PKG = "dsh-luotianyi-skin";
    const ATTR = "data-dsh-luotianyi";
    const CSS_ID = PKG + "/luotianyi.css";
    const V = "?v=8";

    const asset = (file) => new URL("skin-assets/luotianyi/" + file, document.baseURI).href;
    const WALL = asset("wallpaper.webp" + V);
    const CHAR = asset("character2.webp" + V);
    const LOGO = asset("logo-full.svg" + V);
    const MARK = asset("logo-mark.svg" + V);

    const buildCss = () => `
/*  wallpaper: the fixed layer element paints it; these rules are a fallback */
html {
  background-color: #0a1a2c;
}

/*  palette: fully transparent surfaces, no blur  */
body[${ATTR}] {
  --lt-blue: #66ccff;

  --dsw-alias-bg-base: rgba(250, 253, 255, 0.10);
  --dsw-alias-bg-layer-1: rgba(255, 255, 255, 0.34);
  --dsw-alias-bg-layer-2: rgba(255, 255, 255, 0.46);
  --dsw-alias-bg-overlay: rgba(250, 253, 255, 0.90);
  --dsw-alias-border-l1: rgba(16, 74, 120, 0.18);
  --dsw-alias-border-l2: rgba(16, 74, 120, 0.34);
  --dsw-alias-brand-primary: #1b86d4;
  --dsw-alias-label-primary: #0d2a44;
  --dsw-alias-label-secondary: #24506f;
  --dsw-alias-state-idle-primary: #3d6b8f;
  --dsw-alias-state-success-primary: #147a4a;
  --dsw-alias-state-warn-primary: #a8620a;
  --dsw-alias-state-error-primary: #b8342a;

  /* tokens the components use beyond the public catalogue: keep them readable */
  --dsw-alias-label-caption: #2f5a7a;
  --dsw-alias-label-dimmed: #3d637f;
  --dsw-alias-label-primary-bluish: #12507d;
  --dsw-alias-label-tertiary: #355f7e;
  --dsw-alias-label-quaternary: #456a86;
  --dsw-alias-interactive-bg-hover: rgba(27, 134, 212, 0.14);
  --dsw-alias-state-business-tertiary: rgba(27, 134, 212, 0.16);
  --dsw-specific-sidebar-fill: rgba(255, 255, 255, 0.14);
  --dsw-specific-input-major: rgba(255, 255, 255, 0.52);
  --dsw-specific-menu: rgba(252, 254, 255, 0.94);

  background: transparent !important;
  color-scheme: light;
}

body[${ATTR}] ::selection {
  background: rgba(46, 168, 240, 0.34);
  color: #ffffff;
}

body[${ATTR}] [id="root"] {
  background: transparent !important;
}

/*  no blur on the shell itself (only dialogs/composer are frosted)  */

/*  readability over a bright photo: dark ink, no white halo  */
body[${ATTR}] {
  font-weight: 500;
  text-shadow: 0 0 0.35px currentColor;
}

/* the section headers and the brand row are asked to stay clean: no glow */
body[${ATTR}] [class*="sectionHeader"],
body[${ATTR}] [class*="brandIdentity"],
body[${ATTR}] [class*="brandName"] {
  font-weight: 600;
  text-shadow: none !important;
}

/* panels the user actually types into / picks from stay readable: frosted glass */
body[${ATTR}] [data-composer-card],
body[${ATTR}] [role="listbox"],
body[${ATTR}] [role="menu"],
body[${ATTR}] [role="dialog"],
body[${ATTR}] [class*="popover"],
body[${ATTR}] [class*="Popover"] {
  backdrop-filter: blur(16px) saturate(1.2) !important;
  -webkit-backdrop-filter: blur(16px) saturate(1.2) !important;
}

/*  sidebar: thin blue-tinted glass + vocalist cutout  */
body[${ATTR}] [class*="sidebarCol"] {
  position: relative !important;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.12) 62%, rgba(255, 255, 255, 0.24) 100%) !important;
  border-right: 1px solid rgba(255, 255, 255, 0.45) !important;
  box-shadow: inset -1px 0 0 rgba(255, 255, 255, 0.25) !important;
  overflow: hidden !important;
}

body[${ATTR}] [class*="sidebarCol"]::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: min(94%, 300px);
  height: min(66%, 690px);
  background: url("${CHAR}") center bottom / contain no-repeat;
  opacity: 0.98;
  pointer-events: none;
  z-index: 0;
  filter: drop-shadow(0 0 18px rgba(46, 168, 240, 0.28)) drop-shadow(0 10px 28px rgba(2, 20, 40, 0.65));
  -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 90%, rgba(0, 0, 0, 0.25) 100%);
  mask-image: linear-gradient(to bottom, #000 0%, #000 90%, rgba(0, 0, 0, 0.25) 100%);
}

body[${ATTR}] [class*="sidebarCol"] > * {
  position: relative;
  z-index: 2;
}

body[${ATTR}] [class*="sidebarCol"] [class*="root"],
body[${ATTR}] [class*="sidebarCol"] [class*="panelList"],
body[${ATTR}] [class*="sidebarCol"] [class*="regionArea"],
body[${ATTR}] [class*="sidebarCol"] [class*="footArea"] {
  background: transparent !important;
}

body[${ATTR}] [class*="sidebarCol"] [class*="regionArea"] {
  position: relative !important;
  z-index: 2;
}

/*  new session: a proper invite-button instead of a flat outline  */
body[${ATTR}] [class*="newSession"] {
  background: linear-gradient(135deg, #6fd2ff 0%, #2fa5ef 42%, #1479c9 100%) !important;
  border: 1px solid rgba(255, 255, 255, 0.7) !important;
  border-radius: 12px !important;
  color: #ffffff !important;
  font-weight: 600 !important;
  letter-spacing: 0.02em;
  text-shadow: 0 1px 2px rgba(0, 52, 96, 0.55) !important;
  box-shadow:
    0 8px 22px -10px rgba(9, 74, 132, 0.85),
    inset 0 1px 0 rgba(255, 255, 255, 0.55),
    inset 0 -1px 0 rgba(0, 48, 90, 0.25) !important;
  transition: transform 140ms ease, box-shadow 160ms ease, filter 160ms ease;
}

body[${ATTR}] [class*="newSession"] > * {
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  color: inherit !important;
}

body[${ATTR}] [class*="newSession"]:hover {
  filter: brightness(1.06) saturate(1.05);
  transform: translateY(-1px);
  box-shadow:
    0 12px 26px -10px rgba(9, 74, 132, 0.9),
    inset 0 1px 0 rgba(255, 255, 255, 0.7),
    inset 0 -1px 0 rgba(0, 48, 90, 0.3) !important;
}

body[${ATTR}] [class*="newSession"]:active {
  transform: translateY(0);
}

body[${ATTR}] [class*="panelList"] button:hover,
body[${ATTR}] [class*="panelList"] a:hover {
  background: rgba(46, 168, 240, 0.16) !important;
}

body[${ATTR}] [class*="sectionHeader"] {
  color: #12395a !important;
  letter-spacing: 0.04em;
}

/*  status rows, tool labels and placeholders ship washed-out greys meant for a
    dark shell; give them a readable ink floor instead  */
body[${ATTR}] [class*="colorTools"],
body[${ATTR}] [class*="colorSystem"],
body[${ATTR}] [class*="colorMessages"],
body[${ATTR}] [class*="activity"],
body[${ATTR}] [class*="notice"],
body[${ATTR}] [class*="pendingRow"],
body[${ATTR}] [class*="callRow"],
body[${ATTR}] [class*="turnErrorRow"],
body[${ATTR}] [class*="summary"],
body[${ATTR}] [class*="meta"],
body[${ATTR}] [class*="caption"],
body[${ATTR}] [class*="hint"] {
  color: #1b4a6b !important;
  opacity: 1 !important;
}

body[${ATTR}] ::placeholder,
body[${ATTR}] input::placeholder,
body[${ATTR}] textarea::placeholder,
body[${ATTR}] [data-composer-placeholder],
body[${ATTR}] [contenteditable]::before {
  color: #1f4a6b !important;
  opacity: 1 !important;
  text-shadow: none !important;
}

/*  composer + bubbles: frosted white glass, dark ink  */
body[${ATTR}] [data-composer-card] {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.62) 0%, rgba(240, 250, 255, 0.52) 100%) !important;
  border: 1px solid rgba(255, 255, 255, 0.75) !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.85), 0 -12px 42px -28px rgba(9, 74, 132, 0.75) !important;
}

body[${ATTR}] [data-composer-card]:focus-within {
  border-color: rgba(255, 255, 255, 0.95) !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), 0 0 26px -10px rgba(27, 134, 212, 0.8) !important;
}

/*  send / stop: 洛天依 blue  */
body[${ATTR}] button[class*="_primary"],
body[${ATTR}] [class*="_primary"]:is(button, [role="button"]),
body[${ATTR}] [class*="primary"]:is(button) {
  background: linear-gradient(150deg, #8fe0ff 0%, #66ccff 45%, #38b0ec 100%) !important;
  color: #ffffff !important;
  border: 1px solid rgba(255, 255, 255, 0.72) !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 6px 16px -6px rgba(56, 176, 236, 0.85) !important;
}

body[${ATTR}] button[class*="_primary"] svg,
body[${ATTR}] button[class*="_primary"] svg *,
body[${ATTR}] [class*="_primary"] svg,
body[${ATTR}] [class*="_primary"] svg * {
  color: #ffffff !important;
  fill: #ffffff !important;
  stroke: #ffffff !important;
}

body[${ATTR}] [role="listbox"],
body[${ATTR}] [class*="popover"],
body[${ATTR}] [class*="Popover"] {
  background: rgba(252, 254, 255, 0.72) !important;
  border: 1px solid rgba(255, 255, 255, 0.8) !important;
  box-shadow: 0 18px 44px -22px rgba(6, 48, 88, 0.6) !important;
}

body[${ATTR}] [class*="_bubble"] {
  background: linear-gradient(150deg, rgba(255, 255, 255, 0.62) 0%, rgba(226, 245, 255, 0.5) 100%) !important;
  border: 1px solid rgba(255, 255, 255, 0.75) !important;
  color: #0d2a44 !important;
  text-shadow: none !important;
  box-shadow: 0 12px 30px -26px rgba(6, 48, 88, 0.8);
}

/*  shells that ship a hard-coded dark chip: keep them light  */
body[${ATTR}] [class*="chip"],
body[${ATTR}] [class*="badge"],
body[${ATTR}] [class*="pill"],
body[${ATTR}] [class*="headerUtilities"] button,
body[${ATTR}] [class*="headerActions"] button,
body[${ATTR}] [class*="headerCorner"] button,
body[${ATTR}] pre,
body[${ATTR}] [class*="codeBlock"],
body[${ATTR}] [class*="diff"],
body[${ATTR}] [class*="fileCard"],
body[${ATTR}] [class*="toolChanges"],
body[${ATTR}] [class*="fileContent"],
body[${ATTR}] [class*="summary"],
body[${ATTR}] [class*="card"]:not([data-composer-card]) {
  background: rgba(255, 255, 255, 0.55) !important;
  border-color: rgba(255, 255, 255, 0.72) !important;
  color: #0d2a44 !important;
  text-shadow: none !important;
}

/*  brand mark: ?logo replaces deepseek HARNESS  */
body[${ATTR}] [class*="brandIdentity"] {
  position: relative !important;
  min-width: 172px;
  min-height: 28px;
  display: inline-flex !important;
  align-items: center;
}

body[${ATTR}] [class*="brandIdentity"] > * {
  opacity: 0 !important;
  pointer-events: none !important;
}

body[${ATTR}] [class*="brandIdentity"]::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 172px;
  height: 28px;
  background: url("${LOGO}") left center / contain no-repeat;
}

body[${ATTR}] [class*="railMark"] svg {
  display: none !important;
}

body[${ATTR}] [class*="railMark"] {
  background: url("${MARK}") center / contain no-repeat;
  width: 20px;
  height: 26px;
}

/*  hero mark: swap the shipped whale for the circular "Luo" emblem  */
body[${ATTR}] [data-slot="conversation.hero.brand.mark"] {
  color: #66ccff !important;
}

/* keep the shipped svg as the sizing box, hide its glyphs, paint the emblem on it */
body[${ATTR}] [data-slot="conversation.hero.brand.mark"] > svg {
  background: url("${MARK}") center / contain no-repeat !important;
}

body[${ATTR}] [data-slot="conversation.hero.brand.mark"] > svg > * {
  opacity: 0 !important;
}

/*  surfaces  */
body[${ATTR}] [data-conversation-content],
body[${ATTR}] [data-conversation-scroll] {
  /* very light dark soft shadow: only the message body, never a white halo */
  text-shadow: 0 0 0.35px currentColor, 0 1px 2px rgba(8, 36, 62, 0.3), 0 0 10px rgba(8, 36, 62, 0.16);
}
body[${ATTR}] [class*="centerCol"] {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%) !important;
}

body[${ATTR}] [class*="frame"] {
  background: transparent !important;
}

/*  scrollbars  */
body[${ATTR}] ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

body[${ATTR}] ::-webkit-scrollbar-thumb {
  background: rgba(120, 214, 255, 0.45);
  border-radius: 999px;
  border: 3px solid transparent;
  background-clip: padding-box;
}

body[${ATTR}] ::-webkit-scrollbar-thumb:hover {
  background: rgba(150, 226, 255, 0.65);
  background-clip: padding-box;
}

body[${ATTR}] ::-webkit-scrollbar-track {
  background: transparent;
}
`;

    /* Some shipped cards paint a hard-coded dark surface that no selector can reach.
       Flip those to light glass so the dark ink stays readable. */
    function watchDarkSurfaces(onDispose) {
      const flipped = new Map();
      const DARK_BG = "rgba(255, 255, 255, 0.55)";
      const parse = (value) => {
        const m = /rgba?\(([^)]+)\)/.exec(value || "");
        if (!m) return null;
        const parts = m[1].split(",").map((v) => parseFloat(v));
        const [r, g, b, a = 1] = parts;
        if (!Number.isFinite(r) || !Number.isFinite(g) || !Number.isFinite(b)) return null;
        return { lum: 0.2126 * r + 0.7152 * g + 0.0722 * b, a };
      };
      const INK = "#1b4a6b";
      /* accented marks keep their own colour, the sweep must not ink them */
      const KEEP_COLOUR =
        '[data-slot="conversation.hero.brand.mark"], [class*="newSession"], [class*="brandIdentity"], [class*="railMark"], [class*="hero"] svg, [class*="_primary"]';
      /* shipped copy the user asked to rewrite */
      const TEXT_SWAP = [["探索未至之境", "我怎会不知你挚爱纯蓝~"]];
      const swapped = new Map();
      const swapCopy = () => {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node = walker.nextNode();
        while (node) {
          const value = node.nodeValue;
          if (value) {
            for (const [from, to] of TEXT_SWAP) {
              if (value.indexOf(from) === -1) continue;
              if (!swapped.has(node)) swapped.set(node, value);
              node.nodeValue = value.split(from).join(to);
            }
          }
          node = walker.nextNode();
        }
      };
      const hasDarkBackdrop = (el) => {
        let node = el.parentElement;
        for (let depth = 0; node && depth < 4; depth += 1, node = node.parentElement) {
          const bg = parse(getComputedStyle(node).backgroundColor);
          if (bg && bg.a > 0.5 && bg.lum < 150) return true;
        }
        return false;
      };
      const sweep = () => {
        const nodes = document.querySelectorAll("body *");
        for (const el of nodes) {
          if (flipped.has(el)) continue;
          if (el.dataset.luotianyiWallpaper !== undefined) continue;
          if (el === document.body || el === document.documentElement) continue;
          if (el.closest(KEEP_COLOUR)) continue;
          const style = getComputedStyle(el);
          const bg = parse(style.backgroundColor);
          if (bg && bg.a >= 0.5 && bg.lum < 90) {
            const rect = el.getBoundingClientRect();
            if (rect.width < 40 || rect.height < 14) continue;
            flipped.set(el, el.getAttribute("style"));
            el.style.setProperty("background-color", DARK_BG, "important");
            el.style.setProperty("background-image", "none", "important");
            el.style.setProperty("color", "#0d2a44", "important");
            continue;
          }
          /* washed-out light text sitting straight on the photo: give it ink */
          if (!el.firstChild || el.childElementCount > 6) continue;
          const ink = parse(style.color);
          if (!ink || ink.a < 0.1 || ink.lum < 118) continue;
          if (hasDarkBackdrop(el)) continue;
          flipped.set(el, el.getAttribute("style"));
          el.style.setProperty("color", INK, "important");
          el.style.setProperty("opacity", "1", "important");
        }
      };
      let timer = 0;
      const schedule = () => {
        if (timer) return;
        timer = setTimeout(() => {
          timer = 0;
          try {
            sweep();
            swapCopy();
          } catch {
            /* ignore */
          }
        }, 250);
      };
      schedule();
      const observer = new MutationObserver(schedule);
      observer.observe(document.body, { childList: true, subtree: true });
      onDispose(() => {
        observer.disconnect();
        if (timer) clearTimeout(timer);
        for (const [el, style] of flipped) {
          if (style === null) el.removeAttribute("style");
          else el.setAttribute("style", style);
        }
        flipped.clear();
        for (const [node, value] of swapped) {
          if (node.isConnected) node.nodeValue = value;
        }
        swapped.clear();
      });
    }

    function apply(ctx) {
      ctx.effect(() => {
        const body = document.body;
        const previous = body.getAttribute(ATTR);
        body.setAttribute(ATTR, "");

        /* a real element paints the wallpaper: html/body backgrounds alone are not
           reliable here because shipped shells paint their own opaque surfaces */
        const layer = document.createElement("div");
        layer.dataset.luotianyiWallpaper = "";
        layer.setAttribute("aria-hidden", "true");
        layer.style.cssText = [
          "position: fixed",
          "inset: 0",
          "z-index: -1",
          "pointer-events: none",
          `background: url("${WALL}") center center / cover no-repeat`
        ].join(";");
        body.insertBefore(layer, body.firstChild);

        /* and force the shell surfaces above it to stay see-through */
        const touched = [];
        const clearSurface = (el) => {
          if (!el) return;
          touched.push([el, el.getAttribute("style")]);
          el.style.setProperty("background-color", "transparent", "important");
          el.style.setProperty("background-image", "none", "important");
        };
        clearSurface(document.documentElement);
        clearSurface(body);
        document.querySelectorAll('[id="root"], [class*="frame"]').forEach(clearSurface);

        let style = document.querySelector('style[data-plugin-css="' + CSS_ID + '"]');
        const created = style === null;
        if (created) {
          style = document.createElement("style");
          style.dataset.plugin = PKG;
          style.dataset.pluginCss = CSS_ID;
          document.head.appendChild(style);
        }
        /* always rewrite: a re-apply without a page reload must not keep stale CSS */
        style.textContent = buildCss();

        const disposeWatchers = [];
        watchDarkSurfaces((fn) => disposeWatchers.push(fn));

        return () => {
          for (const fn of disposeWatchers) fn();
          if (created) style.remove();
          layer.remove();
          for (const [el, style] of touched.reverse()) {
            if (style === null) el.removeAttribute("style");
            else el.setAttribute("style", style);
          }
          if (previous === null) body.removeAttribute(ATTR);
          else body.setAttribute(ATTR, previous);
        };
      }, "ui-skin-luotianyi: theme stylesheet");
    }

    return { apply, inject: [] };
  }
});
