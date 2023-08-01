/* eslint-disable react/prop-types */
import styles from "./styles.module.css"

export default function Button(props) {
  return (
    <a className={styles.wrapper} href={props.href} target="_blank" rel="noreferrer">{props.children}</a>
  )
}