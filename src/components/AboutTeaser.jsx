import Link from "next/link";

export default function AboutTeaser({ about }) {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionHead">
          <h2 className="sectionTitle">About</h2>
          <Link className="link" href="/about">Read more</Link>
        </div>
        <div className="panel">
          <p className="panelText">{about.teaser}</p>
        </div>
      </div>
    </section>
  );
}
