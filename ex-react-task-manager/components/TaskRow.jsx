import React, { useContext } from 'react';
import TaskContext from '../contexts/TaskContext';


const TaskRow = () => {
    // consumo del conteso
    const { getTask } = useContext(TaskContext);
    const table = React.memo(({ getTask }) => {

    })


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
            <tbody>
                {getTask.map((g) => (
                    <tr key={g.id}>
                        <td>{g.title}</td>
                        <td style={{ color: g.status === 'To do' ? 'red' : g.status === 'Doing' ? 'green' : 'yellow' }}>{g.status}</td>
                        <td>{g.createdAt}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

};

export default TaskRow;
