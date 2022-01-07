import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-ofpage">
      <p className="terms-conditions">
        By using our website, you are accepting our{" "}
        <Link to = "/Terms&Conditions">Terms and Conditions</Link>.
      </p>
    </div>
  );
}
