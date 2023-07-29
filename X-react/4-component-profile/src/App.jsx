import styles from "./App.module.css"
import Button from "./components/Button"
import Profile from "./components/Profile"

function App() {

  return (
    <div className={styles.container}>
      <Profile name="Lucas Gabriel" position="Frontend Dev @ Mandarin" phone="+55988932041" email="lwkas@lwkas.com.br"/>
      <Button nameBtn="Github" />
      <Button nameBtn="Linkedin" />
      <Button nameBtn="Twitter" />
    </div>
  )
}

export default App
