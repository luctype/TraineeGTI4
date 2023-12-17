import React from "react";
import jsonData from "../BD/Servicos.json";
import "../Styles/Services.css";

function Services() {
  console.log(jsonData);
  return (
    <div className="servicos">
      {jsonData.map((comment) => {
        return (
          <div key={comment.id} className="service">
            <h4>{comment.titulo}</h4>
            <br />
            <img src={comment.src} alt="" width="250" height="300" />
            <br />
            <p>{comment.texto}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Services;
