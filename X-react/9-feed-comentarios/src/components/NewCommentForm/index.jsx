// eslint-disable-next-line no-unused-vars
import styles from "./styles.module.css"
import { TextInput } from "../TextInput"
import { useState } from "react";

export function NewCommentForm(){
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    return (
        <form action="">
            <h1>Seção de comentários</h1>
            <TextInput
                id="email"
                label="Email"
                value={email}
            />
            <TextInput
                id="comment"
                label="Comentário"
                value={comment}
            />
            <button type='submit'>Submit</button>
        <hr />
      </form>
    )
}