import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import scss from "./scss/style.scss";


function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
