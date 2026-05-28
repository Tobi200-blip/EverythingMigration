export const globalStyles = `
  .nav-link {
    color: #64748B;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color .2s;
  }
  .nav-link:hover { color: #0F172A; }

  .btn-primary {
    background: #1A6EBD;
    color: white;
    border: none;
    padding: 14px 28px;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all .2s;
    font-family: 'DM Sans', sans-serif;
    display: inline-block;
    text-align: center;
  }
  .btn-primary:hover {
    background: #1558A0;
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(26,110,189,.35);
  }
  .btn-primary:active { transform: translateY(0); }

  .hero-input {
    flex: 1;
    padding: 15px 20px;
    border-radius: 12px;
    border: 1.5px solid rgba(255,255,255,.15);
    font-size: 15px;
    font-family: 'DM Sans', sans-serif;
    outline: none;
    background: rgba(255,255,255,.08);
    color: white;
    transition: border-color .2s, box-shadow .2s;
    min-width: 0;
  }
  .hero-input::placeholder { color: rgba(255,255,255,.35); }
  .hero-input:focus {
    border-color: #60A5FA;
    box-shadow: 0 0 0 4px rgba(96,165,250,.15);
  }

  .article-card {
    background: white;
    border-radius: 20px;
    border: 1px solid #E2E8F0;
    overflow: hidden;
    transition: all .25s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .article-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(15,23,42,.1);
    border-color: #CBD5E1;
  }

  .cat-card {
    background: white;
    border-radius: 20px;
    border: 1px solid #E2E8F0;
    padding: 28px;
    transition: all .25s ease;
    cursor: pointer;
    height: 100%;
  }
  .cat-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 48px rgba(15,23,42,.08);
    border-color: #CBD5E1;
  }

  .filter-btn {
    padding: 9px 20px;
    border-radius: 100px;
    border: 1.5px solid #E2E8F0;
    background: white;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all .2s;
    color: #64748B;
    font-family: 'DM Sans', sans-serif;
    white-space: nowrap;
  }
  .filter-btn.active {
    background: #0F172A;
    color: white;
    border-color: #0F172A;
  }
  .filter-btn:hover:not(.active) {
    border-color: #94A3B8;
    color: #0F172A;
  }

  .newsletter-input {
    flex: 1;
    padding: 15px 20px;
    border-radius: 12px;
    border: 1.5px solid rgba(255,255,255,.12);
    background: rgba(255,255,255,.08);
    color: white;
    font-size: 15px;
    font-family: 'DM Sans', sans-serif;
    outline: none;
    transition: border-color .2s, box-shadow .2s;
    min-width: 0;
  }
  .newsletter-input::placeholder { color: rgba(255,255,255,.35); }
  .newsletter-input:focus {
    border-color: #60A5FA;
    box-shadow: 0 0 0 4px rgba(96,165,250,.15);
  }

  .footer-link {
    color: #64748B;
    text-decoration: none;
    font-size: 13px;
    transition: color .2s;
    white-space: nowrap;
  }
  .footer-link:hover { color: #94A3B8; }

  @media (max-width: 900px) {
    .articles-grid { grid-template-columns: repeat(2,1fr) !important; }
    .cat-grid { grid-template-columns: 1fr !important; }
  }

  @media (max-width: 640px) {
    .nav-desktop { display: none !important; }
    .nav-hamburger { display: flex !important; }
    .hero-section { padding: 72px 20px 60px !important; }
    .hero-title { font-size: 34px !important; line-height: 1.15 !important; }
    .hero-subtitle { font-size: 15px !important; }
    .hero-actions { flex-direction: column !important; }
    .hero-actions .hero-input { width: 100% !important; }
    .hero-actions .btn-primary { width: 100% !important; }
    .stats-row { grid-template-columns: repeat(2,1fr) !important; }
    .stat-item { border-right: none !important; padding: 0 !important; }
    .stat-num { font-size: 26px !important; }
    .section-pad { padding: 64px 20px !important; }
    .section-heading { font-size: 28px !important; }
    .articles-grid { grid-template-columns: 1fr !important; }
    .articles-header { flex-direction: column !important; align-items: flex-start !important; }
    .filter-row { flex-wrap: wrap !important; }
    .newsletter-section { padding: 72px 20px !important; }
    .newsletter-form { flex-direction: column !important; }
    .newsletter-form .btn-primary { width: 100% !important; }
    .newsletter-heading { font-size: 28px !important; }
    .footer-inner { flex-direction: column !important; }
    .footer-links { flex-direction: column !important; gap: 12px !important; }
    .footer-bottom { flex-direction: column !important; align-items: flex-start !important; }
  }
`;