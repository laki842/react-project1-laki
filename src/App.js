import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import InnerProject1 from './pages/InnerProject1';
import InnerProject2 from './pages/InnerProject2';

function App() {
  return (
    <Router>
      {/* navbar will show all the time */}
      <Route path='/'>
        <Navbar />
      </Route>

      {/* these 3 components will change place */}
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/InnerProject1' component={InnerProject1}></Route>
        <Route path='/InnerProject2' component={InnerProject2}></Route>
      </Switch>
    </Router>
  );
}

export default App;
