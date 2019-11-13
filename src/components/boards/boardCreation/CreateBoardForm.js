import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const CreateBoardForm = (props) => (
    <Card>
        <CardContent>
            <Typography>
                Create a new board
            </Typography>
            <TextField
                placeholder="Let's enter the board name"
                fullWidth
            />
        </CardContent>
        <CardActions>
            <Button onClick={props.onCancelCreatingBoard}>Cancel</Button>
            <Button onClick={props.onSubmitCreatingBoard}>Submit</Button>
        </CardActions>
    </Card>
)

export default CreateBoardForm;