import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importe o useNavigate
import './EditMedicacaoPage.css';

function EditMedicacaoPage() {
  const { id } = useParams(); // Pega o ID da medicação a partir da URL
  const navigate = useNavigate(); // Utilize o hook useNavigate para redirecionar

  // Função para redirecionar o usuário para a página de listagem de medicações
  const handleCancelClick = () => {
    navigate('/medicacao'); // Redireciona para a página de listagem de medicações
  };

  return (
    <div className="container-editar-medicacao">
      <h1>Editar medicação/{id}</h1>
      {/* Formulário de edição */}
      <form className="form-editar-medicacao">
        <div className="dados-medicacao">
          <div>
            <label>Nome:</label>
            <input type="text" defaultValue="Ivermectina" readOnly />
          </div>
          <div>
            <label>Dosagem:</label>
            <input type="text" defaultValue="1 ml por 50 kg" readOnly />
          </div>
          <div>
            <label>Frequência:</label>
            <input type="text" defaultValue="Semestral" readOnly />
          </div>
        </div>

        <div className="dados-alterar">
          <h3>Insira os valores para alterar:</h3>
          <div className="dados-medicacao">
            <div>
              <label>Nome:</label>
              <input type="text" placeholder="Insira um valor" />
            </div>
            <div>
              <label>Dosagem:</label>
              <input type="text" placeholder="Insira um valor" />
            </div>
            <div>
              <label>Frequência:</label>
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

export default EditMedicacaoPage;
