import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects"

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
