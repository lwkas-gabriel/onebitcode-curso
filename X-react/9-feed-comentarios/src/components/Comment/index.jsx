import PropTypes from "prop-types"
// eslint-disable-next-line no-unused-vars
import styles from "./styles.modules.css"

Comment.propTypes = {
    id: PropTypes.number,
    email: PropTypes.string,
    createdAt: PropTypes.string,
    commentText: PropTypes.string
}

export function Comment(comment){
    return (
        <div>
            <strong>{comment.email}</strong>
            <p>{comment.createdAt}</p>
            <p>{comment.comment}</p>
        </div>
    )
}