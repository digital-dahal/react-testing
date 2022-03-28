import actionTypes from "../../actions/constant/comment_type";
import commentReducer from "../comments";

it("should check the reducer", () => {
  const action = {
    type: actionTypes.ADD_COMMENT,
    comment: "New Comment",
  };
  const newState = commentReducer([], action);
  expect(newState).toEqual(["New Comment"]);
});
{/* Unecessary */}
it("handles unknown  type", () => {
  const newState = commentReducer([], {});
  expect(newState).toEqual([]);
});
