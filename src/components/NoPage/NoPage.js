import { Link } from "react-router-dom";
import logo from "../../assets/images/rs_logo.png";

export default function NoPage() {
  return (
    <div>
      <header className='cover-header'>
        <img src={logo} className='cover-logo1' alt='logo' />
        <div>Page not found</div>
        <Link to='/' className='cover-login'>
          Home
        </Link>
      </header>
    </div>
  );
}
