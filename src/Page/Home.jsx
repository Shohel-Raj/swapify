import React from "react";
import Wrapper from "../Component/Common/Wraper";
import Aos from "aos";
import "aos/dist/aos.css";
import SwiperComponent from "../Component/Swiper.jsx/Swiper";
import PopularSkills from "../Component/home/PopularSkills";

Aos.init({ duration: 1000, easing: "ease-in-out" });

const Home = () => {
  return (
    <>
      <div>
        <Wrapper>
            <SwiperComponent/>
        </Wrapper>
      </div>
      <div>
        <Wrapper>
            <PopularSkills/>
        </Wrapper>
      </div>
    </>
  );
};

export default Home;
