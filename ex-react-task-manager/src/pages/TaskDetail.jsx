import React from 'react'
import TaskContext from '../../contexts/TaskContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

const TaskDetail = () => {

    // consumo del global context
    const { getTask } = useContext(TaskContext);
    const { id } = useParams();
    const selectedTasK = getTask.find(task => task.id === parseInt(id));

    if (!selectedTasK) {
        return <h2>Task Non Trovata</h2>
    }
    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="col-8 mt-5">
                    <div className='card p-2'>
                        <div><p><b>Titolo:</b> {selectedTasK.title}</p>
                            <p><b>Descrizione:</b> {selectedTasK.description}</p>
                            <p style={{
                                backgroundColor: selectedTasK.status === 'To do' ? '#dc3545' : g.status === 'Doing' ? '#ffc107' : '#198754',
                                color: selectedTasK.status === 'Done' ? '#000' : '#fff'
                            }}>
                                <b>Stato:</b> {selectedTasK.status}</p>
                            <p><b>Data di creazione:</b> {new Date(selectedTasK.createdAt).toLocaleDateString()}</p>
                            <button className='btn btn-danger' onClick={() => console.log('Task eliminata')}>Elimina task</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default TaskDetail
