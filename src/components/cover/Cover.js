import logo from "./rs_logo.png";
import "./Cover.css";

function Cover() {
  return (
    <div className="Cover">
      <header className="Cover-header">
        <img src={logo} className="Cover-logo1" alt="logo" />
        <div className="Cover-title">Black Market</div>
        <div className="Cover-square">UI</div>
        <div className="Cover-collaborators">Collaborators</div>
        <div className="Cover-logo2">FV</div>
        
      </header>
    </div>
  );
}

export default Cover;
