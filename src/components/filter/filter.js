import "./styles.css";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="tasks-filter">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">Todas</option>
        <option value="Redução de Custos">Redução de Custos</option>
        <option value="Sustentação">Sustentação</option>
        <option value="Inovação">Inovação</option>
        <option value="Aprendizado">Aprendizado</option>
      </select>
    </div>
  );
};

export default Filter;
