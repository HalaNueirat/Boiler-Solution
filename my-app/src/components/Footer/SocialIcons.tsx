import React from "react";
import type {SocialLink} from "./Footer.types";

const SocialIcons: React.FC<{items: SocialLink[]}> = ({items}) => {
  return (
    <div className="social-icons">
      {items.map((s, i) => (
        <a key={i} href={s.href} aria-label={s.label}>
          <i className={s.iconClass}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
