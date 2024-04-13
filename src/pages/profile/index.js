import React from 'react'
import { Link } from 'react-router-dom'
import userProfileIcon from '../../assets/user-profile-icon.png'
import './styles.css'

export default function Profile() {
  return (
    <div className="user-container">
      <header>
        <h1 className="title">Minhas Informações Pessoais</h1>
        <Link to="/tasks">
            <button className="new-task-button">
                Página Inicial
            </button>
        </Link>
        <button className="logout-button">
          <h3>Sair</h3>
        </button>
      </header>
      <div className="user-profile">
        <img src={userProfileIcon} alt="User Avatar" className="avatar" />
        <div className="profile-details">
          <div className="detail">
            <strong>Nome:</strong>
            <p>John Doe</p>
          </div>
          <div className="detail">
            <strong>Email:</strong>
            <p>john@gmail.com</p>
          </div>
          <div className="detail">
            <strong>Idade:</strong>
            <p>25</p>
          </div>
          <div className="detail">
            <strong>Localização:</strong>
            <p>Canoas</p>
          </div>
          <button>
            Editar Informações
          </button>
        </div>
      </div>
    </div>
  );
}
