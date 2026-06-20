import "./Navbar.css";

function Navbar({
  logo = "MyApp",
  links = [],
}) {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        {logo}
      </div>

      <ul className="navbar-links">

        {links.map((link, index) => (
          <li key={index}>
            <a href={link.path}>
              {link.label}
            </a>
          </li>
        ))}

      </ul>

    </nav>
  );
}

export default Navbar;