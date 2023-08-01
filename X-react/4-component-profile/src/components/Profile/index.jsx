/* eslint-disable react/prop-types */
import styles from "./styles.module.css"
import Title from "../Title"
import ProfileSection from "../ProfileSection"
import Button from "../Button"

function handleClick(ev){
  console.log(ev);
  alert("Agora voce ta me seguindo!")
}

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button className={styles.followButton}
          onClick={handleClick}
        >
          Follow
        </button>
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