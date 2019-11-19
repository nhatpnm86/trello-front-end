import React from 'react';
import AddList from '../containers/AddList';
import AllListsOfBoard from '../containers/AllListsOfBoard';

const BoardDetails = (props) => {
  let boardId = props.match.params.id;
  return (
    <div>
      <AddList boardId={boardId} />
      <AllListsOfBoard boardId={boardId} />
    </div>
  );
};

export default BoardDetails;