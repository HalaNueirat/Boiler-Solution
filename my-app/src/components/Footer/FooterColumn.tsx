import React, {useState} from "react";
import type {IFooterColumnProps} from "./Footer.types";
import {isDesktop} from "react-device-detect";

const FooterColumn: React.FC<IFooterColumnProps> = ({group}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="footer-column">
      <h4 className="footer-toggle">
        {group.title}
        <button
          type="button"
          className="footer-arrow"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </button>
      </h4>
      {(open || isDesktop) && (
        <nav
          className={`footer-nav ${open ? "open" : ""}`}
          aria-label={group.ariaLabel}
        >
          <ul>
            {group.links.map((l) => (
              <li key={l.id}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default FooterColumn;
