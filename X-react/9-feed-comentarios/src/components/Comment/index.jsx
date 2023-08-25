import PropTypes from "prop-types"
// eslint-disable-next-line no-unused-vars
import styles from "./styles.modules.css"

Comment.propTypes = {
    id: PropTypes.number,
    email: PropTypes.string,
    data: PropTypes.string,
    commentText: PropTypes.string
}

export function Comment({ email, data, commentText }){
    return (
        <div className="wrapper">
            <strong>{email}</strong>
            <p>{data}</p>
            <p>{commentText}</p>
        </div>
    )
}