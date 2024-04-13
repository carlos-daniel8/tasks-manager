import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './styles.css'

export default function NewTask() {

    const [id, setId] = useState(null)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [creationDate, setCreationDate] = useState("")
    const [task, setTask] = useState("")

    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')

    const navigate = useNavigate()

    function createNewTask(e) {
        e.preventDefault();
    
        const newTask = {
            id: task.length + 1,
            name,
            description,
            category,
            creationDate: new Date().toISOString() 
        };
    
        try {
            const storedTasks = JSON.parse(localStorage.getItem('task')) || []
            const updatedTasks = [...storedTasks, newTask]
            localStorage.setItem('task', JSON.stringify(updatedTasks));

            setTask([...task, newTask]);
            setName("");
            setDescription("");
            setCategory("");
            alert("Tarefa criada com sucesso!");
            navigate("/tasks")
        } catch (error) {
            alert("Erro ao criar a tarefa");
        }
    }

    return (
        <div className="new-task-container">
            <div className="content">
                <section className="form-header">
                    <h1>Cadastrar Nova Tarefa</h1>
                </section>
                <form onSubmit={createNewTask} className="task-form">
                    <div className="form-group">
                        <input 
                            placeholder="Digite o nome da tarefa"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            placeholder="Digite uma breve descrição da tarefa"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            placeholder="Escolha a categoria da tarefa" 
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="create-task-button">
                        Cadastrar
                    </button>
                        <Link className="back-link" to="/tasks">
                            <button>Cancelar</button>
                        </Link>
                </form>
            </div>
        </div>
    );
}
