import useCounter from "./hooks/useCounter"

function App() {
  // 1 regra - n se pode chamar um hook fora de um componente react ou do seu hook customizado
  // 2 regra - a ordem dos hooks importa... em uma aplicação, é normal usar vários hooks
  // dessa forma, é necessário ter cuidado com essa ordem.. pq o react n necessariamente grava qual hook tá sendo usado
  // só chamar o hook no top level do componente... n chame dentro de ifs, loops, ou outros blocos de codigos
  const counter = useCounter();
  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={counter.increment} >
        count is {counter.count}
      </button>
    </>
  )
}

export default App
