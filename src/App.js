import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import ShyTory from './pages/ShyTory';

function App() {
  return (
    <Router>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shy-tories">
            <ShyTory />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
