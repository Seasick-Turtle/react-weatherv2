var React = require('react');

class Weather extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='St.George, Utah'/>
          <button>Get Weather</button>
        </form>
      </div>
    )
  }
}

module.exports = Weather;