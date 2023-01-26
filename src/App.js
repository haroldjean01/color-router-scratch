import './App.css';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import NotFound from './components/NotFound.js';
import { BrowserRouter as Router } from 'react-router-dom';
import RGB from './components/RGB/RGB.js';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="buttons-container">
          <NavLink to="/rgb/255/100/100">
            <button>Red</button>
          </NavLink>
          <NavLink to="/rgb/100/255/100">
            <button>Green</button>
          </NavLink>
          <NavLink to="/rgb/100/100/255">
            <button>Blue</button>
          </NavLink>
        </div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/rgb/255/100/100" />
          </Route>
          <Route exact path="/rgb/:r/:g/:b">
            <RGB />
          </Route>
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
