import React from "react";
import "./letter-card.scss";

const LetterCard = (props) => {
  return <div className="letter-card">{props.letter}</div>;
};
export default React.memo(LetterCard);
