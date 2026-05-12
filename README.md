# Website UI kit · Fine-Tuned (built by Business Builders)

The marketing site for **Fine-Tuned Business Solutions Inc.** — a sample deliverable produced by **Business Builders** to demonstrate the agency's web + AI automation work.

## Files

| File | What it is |
|---|---|
| `index.html` | Interactive entry point. Click a pricing tier → toast appears + Contact form scrolls into view with the tier preselected. |
| `site.css` | Layout + component styles specific to the marketing site, built on top of the design-system tokens in `../../colors_and_type.css`. |
| `NavBar.jsx` | Sticky top nav with the logo, links, primary CTA, and a mobile burger. |
| `Hero.jsx` | Split hero — heavy display headline + a signature hairline-bordered "project status" card. |
| `Features.jsx` | 4-up feature grid (Fast / Indexed / Mobile / AI). |
| `Pricing.jsx` | The deliverable's centerpiece. Three tiers — Starter $999, Growth $1,499, Pro $1,899 — with the Pro tier as the dark-polarity featured card and the Google indexing line as its differentiator. Monthly / annual care-plan toggle. |
| `FAQ.jsx` | Native `<details>` accordion. |
| `Contact.jsx` | Two-column dark band with copy + a fake-submit form. |
| `Footer.jsx` | Dark footer with logo, link columns, and a CTA. |

## Notes for iteration

- Visual fidelity follows the Wise design language verbatim — heavy display type, 24 px pill geometry, surface-contrast elevation — but rebrand-keyed to Fine-Tuned's green / white / black.
- The Pro tier's "Indexed and ready to rank from day one" is intentionally rendered as a green callout pill *inside* the dark card to maximise its weight.
- Components are deliberately thin recreations, not production code. They share state through props and `window.*` globals (per the Babel scope rules).
