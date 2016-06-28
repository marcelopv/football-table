var React = require('react');
var TeamRow = require('./TeamRow');

module.exports = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;

    this.props.teams.forEach(function(team){
        rows.push(<TeamRow team={team} />);
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
});
