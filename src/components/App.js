import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Header from './Header'
import InvalidUrl from './InvalidUrl'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route component={InvalidUrl} />
      </Switch>
    </div>
  );
}

export default App;
