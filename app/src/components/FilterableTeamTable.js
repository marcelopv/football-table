import React from 'react';
import TeamTable from './TeamTable';
import SearchBar from './SearchBar';

class FilterableTeamTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      teams: this.props.teams,
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText) {
    this.setState({
      filterText,
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

FilterableTeamTable.propTypes = {
  teams: React.PropTypes.array,
};

export default FilterableTeamTable;
