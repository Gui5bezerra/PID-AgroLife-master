import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importe o useNavigate
import './EditAnimal.css';

function EditAnimal() {
  const { id } = useParams(); // Pega o ID do animal a partir da URL
  const navigate = useNavigate(); // Utilize o hook useNavigate para redirecionar

  // Função para redirecionar o usuário para a página de listagem de animais
  const handleCancelClick = () => {
    navigate('/animal'); // Redireciona para a página de listagem de animais
  };

  return (
    <div className="container-editar-animal">
      <h1>Editar animal/{id}</h1>
      {/* Formulário de edição */}
      <form className="form-editar-animal">
        <div className="dados-animal">
          <div>
            <label>Chip:</label>
            <input type="text" defaultValue="982000366448014" readOnly />
          </div>
          <div>
            <label>Sisbov:</label>
            <input type="text" defaultValue={id} readOnly />
          </div>
          <div>
            <label>Sexo:</label>
            <input type="text" defaultValue="Macho" readOnly />
          </div>
          <div>
            <label>Raça:</label>
            <input type="text" defaultValue="Nelore" readOnly />
          </div>
          <div>
            <label>Era:</label>
            <input type="text" defaultValue="13 - 24 Meses" readOnly />
          </div>
        </div>

        <div className="dados-alterar">
          <h3>Insira os valores para alterar:</h3>
          <div className="dados-animal">
            <div>
              <label>Chip:</label>
              <input type="text" placeholder="Insira um valor" />
            </div>
            <div>
              <label>Sisbov:</label>
              <input type="text" placeholder="Insira um valor" />
            </div>
            <div>
              <label>Sexo:</label>
              <input type="text" placeholder="Insira um valor" />
            </div>
            <div>
              <label>Raça:</label>
              <input type="text" placeholder="Insira um valor" />
            </div>
            <div>
              <label>Era:</label>
              <input type="text" placeholder="Insira um valor" />
            </div>
          </div>
        </div>

        <div className="acoes-edicao">
          <button type="button" className="botao-cancelar" onClick={handleCancelClick}>
            Cancelar
          </button>
          <button type="submit" className="botao-salvar">Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default EditAnimal;
