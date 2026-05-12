/* global React */

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="assets/finetuned-logo-clean.png" alt="Fine-Tuned" className="footer-logo"/>
            <p className="body-sm" style={{color:"#a5a5a5", maxWidth: 320}}>
              Sample site built by Business Builders for Fine-Tuned Business Solutions Inc. Web development and AI automation for service businesses.
            </p>
          </div>
          <div>
            <h4 className="footer-h">Services</h4>
            <ul><li><a href="#">Websites</a></li><li><a href="#">SEO setup</a></li><li><a href="#">AI automations</a></li><li><a href="#">Care plans</a></li></ul>
          </div>
          <div>
            <h4 className="footer-h">Company</h4>
            <ul><li><a href="#">About</a></li><li><a href="#">Work</a></li><li><a href="#">Pricing</a></li><li><a href="#">Contact</a></li></ul>
          </div>
          <div>
            <h4 className="footer-h">Get a quote</h4>
            <p className="body-sm" style={{color:"#a5a5a5"}}>One business day turnaround. No drip emails.</p>
            <a href="#contact" className="btn btn-primary" style={{marginTop: 12}}>Start a project<i data-lucide="arrow-right"></i></a>
          </div>
        </div>
        <div className="footer-fine">
          <span>© 2026 Fine-Tuned Business Solutions Inc.</span>
          <span>Built by <a href="#">Business Builders</a></span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
