import React from "react";
import ReactDOM from "react-dom";
import App from "../../App";
import { shallow } from "enzyme";
import CommentBox from "../CommentBox";
import CommnetList from "../CommentList";

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});
it("shows the comment component", () => {
  {
    /*Before Enzyme */
  }
  // // create new div element in JSDOM
  // const div=document.createElement("div");
  // //render the App component into the div
  // ReactDOM.render(<App />,div);
  // // expect(div.innerHTML).toContain("Comment Box"); // checks if the div contains the text "Comment Box"
  // ReactDOM.unmountComponentAtNode(div);
  // //unmount the component || clean up the component
  {
    /*After Enzyme */
    expect(wrapped.find(CommentBox).length).toEqual(1);
  }
});
it("show list component", () => {
  expect(wrapped.find(CommnetList).length).toEqual(1);
});
