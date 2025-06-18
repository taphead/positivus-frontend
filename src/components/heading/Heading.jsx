import "./Heading.css";

export default function Heading({ title, para }) {
  return (
    <section className="heading">
      <span>{title}</span>
      <p>{para}</p>
    </section>
  );
}
