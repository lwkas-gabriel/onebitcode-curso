import styles from "./index.module.css";

export default function Button(prop){
    return (
        <a href="#" target="_blank" className={styles}>{prop.nameBtn}</a>
    );
}