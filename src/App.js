import React from 'react';
import './App.css';
import AppBar from './Components/AppBar';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills"

function App() {
  return (
    <div>
      <Router>
      <AppBar />
        <Switch>
          <Route path="/Projects" component={Projects} />
          <Route path="/Skills" component={Skills} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
