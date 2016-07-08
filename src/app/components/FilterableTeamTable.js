import React, { Component } from 'react';
import TeamTable from './TeamTable';
import SearchBar from './SearchBar';

class FilterableTeamTable extends React.Component {

  getInitialState() {
    return {
      filterText: ''
    };
  }

  handleUserInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
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
}

export default FilterableTeamTable;
