import "./App.css";
import Container from "./components/container/Container";
import Navbar from "./components/navbar/Navbar";
import DescriptionSection from "./components/description_section/DescriptionSection";
import CompanySection from "./components/company_section/CompanySection";
import ServicesCardSection from "./components/services_section/ServicesCardSection";
import ProposalSection from "./components/proposal_section/ProposalSection";
import CaseStudiesSection from "./components/case_studies_section/CaseStudiesSection";
import WorkProcessSection from "./components/work_process_section/WorkProcessSection";
import TeamSection from "./components/team_section/TeamSection";
import TestimonialSection from "./components/testimonial_section/TestimonialSection";
import ContactSection from "./components/contact_section/ContactSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <DescriptionSection />
        <CompanySection />
        <ServicesCardSection />
        <ProposalSection />
        <CaseStudiesSection />
        <WorkProcessSection />
        <TeamSection />
        <TestimonialSection />
        <ContactSection />
      </Container>
      {/* <Footer /> */}
    </>
  );
}

export default App;
