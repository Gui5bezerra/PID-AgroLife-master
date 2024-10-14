import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx'; // Importa a biblioteca xlsx
import './MedicacaoPage.css';
import downloadIcon from '../../Assets/download-icon.png'; // Ícone de download

function MedicacaoPage() {
  const [selectedMedicacao, setSelectedMedicacao] = useState(null); // Estado para armazenar a medicação selecionada
  const navigate = useNavigate();

  // Função para capturar a seleção de um checkbox
  const handleCheckboxChange = (event, medicacao) => {
    if (event.target.checked) {
      setSelectedMedicacao(medicacao); // Armazena a medicação selecionada
    } else {
      setSelectedMedicacao(null); // Desmarca a medicação selecionada
    }
  };

  // Função para redirecionar para a página de edição
  const handleEditClick = () => {
    if (selectedMedicacao) {
      navigate(`/editar-medicacao/${selectedMedicacao.id}`); // Redireciona para a página de edição da medicação
    } else {
      alert('Por favor, selecione uma medicação para editar.');
    }
  };

  // Função para criar uma nova medicação (redireciona para a página de criação)
  const handleCreateClick = () => {
    navigate('/criar-medicacao'); // Redireciona para a página de criação de medicação
  };

  // Função para excluir uma medicação
  const handleDeleteClick = () => {
    if (selectedMedicacao) {
      // Aqui você pode adicionar a lógica para excluir a medicação selecionada
      alert(`Medicação ${selectedMedicacao.nome} excluída com sucesso.`);
      setSelectedMedicacao(null); // Desmarca a medicação após exclusão
    } else {
      alert('Por favor, selecione uma medicação para excluir.');
    }
  };

  // Função para fazer o download dos dados da tabela como Excel
  const handleDownloadClick = () => {
    const data = medicacoes.map(medicacao => ({
      Nome: medicacao.nome,
      Dosagem: medicacao.dosagem,
      Frequência: medicacao.frequencia,
    }));

    // Cria uma nova planilha
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Cria uma nova pasta de trabalho
    const workbook = XLSX.utils.book_new();

    // Adiciona a planilha à pasta de trabalho
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Medicações');

    // Gera o arquivo Excel e faz o download
    XLSX.writeFile(workbook, 'medicacoes.xlsx');
  };

  const medicacoes = [
    {
      id: '1',
      nome: 'Ivermectina',
      dosagem: '1 ml por 50 kg',
      frequencia: 'Semestral',
    },
    {
      id: '2',
      nome: 'Vacina Aftosa',
      dosagem: '2 ml',
      frequencia: 'Anual',
    },
    // Adicione mais medicações conforme necessário
  ];

  return (
    <div className="container-pagina-medicacao">
      <h1>Medicação</h1>
      <div className="acoes-medicacao">
        <button className="botao-criar" onClick={handleCreateClick}>
          Criar
        </button>
        <button className="botao-editar" onClick={handleEditClick}>
          Editar
        </button>
        <button className="botao-excluir" onClick={handleDeleteClick}>
          Excluir
        </button>
        <input
          type="text"
          placeholder="Pesquisar..."
          className="input-pesquisa"
        />
        <button className="botao-filtrar">🔍</button>
      </div>
      <table className="tabela-medicacao">
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Dosagem</th>
            <th>Frequência</th>
          </tr>
        </thead>
        <tbody>
          {medicacoes.map((medicacao) => (
            <tr key={medicacao.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(e, medicacao)}
                />
              </td>
              <td>{medicacao.nome}</td>
              <td>{medicacao.dosagem}</td>
              <td>{medicacao.frequencia}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Ícone de download posicionado ao final da tabela */}
      <div className="botao-download-wrapper">
        <button className="botao-download" onClick={handleDownloadClick}>
          <img src={downloadIcon} alt="Download" className="download-icon" />
        </button>
      </div>
    </div>
  );
}

export default MedicacaoPage;
