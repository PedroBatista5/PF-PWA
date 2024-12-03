import React, { useState } from "react";
import TextItem from "../components/text";

const Home = () => {
  const [texts, setTexts] = useState([]);

  const handleAddText = () => {
    setTexts([...texts, `Texto ${texts.length + 1}`]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Projeto React</h1>
      <button
        onClick={handleAddText}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Gerar
      </button>
      <div style={{ marginTop: "20px" }}>
        {texts.map((text, index) => (
          <TextItem key={index} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Home;
