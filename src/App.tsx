import React,{useState} from 'react';
import Home from './pages';
import Todo from './components/Todo';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {


  return (
    <div className="App">
    <Router>
        <Switch>
        <Route path='/' component={Home}  exact />
        <Route path='/todo' component={Todo}  exact />
        </Switch>
    </Router>

    </div>
  );
}

export default App;
