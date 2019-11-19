import { connect } from 'react-redux';
import ListCollection from '../components/ListCollection';

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.boards.find(board => board.id === ownProps.boardId).lists
  };
};

const AllListsOfBoard = connect(
  mapStateToProps
)(ListCollection);

export default AllListsOfBoard;