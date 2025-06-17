import "./ServicesCard.css";
import card_1_img from "../../assets/card_1_img.png";
import card_arrow_dark from "../../assets/card_arrow_dark.png";
import card_arrow_light from "../../assets/card_arrow_light.png";

export default function ServicesCard({ mode, header, img }) {
  return (
    <div className={"services-card" + " " + mode}>
      <div className="services-card-left">
        <span className="services-card-heading">{header}</span>
        <span className="services-card-learn">
          <img
            src={
              mode === "light" || mode === "green"
                ? card_arrow_dark
                : card_arrow_light
            }
          />
          <p>Learn More</p>
        </span>
      </div>
      <div className="services-card-right">
        <img src={img} alt="service image" />
      </div>
    </div>
  );
}
