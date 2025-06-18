import Heading from "../heading/Heading";
import "./CaseStudiesSection.css";

export default function CaseStudiesSection() {
  return (
    <>
      <Heading
        title="Case Studies"
        para="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />
      <section className="case-container">
        <div className="case case-1">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <span>Learn More</span>
        </div>
        <div className="case case-2">
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <span>Learn More</span>
        </div>
        <div className="case case-3">
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <span>Learn More</span>
        </div>
      </section>
    </>
  );
}
