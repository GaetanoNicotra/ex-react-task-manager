import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskList from './pages/TaskList'
import AddTask from './pages/AddTask'
import DefaultLayouts from '../layouts/defaultLayouts'
import { TaskProvider } from '../contexts/TaskContext'

function App() {


  return (
    <>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayouts />}>
              <Route path='/' element={<TaskList />} />
              <Route path='/addtasks' element={<AddTask />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </>
  )
}

export default App
