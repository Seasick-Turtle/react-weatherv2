var React = require('react');
var Weather = require('./Weather');

class Main extends React.Component {
  render() {
    return (
      <div className='home-container' >
        <h1>Enter a City and State</h1>
        <Weather />
      </div>
    )
  }
}

module.exports = Main;