import { connect } from 'react-redux'
import BoardCollection from '../components/BoardCollection'

const mapStateToProps = state => {
  return {
    boards: state.boards
  }
}

const AllBoards = connect(
  mapStateToProps
)(BoardCollection)

export default AllBoards