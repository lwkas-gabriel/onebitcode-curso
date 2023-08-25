// eslint-disable-next-line no-unused-vars
import styles from "./styles.module.css"
import PropTypes from "prop-types"
import { useState } from "react";
import { format, getTime } from "date-fns";

NewCommentForm.propTypes = {
    addComment: PropTypes.func
}

export function NewCommentForm({ addComment }){
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const dateNow = new Date();
        const id = getTime(dateNow)
        const dataFormatted = format(dateNow, "'Dia' dd 'de' MMMM', às ' HH:mm'h'");
        addComment(id, email, dataFormatted, comment);
        setEmail("");
        setComment("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Seção de comentários</h1>
            <label htmlFor="email">Email: </label>
            <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="comment">Comentário: </label>
            <textarea
                name="comment"
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button type='submit'>Submit</button>
        <hr />
      </form>
    )
}