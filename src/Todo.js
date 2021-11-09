import React from 'react';
import './Todo.css';
import { List,ListItem,ListItemText,Avatar,ListItemAvatar,Button} from '@material-ui/core'
import db from './Firebase';

function Todo(props) {
    return (
        <List className="todo_list">
    <ListItem>
    <ListItemAvatar>
      <Avatar>
      <imageIcon />
      </Avatar>
      </ListItemAvatar>
 <ListItemText primary={props.todo.todo}secondary="Dummy Deadline 🕙"/>
</ListItem>
<Button onClick={event =>db.collection('todos').doc(props.todo.id).delete()}>❎ Delete Me</Button>
    </List>
    )
}

export default Todo
