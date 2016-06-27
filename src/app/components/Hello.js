var React = require('react');
var Table = require('./Table');

var data = [
  {id: 1, name: 'Gremio'},
  {id: 2, name: 'Internacional'}
];

module.exports = React.createClass({
  render: function() {
    return (
      <div className="hello">
        <h1>Hello, Football Table App!</h1>
        <Table data={data}/>
      </div>
    );
  }
});
