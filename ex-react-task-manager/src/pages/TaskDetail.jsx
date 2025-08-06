import React from 'react'
import { useContext, useState } from 'react';
import TaskContext from '../../contexts/TaskContext';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal';
import EditTaskModal from '../../components/EditTaskModal';

const TaskDetail = () => {

    const navigate = useNavigate()

    // consumo del global context
    const { getTask, removeTask, updateTask } = useContext(TaskContext);

    // recupero l'id dall l'url con useParams
    const { id } = useParams();

    // cerco la task con l'id cercato
    const selectedTasK = getTask.find(task => task.id === parseInt(id));

    // stato per momstrare la modale di eliminazione
    const [showModal, setShowModal] = useState(false);

    // stato per mostrare la modale di modifica
    const [showEditModal, setShowEditModal] = useState(false);

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

    // funzione per modifcare la task
    const handleUpdate = async updatedTask => {
        await updateTask(updatedTask)
        setShowEditModal(false);
    }
    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="col-12 mt-5">
                    <div className='card p-4 bg-body-secondary'>
                        <div><p><b>Titolo:</b> {selectedTasK.title}</p>
                            <p><b>Descrizione:</b> {selectedTasK.description}</p>
                            <p><b>Data di creazione:</b> {new Date(selectedTasK.createdAt).toLocaleDateString()}</p>
                            <p className='w-25 rounded p-2' style={{
                                backgroundColor: selectedTasK.status === 'To do' ? '#dc3545' : selectedTasK.status === 'Doing' ? '#ffc107' : '#198754',
                                color: selectedTasK.status === 'Done' ? '#000' : '#fff'
                            }}>
                                <b>Stato:</b> {selectedTasK.status}</p>

                            <button className='btn btn-primary me-3' onClick={() => setShowEditModal(true)}>Modifica task</button>
                            <button className='btn btn-danger' onClick={() => setShowModal(true)}>Elimina task</button>

                            {<Modal
                                title='Conferma Eliminazione'
                                content={<h5 className='text-white mt-4'>Conferamare l'eliminazione della task?</h5>}
                                show={showModal}
                                onClose={() => setShowModal(false)}
                                onConfirm={removeTaskButton}
                                confirmText='Elimina'
                            />}
                            {<EditTaskModal
                                task={selectedTasK}
                                show={showEditModal}
                                onClose={() => setShowEditModal(false)}
                                onSave={handleUpdate}
                            />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskDetail
