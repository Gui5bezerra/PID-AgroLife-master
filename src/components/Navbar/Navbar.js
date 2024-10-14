import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import houseIcon from '../../Assets/house-icon.png'; // Importa a nova imagem de ícone da casa

function Navbar() {
  return (
    <nav className="navbar">
      {/* Ícone da casa agora é clicável e redireciona para a home */}
      <div className="nav-item">
        <Link to="/">
          <img src={houseIcon} alt="Home" className="home-icon" />
        </Link>
      </div>

      <div className="nav-item">
        Cadastro
        <div className="dropdown">
          <Link to="/animal" className="dropdown-item">Animal</Link>
          <Link to="/curral" className="dropdown-item">Curral</Link>
          <Link to="/lote" className="dropdown-item">Lote</Link>
          <Link to="/medicacao" className="dropdown-item">Medicação</Link>
        </div>
      </div>

      <div className="nav-item">
        Manejo
        <div className="dropdown">
          <Link to="/identificacao" className="dropdown-item">Identificação</Link>
          <Link to="/movimentacao" className="dropdown-item">Movimentação</Link>
          <Link to="/saida" className="dropdown-item">Saída</Link>
          <Link to="/troca-curral-lote" className="dropdown-item">Troca de Curral em Lote</Link>
        </div>
      </div>

      <div className="nav-item">
        Sanidade
        <div className="dropdown">
          <Link to="/aplicacao-individual" className="dropdown-item">Aplicação Individual</Link>
          <Link to="/protocolo-sanitario" className="dropdown-item">Protocolo Sanitário</Link>
        </div>
      </div>

      <div className="nav-item">
        Ronda
        <div className="dropdown">
          <Link to="/registrar-morte" className="dropdown-item">Registrar Morte</Link>
        </div>
      </div>

      <div className="nav-item">
        Relatórios
        <div className="dropdown">
          <Link to="/historico-animal" className="dropdown-item">Histórico Animal</Link>
          <Link to="/doencas-recorrentes" className="dropdown-item">Doenças Recorrentes</Link>
          <Link to="/animais-medicados" className="dropdown-item">Animais Medicados</Link>
          <Link to="/manejo-do-dia" className="dropdown-item">Manejo do Dia</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
