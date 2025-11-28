import Label from "./Label.jsx"                       // (1) Importa o componente Label para exibir rótulos de campos
import Labelln from "./Labelln.jsx"                   // (2) Importa o componente Labelln para exibir o título "Login"
import Button from "./Button.jsx"                     // (3) Importa o componente Button para o botão de ação
import InputText from "./InputText.jsx"               // (4) Importa o componente InputText (campo de texto controlado)
import InputPassword from "./InputPassword.jsx"       // (5) Importa o componente InputPassword (campo de senha controlado)

function Login() {                                    // (6) Declaração do componente funcional Login

  return (                                            // (7) Início do retorno JSX
    <>                                                // (8) Fragmento React, usado para agrupar os elementos sem criar <div>
      <Labelln texto="Login"/>                        // (9) Exibe o título da tela
      <Label texto="Usuário: "/>                      // (10) Exibe o rótulo "Usuário"
      <InputText placeholder="user..."/> <br />       // (11) Campo de texto para inserir usuário com dica
      <Label texto="Senha: "/>                        // (12) Exibe o rótulo "Senha"
      <InputPassword placeholder="password..."/> <br /> // (13) Campo de senha, oculta os caracteres digitados
      <Button valor="Logar" />                        // (14) Botão de envio "Logar"
    </>                                               // (15) Fim do fragmento
  )                                                   // (16) Fim do retorno
}                                                     // (17) Fim do componente Login

export default Login                                  // (18) Exporta o componente para ser usado em outros arquivos

