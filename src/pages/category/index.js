import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NewCategory from "../new-category";

export default function Category() {

  const [categories, setCategories] = useState([
    {
      id: uuidv4(),
      name: "Redução de Custos",
    },
    {
      id: uuidv4(),
      name: "Sustentação",
    },
    {
      id: uuidv4(),
      name: "Inovação",
    },
    {
      id: uuidv4(),
      name: "Aprendizado",
    },
  ]);

  const addCategory = (name) => {
    const newCategories = [
      ...categories,
      {
        id: uuidv4(),
        name,
      },
    ];
    setCategories(newCategories);
  };

  const removeCategory = (id) => {
    const filteredCategories = categories.filter(
      (category) => category.id !== id
    );
    setCategories(filteredCategories);
  };

  return (
    <div className="category-container">
      <header>
        <h1 className="app-title">Categorias</h1>
        <Link to="/tasks">
          <button className="new-task-button">Página Inicial</button>
        </Link>
        <Link to="/">
          <button className="logout-button">
            <h3>Sair</h3>
          </button>
        </Link>
      </header>
      <div className="categories-wrapper">
        {categories.map((category) => (
          <div key={category.id} className="category">
            <p>
              <strong>Nome:</strong> {category.name}
            </p>
            <div>
              <button
                className="delete-button"
                onClick={() => removeCategory(category.id)}
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>
      <NewCategory addCategory={addCategory} />
    </div>
  );
}
