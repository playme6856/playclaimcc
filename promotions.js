// promotions.js
//
// Builds the promo cards inside .promotions-container from the list in
// promotions-data.js. This matches stake.com's current "Card" redesign of
// the hero/promo row: a square image on the left, badge + title +
// description on the right, whole card is one link, no CTA button.
//
// To edit a card: open promotions-data.js. Nothing here needs to change.

(function () {
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // The redesigned card renders its image at a fixed 146x146 box regardless
  // of viewport, and always offers 220w/330w retina variants via srcset
  // (that's the literal `breakpoints="220,330"` stake.com puts on the img).
  var DISPLAY_SIZE = 146;
  var SRCSET_BREAKPOINTS = [220, 330];

  function buildImageSources(url) {
    try {
      var base = new URL(url, document.baseURI);
      function withSize(w) {
        var u = new URL(base.toString());
        u.searchParams.set("w", w);
        u.searchParams.set("h", w);
        u.searchParams.set("fit", "min");
        u.searchParams.set("auto", "format");
        return u.toString();
      }
      var srcset = SRCSET_BREAKPOINTS.map(function (w) {
        return withSize(w) + " " + w + "w";
      }).join(", ");
      return {
        src: withSize(DISPLAY_SIZE),
        srcset: srcset,
        sizes: "(min-width: " + DISPLAY_SIZE + "px) " + DISPLAY_SIZE + "px, 100vw"
      };
    } catch (e) {
      return { src: url, srcset: null, sizes: null };
    }
  }

  function cardHtml(promo, index) {
    var n = index + 1;
    var badgeVariant = promo.badgeVariant || "neutral-strong";
    var badgeText = promo.badge || "Promotion";
    var img = buildImageSources(promo.image);

    var overlay = promo.overlay
      ? '<div data-chromatic="ignore" class="pointer-events-none w-full h-full max-w-(--max-width) max-h-(--max-height) rounded absolute top-0 left-0 z-[2] svelte-xxoerf" style="background: ' +
        promo.overlay +
        ';"></div>'
      : "";

    return (
      '<div data-hero-index="' + index + '" class="hero-card-wrapper svelte-12xljo5 tc-animate">' +
        '<a class="h-fit " href="' + escapeHtml(promo.href) + '" data-analytics="hero-link-casino-' + n + '">' +
          // `bg-(--edge-color-surface-bg-highest)` is another CSS-var utility class that
          // never made it into this project's downloaded CSS (same issue as the image
          // sizing above), so the card fell through to a transparent background. Reference
          // the actual token var() with its resolved value as fallback (stake.com's design
          // tokens: --edge-color-surface-bg-highest -> --edge-color-stake-slateNavy-800 ->
          // #213545) so this stays correct even if those vars get added to the CSS later.
          '<div class="card variant-default bg-(--edge-color-surface-bg-highest) overflow-hidden flex flex-row state-layer-surface gap-4 svelte-3ech4i" style="background-color: var(--edge-color-surface-bg-highest, #213545);">' +
            // The `max-w-(--max-width)`/`max-h-(--max-height)` utility classes stake.com
            // ships aren't present in this project's downloaded CSS bundle, so without an
            // explicit width/height here this wrapper stretches to fill the flex row and
            // leaves a gap before the text column. Set the box size inline instead.
            '<div class="relative w-full h-full max-w-(--max-width) max-h-(--max-height)  svelte-xxoerf" style="--max-width: 146px; --max-height: 146px; width: 146px; height: 146px; max-width: 146px; max-height: 146px; flex-shrink: 0;">' +
              '<img breakpoints="' + SRCSET_BREAKPOINTS.join(",") + '" alt="hero ' + escapeHtml(promo.title) + '" src="' + escapeHtml(img.src) + '" ' +
                'loading="lazy" decoding="async" ' +
                (img.srcset ? 'srcset="' + escapeHtml(img.srcset) + '" ' : '') +
                (img.sizes ? 'sizes="' + escapeHtml(img.sizes) + '" ' : '') +
                'style="object-fit: cover; max-width: 146px; max-height: 146px; aspect-ratio: 1 / 1; width: 100%;">' +
              overlay +
            '</div>' +
            '<div class="w-full flex flex-col items-start p-4 pl-0 gap-2">' +
              '<div class="badge variant-' + badgeVariant + ' badge-size-sm is-inline svelte-wyatu0">' + escapeHtml(badgeText) + '</div>' +
              // Title and subtitle sit inline on the same line (subtitle is a plain
              // <span>, not a block, so it just flows after the title). description
              // only appears once <br> forces it onto its own line below — leave it
              // "" in promotions-data.js for cards that don't have a second line.
              '<div class="line-clamp-3 text-left">' +
                '<span tag="span" type="display" size="sm" variant="neutral-default" class="text-neutral-default edge-typography-display-sm" data-ds-text="true">' + escapeHtml(promo.title) + ' </span>' +
                '<span tag="span" type="body" variant="neutral-subtle" size="sm" class="text-neutral-subtle edge-typography-body-sm" data-ds-text="true">' + escapeHtml(promo.subtitle || '') + '</span>' +
                '<br>' +
                '<span tag="span" type="body" variant="neutral-subtle" size="sm" class="text-neutral-subtle edge-typography-body-sm" data-ds-text="true">' + escapeHtml(promo.description || '') + '</span>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</a>' +
      '</div>'
    );
  }

  function renderPromotions() {
    var container = document.querySelector(".promotions-container");
    var promotions = window.PROMOTIONS;
    if (!container || !promotions || !promotions.length) return;

    container.innerHTML = promotions.map(cardHtml).join("");
  }

  document.addEventListener("DOMContentLoaded", renderPromotions);
})();
