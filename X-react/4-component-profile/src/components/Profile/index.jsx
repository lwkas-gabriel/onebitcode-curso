/* eslint-disable react/prop-types */
import styles from "./styles.module.css"
import Title from "../Title"
import ProfileSection from "../ProfileSection"
import Button from "../Button"

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.bio}</span>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className={styles.links}
        id="links-section"
        data-test="value"
        aria-label="social-links"
      >
        <Button href={props.githubUrl} target="_blank" rel="noreferrer">GitHub</Button>
        <Button href={props.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</Button>
        <Button href={props.twitterUrl} target="_blank" rel="noreferrer">Twitter</Button>
      </ProfileSection>
    </div>
  )
}