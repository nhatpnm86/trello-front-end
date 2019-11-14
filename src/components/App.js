import React from 'react'
import Header from './Header'
import AddBoard from '../containers/AddBoard'
import AllBoards from '../containers/AllBoards'

const App = () => (
  <div>
    <Header />
    <AddBoard />
    <AllBoards />
  </div>
)

export default App