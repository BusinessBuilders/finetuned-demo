/* global React */
const { useState } = React;

function Logo() {
  return (
    <a href="#" className="nav-logo" aria-label="Fine-Tuned Business Solutions Inc.">
      <img src="assets/finetuned-logo-clean.png" alt="Fine-Tuned" />
    </a>
  );
}

function NavBar({ onPick }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Logo />
        <nav className="nav-links" aria-hidden={!open && undefined} data-open={open}>
          <a href="#services" onClick={() => onPick && onPick("services")}>Services</a>
          <a href="#pricing"  onClick={() => onPick && onPick("pricing")}>Pricing</a>
          <a href="#contact"  onClick={() => onPick && onPick("contact")}>Contact</a>
        </nav>
        <div className="nav-cta">
          <a href="#contact" className="btn btn-primary">Get a quote</a>
        </div>
        <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(o => !o)}>
          <i data-lucide="menu"></i>
        </button>
      </div>
    </header>
  );
}

window.NavBar = NavBar;
window.Logo = Logo;
