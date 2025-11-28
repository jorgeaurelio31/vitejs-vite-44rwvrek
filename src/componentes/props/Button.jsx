import React from 'react';                          // (1) Importa a biblioteca React, necessária para componentes de classe

export default class Button extends React.Component { // (2) Declara a classe Button herdando de React.Component
                                                     //     Isso permite acessar props e ciclo de vida da classe

  render() {                                         // (3) Método obrigatório em componentes de classe: define o que será exibido
    return (                                         // (4) Início do retorno JSX
      <button>                                       // (5) Elemento HTML <button>, que representa um botão clicável
        {this.props.valor}                           // (6) O texto do botão é definido dinamicamente pela prop "valor"
      </button>                                      // (7) Fim da tag button
    );                                               // (8) Fim do retorno
  }                                                  // (9) Fim do método render
}                                                    // (10) Fim da classe Button
