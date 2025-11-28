import "./Login.css";                              // (1) Importa o arquivo CSS responsável pela estilização da tela

import Label from "./Label.jsx";                   // (2) Importa o componente Label para rótulos
import LabelTitle from "./LabelTitle.jsx";         // (3) Importa o componente LabelTitle (título da página)
import Button from "./Button.jsx";                 // (4) Importa o botão personalizado
import InputText from "./InputText.jsx";           // (5) Importa o campo de texto controlado
import InputPassword from "./InputPassword.jsx";   // (6) Importa o campo de senha controlado

function Login() {                                 // (7) Declaração do componente funcional Login
  return (
    <div className="login-container">              // (8) Container principal com layout centralizado
      <form className="login-form">                // (9) Estrutura de formulário estilizada
        <LabelTitle texto="Login" />               // (10) Título da tela

        <div className="form-group">               // (11) Agrupa o label e o campo de texto
          <Label texto="Usuário:" />
          <InputText placeholder="user..." />
        </div>

        <div className="form-group">               // (12) Agrupa o label e o campo de senha
          <Label texto="Senha:" />
          <InputPassword placeholder="password..." />
        </div>

        <Button valor="Logar" />                   // (13) Botão de envio
      </form>
    </div>
  );
}

export default Login;                              // (14) Exporta o componente
