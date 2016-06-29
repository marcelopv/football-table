var React = require('react');
var TeamTable = require('./TeamTable');
var SearchBar = require('./SearchBar');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      filterText: ''
    };
  },

  handleUserInput: function(filterText) {
    this.setState({
      filterText: filterText
    });
  },

  render: function() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <TeamTable
          teams={this.props.teams}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
});
