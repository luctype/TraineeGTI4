import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <nav>
      <div className="centralizar">
        <ul>
          <li>
            <h1>
              <Link to="/" className="navlink">
                Olá, {props.name}
              </Link>
            </h1>
          </li>
          <li>
            <Link to="/sobre" className="navlink">
              Sobre nós
            </Link>
          </li>
          <li>
            <Link to="/contato" className="navlink">
              Contato
            </Link>
          </li>
          <li>
            <Link to="/quiz" className="navlink">
              Quiz
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
