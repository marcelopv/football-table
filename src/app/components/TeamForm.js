var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
      return {name: ''};
  },

  handleNameChange: function(e){
    this.setState({name:e.target.value});
  },

  render: function(){
    return(
      <form className="teamForm">
        <input type="text" placeholder="Team name" value={this.state.name} onChange={this.handleNameChange}/>
        <input type="submit" value="Post"/>
      </form>
    )
  }
});
