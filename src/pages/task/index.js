import { useState, useEffect } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

export default function Tasks(){
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);


    return (
        <div className="task-container">
            <header>
                    <Link to="/tasks/profile">
                        <button className="my-profile-button">
                            Meu perfil
                        </button>
                    </Link>
                    <h1 className="title">Gerenciador de Tarefas</h1>
                    <Link to="/tasks/categories">
                        <button className="categories-button">
                            Categorias
                        </button>
                    </Link>
                    <Link to="/tasks/new-task">
                        <button className="new-task-button">
                            Nova tarefa
                        </button>
                    </Link>
                    <button className="logout-button">
                        <h3>Sair</h3>
                    </button>
            </header>
        </div>
    )
}