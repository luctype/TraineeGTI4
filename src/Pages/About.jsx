import Header from "../Components/Header";
import Services from "../Components/Services";

function About() {
  return (
    <div className="corpo">
      <Header titulo="Sobre Nós" />
      <div className="centralizar">
        <h1 className="sessao">Serviços </h1>
        <Services />
      </div>
    </div>
  );
}

export default About;
