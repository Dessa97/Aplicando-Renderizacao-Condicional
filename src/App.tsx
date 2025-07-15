import { useState } from "react";
import "./styles.css";

function App() {
  const [signed, setSigned] = useState(false);
  return (
    <div>
      {/* "?" = if e ":" = else */}
      {signed ? <h1>Bem vinda Andressa!</h1> : <h1>Nenhum usuário online!</h1>}
      <button onClick={() => setSigned(true)}>Entrar</button>
      <button onClick={() => setSigned(false)}>Sair</button>

      {/* Substitui o if else (só renderiza quando for true, não tem renderização para false)
      "&&" representa afirmação
      ---code---
    {signed && <h1>Bem vinda Andressa!</h1>} 
      ---code---*/}

      {/*Condição baseada em tamanho
      const [username, setUsername] = useState("Andressa")
      
      return(
        <div>
          {username.length >= && <h1>username muito grande</h1>}
        </div>
      )
    }*/}
    </div>
  );
}

export default App;
