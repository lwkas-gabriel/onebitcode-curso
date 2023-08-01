/* eslint-disable react/prop-types */
import styles from "./styles.module.css"

export default function Title(props) {
  return (
    <div
      {...props}
      className={`${styles.wrapper} ${props.className}`}
    >
      {props.children}
    </div>
    )
}