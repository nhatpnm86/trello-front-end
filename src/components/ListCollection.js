import React from 'react';

const ListCollection = ({ lists }) => {
    return (
        <ul>
            {lists.map((list, index) => <li key={index}>{list.name}</li>)}
        </ul>
    );
};

export default ListCollection;