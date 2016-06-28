var React = require('react');
var TeamTable = require('./TeamTable');

var teams = [
  {id: 1, name: 'Grêmio', position: 1, matchs: 6, points: 18},
  {id: 2, name: 'Internacional', position: 2, matchs: 3, points: 15},
  {id: 3, name: 'Flamengo', position: 3, matchs: 3, points: 12},
  {id: 4, name: 'Fluminense', position: 4, matchs: 3, points: 9},
  {id: 5, name: 'São Paulo', position: 5, matchs: 3, points: 6},
  {id: 6, name: 'Santos', position: 6, matchs: 3, points: 3}
];

module.exports = React.createClass({
  render: function() {
    return (
      <div className="hello">
        <h1>Hello, Football Table App!</h1>
        <TeamTable teams={teams}/>
      </div>
    );
  }
});
