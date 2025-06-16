import "./App.css";
import Container from "./components/container/Container";
import Navbar from "./components/navbar/Navbar";
import DescriptionSection from "./components/description_section/DescriptionSection";
import CompanySection from "./components/company_section/CompanySection";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <DescriptionSection />
        <CompanySection />
      </Container>
    </>
  );
}

export default App;
