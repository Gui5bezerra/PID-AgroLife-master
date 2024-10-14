import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importe o useNavigate
import './EditLotePage.css';

function EditLotePage() {
  const { id } = useParams(); // Pega o ID do lote a partir da URL
  const navigate = useNavigate(); // Utilize o hook useNavigate para redirecionar

  // Função para redirecionar o usuário para a página de listagem de lotes
  const handleCancelClick = () => {
    navigate('/lote'); // Redireciona para a página de listagem de lotes
  };

  return (
    <div className="container-editar-lote">
      <h1>Editar lote/{id}</h1>
      {/* Formulário de edição */}
      <form className="form-editar-lote">
        <div className="dados-lote">
          <div>
            <label>Nome do Lote:</label>
            <input type="text" defaultValue="Lote A" readOnly />
          </div>
          <div>
            <label>Tamanho:</label>
            <input type="text" defaultValue="20 hectares" readOnly />
          </div>
          <div>
            <label>Descrição:</label>
            <input type="text" defaultValue="Área de pastagem." readOnly />
          </div>
        </div>

        <div className="dados-alterar">
          <h3>Insira os valores para alterar:</h3>
          <div className="dados-lote">
            <div>
              <label>Nome do Lote:</label>
              <input type="text" placeholder="Insira um valor" />
            </div>
            <div>
              <label>Tamanho:</label>
              <input type="text" placeholder="Insira um valor" />
            </div>
            <div>
              <label>Descrição:</label>
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

export default EditLotePage;
