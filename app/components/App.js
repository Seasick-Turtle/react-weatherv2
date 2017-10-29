var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Main = require('./Main');
var Nav = require('./Nav');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
        <Nav />
          <Switch>
            <Main />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;