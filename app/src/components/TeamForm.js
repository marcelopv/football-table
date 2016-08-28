import React from 'react';

class TeamForm extends React.Component {

  constructor() {
    super(this);

    this.state = {
      name: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <form className="teamForm">
        <input
          type="text"
          placeholder="Team name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export default TeamForm;
