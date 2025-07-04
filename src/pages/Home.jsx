import DescriptionSection from "../components/description_section/DescriptionSection";
import CompanySection from "../components/company_section/CompanySection";
import ServicesCardSection from "../components/services_section/ServicesCardSection";
import ProposalSection from "../components/proposal_section/ProposalSection";
import CaseStudiesSection from "../components/case_studies_section/CaseStudiesSection";
import WorkProcessSection from "../components/work_process_section/WorkProcessSection";
import TeamSection from "../components/team_section/TeamSection";
import TestimonialSection from "../components/testimonial_section/TestimonialSection";
import ContactSection from "../components/contact_section/ContactSection";

export default function Home() {
  return (
    <>
      <DescriptionSection />
      <CompanySection />
      <ServicesCardSection />
      <ProposalSection />
      <CaseStudiesSection />
      <WorkProcessSection />
      <TeamSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
