import { ArrowUpRight, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="brand footer-brand"><span className="brand-mark">T</span><span>TULAS<span className="brand-muted">.</span></span></div>
            <p className="footer-copy">The Modern Gurukul.<br />Dehradun, Uttarakhand.</p>
          </div>
          <div className="footer-cta">
            <span>Have a question?</span>
            <a href="mailto:info@tis.edu.in">info@tis.edu.in <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Tulas International School. All rights reserved.</span>
          <div className="socials">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={17} /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><Facebook size={17} /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><Youtube size={17} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}