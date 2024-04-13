
import { Link } from 'react-router-dom'

export default function Categories(){
    return (
        <div className="task-container">
            <header>
                    <h1 className="title">Gerenciador de Tarefas</h1>   
                    <Link to="/new-categories">
                        <button className="new-task-button">
                            Nova Categoria
                        </button>
                    </Link>
                    <button className="logout-button">
                        <h3>Sair</h3>
                    </button>
            </header>
            <ul>
                <li>
                    <strong>Nome da Categoria:</strong>
                    <p>Mudar a cor do botão X</p>
                    <button className="update-button">Editar</button>
                    <button className="delete-button">Excluir</button>
                </li>
            </ul>
        </div>
    )
}