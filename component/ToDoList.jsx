import { ListItemText } from "@mui/material";
import React from "react";

const ToDoList = ({ todos }) => {
    const handleCheckbox = (index) => {
        alert('Checkbox ${index} was checked');
    }
    return (
        <div className="todo-list">
           <List>
            {todos.map((todo, index) => {
                return (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Checkbox onChange={() => handleCheckbox(index)} disableRipple/>
                            </ListItemIcon>
                            <ListItemText 
                                primary={todo.task}
                                className={todo.complete ? "complete" : ""}/>
                            <ListItemText
                                primary={todo.task}
                                className={todo.complete && "complete"}/>
                        </ListItemButton>
                    </ListItem>
                )
            })}
           </List>
        </div>
    );
};

export default ToDoList;