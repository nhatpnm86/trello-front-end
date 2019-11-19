import React from 'react';
import { connect } from 'react-redux';
import { addList } from '../actions';

let AddList = ({ dispatch, boardId }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    };
                    dispatch(addList(boardId, input.value));
                    input.value = '';
                }}
            >
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                <button type="submit">Add List</button>
            </form>
        </div>
    );
};

AddList = connect()(AddList);

export default AddList;