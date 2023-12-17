import Header from "../Components/Header";
import Sedes from "../Components/Sedes";
import "../Styles/Contact.css";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="corpo">
      <Header titulo="Contato" />
      <div className="centralizar">
        <h1 className="sessao">Contatos </h1>
        <Sedes />
        <div className="contato">
          <ul className="contatos">
            <li>Contato 1: (11)9999-1111</li>
            <li>Contato 2: (23)4355-2352</li>
            <li>Contato 3: eueueueu@gmial.com</li>
            <li>Contato 4: tutututu@outlook.com</li>
          </ul>
        </div>
        <h1 className="sessao">Rede Sociais </h1>
        <ul className="redeSocial">
          <li>
            <FaInstagram size={50} />
            <p>@_eudasilva</p>
          </li>
          <li>
            <FaFacebook size={50} />
            <p>Eu Silva</p>
          </li>
          <li>
            <FaTwitter size={50} />
            <p>@eudasilva</p>
          </li>
          <li>
            <FaPinterest size={50} />
            <p>Eu Silva</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Contact;
