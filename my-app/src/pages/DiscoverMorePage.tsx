import React from "react";
import Discover from "../components/Discover/Discover";
import {DISCOVER_ITEMS} from "../constants/main.constants";

const DiscoverMorePage: React.FC = () => {
  return <Discover items={DISCOVER_ITEMS} />;
};

export default DiscoverMorePage;
