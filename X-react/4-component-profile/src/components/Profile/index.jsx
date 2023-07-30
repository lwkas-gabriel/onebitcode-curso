/* eslint-disable react/prop-types */
import Button from "../Button";
import styles from "./index.module.css"

export default function Profile(props){
    return (
        <div className={styles.container}>
            <img src="https://github.com/lwkas-gabriel.png" alt="foto do profissional" />
            <div>
                <h2>{props.name}</h2>
            </div>
            <div>
                <p>{props.position}</p>
            </div>
            <div>
                <p>{props.phone}</p>
            </div>
            <div>
                <p>{props.email}</p>
            </div>
            <Button nameBtn="Github" />
            <Button nameBtn="Linkedin" /> 
            <Button nameBtn="Twitter" />
        </div>
    );
}