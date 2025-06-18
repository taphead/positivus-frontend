import "./ServicesCardSection.css";
import ServicesCard from "./ServicesCard";
import Heading from "../heading/Heading";
import card_1_img from "../../assets/card_1_img.png";
import card_2_img from "../../assets/card_2_img.png";
import card_3_img from "../../assets/card_3_img.png";
import card_4_img from "../../assets/card_4_img.png";
import card_5_img from "../../assets/card_5_img.png";
import card_6_img from "../../assets/card_6_img.png";
export default function ServicesCardSection() {
  return (
    <>
      <Heading
        title="Services"
        para="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <section className="services-card-section">
        <div className="services-card-top-row">
          <ServicesCard
            header="Search engine optimization"
            img={card_1_img}
            mode="light"
          />
          <ServicesCard
            header="Pay-per-click advertising"
            img={card_2_img}
            mode="green"
          />
        </div>
        <div className="services-card-middle-row">
          <ServicesCard
            header="Social Media Marketing"
            img={card_3_img}
            mode="dark"
          />
          <ServicesCard
            header="Email Marketing"
            img={card_4_img}
            mode="light"
          />
        </div>
        <div className="services-card-bottom-row">
          <ServicesCard
            header="Content Creation"
            img={card_5_img}
            mode="green"
          />
          <ServicesCard
            header="Analytics and Tracking"
            img={card_6_img}
            mode="dark"
          />
        </div>
      </section>
    </>
  );
}
