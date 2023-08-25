import PropTypes from "prop-types"
import styles from "./styles.modules.css"

Comment.propTypes = {
    email: PropTypes.string,
    data: PropTypes.string,
    commentText: PropTypes.string
}

export function Comment({email, data, commentText}){
    return (
        <div>
            <strong>{email}</strong>
            <p>{data}</p>
            <p>{commentText}</p>
        </div>
    )
}