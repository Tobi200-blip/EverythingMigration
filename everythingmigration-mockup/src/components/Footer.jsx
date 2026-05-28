export default function Footer() {
  return (
    <footer style={{ background:"#020817",padding:"52px 24px",borderTop:"1px solid #0F172A" }}>
      <div style={{ maxWidth:1200,margin:"0 auto" }}>
        <div className="footer-inner" style={{ display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:36,flexWrap:"wrap",gap:32 }}>
          
          {/* Brand */}
          <div style={{ maxWidth:260 }}>
            <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:12 }}>
              <div style={{ width:36,height:36,background:"linear-gradient(135deg,#1A6EBD,#0F4C8A)",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                <span style={{ color:"white",fontWeight:800,fontSize:13,fontFamily:"Playfair Display,serif" }}>EM</span>
              </div>
              <div>
                <div style={{ fontWeight:700,fontSize:14,color:"white",letterSpacing:"-.01em" }}>Everything Migration</div>
                <div style={{ fontSize:11,color:"#334155" }}>Canada Immigration Guide</div>
              </div>
            </div>
            <p style={{ fontSize:13,color:"#475569",lineHeight:1.65 }}>
              Your clearest path to Canada. Built for future Canadians and New Immigrants.
            </p>
          </div>

          {/* Links */}
          <div className="footer-links" style={{ display:"flex",gap:40,flexWrap:"wrap" }}>
            <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
              <div style={{ fontSize:12,fontWeight:600,color:"#334155",textTransform:"uppercase",letterSpacing:".06em",marginBottom:4 }}>Guides</div>
              {["Permanent Residence","Work Permits","Study Permits","Life in Canada"].map(l => (
                <a key={l} href="#" className="footer-link">{l}</a>
              ))}
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
              <div style={{ fontSize:12,fontWeight:600,color:"#334155",textTransform:"uppercase",letterSpacing:".06em",marginBottom:4 }}>Platform</div>
              {["Articles","Newsletter","Waitlist","About"].map(l => (
                <a key={l} href="#" className="footer-link">{l}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{ borderTop:"1px solid #0F172A",paddingTop:24,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12 }}>
          <p style={{ fontSize:13,color:"#1E293B" }}>© 2026 EverythingMigration. All rights reserved.</p>
          <span style={{ fontSize:11,color:"#1E293B",background:"#0A0F1C",border:"1px solid #1E293B",padding:"4px 14px",borderRadius:100 }}>
            Design mockup — for presentation purposes only
          </span>
        </div>
      </div>
    </footer>
  );
}