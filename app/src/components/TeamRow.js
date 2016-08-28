import React from 'react';

class TeamRow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      team: this.props.team,
    };
  }

  render() {
    const team = this.props.team;

    return (
      <tr>
        <td>{team.position}</td>
        <td>{team.name}</td>
        <td>{team.points}</td>
        <td>{team.matchs}</td>
      </tr>
    );
  }
}

TeamRow.propTypes = {
  team: React.PropTypes.object,
};

export default TeamRow;
