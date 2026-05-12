/* global React */

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><i data-lucide="trending-up"></i> Built by Business Builders</span>
          <h1 className="display-mega hero-headline">
            Your business,<br/>
            <span className="hero-accent">finely tuned</span>.
          </h1>
          <p className="body-lg hero-sub">
            Custom websites and AI automations for service businesses.
            Fast, indexed, and ready to rank from day one.
          </p>
          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary">See pricing<i data-lucide="arrow-right"></i></a>
            <a href="#contact" className="btn btn-tertiary">Talk to us</a>
          </div>
          <div className="hero-proof">
            <div><b>Fixed price</b> · no retainers</div>
            <div><b>$19.99/mo</b> hosting + support</div>
            <div><b>Launch SEO</b> included</div>
          </div>
        </div>
        <div className="hero-card-wrap">
          <HeroCard />
        </div>
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="hero-card">
      <div className="hero-card-head">
        <span className="caption">PROJECT PREVIEW</span>
        <span className="badge" style={{background:"#e7faE4", color:"#054d28"}}>Live</span>
      </div>
      <div className="hero-card-body">
        <div className="hero-card-row"><i data-lucide="globe"></i><span>finetuned.co</span><span className="hero-card-status">200 OK</span></div>
        <div className="hero-card-row"><i data-lucide="zap"></i><span>Lighthouse · Performance</span><span className="hero-card-num">98</span></div>
        <div className="hero-card-row"><i data-lucide="search"></i><span>Indexed pages</span><span className="hero-card-num">10 / 10</span></div>
        <div className="hero-card-row"><i data-lucide="shield-check"></i><span>SSL · A+</span><span className="hero-card-num">✓</span></div>
      </div>
      <div className="hero-card-foot">
        <span className="caption">Updated 2 min ago</span>
        <a href="#pricing" className="hero-card-link">View report<i data-lucide="arrow-up-right"></i></a>
      </div>
    </div>
  );
}

window.Hero = Hero;
window.HeroCard = HeroCard;
