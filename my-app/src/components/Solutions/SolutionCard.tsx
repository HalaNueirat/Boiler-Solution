import React from "react";
import type {ISolutionCardProps} from "./Solutions.types";

const SolutionCard: React.FC<ISolutionCardProps> = ({solution}) => {
  const Content = (
    <div className="solution-content">
      <h3>
        <span>{solution.titleEmphasis}</span>
        {solution.titleRest}
      </h3>
      <h4>{solution.subtitle}</h4>
      <p>{solution.description}</p>
      <a href="#" className="learn-more">
        Learn More <i className="fa-solid fa-arrow-right" />
      </a>
    </div>
  );

  const Figure = (
    <figure>
      <img
        src={solution.image}
        alt={solution.imageAlt}
        width={800}
        height={400}
        loading="lazy"
      />
    </figure>
  );

  return (
    <article className={`solution-box ${solution.reverse ? "reverse" : ""}`}>
      {solution.reverse ? (
        <>
          {Figure}
          {Content}
        </>
      ) : (
        <>
          {Content}
          {Figure}
        </>
      )}
    </article>
  );
};
export default SolutionCard;
