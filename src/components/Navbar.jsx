import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../data/schoolData";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-10">
      <div className="nav-shell">
        <button onClick={() => go("home")} className="brand" data-cursor>
          <span className="brand-mark">T</span>
          <span>TULAS<span className="brand-muted">.</span></span>
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => go(item.id)} className="nav-link" data-cursor>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle dark={dark} setDark={setDark} />
          <a href="#admissions" className="button button-small" data-cursor>
            Apply now <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle dark={dark} setDark={setDark} />
          <button className="icon-button" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mobile-menu"
          >
            {navItems.map((item) => (
              <button key={item.id} onClick={() => go(item.id)}>{item.label}</button>
            ))}
            <a href="#admissions" onClick={() => setOpen(false)} className="button">Apply now <ArrowUpRight size={15} /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}