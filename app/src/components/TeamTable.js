import React from 'react';
import TeamRow from './TeamRow';

class TeamTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: this.props.filterText,
      teams: this.props.teams,
    };
  }

  render() {
    let rows = [];
    this.props.teams.forEach((team) => {
      if (team.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) {
        return;
      }

      rows.push(<TeamRow team={team} key={team.name} />);
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Points</th>
            <th>Matchs</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

TeamTable.propTypes = {
  teams: React.PropTypes.array,
  filterText: React.PropTypes.string,
};


export default TeamTable;
