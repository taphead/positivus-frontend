import "./ProposalSection.css";
import proposal_img from "../../assets/proposal_img.png";

export default function ProposalSection() {
  return (
    <section className="proposal-section">
      <div className="proposal-section-left">
        <h3>Let's make things happen</h3>
        <p>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button>Get your proposal</button>
      </div>
      <div className="proposal-section-right">
        <img src={proposal_img} alt="proposal image" />
      </div>
    </section>
  );
}
