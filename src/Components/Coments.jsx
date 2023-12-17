import React from "react";
import jsonData from "../BD/Comments.json";
import "../Styles/Coments.css";
function Coments() {
  console.log(jsonData);
  return (
    <div className="comentario">
      {jsonData.map((comment) => {
        return (
          <div key={comment.id} className="comment">
            <img src={comment.src} alt="" width="80" height="80" />
            <br />
            <h4>{comment.nome}</h4>
            <span>- 20 October, 2018</span>
            <br />
            <p>{comment.comentario}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Coments;
