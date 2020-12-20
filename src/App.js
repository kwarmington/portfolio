import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
