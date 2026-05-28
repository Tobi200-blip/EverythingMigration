import { categories } from "../data";

export default function Categories() {
  return (
    <section id="categories" className="section-pad" style={{ padding:"96px 24px",background:"#F8FAFC" }}>
      <div style={{ maxWidth:1200,margin:"0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign:"center",marginBottom:56 }}>
          <div style={{ display:"inline-flex",alignItems:"center",gap:6,background:"#EBF4FF",color:"#1A6EBD",fontSize:12,fontWeight:600,padding:"6px 14px",borderRadius:100,letterSpacing:".04em",textTransform:"uppercase",marginBottom:16 }}>
            📚 Evergreen Guides
          </div>
          <h2 className="section-heading" style={{ fontFamily:"Playfair Display,serif",fontSize:40,fontWeight:700,color:"#0F172A",letterSpacing:"-.03em",marginBottom:16 }}>
            Browse by category
          </h2>
          <p style={{ fontSize:17,color:"#64748B",maxWidth:480,margin:"0 auto",lineHeight:1.65 }}>
            Permanent guides that stay relevant — researched and written for Individuals planning their move
          </p>
        </div>

        {/* Grid */}
        <div className="cat-grid" style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:24 }}>
          {categories.map((cat,i) => (
            <div key={i} className="cat-card">
              <div style={{ display:"flex",alignItems:"flex-start",gap:16,marginBottom:20 }}>
                <div style={{ width:52,height:52,background:cat.bg,borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0 }}>
                  {cat.icon}
                </div>
                <div style={{ flex:1,minWidth:0 }}>
                  <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4,gap:8,flexWrap:"wrap" }}>
                    <h3 style={{ fontSize:17,fontWeight:700,color:"#0F172A",letterSpacing:"-.02em" }}>{cat.title}</h3>
                    <span style={{ fontSize:12,color:cat.color,fontWeight:600,background:cat.bg,padding:"4px 10px",borderRadius:100,flexShrink:0 }}>{cat.count} guides</span>
                  </div>
                  <p style={{ fontSize:14,color:"#64748B",lineHeight:1.55 }}>{cat.desc}</p>
                </div>
              </div>
              <div style={{ borderTop:"1px solid #F1F5F9",paddingTop:16,display:"flex",flexDirection:"column",gap:10 }}>
                {cat.guides.map((g,j) => (
                  <div key={j} style={{ display:"flex",alignItems:"center",gap:10,fontSize:14,color:"#334155",fontWeight:500,cursor:"pointer" }}>
                    <span style={{ color:cat.color,fontWeight:700,fontSize:15,flexShrink:0 }}>→</span>
                    {g}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}