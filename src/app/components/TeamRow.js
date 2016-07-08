import React from 'react';

module.exports = React.createClass({
  render: function(){
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
});
