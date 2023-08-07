import { useState } from 'react'
//import usePassword from "./hooks/usePassword"
import Input from "./components/Input"
import './App.css'

function App() {
  function handleCopyText(){
    navigator.clipboard.writeText(senha);
    setEstadoCopiado("Copiado")
  }

  function handleNewRandomPasswordGenerate(){
    let senha = "";
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz_!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // const tamanhoSenha = 12;

    for (let i = 0; i < tamanhoSenha; i++){
      let posicaoAleatoria = Math.floor(Math.random() * chars.length);
      senha += chars[posicaoAleatoria]
    }
    setSenha(senha);
    setEstadoCopiado("Copiar");
  }
  
  const [tamanhoSenhaCustomizado, setTamanhoSenhaCustomizada] = useState(12);
  const [estadoCopiado, setEstadoCopiado] = useState("Copiar");
  const [senha, setSenha] = useState("");
  const [showInput, setShowInput] = useState(false);

  const tamanhoSenha = showInput ? tamanhoSenhaCustomizado : 8;
  return (
    <>
      <h1>Gerador de Senhas</h1>
      <div>
        <label htmlFor="showInput" id='showInput'>Customizar Tamanho:</label>
        <input
         type="checkbox"
         id="showInput"
         value={showInput}
         onChange={()=> setShowInput(currentState => !currentState)}
        />
      </div>

      <div className="card">
        {showInput ? (
          <div>
            <label htmlFor="passwordSize">Tamanho: </label>
            <Input passwordSize={tamanhoSenhaCustomizado} setPasswordSize={setTamanhoSenhaCustomizada} />
          </div>
        ) : null}
        
        <button onClick={handleNewRandomPasswordGenerate}>
          Gerar senha de {tamanhoSenha} caracteres!
        </button>
        <button onClick={handleCopyText}>
          {estadoCopiado}
        </button>
        <div>{senha}</div>
      </div>
    </>
  )
}

export default App
