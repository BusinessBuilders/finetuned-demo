/* global React */
const { useState: useState_P } = React;

const TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: { monthly: 1199, annual: 1079 },
    blurb: "A single-page site for businesses launching, testing demand, or pushing one offer.",
    features: [
      "Custom one-page design",
      "Mobile responsive",
      "Contact form",
      "Basic SEO setup",
    ],
    cta: "Choose Starter",
    featured: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: { monthly: 1499, annual: 1349 },
    blurb: "Multi-page site with built-in booking — the everyday workhorse.",
    inherits: "Starter",
    features: [
      "Up to 7 pages",
      "Calendar booking integration",
      "Social media integration",
      "Speed optimization",
    ],
    cta: "Choose Growth",
    featured: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: { monthly: 2399, annual: 2159 },
    blurb: "The full content + search package — site, blog, and Google setup done for you.",
    inherits: "Growth",
    features: [
      "Blog set up and ready to publish",
      "3 launch blog posts written for your niche",
      "Google Search Console setup and submission",
      "Google Business Profile optimization",
      "Sitemap submission",
      "Structured data markup",
    ],
    cta: "Choose Pro",
    featured: true,
    differentiator: "Blog + 3 launch posts + full launch SEO.",
  },
];

function PricingHeader({ billing, setBilling }) {
  return (
    <div className="pricing-head">
      <span className="eyebrow">Pricing</span>
      <h2 className="display-md">Pick the plan that fits.</h2>
      <p className="body-lg" style={{color:"#2d2d2d", maxWidth: 560, margin: "0 auto"}}>
        One-time build fee. Support windows included. No subscriptions, no surprise add-ons.
      </p>
      <div className="billing-toggle" role="tablist" aria-label="Billing">
        <button role="tab" aria-selected={billing==="monthly"} className={billing==="monthly"?"on":""} onClick={() => setBilling("monthly")}>One-time</button>
        <button role="tab" aria-selected={billing==="annual"}  className={billing==="annual"?"on":""}  onClick={() => setBilling("annual")}>
          Annual care plan <span className="save-pill">save 10%</span>
        </button>
      </div>
    </div>
  );
}

function PricingTier({ tier, billing, onPick }) {
  const price = tier.price[billing];
  return (
    <div className={`tier ${tier.featured ? "tier-featured" : ""}`}>
      {tier.featured && <div className="tier-badge"><i data-lucide="star"></i> Recommended</div>}
      <div className="tier-head">
        <h3 className="display-sm" style={{margin:0}}>{tier.name}</h3>
        <p className="body-md tier-blurb">{tier.blurb}</p>
      </div>
      <div className="tier-price">
        <span className="tier-amount">${price.toLocaleString()}</span>
        <span className="tier-cadence">{billing==="annual" ? "/ year · all-in" : "one-time"}</span>
      </div>
      {tier.featured && (
        <div className="tier-differentiator">
          <i data-lucide="search-check"></i>
          <span>{tier.differentiator}</span>
        </div>
      )}
      <button className={`btn ${tier.featured ? "btn-primary-on-dark" : "btn-primary"}`} onClick={() => onPick(tier)}>
        {tier.cta}
      </button>
      {tier.inherits && (
        <div className="tier-inherits">Everything in <b>{tier.inherits}</b>, plus:</div>
      )}
      <ul className="tier-features">
        {tier.features.map(f => (
          <li key={f}><i data-lucide="check"></i><span>{f}</span></li>
        ))}
      </ul>
    </div>
  );
}

function Pricing({ onPick }) {
  const [billing, setBilling] = useState_P("monthly");
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <PricingHeader billing={billing} setBilling={setBilling} />
        <div className="pricing-grid">
          {TIERS.map(t => <PricingTier key={t.id} tier={t} billing={billing} onPick={onPick}/>)}
        </div>
        <p className="caption pricing-foot">
          All plans include hosting setup, domain configuration, and a kickoff call. <b>Ongoing hosting and support: $19.99/month after launch</b> — cancel anytime, you always own the site. Need something custom? <a href="#contact">Talk to us</a>.
        </p>
      </div>
    </section>
  );
}

window.Pricing = Pricing;
