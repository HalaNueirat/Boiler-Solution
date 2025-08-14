import React from "react";
import type {IProductsProps} from "./Products.types";
import RecentlyProductCard from "./RecentlyProductCard";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/swiper-bundle.css";

const RecentlyProducts: React.FC<Omit<IProductsProps, "categories">> = ({
  products,
}) => {
  return (
    <section className="recently-viewed section-spacing">
      <header className="recently-viewed-header">
        <h3>Recently Viewed Products</h3>
      </header>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={4}
        navigation
        breakpoints={{
          0: {slidesPerView: 1},
          600: {slidesPerView: 2},
          820: {slidesPerView: 3},
          1280: {slidesPerView: 4},
        }}
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <RecentlyProductCard product={p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RecentlyProducts;
