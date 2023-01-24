import './App.css';
import { Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound.js';

function App() {
  return (
 <>
  <Switch>
    <Route></Route>
    <Route path="*" component={NotFound}/>
  </Switch>
 </>
  );
}

export default App;
