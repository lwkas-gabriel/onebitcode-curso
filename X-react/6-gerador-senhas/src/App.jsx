import { useState } from 'react'
//import usePassword from "./hooks/usePassword"
import './App.css'

function App() {
  function handleCopyText(){
    navigator.clipboard.writeText(senha);
    setEstadoCopiado("Copiado")
  }

  function handleNewRandomPasswordGenerate(){
    let senha = "";
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz_!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const tamanhoSenha = 12;

    for (let i = 0; i <= tamanhoSenha; i++){
      let posicaoAleatoria = Math.floor(Math.random() * chars.length);
      senha += chars[posicaoAleatoria]
    }
    setSenha(senha);
    setEstadoCopiado("Copiar");
  }

  const [estadoCopiado, setEstadoCopiado] = useState("Copiar");
  const [senha, setSenha] = useState("");
  return (
    <>
      <h1>Gerador de Senhas</h1>
      <div className="card">
        <button onClick={handleNewRandomPasswordGenerate}>
          Gerar!
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
