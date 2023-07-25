import styles from "./index.module.css"

export default function Title(){
    const tech = "Teste";
    return (
        <h1 className={styles}>
            {tech} is Awesome!
        </h1>)
}