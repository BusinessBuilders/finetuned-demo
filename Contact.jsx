/* global React */
const { useState: useState_C } = React;

function ContactForm({ selectedTier }) {
  const [submitted, setSubmitted] = useState_C(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const tier = (data.get("tier") || "").toString().trim();
    const project = (data.get("project") || "").toString().trim();

    const subject = tier ? `Website enquiry — ${tier}` : "Website enquiry";
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Tier of interest: ${tier}`,
      "",
      "Project details:",
      project,
    ].join("\n");

    const url = `mailto:donovan@business-builder.online?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="contact-success">
        <div className="contact-check"><i data-lucide="check"></i></div>
        <h3 className="display-sm" style={{margin:0}}>Your email is ready to send.</h3>
        <p className="body-md" style={{color:"#6b6b6b"}}>
          We've opened your email app with the draft. Hit send and we'll reply within one business day.
          If nothing opened, email <a href="mailto:donovan@business-builder.online">donovan@business-builder.online</a> directly.
        </p>
        <button className="btn btn-tertiary" onClick={() => setSubmitted(false)}>Send another</button>
      </div>
    );
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="grid-2">
        <label>Full name<input className="input" name="name" required placeholder="Your name" /></label>
        <label>Email<input className="input" name="email" type="email" required placeholder="you@yourcompany.com" /></label>
      </div>
      <label>Tier you're interested in
        <select className="input" name="tier" defaultValue={selectedTier || "Pro"}>
          <option>Starter — $1,199</option>
          <option>Growth — $1,699</option>
          <option>Pro — $2,399</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label>Tell us about the project
        <textarea className="input" name="project" rows="4" placeholder="Tell us about your business and what you need."></textarea>
      </label>
      <button type="submit" className="btn btn-primary">Send enquiry<i data-lucide="arrow-right"></i></button>
      <p className="caption">By submitting you agree to be contacted about your project. We don't sell your data.</p>
    </form>
  );
}

function Contact({ selectedTier }) {
  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">Talk to us</span>
          <h2 className="display-md">Let's build the<br/>thing.</h2>
          <p className="body-lg" style={{color:"#2d2d2d"}}>
            Tell us where you are, where you'd like to be, and we'll send back a proposal — usually within one business day.
          </p>
          <div className="contact-meta">
            <div className="contact-meta-row"><i data-lucide="mail"></i><a href="mailto:donovan@business-builder.online">donovan@business-builder.online</a></div>
            <div className="contact-meta-row"><i data-lucide="phone"></i><a href="tel:+17742441878">(774) 244-1878</a></div>
            <div className="contact-meta-row"><i data-lucide="map-pin"></i><span>Rutland, MA · Remote across North America</span></div>
          </div>
        </div>
        <div className="contact-card">
          <ContactForm selectedTier={selectedTier} />
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
