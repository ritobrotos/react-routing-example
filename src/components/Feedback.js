import React from "react";

export default class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      city: '',
      userFeedback: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>User Feedback</h2>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <label> Name: <input type="text" value={this.state.username} name="username" /> </label>

          <br /><br />

          <label> City: <input type="text" value={this.state.city} name="city" /> </label>

          <br /><br />

          <label> Feedback: <textarea value={this.state.userFeedback} name="userFeedback" /> </label>

          <br /><br />

          <input type="submit" value="Submit" />
        </form>


        <p>{this.state.username}</p>
      </div>
    );
  }
}
