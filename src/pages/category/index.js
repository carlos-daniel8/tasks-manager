import './styles.css'
import { Link } from 'react-router-dom'

export default function Category(){
    return (
        <div className="category-container">
            <header>
                    <Link to="/tasks/profile">
                        <button className="my-profile-button">
                            Meu perfil
                        </button>
                    </Link>
                    <h1 className="title">Gerenciador de Tarefas</h1>
                    <Link to="/tasks">
                        <button className="new-task-button">
                            Página Inicial
                        </button>
                    </Link>
                    <Link to="/tasks/categories/new-category">
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
                    <strong>Nome da Categoria</strong>
                    <p>Mudar a cor do botão X</p>
                    <button className="update-button">Editar</button>
                    <button className="delete-button">Excluir</button>
                </li>
            </ul>
        </div>
    )
}