import "../../styles/SignUp.css";
import Logo from "../../assets/images/bm_logo.png";

export default function SignUp() {
  return (
    <div className="container">
      <div className="form-container">
        <div className="form">
          <form noValidate>
            <div className="brand-container">
              <img src={Logo} alt="Black Market Logo" />
            </div>
            <div>
              <label htmlFor="email" className="email">
                Email
              </label>
              <div className="input-email1">
                <input
                  name="email"
                  placeholder="Type your email"
                  aria-invalid="false"
                  aria-describedby="credentials-error"
                  autoComplete="email"
                  className="input-email2"
                  type="email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="password">
                Password
              </label>
              <div className="input-password1">
                <input
                  name="password"
                  placeholder="Type your password"
                  aria-invalid="false"
                  aria-describedby="credentials-error"
                  className="input-password2"
                  type="password"
                />
              </div>
            </div>
            <div className="login-button1">
              <button className="login-button2" type="submit">
                Log in
              </button>
              <a className="forgot-password" href="/forgot">
                I forgot my password
              </a>
            </div>
          </form>
        </div>
        <div className="container-signup">
          <div className="container-signup2">
            <p className="not-account">Don&apos; t have an account?</p>
            <button className="button-sign-up" type="button">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
