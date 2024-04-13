import './styles.css'
import { Link } from 'react-router-dom'

export default function NewCategory() {
    return (
        <div className="new-task-container">
            <div className="content">
                <section className="form-header">
                    <h1>Cadastrar Nova Categoria</h1>
                </section>
                <form className="task-form">
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input id="name" type="text" placeholder="Digite o nome da categoria" />
                    </div>
                    <button type="submit" className="create-task-button">
                        Cadastrar
                    </button>
                        <Link className="back-link" to="/tasks/categories">
                            <button>Cancelar</button>
                        </Link>
                </form>
            </div>
        </div>
    );
}
