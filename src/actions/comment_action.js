import axios from "axios";
import actionTypes from "./constant/comment_type";

export const addComment = (comment) => {
  return {
    type: actionTypes.ADD_COMMENT,
    comment: comment,
  };
};
export const fetchComments = async () => {
  const response = await axios
    .get("http://jsonplaceholder.typicode.com/comments")
    .then((response) => response.data)
    .catch((e) => console.log(e));
  return {
    type: actionTypes.FETCH_COMMENTS_REQUEST,
    comment: response,
  };
};
