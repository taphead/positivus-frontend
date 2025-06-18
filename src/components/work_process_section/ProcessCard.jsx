import plus_sign from "../../assets/plus_sign.png";
import minus_sign from "../../assets/minus_sign.png";
import "./ProcessCard.css";

export default function ProcessCard({ num, title, text, active, onClick }) {
  return (
    <div className={"process-card" + (active ? " active" : "")}>
      <div className="process-card-top">
        <span className="process-card-left">
          <h1>{num}</h1>
          <p>{title}</p>
        </span>
        <span className="process-card-right">
          <img
            src={active ? minus_sign : plus_sign}
            alt="plus/minus sign"
            onClick={onClick}
          />
        </span>
      </div>
      <div className="process-card-bottom">
        {active && <hr />}
        {active && <p>{text}</p>}
      </div>
    </div>
  );
}
