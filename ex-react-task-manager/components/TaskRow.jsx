import React, { useContext, memo, useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import TaskContext from '../contexts/TaskContext';

// funzione di debounce
function debounce(callback, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback(value)
        }, delay)
    }
}

const TaskRow = () => {
    const { getTask } = useContext(TaskContext);

    // variabili di stato per la gestione dell'ordinamento
    const [sortBy, setSortBy] = useState('createdAt');
    const [sortOrder, setSortOrder] = useState(1);

    // variabile di stato per la gestione della ricerca
    const [searchQuery, setSearchQuery] = useState('')

    // debounce
    const debounceSearch = useCallback(debounce(setSearchQuery, 500), [])

    // funzione per l'ordinamneto
    const sort = (field) => {
        if (sortBy === field) {
            setSortOrder(prev => prev * -1);
        } else {
            setSortBy(field);
            setSortOrder(1);
        }
    };

    // funzione di logica per impostare l'ordinamento delle task per title-status-createdAt e l'ordinamento
    const sortedTask = useMemo(() => {
        return [...getTask].filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase())) // filtraggio
            .sort((a, b) => {
                // title
                if (sortBy === 'title') {
                    return a.title.localeCompare(b.title) * sortOrder;
                    // status
                } else if (sortBy === 'status') {
                    const statusOption = ['To do', 'Doing', 'Done'];
                    return (statusOption.indexOf(a.status) - statusOption.indexOf(b.status)) * sortOrder;
                    // createdAt
                } else if (sortBy === 'createdAt') {
                    const dateA = new Date(a.createdAt).getTime();
                    const dateB = new Date(b.createdAt).getTime();
                    return (dateA - dateB) * sortOrder;
                }
                return 0;
            });
    }, [getTask, sortBy, sortOrder, searchQuery]);

    // gestione per mostrare l'icona 
    const getIcon = (field) => sortBy === field ? (sortOrder === 1 ? '⬆️' : '⬇️') : '';



    return (
        <>
            <input type="text" placeholder='Cerca...' className='mb-4' onChange={e => debounceSearch(e.target.value)} />
            <table className="table table-bordered table-hover shadow rounded-4 overflow-hidden">
                <thead className="table-light">
                    <tr>
                        <th className="text-center" onClick={() => sort('title')}>📝 Titolo {getIcon('title')}</th>
                        <th className="text-center" onClick={() => sort('status')}>📌 Stato {getIcon('status')}</th>
                        <th className="text-center" onClick={() => sort('createdAt')}>📅 Data di creazione {getIcon('createdAt')}</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedTask.map((g) => (
                        <tr key={g.id}>
                            <td className="align-middle"><Link to={`/tasks/${g.id}`}>{g.title}</Link></td>
                            <td className="text-white text-center fw-bold align-middle"
                                style={{ backgroundColor: g.status === 'To do' ? '#dc3545' : g.status === 'Doing' ? '#ffc107' : '#198754', color: g.status === 'Done' ? '#000' : '#fff' }}>
                                {g.status}
                            </td>
                            <td className="text-center align-middle">
                                {new Date(g.createdAt).toLocaleDateString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default memo(TaskRow);
