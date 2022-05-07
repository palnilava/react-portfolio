import React from "react";
import "./testimonials.css";
import USR1 from "../../assets/user-1.png";
import USR2 from "../../assets/user-2.png";
import USR3 from "../../assets/user-3.png";
import USR4 from "../../assets/user-4.png";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Demo client reviews</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials-container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client">
            <img src={USR1} alt="" />
          </div>
          <h5 className="client-name">Eva Adams</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            delectus dolor eligendi porro praesentium sed vero dolore
            accusantium ullam atque! Aspernatur incidunt officia maxime tempore
            praesentium deleniti consequatur animi omnis?
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client">
            <img src={USR2} alt="" />
          </div>
          <h5 className="client-name">Eva Adams</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            delectus dolor eligendi porro praesentium sed vero dolore
            accusantium ullam atque! Aspernatur incidunt officia maxime tempore
            praesentium deleniti consequatur animi omnis?
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client">
            <img src={USR3} alt="" />
          </div>
          <h5 className="client-name">Eva Adams</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            delectus dolor eligendi porro praesentium sed vero dolore
            accusantium ullam atque! Aspernatur incidunt officia maxime tempore
            praesentium deleniti consequatur animi omnis?
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client">
            <img src={USR4} alt="" />
          </div>
          <h5 className="client-name">Eva Adams</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            delectus dolor eligendi porro praesentium sed vero dolore
            accusantium ullam atque! Aspernatur incidunt officia maxime tempore
            praesentium deleniti consequatur animi omnis?
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default testimonials;
