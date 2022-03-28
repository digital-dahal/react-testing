import CommentList from "../CommentList";
import Root from "../../Root";
import { mount } from "enzyme";
let wrapped;
beforeEach(() => {
  const initState = { comments: ["Comment 1", "Comment 2"] };
  wrapped = mount(
    <Root initState={initState}>
      <CommentList />
    </Root>
  );
});

it("display li per each comments", () => {
  expect(wrapped.find("li").length).toEqual(2);
});
it("shows text for each comments",()=>{
    expect(wrapped.render().text()).toContain("Comment 1Comment 2");
})
