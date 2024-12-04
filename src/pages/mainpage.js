import React, { useState } from "react";
import TextItem from "../components/text";
import "../styles/mainpage.css"; // Importando os estilos

const Home = () => {
  const [texts, setTexts] = useState([]);

  const handleAddText = () => {
    setTexts([...texts, `Texto ${texts.length + 1}`]);
  };

  return (
    <div className="main-container">
      <h1>Projeto React</h1>
      <button className="generate-button" onClick={handleAddText}>
        Gerar
      </button>
      <div className="text-container">
        {texts.map((text, index) => (
          <TextItem key={index} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Home;
