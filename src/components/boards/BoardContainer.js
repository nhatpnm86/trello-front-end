import React from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CreateBoardContainer from './boardCreation/CreateBoardContainer'

class BoardContainer extends React.Component {
    renderBoards = () => {
        const boards = this.props.boards;
        return boards.map((board, index) => <Card key={index}><CardContent><Typography>{board.name}</Typography></CardContent></Card>);
    }

    render() {
        return (
            <Container maxWidth="sm">
                <CreateBoardContainer onSubmitCreatingNewBoard={this.props.onSubmitCreatingNewBoard} />
                {this.renderBoards()}
            </Container>
        );
    }
}

export default BoardContainer;