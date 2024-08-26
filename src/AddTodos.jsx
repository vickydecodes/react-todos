import { useState } from 'react';
import TextField from '@mui/material/TextField';
import AddIcon from "@mui/icons-material/Add";
import ListItem from '@mui/material/ListItem';
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";



export default function AddTodo({ addTodo }) {
    const [term, setTerm] = useState('')



    const handleChange = (e) => {
        setTerm(currVal => e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const list = term.charAt(0).toUpperCase() + term.slice(1)
        addTodo(list)
        setTerm('')
    }

    return (
       
        <form onSubmit={handleSubmit} style={{marginTop: '20px'}}>
        <TextField
                fullWidth
                id="filled-textarea"
                label="Enter your Todo"
                placeholder="Enter your Todo"
                multiline
                onChange={handleChange}
                value={term}
                variant="outlined"
                size='normal'
                required
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton aria-label="create todo" edge="end" type="submit">
                          <AddIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }} />
        </form>

        

    )
};