import { useState } from "react";

export default function useCommentColletion(){
    const [comments, setComments] = useState(() => {
        const storedComments = localStorage.getItem("comment-collect");
        if(!storedComments) return [];
        return JSON.parse(storedComments);
      });
    
      const addComment = (newComment) => {
        const comment =  newComment;
        //console.log(email, data, commentText);
        setComments(state => {
          const newState = [...state, comment];
          localStorage.setItem("comment-collect", JSON.stringify(newState));
          return newState;
        });
      };

      return {comments, addComment};
}