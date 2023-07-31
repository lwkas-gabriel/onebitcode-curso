/* eslint-disable react/prop-types */
import Button from "../Button";
import Title from "../Title";
import ProfileSection from "../ProfileSection"
import styles from "./index.module.css"

export default function Profile(props){
    return (
        <div className={styles.container}>
            <img src="https://github.com/lwkas-gabriel.png" alt="foto do profissional" />
            <Title>
                <span>
                    {props.name}
                </span>
            </Title>
            <ProfileSection>
                {props.position}
            </ProfileSection>
            <ProfileSection>
                {props.phone}
            </ProfileSection>
            <ProfileSection>
                {props.email}
            </ProfileSection>
            <Button nameBtn="Github" />
            <Button nameBtn="Linkedin" /> 
            <Button nameBtn="Twitter" />
        </div>
    );
}