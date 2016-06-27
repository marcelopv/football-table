var React = require('react');

module.exports = React.createClass({
  render: function(){
      return (
        <div className="team">
          {this.props.name}
        </div>
      )
  }
});
