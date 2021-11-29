import React, { useState, useCallback } from "react";
import LetterCard from "../../components/LetterCard";
import "./letter-cards.scss";

const LetterCards = () => {
  const [word, setWord] = useState("");

  const handleChange = useCallback((e) => {
    setWord(e.target.value);
  }, []);

  return (
    <div id="letter-cards">
      <div id="search-bar">
        <input
          placeholder="Start typing something..."
          value={word}
          onChange={handleChange}
        />
      </div>
      <div id="letter-card-wrapper">
        {[...word].map((letter, index) => (
          <LetterCard letter={letter} key={`letter-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(LetterCards);
