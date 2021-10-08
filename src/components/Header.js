import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Link to="/">
        <h1>Dilmurod Bukharov</h1>
      </Link>
      <ul className="nav">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        {/* <li>
          <Link to="/resume">Resume</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Header;
