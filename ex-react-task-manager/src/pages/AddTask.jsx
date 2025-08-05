import React, { useMemo } from 'react'
import { useState, useRef, useContext } from 'react'
import TaskContext from '../../contexts/TaskContext';

// controllo campo input 
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

const AddTask = () => {

    // recupero la funzione per aggiungere la task
    const { addTask } = useContext(TaskContext)

    // campi input controllati   
    const [title, setTitle] = useState('')

    // campi input non controllati
    const description = useRef('')
    const status = useRef('')

    // verifica del campo input
    const nameError = useMemo(() => {
        if (!title.trim()) return "Il nome non puo essere vuoto!"
        if ([...title].some(car => symbols.includes(car)))
            return "Il nome non puo contenere simboli!"
        return ""
    }, [title])

    // funzione per l'invio della form
    async function sendData(e) {
        e.preventDefault()
        const newTask = {
            title: title.trim(),
            description: description.current.value,
            status: status.current.value
        }
        try {
            await addTask(newTask)
            alert('Task aggiunta con successo!')
            setTitle('')
            description.current.value = ''
            status.current.value = 'To do'
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            <div className="container">
                <h2 className='mt-4'>Aggiungi una nuova Task!</h2>
                <div className="row">
                    <div className="col-8">
                        <form onSubmit={sendData}>
                            <p className='mt-3'>Inserisci il nome della Task </p>
                            <input type="text" placeholder='Nome' value={title} onChange={(e) => { setTitle(e.target.value) }} required />
                            {nameError && <p style={{ color: 'red' }}>{nameError}</p>}

                            <p className='mt-3'>Descrizione della task</p>
                            <textarea ref={description} required className='margin-b'></textarea>
                            <p className='mt-3'>Stato della Task</p>
                            <select ref={status} defaultValue="To do" className='margin-b' >
                                <option value="To do">To do</option>
                                <option value="Doing">Doing</option>
                                <option value="Done">Done</option>
                            </select>
                            <br />
                            <button disabled={nameError} className='btn btn-primary mt-5'>Aggiungi task</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddTask
