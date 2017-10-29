var React = require('react');
var Weather = require('./Weather');

class Nav extends React.Component {
  render() {
    return (
      <div className='nav'>
        <h1>Main.js Header</h1>
        <Weather />
      </div>
    )
  }
}

module.exports = Nav;