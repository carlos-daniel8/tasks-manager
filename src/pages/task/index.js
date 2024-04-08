import './styles.css'
import { Link } from 'react-router-dom'

export default function Task(){
    return (
        <div className="task-container">
            <header>
                    <h1>Gerenciador de Tarefas</h1>
                    <button className="task-button">
                        <Link to="task/new">Adicionar nova tarefa</Link>
                    </button>
                    <button className="logout-button">
                        <h3>Sair</h3>
                    </button>
            </header>
        </div>
    )
}