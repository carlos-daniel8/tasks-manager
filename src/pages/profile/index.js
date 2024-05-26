import React, { useState } from "react";
import { Link } from "react-router-dom";
import userProfileIcon from "../../assets/user-profile-icon.png";
import "./styles.css";

export default function Profile() {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@gmail.com",
    jobTitle: "DevOps Engineer",
  });

  const [editing, setEditing] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleEditing = () => {
    setEditing((prevEditing) => !prevEditing);
  };

  return (
    <div className="user-container">
      <header>
        <h1 className="title">Informações Pessoais</h1>
        <Link to="/tasks">
          <button className="new-task-button">Página Inicial</button>
        </Link>
        <Link to="/">
          <button className="logout-button">
            <h3>Sair</h3>
          </button>
        </Link>
      </header>
      <div className="user-profile">
        <img src={userProfileIcon} alt="User Avatar" className="avatar" />
        <h1>Meu Perfil</h1>
        <div className="profile-details">
          <div className="detail">
            <strong>Nome</strong>
            {editing ? (
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
              />
            ) : (
              <p>{userData.name}</p>
            )}
          </div>
          <div className="detail">
            <strong>Email</strong>
            {editing ? (
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            ) : (
              <p>{userData.email}</p>
            )}
          </div>
          <div className="detail">
            <strong>Cargo</strong>
            {editing ? (
              <input
                type="text"
                name="jobTitle"
                value={userData.jobTitle}
                onChange={handleInputChange}
              />
            ) : (
              <p>{userData.jobTitle}</p>
            )}
          </div>
        </div>
        <button className="update-button" onClick={toggleEditing}>
          {editing ? "Salvar" : "Editar"}
        </button>
      </div>
    </div>
  );
}
