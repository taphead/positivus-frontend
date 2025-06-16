import "./CompanySection.css";
import amazon_logo from "../../assets/amazon_logo.png";
import dribble_logo from "../../assets/dribble_logo.png";
import hubspot_logo from "../../assets/hubspot_logo.png";
import netflix_logo from "../../assets/netflix_logo.png";
import notion_logo from "../../assets/notion_logo.png";
import zoom_logo from "../../assets/zoom_logo.png";

export default function CompanySection() {
  return (
    <div className="company-section">
      <div className="company-top-row">
        <img src={amazon_logo} alt="amazon_logo" />
        <img src={dribble_logo} alt="dribble_logo" />
        <img src={hubspot_logo} alt="hubspot_logo" />
      </div>
      <div className="company-bottom-row">
        <img src={netflix_logo} alt="netflix_logo" />
        <img src={notion_logo} alt="notion_logo" />
        <img src={zoom_logo} alt="zoom_logo" />
      </div>
    </div>
  );
}
