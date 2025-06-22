import Heading from "../heading/Heading";
import "./ContactSection.css";
import form_img from "../../assets/form-img.png";

export default function ContactSection() {
  return (
    <>
      <Heading
        title="Contact Us"
        para="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />
      <section className="contact-section">
        <div className="contact-form-container">
          <form action="" className="contact-form">
            <div className="contact-reason">
              <span>
                <input
                  type="radio"
                  id="say_hi"
                  name="contact_reason"
                  value="Say hi"
                  className="radio-input"
                />
                <label htmlFor="say_hi" className="form-label">
                  Say Hi
                </label>
              </span>
              <span>
                <input
                  type="radio"
                  id="get_quote"
                  name="contact_reason"
                  value="Get Quote"
                  className="radio-input"
                />
                <label htmlFor="get_quote" className="form-label">
                  Get a Quote
                </label>
              </span>
            </div>
            <span>
              <h4>Name*</h4>
              <input type="text" className="name-input" placeholder="Name" />
            </span>
            <span>
              <h4>Email*</h4>
              <input type="text" className="email-input" placeholder="Email" />
            </span>
            <span>
              <h4>Message*</h4>
              <textarea
                type="text"
                className="message-input"
                placeholder="Message"
              />
            </span>
            <br />
            <button type="submit" className="form-submit">
              Send Message
            </button>
          </form>
        </div>
        <div className="form-right">
          <img src={form_img} alt="illustration" />
        </div>
      </section>
    </>
  );
}
