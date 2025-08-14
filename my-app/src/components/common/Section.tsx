import React from "react";
import type {ISectionProps} from "./common.types";

const Section: React.FC<ISectionProps> = ({
  id,
  title,
  className,
  withSpacing = true,
  withContainer = true,
  headerInsideContainer = true,
  headerClassName,
  beforeHeader,
  headerRight,
  children,
}) => {
  const Header = title ? (
    <header className={headerClassName}>
      <h2>{title}</h2>
      {headerRight}
    </header>
  ) : null;

  const Content = (
    <>
      {beforeHeader}
      {Header}
      {children}
    </>
  );

  const sectionClass = `${withSpacing ? "section-spacing " : ""}${
    className ?? ""
  }`.trim();

  return (
    <section id={id} className={sectionClass}>
      {withContainer ? (
        headerInsideContainer ? (
          <div className="container">{Content}</div>
        ) : (
          <>
            {Header}
            <div className="container">{children}</div>
          </>
        )
      ) : (
        Content
      )}
    </section>
  );
};

export default Section;
