import { useState } from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export default function TodoItem({ li, removeTodo, updateTodo }) {
    const labelId = `checkbox-list-label-${li.id}`;
   

    return (
        <ListItem
        onClick={() => updateTodo(li.id)}
            secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={()=> removeTodo(li.id)}>
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding>
            <ListItemButton role={undefined}  dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={li.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={li.list} />
            </ListItemButton>
        </ListItem>
    );
}