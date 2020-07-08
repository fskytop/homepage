import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import MicroFrontend from './MicroFrontend';
import About from './About';
import { NavBar, Footer } from "./_component"

const {
  REACT_APP_COMPONENT_HOST: componentHost,
} = process.env;

const Component = ({ history }) => (
  <MicroFrontend history={history} host={componentHost} name="Component" />
);

class App extends React.Component {
  render() {
    const {alert} = this.props;
    return (
      <div className="app" data-test="appComponent">
        {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <React.Fragment>
            <NavBar/>
            <Switch>
              <Route exact path="/about" render={About}/>
              <Route path="/comics" component={Component}/>
              <Redirect from="/" to="/comics"/>
              <Redirect from="*" to="/"/>
            </Switch>
            <Footer/>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}


function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };