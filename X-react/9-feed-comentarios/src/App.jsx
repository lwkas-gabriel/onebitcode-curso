import { Comment } from "./components/Comment";
import { NewCommentForm } from "./components/NewCommentForm"
import useCommentColletion from "./hooks/useCommentCollection"

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
              key={comment.id}
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
