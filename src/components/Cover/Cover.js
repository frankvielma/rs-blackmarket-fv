import { Link } from "react-router-dom";
import logo from "../../assets/images/rs_logo.png";
import "../../styles/Cover.css";

export default function Cover() {
  return (
    <div className='cover'>
      <header className='cover-header'>
        <img src={logo} className='cover-logo1' alt='logo' />
        <div className='cover-title'>Black Market</div>
        <div className='cover-square'>UI</div>
        <Link to='/signup' className='cover-login'>
          Login / Sign up
        </Link>
        <div className='cover-collaborators'>Collaborators</div>
        <div className='cover-logo2'>FV</div>
      </header>
    </div>
  );
}
