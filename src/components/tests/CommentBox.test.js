import CommentBox from "../CommentBox";
import { mount } from "enzyme";
import Root from "../../Root";
let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});
afterEach(() => {
  wrapped.unmount();
});
it("has a text area", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});
{
  /* have some repitive code */
}
// it("has a text area user can type", () => {
//   wrapped.find("textarea").simulate("change", {
//     target: { value: "i am normal" },
//   });
//   wrapped.update();

//   expect(wrapped.find("textarea").prop("value")).toEqual("i am normal");
// });
// it("has text area submmiting text will be clear ", () => {
//   wrapped.find("textarea").simulate("change", {
//     target: { value: "i am normal" },
//   });
//   wrapped.update();
//   wrapped.find("form").simulate("submit");
//   wrapped.update();
//   expect(wrapped.find("textarea").prop("value")).toEqual("");
// });
{
  /* Factoring the repitive */
}
describe("the text area", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "i am normal" },
    });
    wrapped.update();
  });
  it("has a text area user can type", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("i am normal");
  });
  it("has text area submmiting text will be clear ", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
