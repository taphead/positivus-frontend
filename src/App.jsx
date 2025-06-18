import "./App.css";
import Container from "./components/container/Container";
import Navbar from "./components/navbar/Navbar";
import DescriptionSection from "./components/description_section/DescriptionSection";
import CompanySection from "./components/company_section/CompanySection";
import ServicesCardSection from "./components/services_section/ServicesCardSection";
import ProposalSection from "./components/proposal_section/ProposalSection";
import CaseStudiesSection from "./components/case_studies_section/CaseStudiesSection";

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
      </Container>
    </>
  );
}

export default App;
