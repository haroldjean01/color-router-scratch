import './App.css';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import NotFound from './components/NotFound.js';
import Green from './components/Green.js';
import Red from './components/Red.js';
import Blue from './components/Blue.js';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-container">
        <ul>
          <li>
            <NavLink to="/255/100/100">Red</NavLink>
          </li>
          <li>
            <NavLink to="/100/255/100">Green</NavLink>
          </li>
          <li>
            <NavLink to="/100/100/255">Blue</NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Redirect to="/255/100/100" />
          </Route>
          <Route exact path="/255/100/100">
            <Red />
          </Route>
          <Route path="/100/255/100">
            <Green />
          </Route>
          <Route path="/100/100/255">
            <Blue />
          </Route>
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
