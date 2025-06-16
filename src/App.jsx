import "./App.css";
import Container from "./components/container/Container";
import Navbar from "./components/navbar/Navbar";
import DescriptionSection from "./components/description_section/DescriptionSection";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <DescriptionSection />
      </Container>
    </>
  );
}

export default App;
