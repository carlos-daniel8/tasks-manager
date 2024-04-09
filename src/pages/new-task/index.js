import './styles.css';
import { Link } from 'react-router-dom';

export default function NewTask() {
    return (
        <div className="new-task-container">
            <div className="content">
                <section className="form">
                    <h1>Cadastrar Nova Tarefa</h1>
                </section>
                <form className="task-form">
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input id="name" type="text" placeholder="Digite o nome da tarefa" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descrição:</label>
                        <textarea id="description" placeholder="Digite uma breve descrição da tarefa"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Categoria:</label>
                        <input id="category" type="text" placeholder="Digite a categoria da tarefa" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Data de Criação:</label>
                        <input id="date" type="date" />
                    </div>
                    <button type="submit">Cadastrar</button>
                    <Link className="back-link" to="/tasks">
                        <button>Voltar</button>
                </Link>
                </form>
            </div>
        </div>
    );
}
