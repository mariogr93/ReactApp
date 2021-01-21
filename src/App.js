import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Users from './user/pages/Users'
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/">
        <Users />
      </Route>

    </Router>

  );
}

export default App;
