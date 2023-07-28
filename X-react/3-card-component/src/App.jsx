import Card from "./components/Card"
import episode4Poster from "./assets/sw-poster.jpg"
import episode5Poster from "./assets/esb-poster.jpg"
import episode6Poster from "./assets/rotj-poster.jpg"

function App() {

  return (
    <div>
      <Card src={episode4Poster} title="Pôster: Star Wars (1977)"/>
      <Card src={episode5Poster} title="Pôster: Empire Strikes Back(1980)"/>
      <Card src={episode6Poster} title="Pôster: Return of the Jedi(1983)"/>
    </div>
  )
}

export default App
