import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditCurralPage.css';

function EditCurralPage() {
  const { id } = useParams(); // Pega o ID do curral a partir da URL
  const navigate = useNavigate(); // Use o hook useNavigate para redirecionamento

  // Função para redirecionar o usuário para a página de listagem de currais
  const handleCancelClick = () => {
    navigate('/curral');
  };

  return (
    <div className="container-editar-curral">
      <h1>Editar Curral/ {id}</h1>

      {/* Tabela de exibição de dados do curral */}
      <table className="tabela-curral">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Peso Mínimo</th>
            <th>Peso Máximo</th>
            <th>Área</th>
            <th>Cocho</th>
            <th>Capacidade Máxima</th>
            <th>Tipo Curral</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A-01</td>
            <td>360</td>
            <td>660</td>
            <td>3500</td>
            <td>50</td>
            <td>250</td>
            <td>Confinamento</td>
          </tr>
        </tbody>
      </table>

      {/* Formulário de edição */}
      <form className="form-editar-curral">
        <h3>Insira os valores para alterar:</h3>
        <div className="dados-curral">
          <div>
            <label>Nome:</label>
            <input type="text" placeholder="Enter a value" />
          </div>
          <div>
            <label>Peso Mínimo:</label>
            <input type="number" placeholder="Enter a number" />
          </div>
          <div>
            <label>Peso Máximo:</label>
            <input type="number" placeholder="Enter a number" />
          </div>
          <div>
            <label>Cocho:</label>
            <input type="number" placeholder="Enter a number" />
          </div>
          <div>
            <label>Área:</label>
            <input type="number" placeholder="Enter a number" />
          </div>
          <div>
            <label>Capacidade máxima:</label>
            <input type="number" placeholder="Enter a number" />
          </div>
          <div>
            <label>Tipo Curral:</label>
            <select>
              <option value="confinamento">Confinamento</option>
              <option value="enfermaria">Enfermaria</option>
              <option value="outro">Outro</option>
            </select>
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

export default EditCurralPage;

