import "./App.css";
import Container from "./components/container/Container";
import Navbar from "./components/navbar/Navbar";
import DescriptionSection from "./components/description_section/DescriptionSection";
import CompanySection from "./components/company_section/CompanySection";
import ServicesSection from "./components/services_section/ServicesSection";
import ServicesCardSection from "./components/services_section/ServicesCardSection";
import ProposalSection from "./components/proposal_section/ProposalSection";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <DescriptionSection />
        <CompanySection />
        <ServicesSection />
        <ServicesCardSection />
        <ProposalSection />
      </Container>
    </>
  );
}

export default App;
