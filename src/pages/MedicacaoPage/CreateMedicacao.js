import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o hook useNavigate
import './CreateMedicacao.css';

function CreateMedicacao() {
  const navigate = useNavigate(); // Use o hook useNavigate para redirecionamento

  // Função para lidar com o clique no botão "Cancelar"
  const handleCancelClick = () => {
    navigate('/animal'); // Redireciona para a página de listagem de animais
  };

  return (
    <div className="container-criar-animal">
      <h1>Criar nova medicação</h1>
      {/* Formulário de criação */}
      <form className="form-criar-animal">
        <div className="dados-animal">
          <div>
            <label>Chip:</label>
            <input type="text" placeholder="Insira o chip do animal" />
          </div>
          <div>
            <label>Sisbov:</label>
            <input type="text" placeholder="Insira o número Sisbov" />
          </div>
          <div>
            <label>Sexo:</label>
            <input type="text" placeholder="Insira o sexo do animal" />
          </div>
          <div>
            <label>Raça:</label>
            <input type="text" placeholder="Insira a raça do animal" />
          </div>
          <div>
            <label>Era:</label>
            <input type="text" placeholder="Insira a era do animal" />
          </div>
          <div>
            <label>Curral:</label>
            <input type="text" placeholder="Insira o curral do animal" />
          </div>
          <div>
            <label>Lote:</label>
            <input type="text" placeholder="Insira o lote do animal" />
          </div>
          <div>
            <label>Peso:</label>
            <input type="text" placeholder="Insira o peso do animal" />
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

export default CreateMedicacao;