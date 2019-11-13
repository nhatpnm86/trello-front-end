import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const CreateBoard = (props) => (
    <Card>
        <CardActions>
            <Button onClick={props.onClick}>Create a new board...</Button>
        </CardActions>
    </Card>
)

export default CreateBoard;