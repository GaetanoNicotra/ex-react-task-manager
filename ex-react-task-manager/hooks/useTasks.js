import { useState, useEffect } from "react";

// variabile per utilizzare l'url
const apiUrl = import.meta.env.VITE_API_URL;

// funzione per il recupero delle task tramite un custom hook
export default function useTasks() {
    const [getTask, setGetTask] = useState([]);

    useEffect(() => {

        async function fetchData() {
            try {
                const task = await fetch(`${apiUrl}/tasks`);
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

    const addTask = (newTask) => {

    }

    const removeTask = (taskId) => {

    }

    const updateTask = () => {

    }
    return { getTask, addTask, removeTask, updateTask }
}

