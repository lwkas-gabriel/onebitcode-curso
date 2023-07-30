import styles from "./index.module.css";

export default function Button(prop){
    return (
        <a href="#" className={styles}>{prop.nameBtn}</a>
    );
}