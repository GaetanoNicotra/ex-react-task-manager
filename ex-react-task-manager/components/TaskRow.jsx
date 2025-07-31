import React, { useContext } from 'react';
import TaskContext from '../contexts/TaskContext';
import { memo } from 'react'

const TaskRow = () => {

    // consumo del global context
    const { getTask } = useContext(TaskContext);

    return (
        // creazione dinamica della tabella con le task 
        // tramite il map
        <table className="table table-bordered table-hover shadow rounded-4 overflow-hidden">
            <thead className="table-light">
                <tr>
                    <th className="text-center">📝 Titolo</th>
                    <th className="text-center">📌 Stato</th>
                    <th className="text-center">📅 Data di creazione</th>
                </tr>
            </thead>
            <tbody>
                {getTask.map((g) => (
                    <tr key={g.id}>
                        <td className="align-middle">{g.title}</td>
                        <td className="text-white text-center fw-bold align-middle"
                            style={{ backgroundColor: g.status === 'To do' ? '#dc3545' : g.status === 'Doing' ? '#198754' : '#ffc107', color: g.status === 'Done' ? '#000' : '#fff' }}>{g.status} </td>
                        <td className="text-center align-middle">
                            {new Date(g.createdAt).toLocaleDateString()}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    );

};

export default memo(TaskRow);
