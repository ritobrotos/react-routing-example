import React from "react";

export default class Feedback extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formEle: {
        username: '',
        city: '',
        userFeedback: ''
      },

      feedbackOutine: {
        successMsg: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    var formEleVar = this.state.formEle;
    formEleVar[name] = event.target.value;

    this.setState({
      formEle: formEleVar
    });
  }

  handleSubmit(event) {
    console.log(this.state.formEle);
    this.createFeedbackSubmissionOutline();
    this.resetFormElements();
    event.preventDefault();
  }

  createFeedbackSubmissionOutline() {
    this.setState({
      feedbackOutine: {
        successMsg: 'Thank you for providing us your feedback'
      }
    });
  }

  resetFormElements() {
    this.setState({
      formEle: {
        username: '',
        city: '',
        userFeedback: ''
      }
    });
  }

  render() {
    return (
      <div>
        <h2>User Feedback</h2>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <label> Name: <input type="text" name="username" value={this.state.formEle.username} /> </label>
          <br /><br />
          <label> City: <input type="text" name="city" value={this.state.formEle.city} /> </label>
          <br /><br />
          <label> Feedback: <textarea name="userFeedback" value={this.state.formEle.userFeedback} /> </label>
          <br /><br />
          <input type="submit" value="Submit" />
        </form>

        <br /><br />

        <div>
          <Welcome feedbackOutine={this.state.feedbackOutine} />
        </div>

      </div>
    );
  }
}

function Welcome(props) {
  return (
    <div>
      <h4>{props.feedbackOutine.successMsg}</h4>
    </div>
  )
}
