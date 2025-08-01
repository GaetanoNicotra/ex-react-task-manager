import React from 'react'
import { useContext } from 'react';
import TaskContext from '../../contexts/TaskContext';
import { useParams, useNavigate } from 'react-router-dom';



const TaskDetail = () => {

    const navigate = useNavigate()
    // consumo del global context
    const { getTask, removeTask } = useContext(TaskContext);
    // recupero l'id dall l'url con useParams
    const { id } = useParams();
    // cerco l'id 
    const selectedTasK = getTask.find(task => task.id === parseInt(id));

    if (!selectedTasK) {
        return <h2>Task Non Trovata</h2>
    }



    // funzione per eliminare la task
    const removeTaskButton = async () => {
        try {
            await removeTask(selectedTasK.id)
            alert('Task eliminata con successo')
            navigate('/')
        } catch (error) {
            console.error(error);
            alert(error.message)
        }
    }
    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="col-8 mt-5">
                    <div className='card p-2'>
                        <div><p><b>Titolo:</b> {selectedTasK.title}</p>
                            <p><b>Descrizione:</b> {selectedTasK.description}</p>
                            <p className='w-25' style={{
                                backgroundColor: selectedTasK.status === 'To do' ? '#dc3545' : selectedTasK.status === 'Doing' ? '#ffc107' : '#198754',
                                color: selectedTasK.status === 'Done' ? '#000' : '#fff'
                            }}>
                                <b>Stato:</b> {selectedTasK.status}</p>
                            <p><b>Data di creazione:</b> {new Date(selectedTasK.createdAt).toLocaleDateString()}</p>
                            <button className='btn btn-danger' onClick={removeTaskButton}>Elimina task</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default TaskDetail
