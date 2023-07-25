import styles from "./index.module.css"

export default function Card(){
    return (
        <div className={styles.container}>
            <img className={styles.img} src="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg" alt="poster star wars " />
            <div className={styles.info}>
                <h1>Poster: Star Wars (1977)</h1>
                <p>Um poster decorativo epico do filme Star Warsm com moldura de MDF e tamanho A3. Uma otima recordacao de um dos mais iconicos filmes de todos os tempos. Este classico poster trara aventura, nostalgia e a magia de Star Wars para qualquer lugar que voce decidir pendurar. Nao perca a chance de adicionar essa linda memoria ao seu acervo!</p>
                <button>Comprar Agora</button>
            </div>
        </div>
    )
}