import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o hook useNavigate
import './CreateCurral.css';

function CreateCurral() {
  const navigate = useNavigate(); // Use o hook useNavigate para redirecionamento

  // Função para lidar com o clique no botão "Cancelar"
  const handleCancelClick = () => {
    navigate('/curral'); // Redireciona para a página de listagem de currais
  };

  return (
    <div className="container-criar-curral">
      <h1>Criar novo curral</h1>
      {/* Formulário de criação */}
      <form className="form-criar-curral">
        <div className="dados-curral">
          <div>
            <label>Nome:</label>
            <input type="text" placeholder="Insira o nome do curral" />
          </div>
          <div>
            <label>Peso Minimo:</label>
            <input type="text" placeholder="Insira o peso minimo" />
          </div>
          <div>
            <label>Peso Maximo:</label>
            <input type="text" placeholder="Insira o peso maximo" />
          </div>
          <div>
            <label>Cocho:</label>
            <input type="text" placeholder="Insira o cocho" />
          </div>
          <div>
            <label>Area:</label>
            <input type="text" placeholder="Insira a area" />
          </div>
          <div>
            <label>Capacidade Maxima:</label>
            <input type="text" placeholder="Insira a capacidade maxima" />
          </div>
          <div>
            <label>Tipo Curral:</label>
            <input type="text" placeholder="Insira o tipo do curral" />
          </div>
          <div>
            <label>Status:</label>
            <input type="text" placeholder="Insira o status do animal" />
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

export default CreateCurral;