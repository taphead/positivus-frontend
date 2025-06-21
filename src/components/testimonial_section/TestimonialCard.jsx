import "./TestimonialCard.css";

export default function TestimonialCard({ text, name, occ }) {
  return (
    <div className="testimonial-card">
      <p>{text}</p>
      <h4>{name}</h4>
      <h5>{occ}</h5>
    </div>
  );
}
