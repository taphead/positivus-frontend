import { useState } from "react";
import Heading from "../heading/Heading";
import ProcessCard from "./ProcessCard";
import "./WorkProcessSection.css";

export default function WorkProcessSection() {
  const [activeArr, setActiveArr] = useState([0, 0, 0, 0, 0, 0]);
  function handleClick(index) {
    let newArr = [...activeArr];
    newArr[index] = 1 - newArr[index]; // flips the value of the array at this index from 1 to 0 or 0 to 1
    setActiveArr(newArr);
  }
  return (
    <section className="work-process-section">
      <Heading
        title="Our Working Process"
        para="Step-by-Step Guide to Achieving Your Business Goals"
      />
      <ProcessCard
        num="01"
        title="Consultation"
        text="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        active={activeArr[0] === 1}
        onClick={() => handleClick(0)}
      />
      <ProcessCard
        num="02"
        title="Research and Strategy Development"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
        active={activeArr[1] === 1}
        onClick={() => handleClick(1)}
      />
      <ProcessCard
        num="03"
        title="Implementation"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
        active={activeArr[2] === 1}
        onClick={() => handleClick(2)}
      />
      <ProcessCard
        num="04"
        title="Monitoring and Optimization"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
        active={activeArr[3] === 1}
        onClick={() => handleClick(3)}
      />
      <ProcessCard
        num="05"
        title="Reporting and Communication"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
        active={activeArr[4] === 1}
        onClick={() => handleClick(4)}
      />
      <ProcessCard
        num="06"
        title="Continual Improvement"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
        active={activeArr[5] === 1}
        onClick={() => handleClick(5)}
      />
    </section>
  );
}
