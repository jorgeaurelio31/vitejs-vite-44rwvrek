import React from 'react';                           // (1) Importa a biblioteca React (necessária em versões antigas ao usar JSX)

export default function InputText({ placeholder }) { // (2) Define um Function Component chamado InputText
                                                     //     Recebe uma prop "placeholder" via desestruturação
  return (                                           // (3) Define o que será renderizado na tela
    <input type="text" placeholder={placeholder} />  // (4) Cria um campo de texto; o atributo placeholder recebe valor dinâmico
  );                                                 // (5) Fecha o return
}                                                    // (6) Fim da função InputText
