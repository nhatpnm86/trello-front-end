import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Header from './Header'
import InvalidUrl from './InvalidUrl'
import BoardContainer from './boards/BoardContainer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: []
    };
  }

  handleSubmitCreatingNewBoard = (boardName) => {
    const boards = this.state.boards.slice();
    boards.push({ name: boardName, lists: [] });
    this.setState({ boards: boards });
  }

  render() {
    const boards = this.state.boards;

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <BoardContainer {...props} boards={boards} onSubmitCreatingNewBoard={this.handleSubmitCreatingNewBoard} />}
          />
          <Route component={InvalidUrl} />
        </Switch>
      </div>
    );
  }
}

export default App;
