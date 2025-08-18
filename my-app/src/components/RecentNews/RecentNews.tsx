import React, {useState} from "react";
import "./RecentNews.css";
import NewsCard from "./NewsCard";
import Section from "../common/Section";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/swiper-bundle.css";
import type {IRecentNewsProps} from "../../types/news.types";

const RecentNews: React.FC<IRecentNewsProps> = ({items}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleToggleExpanded = () => setExpanded((prev) => !prev);

  const headerRight = (
    <div className="view-all-wrapper">
      <button onClick={handleToggleExpanded} className="view-label">
        <span>{expanded ? "View Less News" : "View All News"}</span>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );

  return (
    <Section
      className="recent-news"
      title="Recent News"
      headerClassName="news-header"
      beforeHeader={<input type="checkbox" id="toggle-news" hidden />}
      headerRight={headerRight}
    >
      {expanded ? (
        <div className="cards-container expanded">
          {items.map((n) => (
            <NewsCard key={n.id} item={n} />
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={3}
          navigation
          breakpoints={{
            0: {slidesPerView: 1},
            600: {slidesPerView: 2},
            820: {slidesPerView: 2},
            1360: {slidesPerView: 3},
          }}
        >
          {items.map((n) => (
            <SwiperSlide key={n.id}>
              <NewsCard item={n} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Section>
  );
};

export default RecentNews;
