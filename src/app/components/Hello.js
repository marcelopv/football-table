import React from 'react';
import TeamTable from './TeamTable';
import FilterableTeamTable from './FilterableTeamTable';

var teams = [
  {id: 1, name: 'Grêmio', position: 1, matchs: 6, points: 18},
  {id: 2, name: 'Internacional', position: 2, matchs: 6, points: 15},
  {id: 3, name: 'Flamengo', position: 3, matchs: 6, points: 12},
  {id: 4, name: 'Fluminense', position: 4, matchs: 6, points: 9},
  {id: 5, name: 'São Paulo', position: 5, matchs: 6, points: 6},
  {id: 6, name: 'Santos', position: 6, matchs: 6, points: 3}
];

module.exports = React.createClass({
  render: function() {
    return (
      <div className="hello">
        <h1>Hello, Welcome to Football Table App!</h1>
        <FilterableTeamTable teams={teams}/>
      </div>
    );
  }
});
