import { Link } from "react-router-dom";
import "../App.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3 sticky-top">
      <div className="container px-md-5">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="Zerodha Logo"
            style={{ width: "130px", height: "auto" }}
          />
        </Link>

        {/* Nav Links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-lg-center gap-lg-4 pt-3 pt-lg-0">
            <li className="nav-item">
              <Link className="nav-link  opacity-100 small navlink " to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  opacity-100 small navlink" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  opacity-100 small navlink" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  opacity-100 small navlink" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link opacity-100 small navlink" to="/support">
                Support
              </Link>
            </li>

            {/* Hamburger / Menu Icon (Matches the desktop layout right side icon) */}
            <li>
              <button style={{background:"none",border:"none",color:"black"}}>
                <i class="fa fa-bars " aria-hidden="true"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
