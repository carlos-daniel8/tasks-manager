import { useState } from 'react'
import './styles.css'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import NewCategory from '../new-category'

export default function Category(){
    const navigate = useNavigate();

    const [categories, setCategories] = useState([
        {
            id: uuidv4(),
            name: "Redução de Custos"
        },
        {
            id: uuidv4(),
            name: "Sustentação"
        },
        {
            id: uuidv4(),
            name: "Inovação"
        },
        {
            id: uuidv4(),
            name: "Aprendizado"
        },
        {
            id: uuidv4(),
            name: "Financeiro"
        }
    ])

    const addCategory = (name) => {

        const newCategories = [
            ...categories, 
            {
                id: uuidv4(),
                name,
            }
        ]
        setCategories(newCategories)
    }

    const removeCategory = (id) => {
        const filteredCategories = categories.filter(category => category.id !== id);
        setCategories(filteredCategories)
    }

    return (
        <div className="category-container">
            <header>
                    <Link to="/tasks/profile">
                        <button className="my-profile-button">
                            Meu perfil
                        </button>
                    </Link>
                    <h1 className="title">Categorias</h1>
                    <Link to="/tasks">
                        <button className="new-task-button">
                            Página Inicial
                        </button>
                    </Link>
                    <button className="logout-button">
                        <h3>Sair</h3>
                    </button>
            </header>
            <div className="categories-wrapper">
                {categories.map((category) => (
                    <div key={category.id} className="category">
                        <p><strong>Nome:</strong> {category.name}</p>
                        <div>
                            <button className="delete-button" onClick={() => removeCategory(category.id) }><strong>X</strong></button>
                        </div>
                    </div>
                ))}
            </div>
            <NewCategory addCategory={addCategory} />
        </div>
    )
}