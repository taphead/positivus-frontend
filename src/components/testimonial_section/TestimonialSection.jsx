import "./TestimonialSection.css";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import left_arrow from "../../assets/left-arrow.svg";
import right_arrow from "../../assets/right-arrow.svg";
import Heading from "../heading/Heading";

export default function TestimonialSection() {
  return (
    <>
      <Heading
        title="Testimonials"
        para="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />
      <section className="testimonial-section">
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".testimonial-section .custom-prev",
              nextEl: ".testimonial-section .custom-next",
            }}
            pagination={{
              el: ".testimonial-section .custom-pagination",
              clickable: true,
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
          >
            <SwiperSlide>
              <TestimonialCard
                text="We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
                name="John Smith"
                occ="Marketing Director at XYZ company"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                text="Positivus transformed our digital marketing strategy. Their innovative approach and consistent support helped us boost our brand visibility and engage with our target audience more effectively. They are a valuable partner in our growth journey."
                name="Emily Johnson"
                occ="Brand Manager at Creative Solutions"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                text="The team at Positivus exceeded our expectations. Their attention to detail and data-driven strategies delivered measurable results within just a few months. We couldn't be happier with the outcome and the partnership we’ve built."
                name="Michael Lee"
                occ="CEO at TechWave Inc."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                text="Positivus has a phenomenal team that truly knows how to deliver. Their creative solutions and prompt communication have made the collaboration seamless and highly effective. We are extremely satisfied with the results."
                name="David Brown"
                occ="Manager at GreenField Logistics"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                text="Since partnering with Positivus, our social media performance and web traffic have grown steadily. Their strategic insights and proactive approach have made a significant difference. We highly value their expertise."
                name="Laura Martinez"
                occ="Digital Lead at Horizon Travels"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                text="Working with Positivus has been a game-changer. Their ability to understand our business needs and tailor strategies accordingly is impressive. We've seen a marked improvement in customer engagement and online conversions."
                name="Sarah Williams"
                occ="E-commerce Manager at TrendyMart"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="swiper-controls">
          <div className="custom-prev">
            <img src={left_arrow} />
          </div>
          <div className="custom-pagination"></div>
          <div className="custom-next">
            <img src={right_arrow} />
          </div>
        </div>
      </section>
    </>
  );
}
