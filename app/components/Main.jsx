var React = require('react');
var Nav = require('Nav');

var Main = React.createClass ({

  render: function () {
    return (
      <div className="testBG">
        <Nav/>
        <h2>Main Components</h2>
        {this.props.children}
      </div>
    );
  }
});
module.exports = Main;
