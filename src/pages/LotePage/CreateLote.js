import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o hook useNavigate
import './CreateLote.css';

function CreateLote() {
  const navigate = useNavigate(); // Use o hook useNavigate para redirecionamento

  // Função para lidar com o clique no botão "Cancelar"
  const handleCancelClick = () => {
    navigate('/lote'); // Redireciona para a página de listagem de lotes
  };

  return (
    <div className="container-criar-lote">
      <h1>Criar novo lote</h1>
      {/* Formulário de criação */}
      <form className="form-criar-lote">
        <div className="dados-lote">
          <div>
            <label>Nome:</label>
            <input type="text" placeholder="Insira o nome" />
          </div>
          <div>
            <label>Data Entrada:</label>
            <input type="text" placeholder="Insira a data de entrada" />
          </div>
          <div>
            <label>Raça:</label>
            <input type="text" placeholder="Insira a raça" />
          </div>
          <div>
            <label>Tipo Lote:</label>
            <input type="text" placeholder="Insira o tipo de lote" />
          </div>
        </div>
        <div className="acoes-criacao">
          <button type="button" className="botao-cancelar" onClick={handleCancelClick}>
            Cancelar
          </button>
          <button type="submit" className="botao-criar">Criar</button>
        </div>
      </form>
    </div>
  );
}

export default CreateLote;