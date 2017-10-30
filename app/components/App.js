var React = require('react');
var ReactRouter = require('react-router-dom');
var BrowserRouter = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Main = require('./Main');
var Nav = require('./Nav');

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
        <Nav />
          <Switch>
            <Main />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

module.exports = App;