import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import NotFound from './components/NotFound.js';
import Green from './components/Green.js';
import Red from './components/Red.js';
import Blue from './components/Blue.js';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink to="/Red">Red</NavLink>
          </li>
          <li>
            <NavLink to="/Green">Green</NavLink>
          </li>
          <li>
            <NavLink to="/Blue">Blue</NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/Red">
            <Red />
          </Route>
          <Route path="/Green">
            <Green />
          </Route>
          <Route path="/Blue">
            <Blue />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
