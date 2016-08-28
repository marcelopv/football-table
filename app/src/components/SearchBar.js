import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: this.props.filterText,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onUserInput(
      event.target.value
    );
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.onChange}
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  filterText: React.PropTypes.string,
  onUserInput: React.PropTypes.func,
};

export default SearchBar;
