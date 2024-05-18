import React, { useState } from "react";

import ToDoForm from "../component/ToDoForm";
import ToDoList from "../component/ToDoList";

const ToDo = () => {
    const [todos, setTodos] = useState([]);

    const handleClick = (todo) => {
        const newTodo = {id: todos.length + 1, task: todo, complete: false};
       setTodos([...todos, newTodo]);
    };

    const handleCheckbox = (id) => {
        const  newTodos = [...todos];
        const index = newTodos.findIndex(todo => todo.id === id);

        newTodos[index].complete = !newTodos[index].complete;
        setTodos(newTodos);
    }

    const removeCompleted = () => {
        const newTodos = todos.filter(todo => !todo.complete);
        setTodos(newTodos);
    }

    return (
        <div className="todo">
            <h2 className="title">To Do List</h2>
            <ToDoForm handleClick={handleClick}/>
            <ToDoList todos={todos} handleCheckbox={handleCheckbox}/>
        </div>
    );
};

export default ToDo;