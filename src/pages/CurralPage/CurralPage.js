import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx'; // Importa a biblioteca xlsx
import './CurralPage.css';
import downloadIcon from '../../Assets/download-icon.png'; // Ícone de download

function CurralPage() {
  const [selectedCurral, setSelectedCurral] = useState(null); // Estado para armazenar o curral selecionado
  const navigate = useNavigate();

  // Função para capturar a seleção de um checkbox
  const handleCheckboxChange = (event, curral) => {
    if (event.target.checked) {
      setSelectedCurral(curral); // Armazena o curral selecionado
    } else {
      setSelectedCurral(null); // Desmarca o curral selecionado
    }
  };

  // Função para redirecionar para a página de edição
  const handleEditClick = () => {
    if (selectedCurral) {
      navigate(`/editar-curral/${selectedCurral.id}`); // Redireciona para a página de edição do curral
    } else {
      alert('Por favor, selecione um curral para editar.');
    }
  };

  // Função para criar um novo curral (redireciona para a página de criação)
  const handleCreateClick = () => {
    navigate('/criar-curral'); // Redireciona para a página de criação de curral
  };

  // Função para excluir um curral
  const handleDeleteClick = () => {
    if (selectedCurral) {
      // Aqui você pode adicionar a lógica para excluir o curral selecionado
      alert(`Curral ${selectedCurral.nome} excluído com sucesso.`);
      setSelectedCurral(null); // Desmarca o curral após exclusão
    } else {
      alert('Por favor, selecione um curral para excluir.');
    }
  };

  // Função para fazer o download dos dados da tabela como Excel
  const handleDownloadClick = () => {
    const data = currais.map(curral => ({
      Nome: curral.nome,
      Capacidade: curral.capacidade,
      Localização: curral.localizacao,
    }));

    // Cria uma nova planilha
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Cria uma nova pasta de trabalho
    const workbook = XLSX.utils.book_new();

    // Adiciona a planilha à pasta de trabalho
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Currais');

    // Gera o arquivo Excel e faz o download
    XLSX.writeFile(workbook, 'currais.xlsx');
  };

  const currais = [
    {
      id: '1',
      nome: 'Curral A-01',
      capacidade: 50,
      localizacao: 'Setor Norte',
    },
    {
      id: '2',
      nome: 'Curral B-02',
      capacidade: 75,
      localizacao: 'Setor Sul',
    },
    // Adicione mais currais conforme necessário
  ];

  return (
    <div className="container-pagina-curral">
      <h1>Curral</h1>
      <div className="acoes-curral">
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
      <table className="tabela-curral">
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Capacidade</th>
            <th>Localização</th>
          </tr>
        </thead>
        <tbody>
          {currais.map((curral) => (
            <tr key={curral.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(e, curral)}
                />
              </td>
              <td>{curral.nome}</td>
              <td>{curral.capacidade}</td>
              <td>{curral.localizacao}</td>
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

export default CurralPage;
