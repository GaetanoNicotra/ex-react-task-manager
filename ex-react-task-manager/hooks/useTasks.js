import { useState, useEffect } from "react";

// variabile per utilizzare l'url
const apiUrl = import.meta.env.VITE_API_URL;

// funzione per il recupero delle task tramite un custom hook
export default function useTasks() {

    const [getTask, setGetTask] = useState([]);

    // recupero di tutti i post
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

    // funzione per aggiungere una task
    const addTask = async (newTask) => {
        const response = await fetch(`${apiUrl}/tasks`, {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newTask)
        })
        // destrutturo le proprietà che mi servono
        const { success, message, task } = await response.json();
        // controllo se esiste un errore
        if (!success) throw new Error(message)
        // aggiungo la task
        setGetTask(prev => [...prev, task])
    }

    // funzione per rimuovere una task
    const removeTask = async (taskId) => {
        const response = await fetch(`${apiUrl}/tasks/${taskId}`, {
            method: 'DELETE',
        })
        // destrutturo le proprietà che mi servono
        const { success, message, task } = await response.json();
        // controllo se esiste un errore
        if (!success) throw new Error(message)
        //rimuovo la task
        setGetTask(prev => prev.filter(p => p.id !== taskId));
    }

    // funzione per modificare una task
    const updateTask = async (updateTask) => {
        const response = await fetch(`${apiUrl}/tasks/${updateTask.id}`, {
            method: 'PUT',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(updateTask)
        })
        // destrutturo le proprietà che mi servono
        const { success, message, task: newTask } = await response.json();
        // controllo se esiste un errore
        if (!success) throw new Error(message);
        // altrimenti eseguo la funzione verifico le task vecchie con le nuove
        setGetTask(prev => prev.map(oldTask => oldTask.id === newTask.id ? newTask : oldTask))
    }

    return { getTask, addTask, removeTask, updateTask }
}

