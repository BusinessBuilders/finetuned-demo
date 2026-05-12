/* global React */

function FAQ() {
  const qs = [
    { q: "How long does a build take?",                        a: "Starter: 1 week. Growth: 3 weeks (including booking setup). Pro: 4–5 weeks, including the blog setup, three launch posts, and the full launch SEO setup." },
    { q: "Do you host the site?",                              a: "We set up hosting on the platform of your choice (Vercel, Netlify, or your existing provider). You own the account; we just configure it." },
    { q: "What's the difference between Growth and Pro?",      a: "Both include calendar booking and the multi-page site. Pro adds the content + search package: a working blog set up on your site, three launch posts written for you, plus the full Google launch setup (Search Console, Business Profile, sitemap, structured data). If you want to show up in search and have real content to point to, Pro. If you already have an audience and just need a fast site with bookings, Growth is enough." },
    { q: "Why does Pro include blog posts?",                   a: "Every blog post is a new doorway into your site from Google. Three keyword-targeted launch posts — written for your niche, whether that's finance, services, or something else — give you real content to rank for from day one and a template for what to publish next. Want more posts after launch? We offer them as a care-plan add-on." },
    { q: "What's included in $19.99/month hosting and support?", a: "Hosting, SSL, and security updates, plus email support for small changes — think typo fixes, copy tweaks, swapping an image, updating a link, adding a short paragraph. Bigger work (new pages, redesigns, new features, more blog posts) is quoted separately so you only pay for what you use. Cancel anytime; you always own the site and the domain." },
  ];
  return (
    <section className="faq">
      <div className="container">
        <span className="eyebrow">FAQ</span>
        <h2 className="display-md" style={{marginBottom: 32}}>Common questions.</h2>
        <div className="faq-list">
          {qs.map((item, i) => (
            <details className="faq-item" key={i} open={i===0}>
              <summary>
                <span className="display-xs">{item.q}</span>
                <i data-lucide="plus" className="faq-icon"></i>
              </summary>
              <p className="body-md">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

window.FAQ = FAQ;
