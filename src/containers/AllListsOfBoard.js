import { connect } from 'react-redux'
import ListCollection from '../components/ListCollection'

const mapStateToProps = state => {
  return {
    boards: state.boards
  }
}

const AllListsOfBoard = connect(
  mapStateToProps
)(ListCollection)

export default AllListsOfBoard