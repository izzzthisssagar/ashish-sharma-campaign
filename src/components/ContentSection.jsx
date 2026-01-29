import Link from "next/link";
import Card from "./ui/Card";

export default function ContentSection({ id, title, desc, items, viewAllHref }) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="sectionHead">
          <div>
            <h2 className="sectionTitle">{title}</h2>
            <p className="sectionDesc">{desc}</p>
          </div>
          {viewAllHref ? (
            <Link className="link" href={viewAllHref}>View all</Link>
          ) : null}
        </div>

        <div className="grid">
          {items.map((it) => (
            <Card key={it.href} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
