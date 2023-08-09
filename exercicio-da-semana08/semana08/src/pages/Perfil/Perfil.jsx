import FormEdicao from "../../components/formEdicao/FormEdicao.jsx";
import { AuthContext } from "../../context/AuthContext/AuthContext.jsx";
import { UserProvider } from "../../context/UserContext/UserContext.jsx";
import { useContext } from "react";
import './styles.css';

export default function Perfil() {
    const { usuarioLogado } = useContext(AuthContext);
    const prefixo = usuarioLogado.email.split("@").shift();
  
    return (
      <div className="perfil">
        <h1>Perfil de usuário</h1>
        <h4>User : {prefixo}</h4>
        <br />
        <br />    
        <br />
        <h3>Editar dados do perfil:</h3>
        <UserProvider>
        <FormEdicao/>
        </UserProvider>
      </div>
    );
  }