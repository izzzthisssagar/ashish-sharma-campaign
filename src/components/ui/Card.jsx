import Link from "next/link";

export default function Card({ metaLeft, metaRight, title, excerpt, actionLabel, href, external }) {
  const Action = external ? "a" : Link;
  const actionProps = external
    ? { href, target: "_blank", rel: "noreferrer", className: "btn primary" }
    : { href, className: "btn primary" };

  return (
    <article className="card">
      <div className="meta">
        <span>{metaLeft}</span>
        <span className="dot">•</span>
        <span>{metaRight}</span>
      </div>

      <h3 className="cardTitle">{title}</h3>
      {excerpt ? <p className="cardText">{excerpt}</p> : null}

      <div className="actions">
        <Action {...actionProps}>{actionLabel}</Action>
      </div>
    </article>
  );
}
