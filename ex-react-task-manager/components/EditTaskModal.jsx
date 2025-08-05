import { useState, useRef } from 'react'
import Modal from './Modal'
import { Form } from 'react-router-dom'

// props che deve recuperare il componente editTAskModal
const EditTaskModal = ({ show, onClose, task, onSave }) => {

    // inizializzo lo stato della task da modificare con la task passata alla modale
    const [editedTask, setEditedTask] = useState(task)

    // modifico la funzione prendendo la versione precendente e quelle che cambiano con valore key 
    const changeTask = (key, event) => {
        setEditedTask(prev => ({ ...prev, [key]: event.target.value }))
    }

    // creo un ref per gestire lo stato della form
    const editFormRef = useRef()

    // creo la funzione per l'invio della form di modifica
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(editedTask)
        alert('Task modificata con successo')
    }

    if (!show) return null
    return (
        <>
            <Modal title='Modifica task'
                content={<div className='modale-modifica'>
                    <form ref={editFormRef} onSubmit={handleSubmit}>
                        <p className='text-white'>Nome task : </p>
                        {/* all'onChange passo la funzione per modificare la task e l'evento (title è la [key])*/}
                        <input type="text" value={editedTask.title} onChange={e => changeTask('title', e)} />

                        <div className='d-flex modify-input'>
                            <p className='text-white'>Descrizione task : </p>
                            <textarea value={editedTask.description} onChange={e => changeTask('description', e)}></textarea>

                            <p className='text-white'>Stato : </p>
                            <select value={editedTask.status} onChange={e => changeTask('status', e)}  >
                                <option value="To do">To do</option>
                                <option value="Doing">Doing</option>
                                <option value="Done">Done</option> </select>
                        </div>
                    </form> </div>}
                confirmText='Salva'
                show={show}
                onConfirm={() => editFormRef.current.requestSubmit()}
                onClose={onClose}
            />
        </>
    );
}

export default EditTaskModal
