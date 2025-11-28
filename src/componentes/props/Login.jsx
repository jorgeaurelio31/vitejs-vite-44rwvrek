import Label from "./Label.jsx"                   // (1) Importa o componente Label (classe) para exibir textos
import Labelln from "./Labelln.jsx"               // (2) Importa o componente Labelln (função) para exibir título/linhas
import Button from "./Button.jsx"                 // (3) Importa o componente Button (classe) para exibir um botão
import InputText from "./InputText.jsx"           // (4) Importa o componente InputText (função) para campos de entrada

function Login() {                                // (5) Declara o componente funcional Login

  return (                                        // (6) Início do retorno JSX
    <>                                            // (7) Fragmento: agrupa elementos sem criar <div> extra
      <Labelln texto="Login"/>                    // (8) Exibe título "Login" usando o componente Labelln
      <Label texto="Usuário: "/>                  // (9) Exibe o rótulo "Usuário"
      <InputText placeholder="user..."/> <br />   // (10) Campo de texto para usuário, com placeholder
      <Label texto="Senha: "/>                    // (11) Exibe o rótulo "Senha"
      <InputText placeholder="password..."/> <br /> // (12) Campo de texto para senha, com placeholder
      <Button valor="Logar" />                    // (13) Botão "Logar" usando o componente Button
    </>                                           // (14) Fim do fragmento
  )                                               // (15) Fim do retorno
}                                                 // (16) Fim da função Login

export default Login                              // (17) Exporta o componente Login para uso em outros arquivos
