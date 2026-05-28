import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section id="newsletter" className="newsletter-section" style={{ padding:"100px 24px",background:"linear-gradient(160deg,#0A1628 0%,#0F2D55 55%,#1A4A8A 100%)",position:"relative",overflow:"hidden" }}>
      <div style={{ position:"absolute",top:-120,right:-120,width:600,height:600,borderRadius:"50%",background:"radial-gradient(circle,rgba(26,110,189,.15),transparent 70%)",pointerEvents:"none" }} />
      <div style={{ position:"absolute",bottom:-80,left:-80,width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(96,165,250,.08),transparent 70%)",pointerEvents:"none" }} />

      <div style={{ maxWidth:620,margin:"0 auto",textAlign:"center",position:"relative" }}>
        <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(26,110,189,.18)",border:"1px solid rgba(96,165,250,.25)",color:"#93C5FD",fontSize:12,fontWeight:600,padding:"8px 18px",borderRadius:100,marginBottom:32,letterSpacing:".06em",textTransform:"uppercase" }}>
          ✉️ Weekly Newsletter
        </div>

        <h2 className="newsletter-heading" style={{ fontFamily:"Playfair Display,serif",fontSize:40,fontWeight:700,color:"white",letterSpacing:"-.03em",lineHeight:1.15,marginBottom:20 }}>
          Stay ahead of every<br />immigration update
        </h2>

        <p style={{ fontSize:17,color:"#94A3B8",lineHeight:1.75,maxWidth:500,margin:"0 auto 44px" }}>
          Get the latest Canada immigration news, Express Entry draw results, and practical guides every Monday. Built for Nigerians planning their move.
        </p>

        {subscribed ? (
          <div style={{ background:"rgba(74,222,128,.08)",border:"1px solid rgba(74,222,128,.25)",borderRadius:20,padding:32 }}>
            <div style={{ fontSize:40,marginBottom:12 }}>🎉</div>
            <div style={{ color:"#4ADE80",fontWeight:700,fontSize:20,marginBottom:8 }}>You are subscribed!</div>
            <div style={{ color:"#64748B",fontSize:15 }}>Check your inbox for a welcome email</div>
          </div>
        ) : (
          <>
            <div className="newsletter-form" style={{ display:"flex",gap:12,maxWidth:480,margin:"0 auto 20px" }}>
              <input
                className="newsletter-input"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key==="Enter" && email && setSubscribed(true)}
              />
              <button className="btn-primary" style={{ flexShrink:0 }} onClick={() => email && setSubscribed(true)}>
                Subscribe →
              </button>
            </div>
            <p style={{ fontSize:13,color:"#475569",fontWeight:500 }}>
              ✓ No spam &nbsp;&nbsp; ✓ Unsubscribe anytime &nbsp;&nbsp; ✓ 2,400+ readers
            </p>
          </>
        )}
      </div>
    </section>
  );
}