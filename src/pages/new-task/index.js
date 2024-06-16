import { useState } from "react";
import "./styles.css";

export default function NewTask({ addTask }) {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [estimatedDays, setEstimatedDays] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(name, goal, estimatedDays, category);
    setName("");
    setGoal("");
    setEstimatedDays("");
    setCategory("");
  };

  return (
    <div className="new-task-container">
      <div className="content">
        <section className="form-header">
          <h1>Adicionar Tarefa</h1>
        </section>
        <form className="task-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              placeholder="Digite o nome da tarefa"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Digite o objetivo da tarefa"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Digite a quantidade de dias estimados"
              value={estimatedDays}
              onChange={(e) => setEstimatedDays(e.target.value)}
            />
          </div>
          <div className="form-group">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Selecione uma categoria</option>
              <option value="Aprendizado">Aprendizado</option>
              <option value="Redução de Custos">Redução de Custos</option>
              <option value="Inovação">Inovação</option>
              <option value="Sustentação">Sustentação</option>
            </select>
          </div>
          <button type="submit" className="create-task-button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
