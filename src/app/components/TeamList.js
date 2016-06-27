var React = require('react');
var Team = require('./Team');

module.exports = React.createClass({
  render: function(){

    var teams = this.props.data.map(function(team){
      return(
        <Team name={team.name} />
      );
    });

    return (
      <div className="teamList">
        {teams}
      </div>
    );
  }
});
