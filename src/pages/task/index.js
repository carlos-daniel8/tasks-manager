import React, { useState, useEffect } from 'react'
import './styles.css'
import { v4 as uuidv4 } from 'uuid'
import { Link, useNavigate } from 'react-router-dom'
import NewTask from '../new-task'
import SearchBar from '../../components/search-bar/search-bar'
import Filter from '../../components/filter/filter'

export default function Tasks() {
    const navigate = useNavigate()

    const [tasks, setTasks] = useState([
        {
            id: uuidv4(),
            name: "Aprender React",
            goal: "Me tornar um Dev React experiente",
            estimatedDays: "450 dias",
            category: "Aprendizado",
            isCompleted: false
        },
        {
            id: uuidv4(),
            name: "Desligar máquinas EC2 não utilizadas",
            goal: "Implementar FinOps na organização",
            estimatedDays: "5 dias",
            category: "Redução de Custos",
            isCompleted: false
        },
        {
            id: uuidv4(),
            name: "Estudar Golang",
            goal: "Criar ferramentas DevOps",
            estimatedDays: "650 dias",
            category: "Inovação",
            isCompleted: false
        },
        {
            id: uuidv4(),
            name: "Realizar backup do banco de dados RDS",
            goal: "Persistência dos dados da aplicação",
            estimatedDays: "3 dias",
            category: "Sustentação",
            isCompleted: false
        }
    ])

    const [searchBar, setSearchBar] = useState("")

    const [filter, setFilter ] = useState("All")

    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editedTask, setEditedTask] = useState({
        name: '',
        goal: '',
        estimatedDays: '',
        category: ''
    });

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'))
        if (storedTasks) {
            setTasks(storedTasks)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (name, goal, estimatedDays, category) => {

        const newTasks = [
            ...tasks, 
            {
                id: uuidv4(),
                name,
                goal,
                estimatedDays,
                category,
                isCompleted: false
            }
        ]
        setTasks(newTasks)
    }

    const removeTask = (id) => {
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks)
    }

    const completeTask = (id) => {
        const newTasksCompleted = [...tasks]
        newTasksCompleted.map((task) => task.id === id ? task.isCompleted = !task.isCompleted : task)
        setTasks(newTasksCompleted)
    }

    const editTask = (id) => {
        setEditingTaskId(id);
        const taskToEdit = tasks.find(task => task.id === id);
        setEditedTask(taskToEdit);
    }

    const cancelEdit = () => {
        setEditingTaskId(null);
        setEditedTask({
            name: '',
            goal: '',
            estimatedDays: '',
            category: ''
        });
    }

    const updateTask = () => {
        const updatedTasks = tasks.map(task =>
            task.id === editingTaskId ? { ...task, ...editedTask } : task
        );
        setTasks(updatedTasks);
        setEditingTaskId(null);
        setEditedTask({
            name: '',
            goal: '',
            estimatedDays: '',
            category: ''
        });
    }

    const handleEditInputChange = (event) => {
        const { name, value } = event.target;
        setEditedTask(prevTask => ({
            ...prevTask,
            [name]: value
        }));
    };

    return (
        <div className="task-container" >
            <header>
            <h1 className="app-title">Gerenciador de Tarefas</h1>
                <Link to="/tasks/profile">
                    <button className="my-profile-button">
                        Meu perfil
                    </button>
                </Link>
                <Link to="/tasks/categories">
                    <button className="categories-button">
                        Categorias
                    </button>
                </Link>
                <Link to="/">
                    <button className="logout-button">
                        <h3>Sair</h3>
                    </button>
                </Link>
            </header>
            <SearchBar searchBar={searchBar} setSearchBar={setSearchBar}/>
            <Filter filter={filter} setFilter={setFilter}/>
            <div className="tasks-wrapper">
                {tasks
                .filter(task => (filter === 'All' || task.category === filter) && task.name.toLowerCase().includes(searchBar.toLowerCase()))
                .filter((task) =>
                    task.name.toLowerCase().includes(searchBar.toLowerCase())
                )
                .map((task) => (
                    <div key={task.id} className="task" >
                        {editingTaskId === task.id ? (
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={editedTask.name}
                                    onChange={handleEditInputChange}
                                />
                                <input
                                    type="text"
                                    name="goal"
                                    value={editedTask.goal}
                                    onChange={handleEditInputChange}
                                />
                                <input
                                    type="text"
                                    name="estimatedDays"
                                    value={editedTask.estimatedDays}
                                    onChange={handleEditInputChange}
                                />
                                <input
                                    type="text"
                                    name="category"
                                    value={editedTask.category}
                                    onChange={handleEditInputChange}
                                />
                                <button className= "confirm-edit-button" onClick={updateTask}>Salvar</button>
                                <button className="cancel-edit-button" onClick={cancelEdit}>Cancelar</button>
                            </div>
                        ) : (
                            <div>
                                <h3 style={{ textDecoration: task.isCompleted ? "line-through" : "" }} ><strong>Nome: </strong>{task.name}</h3>
                                <p style={{ textDecoration: task.isCompleted ? "line-through" : "" }}><strong>Objetivo:</strong> {task.goal}</p>
                                <p style={{ textDecoration: task.isCompleted ? "line-through" : "" }}><strong>Tempo Previsto:</strong> {task.estimatedDays}</p>
                                <p style={{ textDecoration: task.isCompleted ? "line-through" : "" }}><strong>Categoria:</strong> {task.category}</p>
                            </div>
                        )}
                        <div className="task-buttons">
                            <button className="finish-task-button" onClick={() => completeTask(task.id)}>Finalizar</button>
                            <button className="update-task-button" onClick={() => editTask(task.id)}>Editar</button>
                            <button className="remove-task-button" onClick={() => removeTask(task.id)}>Remover</button>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <NewTask addTask={addTask} />
            </div>
        </div>
    )
}
