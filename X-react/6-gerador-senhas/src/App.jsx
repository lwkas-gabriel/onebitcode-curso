import { useState } from 'react'
//import usePassword from "./hooks/usePassword"
import './App.css'

function App() {
  function handleCopyText(){
    const pass = document.getElementById("senha").innerText;
    navigator.clipboard.writeText(pass);
    alert("Copied the text: " + pass);
    setEstado("Copiado")
  }

  function handleNewRandomPasswordGenerate(){
    const id = document.getElementById("senha");
    let senha = "";
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz_!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const tamanhoSenha = 20;

    for (let i = 0; i <= tamanhoSenha; i++){
      let posicaoAleatoria = Math.floor(Math.random() * chars.length);
      senha += chars[posicaoAleatoria]
    }
    id.innerText = senha;
    setEstado("Copiar");
  }

  const [estado, setEstado] = useState("Copiar");
  return (
    <>
      <h1>Gerador de Senhas</h1>
      <div className="card">
        <button onClick={handleNewRandomPasswordGenerate}>
          Gerar!
        </button>
        <button onClick={handleCopyText}>
          {estado}
        </button>
        <div id='senha'> </div>
      </div>
    </>
  )
}

export default App
