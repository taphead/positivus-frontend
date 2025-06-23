import "./Footer.css";
import positivus_logo from "../../assets/positivus_logo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";

export default function Footer() {
  return (
    <section className="footer">
      <nav>
        <div className="footer-nav-container">
          <a href="">
            <img src={positivus_logo} alt="positivus logo" />
          </a>
          <span className="footer-nav-middle">
            <ul>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Use Cases</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </span>

          <span className="footer-nav-right">
            <img src={linkedin} alt="linkedin logo" />
            <img src={facebook} alt="facebook logo" />
            <img src={twitter} alt="twitter logo" />
          </span>
        </div>
      </nav>
      {/* <div className="footer-main">
        <div className="footer-main-left">
          <h4>Contact us:</h4>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>
            Address: 1234 Main St <br />
            Moonstone City, Stardust State 12345
          </p>
        </div>
        <div className="footer-main-right">
          <input type="email" placeholder="Email" />
          <button>Subscribe to news</button>
        </div>
      </div> */}
    </section>
  );
}
