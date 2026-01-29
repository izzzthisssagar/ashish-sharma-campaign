export default function ContentDetail({ eyebrow, title, meta, body }) {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker">{eyebrow}</div>
        <h1 className="h1Small">{title}</h1>
        <p className="sectionDesc" style={{ marginTop: 6 }}>{meta}</p>

        <div className="panel" style={{ marginTop: 14 }}>
          {body.split("\n\n").map((p, i) => (
            <p key={i} className="panelText">{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
