import "../Styles/Header.css";

function Header(props) {
  return (
    <div className="cabecalho">
      <img src="https://picsum.photos/1220/300" alt="imagem" />
      <div className="central">
        <h1>{props.titulo}</h1>
      </div>
    </div>
  );
}

export default Header;
