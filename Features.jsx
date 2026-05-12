/* global React */

function Features() {
  const items = [
    { icon: "zap",          title: "Fast by default",      body: "Lighthouse 90+ on every site we ship. No bloat, no third-party trackers you didn't ask for." },
    { icon: "search",       title: "Search-ready at launch", body: "Search Console, sitemap, and Google Business Profile configured before launch." },
    { icon: "smartphone",   title: "Mobile first",         body: "Designed mobile-up. Every layout works at 360 px before we touch desktop." },
    { icon: "wand-sparkles",title: "AI workflows",         body: "Drop-in automations for calendar booking, inbound forms, and customer follow-up." },
  ];
  return (
    <section className="features" id="services">
      <div className="container">
        <div className="features-head">
          <span className="eyebrow">What you get</span>
          <h2 className="display-md">Everything a small business site should do.<br/><span style={{color:"#6b6b6b"}}>Nothing it shouldn't.</span></h2>
        </div>
        <div className="features-grid">
          {items.map(f => (
            <div className="feature card card-soft" key={f.title}>
              <div className="feature-icon"><i data-lucide={f.icon}></i></div>
              <h3 className="display-xs">{f.title}</h3>
              <p className="body-md">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Features = Features;
