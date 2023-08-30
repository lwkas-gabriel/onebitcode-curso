import { useEffect, useState } from 'react'

function Counter(){
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("O efeito colateral foi ativado!");
    return () => {
      console.log("Fazendo a limpeza!");
      console.log("componente desmontado!");
    }
  }, []);

  return (
  <button
    onClick={() => setCount(count => count +1)}
  >
    Contador: {count}
  </button>
  )
}

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <h1>Conhecendo useEffect</h1>
      <div>
        <label htmlFor="show">Exibir</label>
        <input
          type="checkbox"
          id='show'
          value={show}
          onChange={() => setShow(state => !state)}
        />
      </div>
      {
        show ? <Counter /> : null
      }
      <hr />
    </>
  )
}