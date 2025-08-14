import React from "react";
import "./Solutions.css";
import type {ISolutionsProps} from "./Solutions.types";
import SolutionCard from "./SolutionCard";
import Section from "../common/Section";

const Solutions: React.FC<ISolutionsProps> = ({solutions}) => {
  return (
    <Section id="solutions" title="Solutions" headerClassName="section-header">
      <div className="solutions-boxes-container">
        {solutions.map((solution) => (
          <SolutionCard key={solution.id} solution={solution} />
        ))}
      </div>
    </Section>
  );
};

export default Solutions;
