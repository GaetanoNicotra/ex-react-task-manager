import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskList from './pages/TaskList'
import AddTask from './pages/AddTask'
import DefaultLayouts from '../layouts/defaultLayouts'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayouts />}>
            <Route path='/' element={<TaskList />} />
            <Route path='/addtasks' element={<AddTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
