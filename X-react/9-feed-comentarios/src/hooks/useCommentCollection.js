import { useState } from "react";

export default function useCommentColletion(){
    const [comments, setComments] = useState(() => {
        const storedComments = localStorage.getItem("comment-collect");
        if(!storedComments) return [];
        return JSON.parse(storedComments);
      });
    
      const addComment = ({email, commentText}) => {
        const date = Math.floor(Math.random() * 1000000);
        const comment = {date, email, commentText};
        setComments(state => {
          const newState = [...state, comment];
          localStorage.setItem("comment-collect", JSON.stringify(newState));
          return newState;
        });
      };

      return {comments, addComment};
}