/* eslint-disable react/prop-types */
import styles from "./styles.module.css"

export default function Title(props) {
  return <h2 className={styles.wrapper}>{props.children}</h2>
}