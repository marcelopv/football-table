import React, { Component } from 'react';
import TeamRow from './TeamRow';

class TeamTable extends React.Component{
  render() {
    var rows = [];
    var lastCategory = null;

    this.props.teams.forEach(function(team){
      if (team.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) {
          return;
      }

      rows.push(<TeamRow team={team} key={team.name}/>);

    }.bind(this));

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

export default TeamTable;
