import * as actions from "../comment_action";
import actionType from "../constant/comment_type";

describe("add Comment", () => {
  it("checks the action type", () => {
    const action = actions.addComment();
    expect(action.type).toEqual(actionType.ADD_COMMENT);
  });
  it("checks the action payload", () => {
    const action = actions.addComment("New Comment");
    expect(action.comment).toEqual("New Comment");
  });
});
