import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,.96)" : "white",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: `1px solid ${scrolled ? "#E2E8F0" : "#F1F5F9"}`,
      transition: "all .3s",
      padding: "0 24px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 38, height: 38, background: "linear-gradient(135deg,#1A6EBD,#0F4C8A)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ color: "white", fontWeight: 800, fontSize: 14, fontFamily: "Playfair Display, serif" }}>EM</span>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#0F172A", letterSpacing: "-.02em", lineHeight: 1.2 }}>EverythingMigration</div>
            <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 500 }}>Canada Immigration Guide</div>
          </div>
        </div>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="#categories" className="nav-link">Guides</a>
          <a href="#articles" className="nav-link">Articles</a>
          <a href="#immigration" className="nav-link">Immigration</a>
          <button className="btn-primary" style={{ padding: "10px 22px", fontSize: 14 }}>Join Waitlist</button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileMenu(!mobileMenu)}
          style={{ display: "none", background: "none", border: "1.5px solid #E2E8F0", borderRadius: 8, width: 38, height: 38, alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 18, color: "#0F172A" }}
        >
          {mobileMenu ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenu && (
        <div style={{ borderTop: "1px solid #F1F5F9", padding: "16px 24px 20px", display: "flex", flexDirection: "column", gap: 16 }}>
          {["Guides", "Articles", "Newsletter"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link" style={{ fontSize: 15 }} onClick={() => setMobileMenu(false)}>{l}</a>
          ))}
          <button className="btn-primary" style={{ width: "100%", marginTop: 4 }}>Join Waitlist</button>
        </div>
      )}
    </nav>
  );
}