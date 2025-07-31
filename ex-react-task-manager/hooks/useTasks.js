import { useState, useEffect } from "react";


const apiUrl = import.meta.env.VITE_API_URL;

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
    return { getTask }
}

