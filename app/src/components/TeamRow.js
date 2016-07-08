import React, { Component } from 'react';

class TeamRow extends React.Component{
  render(){
      var team = this.props.team;

      return (
        <tr>
          <td>{team.position}</td>
          <td>{team.name}</td>
          <td>{team.points}</td>
          <td>{team.matchs}</td>
        </tr>
      )
  }
}

export default TeamRow;
