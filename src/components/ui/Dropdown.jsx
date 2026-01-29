"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Dropdown({ label, items = [], onNavigate }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <div className="dropdown" ref={ref} data-open={open ? "true" : "false"}>
      <button className="navBtn" type="button" aria-haspopup="true" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        {label} <span className="caret">▾</span>
      </button>

      <div className="menu" role="menu">
        {items.map((c) => (
          <Link
            key={c.href}
            className="menuItem"
            role="menuitem"
            href={c.href}
            onClick={() => {
              setOpen(false);
              onNavigate?.();
            }}
          >
            {c.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
