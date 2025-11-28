import './InputText.css';                            // (1) Importa o CSS
import React, { useState } from 'react';              // (2) Importa React e useState

export default function InputText({ placeholder }) {  // (3) Define o componente com prop de dica
  const [valor, setValor] = useState("");             // (4) Estado para o valor digitado
  const [erro, setErro] = useState(false);            // (5) Estado de erro

  function handleChange(e) {                          // (6) Função de captura de digitação
    const novoValor = e.target.value;                 
    setValor(novoValor);
    setErro(novoValor.trim() === "");                 // (7) Marca erro se o campo estiver vazio
  }

  return (                                            // (8) Renderiza o campo controlado
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={valor}
        onChange={handleChange}
      />
      {erro && <p>⚠️ O campo não pode ficar vazio.</p>}
    </>
  );
}
