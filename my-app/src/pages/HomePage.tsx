import React from "react";
import Hero from "../components/Hero/Hero";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import Video from "../components/Video/Video";

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero
        images={[
          "https://picsum.photos/id/1020/1920/400",
          "https://picsum.photos/id/1018/1920/400",
          "https://picsum.photos/id/1015/1920/400",
          "https://picsum.photos/id/1016/1920/400",
        ]}
        highlight="Comprehensive"
        titleRemainder="Boiler Room Solutions"
        ctaHref="#"
        ctaLabel="Learn More"
      />
      <WhoWeAre
        title="Who We Are"
        description=" Founded in 1929, Cleaver-Brooks is a complete boiler room solutions
            provider that helps businesses run better every day. It develops hot
            water and steam generation products aimed at integrating and
            optimizing the total boiler/burner/control/stack exhaust system to
            maximize energy efficiency and reliability while minimizing
            emissions."
        ctaLabel="Find a Rep"
        ctaBody="Our dedicated reps help you commission your system, obtain parts
              and service, and provide product training."
        ctaHref="#"
      />
      <Video
        title="Boiler Room Intelligence at Your Fingertips"
        body="Ideal for any industry, Prometha offers users the ability to
            remotely monitor boiler systems from anywhere, providing alerts and
            actionable insights that help increase reliability, efficiency,
            safety and sustainability in the boiler room."
        videoSrc="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/GTYSdDW/lovatnet-lake-beautiful-nature-norway_bwetju08l__71e9932cda54a887a2da85d3f05d77dc__P360.mp4"
      />
    </main>
  );
};

export default HomePage;
