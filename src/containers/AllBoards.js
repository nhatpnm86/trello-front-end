import { connect } from 'react-redux'
import { showBoard } from '../actions'
import BoardCollection from '../components/boards/BoardCollection'

const mapStateToProps = state => {
  return {
    boards: state.boards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onBoardClick: id => {
      dispatch(showBoard(id))
    }
  }
}

const AllBoards = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardCollection)

export default AllBoards