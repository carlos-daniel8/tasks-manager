import './styles.css'
import { useState } from 'react'

export default function NewCategory({ addCategory }) {

    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addCategory(name)
        setName("")
    }

    return (
        <div className="new-category-container">
            <div className="content">
                <section className="form-header">
                    <h1>Nova Categoria</h1>
                </section>
                <form className="category-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text" 
                            placeholder="Digite o nome da categoria" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                        <button 
                            type="submit" 
                            className="create-category-button"
                        >
                            Cadastrar
                        </button>
                </form>
            </div>
        </div>
    );
}