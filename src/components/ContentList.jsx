import Card from "./ui/Card";

export default function ContentList({ title, desc, items }) {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1Small">{title}</h1>
        <p className="sectionDesc" style={{ marginTop: 6 }}>{desc}</p>

        <div className="grid" style={{ marginTop: 14 }}>
          {items.map((it) => (
            <Card key={it.href} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
