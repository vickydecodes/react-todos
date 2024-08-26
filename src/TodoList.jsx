import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import { v4 as uuid } from 'uuid';
import TodoItem from './TodoItem';
import AddTodo from './AddTodos';
import { Box, Typography } from '@mui/material';


const initialLists = [
    { id: uuid(), list: "walking cat", completed: false },
    { id: uuid(), list: "walking dog", completed: true },
    { id: uuid(), list: "walking elephant", completed: false },
    { id: uuid(), list: "walking panda", completed: true },
    { id: uuid(), list: "walking snake", completed: true }

]

const getInitialDatas = () => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if(!data) return []
    return data

}


export default function TodoList() {

    const [todos, setTodos] = useState(getInitialDatas);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const removeTodo = (id) => {
        console.log('clicked removetodo')
        setTodos(prevTodos => {
            return prevTodos.filter(t => t.id !== id)
        })
    }

    const updateTodo = (id) => {
        console.log('clicked updateTodo')
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id == id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo
                }
            })
        })
    }

    const addTodo = (list) => {
        console.log('clicked addTodo');
        setTodos(prevTodos => {
            return [...prevTodos, { list: list, completed: false, id: uuid() }]
        })
    }

    return (
        <Box sx={{
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection:'column',
            marginTop: '30px'
        }}>
            <Typography variant='h2' component="h1" sx={{flexGrow:1 }}>
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 6 }}>
                {todos.map((li) => {
                    return <TodoItem li={li} key={li.id} removeTodo={removeTodo} updateTodo={updateTodo} />
                })}
                <AddTodo addTodo={addTodo} sx={{ width: '100%', bgcolor: 'background.paper', p: 6, m: 3 }} />
            </List>
        </Box>
    );
}
