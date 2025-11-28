import React from 'react';                      // (1) Importa a biblioteca React (necessário em versões anteriores ao React 17)

export default function Labelln({ texto }) {    // (2) Declaração de um Function Component chamado Labelln
                                                //     Recebe "props" desestruturadas diretamente no parâmetro { texto }

  return (                                      // (3) Início do retorno JSX (interface do componente)
    <>                                          // (4) Fragmento React: agrupa sem criar <div> extra no DOM
      {texto} <br />                            // (5) Exibe o valor da prop "texto" e insere uma quebra de linha <br/>
    </>                                         // (6) Fim do fragmento
  );                                            // (7) Fim do return
}                                               // (8) Fim da função Labelln
