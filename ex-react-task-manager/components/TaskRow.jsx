import React, { useContext } from 'react';
import TaskContext from '../contexts/TaskContext';
import { memo } from 'react'

const TaskRow = () => {

    // consumo del global context
    const { getTask } = useContext(TaskContext);

    return (
        // creazione dinamica della tabella con le task 
        // tramite il map
        <table className="table table-striped">
            <thead>
                <tr className="table-primary">
                    <th>Titolo</th>
                    <th>Stato</th>
                    <th>Data di creazione</th>
                </tr>
            </thead>
            <tbody className='table-color'>
                {getTask.map((g) => (
                    <tr key={g.id}>
                        <td>{g.title}</td>
                        <td style={{ backgroundColor: g.status === 'To do' ? 'red' : g.status === 'Doing' ? 'green' : 'yellow' }}>{g.status}</td>
                        <td>{new Date(g.createdAt).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

};

export default memo(TaskRow);
