import "./DescriptionSection.css";
import marketingImage from "../../assets/illustration.png";

export default function DescriptionSection() {
  return (
    <section className="description-section">
      <div className="description-text">
        <h1>Navigating the digital landscape for success</h1>
        <p>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="consultation-button">Book a consultation</button>
      </div>
      <div className="description-image">
        <img src={marketingImage} alt="Digital Marketing" />
      </div>
    </section>
  );
}
