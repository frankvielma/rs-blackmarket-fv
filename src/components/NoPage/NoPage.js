import { Link } from "react-router-dom";
import logo from "../../assets/images/rs_logo.png";

export default function NoPage() {
  return (
    <div>
      <header className="Cover-header">
        <img src={logo} className="Cover-logo1" alt="logo" />
        <div>Page not found</div>
        <Link to="/" className='Cover-login'>Home</Link>
      </header>
    </div>
  );
}
