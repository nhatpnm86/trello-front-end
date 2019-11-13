import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Header from './Header'
import InvalidUrl from './InvalidUrl'
import BoardContainer from './boards/BoardContainer'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/" component={BoardContainer} />
      <Route component={InvalidUrl} />
      </Switch>
    </div>
  );
}

export default App;
