import React from "react";
import Solutions from "../components/Solutions/Solutions";
import {SOLUTIONS} from "../constants/main.constants";

const SolutionsPage: React.FC = () => {
  return <Solutions solutions={SOLUTIONS} />;
};

export default SolutionsPage;
