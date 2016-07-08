import React, { Component } from 'react';

class TeamForm extends React.Component {
  getInitialState(){
      return {name: ''};
  },

  handleNameChange(e){
    this.setState({name:e.target.value});
  },

  render(){
    return(
      <form className="teamForm">
        <input type="text" placeholder="Team name" value={this.state.name} onChange={this.handleNameChange}/>
        <input type="submit" value="Post"/>
      </form>
    )
  }
}

exports default TeamForm;
