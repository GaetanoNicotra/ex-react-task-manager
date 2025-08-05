import React, { useState } from 'react'
import TaskRow from '../../components/TaskRow'

const TaskList = () => {

    return (
        <>
            <div className="container">
                <h1 className='mt-4'>Benvenuto, ecco la lista delle tue Task</h1>
                <div className="row mt-5">
                    <div className="col-12">
                        <TaskRow />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskList


