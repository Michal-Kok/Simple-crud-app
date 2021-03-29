import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainTemplate from './templates/MainTemplate';
import Dashboard from './views/Dashboard';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <MainTemplate>
        <Dashboard />
        < Footer />
      </MainTemplate>
    </Router>
  );
}

export default App;
