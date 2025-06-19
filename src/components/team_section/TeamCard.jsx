import "./TeamCard.css";
import linked_in from "../../assets/linked_in.png";

export default function TeamCard({ img, name, occ, desc }) {
  return (
    <div className="team-card">
      <div className="team-card-top">
        <div className="team-card-left">
          <img src={img} alt="profile pic" />
        </div>
        <div className="team-card-middle">
          <h4>{name}</h4>
          <p>{occ}</p>
        </div>
        <div className="team-card-right">
          <img src={linked_in} alt="linked in" />
        </div>
      </div>
      <div className="team-card-bottom">
        <hr />
        <p>{desc}</p>
      </div>
    </div>
  );
}
