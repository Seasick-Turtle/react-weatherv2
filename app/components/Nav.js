var React = require('react');

class Nav extends React.Component {
  render() {
    return (
      <div className='nav'>
        <h1>Clever Title</h1>
        <div className='area-container' style={{flexDirection: "row"}}>
          <input type='text' placeholder='St.George, Utah'/>
          <button className='btn btn-success' style={{margin: "10px"}}>Get Weather</button>
        </div>
      </div>
    )
  }
}

module.exports = Nav;