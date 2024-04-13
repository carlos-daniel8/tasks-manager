import Login from "./pages/login"
import Task from './pages/task'
import NewTask from "./pages/new-task"
import './global.css'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Login />}> </Route>
      </Routes>
      <Routes>
        <Route path = "/tasks" element={<Task />}> </Route>
      </Routes>
      <Routes>
        <Route path = "/tasks/new-task" element={<NewTask />}> </Route>
      </Routes>
    </Router>
  )
}