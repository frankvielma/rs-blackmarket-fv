import { Link } from "react-router-dom";
import logo from "../../assets/images/rs_logo.png";
import "../../styles/Cover.css";

export default function Cover() {
  return (
    <div className="Cover">
      <header className="Cover-header">
        <img src={logo} className="Cover-logo1" alt="logo" />
        <div className="Cover-title">Black Market</div>
        <div className="Cover-square">UI</div>
        <Link to="/signup" className="Cover-login">Login / Sign up</Link>
        <div className="Cover-collaborators">Collaborators</div>
        <div className="Cover-logo2">FV</div>
      </header>
    </div>
  );
}
