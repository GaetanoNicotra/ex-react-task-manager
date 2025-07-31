import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskList from './pages/TaskList'
import AddTask from './pages/AddTask'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/tasks' element={<TaskList />} />
          <Route path='/addtasks' element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
