var React = require('react');

module.exports = React.createClass({

  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.value
    );
  },

  render: function() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange} />
        </form>
    );
  }
});
