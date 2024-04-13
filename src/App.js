import Login from "./pages/login"
import Task from "./pages/task"
import NewTask from "./pages/new-task"
import Profile from "./pages/profile"

import './global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Category from "./pages/category"
import NewCategory from "./pages/new-category"

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
      <Routes>
        <Route path = "/tasks/categories" element={<Category />}> </Route>
      </Routes>
      <Routes>
        <Route path = "/tasks/categories/new-category" element={<NewCategory />}> </Route>
      </Routes>
      <Routes>
        <Route path = "/tasks/profile/" element={<Profile />}> </Route>
      </Routes>
    </Router>
  )
}