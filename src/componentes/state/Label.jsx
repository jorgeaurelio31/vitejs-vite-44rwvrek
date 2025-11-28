import React, {useState} from 'react';           // (1) Importa React e o Hook useState para gerenciar estados no componente

export default function Label({ texto }) {       // (2) Define um Function Component chamado Label
                                                 //     Recebe a prop "texto" por desestruturação

  // cria um estado inicializado com a prop "texto"
  const [valor, setValor] = useState(texto);     // (3) Hook useState cria a variável "valor" e a função "setValor"
                                                 //     O estado inicial de "valor" é o valor recebido em "texto"

  return (                                       // (4) Retorno do componente (UI em JSX)
    <>                                           // (5) Fragmento React para evitar tags extras no DOM
      {valor}                                    // (6) Renderiza na tela o valor armazenado no estado "valor"
    </>                                          // (7) Fim do fragmento
  );                                             // (8) Fim do return
}                                                // (9) Fim do componente Label
