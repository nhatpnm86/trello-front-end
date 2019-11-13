import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class CreateBoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newBoardName: ''
        }
    }

    handleNewBoardNameChange = (e) => {
        const name = e.target.value;
        this.setState({ newBoardName: name });
    }

    render() {
        const newBoardName = this.state.newBoardName;

        return (
            <Card>
                <CardContent>
                    <Typography>
                        Create a new board
                    </Typography>
                    <TextField
                        placeholder="Let's enter the board name"
                        fullWidth
                        onChange={this.handleNewBoardNameChange}
                    />
                </CardContent>
                <CardActions>
                    <Button onClick={this.props.onCancelCreatingBoard}>Cancel</Button>
                    <Button onClick={this.props.onSubmitCreatingBoard.bind(this, newBoardName)}>Submit</Button>
                </CardActions>
            </Card>
        )
    }
}

export default CreateBoardForm;