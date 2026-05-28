export default function Hero() {
  return (
    <section className="hero-section" style={{ background: "linear-gradient(160deg,#0A1628 0%,#0F2D55 55%,#1A4A8A 100%)", padding: "110px 24px 90px", position: "relative", overflow: "hidden" }}>
      
      {/* Glow orbs */}
      <div style={{ position:"absolute",top:-100,right:-100,width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(26,110,189,.18),transparent 70%)",pointerEvents:"none" }} />
      <div style={{ position:"absolute",bottom:-80,left:-80,width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(96,165,250,.1),transparent 70%)",pointerEvents:"none" }} />

      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative" }}>
        
        {/* Eyebrow */}
        <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(26,110,189,.18)",border:"1px solid rgba(96,165,250,.25)",color:"#93C5FD",fontSize:12,fontWeight:600,padding:"8px 18px",borderRadius:100,marginBottom:32,letterSpacing:".06em",textTransform:"uppercase" }}>
          <span style={{ width:6,height:6,background:"#4ADE80",borderRadius:"50%",display:"inline-block",flexShrink:0 }} />
          Canada Immigration Guide for All
        </div>

        {/* Headline */}
        <h1 className="hero-title" style={{ fontFamily:"Playfair Display, serif",fontSize:58,fontWeight:800,color:"white",lineHeight:1.1,letterSpacing:"-.03em",marginBottom:24 }}>
          Find your clearest
          <span style={{ display:"block",color:"#60A5FA" }}>path to Canada</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle" style={{ fontSize:18,color:"#94A3B8",lineHeight:1.75,maxWidth:540,margin:"0 auto 48px",fontWeight:400 }}>
          Everything you need to know about Canadian immigration — work permits, permanent residence, study permits and more. Built specifically for Nigerians.
        </p>

        {/* CTA */}
        <div className="hero-actions" style={{ display:"flex",gap:12,maxWidth:520,margin:"0 auto 48px",alignItems:"stretch" }}>
          <input className="hero-input" placeholder="Enter your email address" />
          <button className="btn-primary" style={{ flexShrink:0 }}>Join Waitlist →</button>
        </div>

        <p style={{ fontSize:13,color:"#475569",fontWeight:500 }}>
          ✓ No spam &nbsp;&nbsp;&nbsp; ✓ Unsubscribe anytime &nbsp;&nbsp;&nbsp; ✓ Join 2,400+ Nigerians
        </p>
      </div>

      {/* Stats bar */}
      <div style={{ maxWidth:720,margin:"72px auto 0",background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.08)",borderRadius:20,padding:"32px 48px" }}>
        <div className="stats-row" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)" }}>
          {[["2,400+","Subscribers"],["50+","Guides written"],["4","Immigration paths"],["100%","Free forever"]].map(([num,label],i) => (
            <div key={i} className="stat-item" style={{ textAlign:"center",borderRight:i<3?"1px solid rgba(255,255,255,.08)":"none",padding:"0 16px" }}>
              <div className="stat-num" style={{ fontFamily:"Playfair Display,serif",fontSize:30,fontWeight:700,color:"white",letterSpacing:"-.03em" }}>{num}</div>
              <div style={{ fontSize:12,color:"#64748B",marginTop:4,fontWeight:500 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}