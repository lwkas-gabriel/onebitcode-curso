/* eslint-disable react/prop-types */
import styles from "./index.module.css"

export default function ProfileSection(props){
    return (
        <div className={styles.wrapper}>
            {props.children}
        </div>
    );
}