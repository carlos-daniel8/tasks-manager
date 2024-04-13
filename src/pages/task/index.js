import './styles.css'
import { Link } from 'react-router-dom'

export default function Tasks(){
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
            <ul>
                <li>
                    <strong>Nome</strong>
                    <p>Mudar a cor do botão X</p>
                    <strong>Descrição</strong>
                    <p>Alteração feita a pedido do designer da sprint</p>
                    <strong>Categoria</strong>
                    <p>Sustentação</p>
                    <strong>Status</strong>
                    <p>Em andamento</p>
                    <strong>Data de Criação</strong>
                    <p>08/04/2024</p>

                    <button className="update-button">Editar</button>
                    <button className="delete-button">Excluir</button>
                </li>
                <li>
                    <strong>Nome</strong>
                    <p>Mudar a cor do botão X</p>
                    <strong>Descrição</strong>
                    <p>Alteração feita a pedido do designer da sprint</p>
                    <strong>Categoria</strong>
                    <p>Sustentação</p>
                    <strong>Status</strong>
                    <p>Em andamento</p>
                    <strong>Data de Criação</strong>
                    <p>08/04/2024</p>
                    
                    <button className="update-button">Editar</button>
                    <button className="delete-button">Excluir</button>
                </li>
                <li>
                    <strong>Nome</strong>
                    <p>Mudar a cor do botão X</p>
                    <strong>Descrição</strong>
                    <p>Alteração feita a pedido do designer da sprint</p>
                    <strong>Categoria</strong>
                    <p>Sustentação</p>
                    <strong>Status</strong>
                    <p>Em andamento</p>
                    <strong>Data de Criação</strong>
                    <p>08/04/2024</p>
                    
                    <button className="update-button">Editar</button>
                    <button className="delete-button">Excluir</button>
                </li>
                <li>
                    <strong>Nome</strong>
                    <p>Mudar a cor do botão X</p>
                    <strong>Descrição</strong>
                    <p>Alteração feita a pedido do designer da sprint</p>
                    <strong>Categoria</strong>
                    <p>Sustentação</p>
                    <strong>Status</strong>
                    <p>Em andamento</p>
                    <strong>Data de Criação</strong>
                    <p>08/04/2024</p>
                    
                    <button className="update-button">Editar</button>
                    <button className="delete-button">Excluir</button>
                </li>
                <li>
                    <strong>Nome</strong>
                    <p>Mudar a cor do botão X</p>
                    <strong>Descrição</strong>
                    <p>Alteração feita a pedido do designer da sprint</p>
                    <strong>Categoria</strong>
                    <p>Sustentação</p>
                    <strong>Status</strong>
                    <p>Em andamento</p>
                    <strong>Data de Criação</strong>
                    <p>08/04/2024</p>
                    
                    <button className="update-button">Editar</button>
                    <button className="delete-button">Excluir</button>
                </li>
                <li>
                    <strong>Nome</strong>
                    <p>Mudar a cor do botão X</p>
                    <strong>Descrição</strong>
                    <p>Alteração feita a pedido do designer da sprint</p>
                    <strong>Categoria</strong>
                    <p>Sustentação</p>
                    <strong>Status</strong>
                    <p>Em andamento</p>
                    <strong>Data de Criação</strong>
                    <p>08/04/2024</p>
                    
                    <button className="update-button">Editar</button>
                    <button className="delete-button">Excluir</button>
                </li>
                <li>
                    <strong>Nome</strong>
                    <p>Mudar a cor do botão X</p>
                    <strong>Descrição</strong>
                    <p>Alteração feita a pedido do designer da sprint</p>
                    <strong>Categoria</strong>
                    <p>Sustentação</p>
                    <strong>Status</strong>
                    <p>Em andamento</p>
                    <strong>Data de Criação</strong>
                    <p>08/04/2024</p>
                    
                    <button className="update-button">Editar</button>
                    <button className="delete-button">Excluir</button>
                </li>
                <li>
                    <strong>Nome</strong>
                    <p>Mudar a cor do botão X</p>
                    <strong>Descrição</strong>
                    <p>Alteração feita a pedido do designer da sprint</p>
                    <strong>Categoria</strong>
                    <p>Sustentação</p>
                    <strong>Status</strong>
                    <p>Em andamento</p>
                    <strong>Data de Criação</strong>
                    <p>08/04/2024</p>
                    
                    <button className="update-button">Editar</button>
                    <button className="delete-button">Excluir</button>
                </li>
            </ul>
        </div>
    )
}