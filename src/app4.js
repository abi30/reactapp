
import Cart from './components/Cart/Cart';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Products/Home";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
    <Router>
    <div>
      <Navbar />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;



