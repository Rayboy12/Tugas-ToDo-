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
            <input
            value={todo}
            onChange={(e) => {
                setTodo(e.target.value);
            }}            
            />
            <button onClick={() => handleClick(todo)}>Submit</button>
        </span>
    </div>
    );
};


export default ToDoForm;