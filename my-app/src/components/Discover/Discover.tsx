import React from "react";
import "./Discover.css";
import type {IDiscoverProps} from "./Discover.types";
import DiscoverCard from "./DiscoverCard";
import Section from "../common/Section";
import {useSwap} from "../../hooks/useSwap";

const Discover: React.FC<IDiscoverProps> = ({items}) => {
  const {swapped, toggle} = useSwap();

  const pair = (items ?? []).slice(0, 2);
  const ordered = swapped ? [...pair].reverse() : pair;

  return (
    <Section
      className="discover-more"
      title="Discover More"
      headerClassName="discover-header"
    >
      <div className="discover-cards-container">
        {ordered[0] && <DiscoverCard key={ordered[0].id} item={ordered[0]} />}

        <button
          className="swap-btn"
          onClick={toggle}
          aria-label="Swap cards"
          title="Swap cards"
        >
          <i className="fa-solid fa-rotate" aria-hidden="true" />
        </button>

        {ordered[1] && <DiscoverCard key={ordered[1].id} item={ordered[1]} />}
      </div>
    </Section>
  );
};

export default Discover;
