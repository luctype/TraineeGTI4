import React from "react";
import jsonData from "../BD/Sedes.json";
import "../Styles/Sedes.css";

function Sedes() {
  console.log(jsonData);
  return (
    <div className="sedes">
      {jsonData.map((comment) => {
        return (
          <div key={comment.id} className="sede">
            <h4>{comment.sede}</h4>
            <br />
            <img src={comment.src} alt="" width="350" height="400" />
            <br />
            <p>{comment.texto}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Sedes;
