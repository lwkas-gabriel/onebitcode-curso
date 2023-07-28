/* eslint-disable react/prop-types */
import styles from "./index.module.css"
import Button from "../Button"

export default function Card({src, title}){
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={src} alt="poster star wars " />
            <div>
                <h2>{title} (1977)</h2>
                <p>Um poster decorativo epico do filme Star Warsm com moldura de MDF e tamanho A3. Uma otima recordacao de um dos mais iconicos filmes de todos os tempos. Este classico poster trara aventura, nostalgia e a magia de Star Wars para qualquer lugar que voce decidir pendurar. Nao perca a chance de adicionar essa linda memoria ao seu acervo!</p>
                <Button />
            </div>
        </div>
    )
}