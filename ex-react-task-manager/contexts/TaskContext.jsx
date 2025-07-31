import { createContext } from "react";
import { useState, useEffect } from "react";

const TaskContext = createContext();

const apiUrl = import.meta.env.VITE_API_URL;

export const TaskProvider = ({ children }) => {

    const [getTask, setGetTask] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const task = await fetch(`${apiUrl}/tasks`);
            const data = await task.json()
            setGetTask(data)
            console.log(data)
        }
        fetchData()
    }, [])

    return (
        <TaskContext.Provider value={{ getTask }}>
            {children}
        </TaskContext.Provider>
    );
}


export default TaskContext;