var React = require('react');

class Main extends React.Component {
  render() {
    return (
      <div className='main-container'>
        <h1 className="header">Enter a City and State</h1>
        <div className='area-container' style={{flexDirection: "column"}}>
          <input type='text' placeholder='St.George, Utah'/>
          <button className='btn btn-success' style={{margin: "10px"}}>Get Weather</button>
        </div>
      </div>
    )
  }
}

module.exports = Main;