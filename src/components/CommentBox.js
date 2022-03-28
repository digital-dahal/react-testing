import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/comment_action";
class CommentBox extends React.Component {
  state = { comment: "" };
  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state.comment);
    this.setState({ comment: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Comments</h1>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <br />
          <button>Submit</button>
        </form>
        <button onClick={this.props.fetchComments}>Fetch</button>
      </div>
    );
  }
}
export default connect(null, actions)(CommentBox);
