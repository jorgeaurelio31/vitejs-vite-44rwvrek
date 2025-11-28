import React from 'react';                          // (1) Importa a biblioteca React (necessária para criar componentes de classe)

export default class Label extends React.Component{ // (2) Declaração do componente Label como classe
                                                    //     Herdando de React.Component para acessar funcionalidades de classe

  render(){                                         // (3) Método obrigatório em componentes de classe; define o que será exibido
    return(                                         // (4) Retorna a interface (JSX)
    <>                                              // (5) Fragmento: evita adicionar <div> desnecessária ao DOM
      {this.props.texto}                            // (6) Renderiza o valor passado pela prop "texto"
    </>                                             // (7) Fim do fragmento
    );                                              // (8) Fecha o return
  }                                                 // (9) Fim do método render
}                                                   // (10) Fim da classe
