import { Comment } from "./components/Comment";
import { NewCommentForm } from "./components/NewCommentForm"
import useCommentColletion from "./hooks/useCommentCollection"
import {getTime, parseISO} from "date-fns"

function App() {
  const {comments, addComment} = useCommentColletion();

  return (
    <div className="container">
      <NewCommentForm
        addComment={addComment}
      />

      <div className="comments">
        {comments.length === 0 ? 
          <p>Seja o primeiro a comentar!</p> : 
            comments.map((comment) => (
            <Comment
              key={getTime(parseISO(comment.data))}
              email={comment.email}
              data={comment.data}
              commentText={comment.commentText}
            />
        ))}
      </div>
    </div>
  )
}

export default App
