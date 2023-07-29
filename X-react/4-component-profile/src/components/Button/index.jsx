import styles from "./index.module.css";

export default function Button(prop){
    return (
        <button className={styles}>{prop.nameBtn}</button>
    );
}