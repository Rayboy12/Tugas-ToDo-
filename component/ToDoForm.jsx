import { Button } from "@mui/material";
import React, {useState} from "react";

const ToDoForm = () => {
    const [todo, setTodo] = useState("");

    const handleClick = () => {
        alert("new todo: " + todo);
    }

    return (
        <div className="todo-form">
        <p>~ Today I need to ~</p>
        <span>
            <TextField 
            label="Task"
            variant="filled"
            value={todo}
            onChange={(e) => {
                setTodo(e.target.value);
            }}            
            />
            <Button 
            variant="contained"
            onClick={() => {
                handleClick(todo);
                setTodo("");
            }}
            >
            Submit
            </Button>
            <Button variant="outlined" color="error" onClick={removeCompleted}>
                Remove Complete
            </Button>
        </span>
    </div>
    );
};


export default ToDoForm;