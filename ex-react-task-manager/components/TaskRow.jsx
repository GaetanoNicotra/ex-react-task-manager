import React, { useContext, memo, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import TaskContext from '../contexts/TaskContext';

const TaskRow = () => {
    const { getTask } = useContext(TaskContext);
    const [sortBy, setSortBy] = useState('createdAt');
    const [sortOrder, setSortOrder] = useState(1);

    const sort = (field) => {
        if (sortBy === field) {
            setSortOrder(prev => prev * -1);
        } else {
            setSortBy(field);
            setSortOrder(1);
        }
    };

    const getIcon = (field) => sortBy === field ? (sortOrder === 1 ? '⬆️' : '⬇️') : '';

    const sortedTask = useMemo(() => {
        return [...getTask].sort((a, b) => {
            if (sortBy === 'title') {
                return a.title.localeCompare(b.title) * sortOrder;
            } else if (sortBy === 'status') {
                const statusOption = ['To do', 'Doing', 'Done'];
                return (statusOption.indexOf(a.status) - statusOption.indexOf(b.status)) * sortOrder;
            } else if (sortBy === 'createdAt') {
                const dateA = new Date(a.createdAt).getTime();
                const dateB = new Date(b.createdAt).getTime();
                return (dateA - dateB) * sortOrder;
            }
            return 0;
        });
    }, [getTask, sortBy, sortOrder]);

    return (
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
    );
};

export default memo(TaskRow);
