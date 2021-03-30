import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainTemplate from './templates/MainTemplate';
import Dashboard from './views/Dashboard';
import Footer from './components/Footer';
import Products from './views/Products';


const App = () => {
  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path="/" >
            <Dashboard />
          </Route>
          <Route path="/products" >
            <Products />
          </Route>
        </Switch>
        < Footer />
      </MainTemplate>
    </Router>
  );
}

export default App;
