import actionTypes from "../actions/constant/comment_type";
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      return [...state, action.comment];
    case actionTypes.FETCH_COMMENTS_REQUEST:
      const comments = action.comment.map((comment) => comment.name);
      return [...state, ...comments];

    default:
      return state;
  }
};
