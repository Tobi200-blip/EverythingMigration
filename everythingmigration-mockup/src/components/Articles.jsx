import { useState } from "react";
import { articles } from "../data";

export default function Articles() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? articles : articles.filter(a => a.tag === filter);

  return (
    <section id="articles" className="section-pad" style={{ padding:"96px 24px",background:"white" }}>
      <div style={{ maxWidth:1200,margin:"0 auto" }}>

        {/* Header */}
        <div className="articles-header" style={{ display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:48,flexWrap:"wrap",gap:24 }}>
          <div>
            <div style={{ display:"inline-flex",alignItems:"center",gap:6,background:"#EBF4FF",color:"#1A6EBD",fontSize:12,fontWeight:600,padding:"6px 14px",borderRadius:100,letterSpacing:".04em",textTransform:"uppercase",marginBottom:12 }}>
              📰 Latest Content
            </div>
            <h2 className="section-heading" style={{ fontFamily:"Playfair Display,serif",fontSize:40,fontWeight:700,color:"#0F172A",letterSpacing:"-.03em",marginBottom:8 }}>
              Latest articles
            </h2>
            <p style={{ fontSize:16,color:"#64748B" }}>Evergreen guides and weekly immigration news</p>
          </div>
          <div className="filter-row" style={{ display:"flex",gap:8 }}>
            {[["all","All articles"],["evergreen","🌿 Evergreen"],["news","📰 News"]].map(([val,label]) => (
              <button key={val} className={`filter-btn ${filter===val?"active":""}`} onClick={() => setFilter(val)}>{label}</button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="articles-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24 }}>
          {filtered.map((a,i) => (
            <div key={i} className="article-card">
              <div style={{ height:5,background:a.color,flexShrink:0 }} />
              <div style={{ padding:"24px 24px 20px",flex:1,display:"flex",flexDirection:"column" }}>
                <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,gap:8,flexWrap:"wrap" }}>
                  <span style={{ fontSize:12,fontWeight:600,color:a.color,background:a.bg,padding:"5px 12px",borderRadius:100,flexShrink:0 }}>{a.category}</span>
                  <span style={{ fontSize:11,fontWeight:600,padding:"4px 10px",borderRadius:100,background:a.tag==="evergreen"?"#F0FDF4":"#FFFBEB",color:a.tag==="evergreen"?"#15803D":"#92400E",flexShrink:0 }}>
                    {a.tag==="evergreen"?"🌿 Evergreen":"📰 News"}
                  </span>
                </div>
                <h3 style={{ fontSize:16,fontWeight:700,color:"#0F172A",lineHeight:1.45,marginBottom:12,letterSpacing:"-.01em",flex:1 }}>{a.title}</h3>
                <p style={{ fontSize:14,color:"#64748B",lineHeight:1.65,marginBottom:20 }}>{a.excerpt}</p>
                <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:"1px solid #F1F5F9",paddingTop:16,fontSize:12,color:"#94A3B8",fontWeight:500 }}>
                  <span>{a.date}</span>
                  <span>{a.read} read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}