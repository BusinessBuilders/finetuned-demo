/* global React */

const TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: 1199,
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
    price: 1699,
    blurb: "Multi-page site with built-in booking — the everyday workhorse.",
    inherits: "Starter",
    features: [
      "Up to 7 pages",
      "Calendar booking integration",
      "Social media integration",
      "Speed optimization",
      "Google Search Console setup and submission",
      "Google Business Profile optimization",
      "Sitemap submission",
    ],
    cta: "Choose Growth",
    featured: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: 2399,
    blurb: "Everything in Growth, plus a working blog and three launch posts ready to rank.",
    inherits: "Growth",
    features: [
      "Blog set up and ready to publish",
      "3 launch blog posts written for your niche",
      "Structured data markup",
    ],
    cta: "Choose Pro",
    featured: true,
    differentiator: "Blog + 3 launch posts written for your niche.",
  },
];

function PricingHeader() {
  return (
    <div className="pricing-head">
      <span className="eyebrow">Pricing</span>
      <h2 className="display-md">Pick the plan that fits.</h2>
      <p className="body-lg" style={{color:"#2d2d2d", maxWidth: 560, margin: "0 auto"}}>
        One-time build fee. Hosting and ongoing support available for $19.99/month after launch.
      </p>
    </div>
  );
}

function PricingTier({ tier, onPick }) {
  return (
    <div className={`tier ${tier.featured ? "tier-featured" : ""}`}>
      {tier.featured && <div className="tier-badge"><i data-lucide="star"></i> Recommended</div>}
      <div className="tier-head">
        <h3 className="display-sm" style={{margin:0}}>{tier.name}</h3>
        <p className="body-md tier-blurb">{tier.blurb}</p>
      </div>
      <div className="tier-price">
        <span className="tier-amount">${tier.price.toLocaleString()}</span>
        <span className="tier-cadence">one-time</span>
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
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <PricingHeader />
        <div className="pricing-grid">
          {TIERS.map(t => <PricingTier key={t.id} tier={t} onPick={onPick}/>)}
        </div>
        <p className="caption pricing-foot">
          All plans include hosting setup, domain configuration, and a kickoff call. Hosting can be canceled anytime; you always own the site and the domain. Need something custom? <a href="#contact">Talk to us</a>.
        </p>
      </div>
    </section>
  );
}

window.Pricing = Pricing;
