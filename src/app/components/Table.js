var React = require('react');
var TeamList = require('./TeamList');

module.exports = React.createClass({
  render: function() {
    return (
      <TeamList data={this.props.data}/>
    );
  }
});
