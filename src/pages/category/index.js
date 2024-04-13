import { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import NewCategory from '../new-category'

export default function Category(){
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: "Redução de Custos"
        },
        {
            id: 2,
            name: "Sustentação"
        },
        {
            id: 3,
            name: "Inovação"
        },
        {
            id: 4,
            name: "Aprendizado"
        },
        {
            id: 4,
            name: "Gerência de Projetos"
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
                        <p>{category.name}</p>
                        <div>
                            <button className="update-button">Editar</button>
                            <button className="delete-button">Excluir</button>
                        </div>
                    </div>
                ))}
            </div>
            <NewCategory addCategory={addCategory}/>
        </div>
    )
}