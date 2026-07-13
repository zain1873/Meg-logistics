import { Link } from "react-router-dom";
import "../ContactCard/ContactCard.css";

export default function LegalContactCard({
  title = "Privacy Concerns or Requests?",
  description = "To exercise your privacy rights or if you have questions about how we handle your data, please reach out to us directly.",
  buttonText = "Contact Us",
  href = "/#contact",
}) {
  return (
    <div className="legal-contact-card">
      <h3>{title}</h3>

      <p>{description}</p>

        <Link to="/contact" className="legal-contact-btn">
        Contact Us
      </Link>
    </div>
  );
}