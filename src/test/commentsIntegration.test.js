import React from "react";
import { mount } from "enzyme";
import App from "../App";
import Root from "../Root";
import moxios from "moxios";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Onichan" }, { name: "Kanako" }],
  });
});
afterEach(() => {
  moxios.uninstall();
});
it("can dispaly 500 li", (done) => {
  // render the app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // click the buttton
  wrapped.find(".fetch-comment").simulate("click");
  {
    /*
     moxios needs delay to respond and trick axios 
    jest does not wait for any delay 
    done is a callback to tell jest that the whole test is done check it .    
    */
  }
  //   setTimeout(() => {
  //     wrapped.update();

  //     //  list the comments
  //     expect(wrapped.find("li").length).toEqual(2);
  //     done();
  //     wrapped.unmount();
  //   }, 100);
  {
    /* Moxios.wait() */
  }
  moxios.wait(() => {
    wrapped.update();

    //  list the comments
    expect(wrapped.find("li").length).toEqual(2);
    done();
    wrapped.unmount();
  });
});
