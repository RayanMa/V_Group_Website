# V Group Design System

Source of truth: **`raycast/DESIGN.md` only**, translated to V Group's gold-on-black identity. No other reference (the earlier Lamborghini pull) is in use — this doc replaces that merge.

## What we take from Raycast, directly

- **One continuous dark canvas**, not a card-on-card collage. The chrome reads like an extension of the product itself.
- **Elevation from a surface ladder, not drop shadows.** `--bg` → `--bg-elev` → `--bg-elev-2`, each a flat notch lighter. A hairline 1px border (`--line`) carries every card edge.
- **One accent, used sparingly.** Raycast's accent is white (their CTA pill); ours is gold. Same rule applies: the accent is scarce — at most one solid accent fill per fold — and never bleeds into body text or chrome.
- **Generous, uninterrupted section rhythm** (Raycast's 96px). No decorative dividers between sections beyond the hairline.
- **Real product screenshots as the hero decoration**, not illustration. Raycast's hero is its own command palette; ours is MAT's actual dashboard.

## Where we deliberately deviate from Raycast, and why

- **Typography:** Raycast uses Inter with `ss03` site-wide. Inter has no Arabic coverage and this site is bilingual EN/AR, so we use **Manrope** (Latin) + **Cairo/Tajawal** (Arabic) instead — chosen for the same reason Raycast picked Inter: a clean, confident grotesque that doesn't read as serif/luxury.
- **Radius:** Raycast runs tight, 6–10px on most chrome. MAT's actual product UI (confirmed from real screenshots, Oct 2026) runs soft and generously rounded. We follow MAT, not Raycast, here — the product is the brand, and the site should match the product it's selling.
- **Shadow:** Raycast has zero drop-shadow in the system — elevation is 100% the surface ladder. We keep a restrained `--shadow-card` on top of the ladder, because MAT's real UI has soft elevation on its cards too. This is the one place "flat Raycast" loses to "match the actual product."
- **Two modes:** Raycast is dark-only by design. V Group ships dark (default) **and** light — see tokens below. The Raycast doctrine (surface ladder, hairline borders, one accent) holds in both; only the values flip.

## Tokens

```css
:root{ /* dark — default, this is the Raycast-equivalent canvas */
  --bg:#09090b;            --bg-elev:#131317;       --bg-elev-2:#1b1b20;
  --ink:#F3EFE6;            --ink-soft:rgba(243,239,230,.64); --ink-faint:rgba(243,239,230,.4);
  --gold:#C9A25C;           --gold-bright:#EAC888;   --gold-deep:#8a6a30;  --on-gold:#15110a;
  --line:rgba(255,255,255,.1);     --line-gold:rgba(201,162,92,.32);
  --glass:rgba(255,255,255,.04);
  --surface-1:rgba(9,9,11,.72);    --surface-1-solid:rgba(9,9,11,.97);  /* nav / mobile dropdown */
  --btn-ghost-border:rgba(255,255,255,.22);
  --radius-lg:28px; --radius:18px; --radius-sm:12px; --radius-pill:999px;
  --shadow-card:0 1px 0 rgba(255,255,255,.05) inset, 0 20px 44px rgba(0,0,0,.45);
}
:root[data-theme="light"]{
  --bg:#FAF7F0;             --bg-elev:#FFFFFF;       --bg-elev-2:#F2ECDD;
  --ink:#18171A;            --ink-soft:rgba(24,23,26,.64);    --ink-faint:rgba(24,23,26,.42);
  --gold:#A8792E;           --gold-bright:#C9A25C;   --gold-deep:#8a6a30;  /* --on-gold unchanged */
  --line:rgba(20,16,8,.12); --line-gold:rgba(168,121,46,.35);
  --glass:rgba(255,255,255,.7);
  --surface-1:rgba(250,247,240,.78); --surface-1-solid:rgba(250,247,240,.97);
  --btn-ghost-border:rgba(20,16,8,.18);
  --shadow-card:0 1px 0 rgba(255,255,255,.8) inset, 0 16px 36px rgba(30,22,8,.1);
}
```

`--on-gold` is a constant, not themed — it's the dark ink used as text on a solid gold fill (buttons, badges) so contrast never degrades when the theme flips.

**Why gold shifts between modes:** `#C9A25C` is tuned for a near-black backdrop, Raycast-white-equivalent. On near-white it washes out, so light mode deepens it to `#A8792E` for text/icons/CTAs and keeps `#C9A25C` as `--gold-bright` for hover only. Never reuse the dark-mode gold value verbatim in light mode.

Toggle persists to `localStorage['vgroup-theme']`; `data-theme="light"` on `<html>` flips every token. A small inline `<head>` script reads storage before paint to avoid a flash.

## Elevation

```css
.card-like{
  background:linear-gradient(180deg,var(--bg-elev),var(--bg-elev) 60%,var(--bg-elev-2));
  border:1px solid var(--line);          /* the Raycast hairline, doing most of the work */
  border-radius:var(--radius);           /* 18px — MAT-soft, not Raycast-tight */
  box-shadow:var(--shadow-card);         /* the one deliberate non-Raycast addition */
}
```

Ambient brand glow (`body::before`, fixed, `z-index:-1`) is gold-tinted radial gradients at low opacity — stronger in dark mode, roughly halved in light mode.

## Buttons

- `.btn-solid` / `.nav-cta` — the Raycast "white pill," translated to gold: `background:var(--gold)`, `color:var(--on-gold)`, pill radius, glow-ring on hover.
- `.btn-ghost` — transparent fill, `border-color:var(--btn-ghost-border)` (flips from a light-on-dark hairline to a dark-on-light one; never hardcode `rgba(255,255,255,…)` here, it vanishes in light mode).

## Components reused everywhere

`.pillar, .work-feature, .work-card, .pricing-card, .addon-banner, .teaser-panel, .pt-card` all share the `.card-like` rule above. Nav and the mobile dropdown use `--surface-1` / `--surface-1-solid` (translucent, blurred `--bg`) instead of a literal black, so they flip correctly in light mode too.

## What NOT to do

- Don't hardcode `rgba(9,9,11,…)`, `rgba(255,255,255,…)` borders, or `color:var(--bg)` for text-on-gold — every one of those breaks light mode. Use `--surface-1`, `--btn-ghost-border`, `--on-gold`.
- Don't add a second accent color. Gold is the only brand color; status/semantic color (success green, error red) is the one allowed exception, used sparingly in data displays only.
- Don't go back to heavy glass/blur panels as the primary depth cue — the surface ladder + hairline + one restrained shadow is the system, per Raycast's elevation doctrine.

## Landing page scope (current)

The landing page (`index.html`) is CRM/MAT-only — other client work (Jusoor, AinHR, FAZ Global) and the gallery teaser are commented out in place with `<!-- HIDDEN ... -->` markers, not deleted. `gallery.html` still shows the full catalogue and is reachable directly; its own nav link from the landing page is hidden too. Un-comment when ready to re-expand.

The Optimus Solutions partner trust-strip has been removed (not hidden) from the landing page, per explicit request.

## Reference material

Actual MAT UI screenshots (Oct 2026) and a full saved DOM snapshot of the live app (`MAT CRM.html` + `MAT CRM_files/`, in `~/Downloads`, not committed to the repo) are the ground-truth source for the in-progress "live demo" showcase area on the landing page and the next motion-graphics/ad pass. `assets/images/mat_home.jpg` was re-exported from this material.
