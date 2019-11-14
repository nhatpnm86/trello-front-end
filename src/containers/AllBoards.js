import { connect } from 'react-redux'
import BoardCollection from '../components/boards/BoardCollection'

const mapStateToProps = state => {
  return {
    boards: state.boards
  }
}

const AllBoards = connect(
  mapStateToProps
)(BoardCollection)

export default AllBoards