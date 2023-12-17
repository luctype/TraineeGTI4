import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="rodape">
      <ul>
        <li>
          <FaInstagram size={30} />
        </li>
        <li>
          <FaFacebook size={30} />
        </li>
        <li>
          <FaTwitter size={30} />
        </li>
        <li>
          <FaPinterest size={30} />
        </li>
      </ul>
      <p>&copy; 2023 Minha Empresa. Todos os direitos reservados.</p>
      <div></div>
    </footer>
  );
}
export default Footer;
