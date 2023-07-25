// eslint-disable-next-line react/display-name
import styles from "./index.module.css"

export default function Status(){
    const status = true;
    return (
        <h2 className={status ? styles.isON : styles.isOFF}>
            Current Status: {status ? "ON" : "OFF"}
        </h2>)
}