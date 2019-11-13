import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import CreateBoard from './CreateBoard'
import CreateBoardForm from './CreateBoardForm'

class CreateBoardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCreatingNewBoard: false
        };
    }

    handleCreateNewBoardClick = () => {
        this.setState({ isCreatingNewBoard: true });
    }

    handleCancelCreatingBoard = () => {
        this.setState({ isCreatingNewBoard: false });
    }

    handleSubmitCreatingBoard = (boardName) => {
        this.setState(
            { isCreatingNewBoard: false },
            () => this.props.onSubmitCreatingNewBoard(boardName)
            );
    }

    render() {
        const isCreatingNewBoard = this.state.isCreatingNewBoard;
        const activeComponent =
            isCreatingNewBoard ?
                <CreateBoardForm onCancelCreatingBoard={this.handleCancelCreatingBoard} onSubmitCreatingBoard={this.handleSubmitCreatingBoard} /> :
                <CreateBoard onClick={this.handleCreateNewBoardClick} />;

        return (
            <Container maxWidth="sm">
                {activeComponent}
            </Container>
        )
    }
}

export default CreateBoardContainer;