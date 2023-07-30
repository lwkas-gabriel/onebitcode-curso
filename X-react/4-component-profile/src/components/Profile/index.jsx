/* eslint-disable react/prop-types */
import Button from "../Button";
import styles from "./index.module.css"

export default function Profile(props){
    return (
        <div className={styles.container}>
            <img src="https://github.com/lwkas-gabriel.png" alt="foto do profissional" />
            <h2>{props.name}</h2>
            <hr />
            <p>{props.position}</p>
            <hr />
            <p>{props.phone}</p>
            <hr />
            <p>{props.email}</p>
            <hr />
            <Button nameBtn="Github" />
            <Button nameBtn="Linkedin" />
            <Button nameBtn="Twitter" />
        </div>
    );
}