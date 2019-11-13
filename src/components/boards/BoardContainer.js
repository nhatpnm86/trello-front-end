import React from 'react';
import Container from '@material-ui/core/Container';
import CreateBoardContainer from './boardCreation/CreateBoardContainer'

const BoardContainer = () => (
    <Container maxWidth="sm">
        <CreateBoardContainer />
    </Container>
)

export default BoardContainer;