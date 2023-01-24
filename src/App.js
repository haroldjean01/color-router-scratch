import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import NotFound from './components/NotFound.js';
import RGB from './components/RGB/RGB.js';

function App() {
  return (
 <>
  <Switch>
    <Route path="/" component={RGB}/>
    <Route path="*" component={NotFound}/>
  </Switch>
 </>
  );
}

export default App;
