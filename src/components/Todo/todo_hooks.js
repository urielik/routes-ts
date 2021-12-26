import axios from 'axios';
import { useState } from "react";

export function useTodo() {

    const [tasks, setTask] = useState(null)

    const handleTodo = async () => {
        const result = await axios({
            method: 'get',
            url: 'https://nztodo.herokuapp.com/api/tasks/?format=json'
        });
        
        setTask(result.data);
    }
    return [handleTodo,  tasks]   
};