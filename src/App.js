

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Professional from './pages/Professional';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/about' component={About} />
         <Route path='/education' component={Education} />
         <Route path='/contact' component={Contact} />
         <Route path='/projects' component={Projects} />
         <Route path='/professional' component={Professional} />
      </Switch>

    </Router>
    </>
  );
}

export default App;
