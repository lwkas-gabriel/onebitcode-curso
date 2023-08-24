// eslint-disable-next-line no-unused-vars
import styles from "./styles.module.css"

export function NewCommentForm(){
    return (
        <form action="">
            <h1>Seção de comentários</h1>
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Comentário</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button type='submit'>Submit</button>
        <hr />
      </form>
    )
}