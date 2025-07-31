import { createContext } from "react";
import { useState, useEffect } from "react";

const TaskContext = createContext();

const apiUrl = import.meta.env.VITE_API_URL;

export const TaskProvider = ({ children }) => {

    const [getTask, setGetTask] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const task = await fetch(`${apiUrl}/tbsks`);
                const data = await task.json()
                setGetTask(data)
                console.log(data)
            } catch (error) {
                const err = new Error("Errore, controlla l'URL")
                console.error('Errore nel recupero delle task', error)
                console.log(err)
            }

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