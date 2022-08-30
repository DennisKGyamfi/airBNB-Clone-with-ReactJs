import logo from "./images/logo.png";
import './App.css'

function Header() {
  return (
    <nav className="Header">
      <img src={logo} alt="logo" className="Header-logo" />
    </nav>
  );
}

export default Header;
