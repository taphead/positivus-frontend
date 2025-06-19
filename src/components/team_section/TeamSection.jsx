import "./TeamSection.css";
import Heading from "../heading/Heading";
import TeamCard from "./TeamCard";
import team_1 from "../../assets/team_1.png";
import team_2 from "../../assets/team_2.png";
import team_3 from "../../assets/team_3.png";
import team_4 from "../../assets/team_4.png";
import team_5 from "../../assets/team_5.png";
import team_6 from "../../assets/team_6.png";

export default function TeamSection() {
  return (
    <section className="team-section">
      <Heading
        title="Team"
        para="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <div className="team-card-container">
        <TeamCard
          img={team_1}
          name="John Smith"
          occ="CEO and Founder"
          desc="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
        />
        <TeamCard
          img={team_2}
          name="Jane Doe"
          occ="Director of Operations"
          desc="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
        />
        <TeamCard
          img={team_3}
          name="Michael Brown"
          occ="Senior SEO Specialist"
          desc="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
        />
        <TeamCard
          img={team_4}
          name="Emily Johnson"
          occ="PPC Manager"
          desc="3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
        />
        <TeamCard
          img={team_5}
          name="Brian Williams"
          occ="Social Media Specialist"
          desc="4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
        />
        <TeamCard
          img={team_6}
          name="Sarah Kim"
          occ="Content Creator"
          desc="2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries"
        />
      </div>
      <span className="team-button">
        <button>See all team</button>
      </span>
    </section>
  );
}
